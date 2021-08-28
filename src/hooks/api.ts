import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { getBalanceNumber } from 'utils/formatBalance'

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/lydiaswap/gatsby-lydia-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
export const baseUrl = 'https://api-sigma-eight.vercel.app/api'

/* eslint-disable camelcase */

export interface ApiSummaryResponse {
  update_at: string
  data: Map<string, Summary>
}

export interface Summary {
  liquidity: string
}

export interface Stats {
  tvl: number
}

export const useGetStats = () => {
  const [data, setData] = useState<Stats | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/summary`)
        const responsedata: ApiSummaryResponse = await response.json()

        const stats: Stats = { tvl: 0 }
        // eslint-disable-next-line
        Object.keys(responsedata.data).forEach(function (key) {
          stats.tvl += parseInt(responsedata.data[key].liquidity)
        })

        const pools = await fetchPoolsTotalStaking()
        const cakePrice = parseInt(
          responsedata.data['0x55d398326f99059fF775485246999027B3197955_0x818CEE824f8CaEAa05Fb6a1f195935e364D52Af0']
            .price,
        )
        pools.forEach((pool) => {
          const total = getBalanceNumber(new BigNumber(pool.totalStaked), 18) / cakePrice
          stats.tvl += total
        })

        setData(stats)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
