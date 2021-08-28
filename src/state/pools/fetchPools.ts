import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import wbnbABI from 'config/abi/weth.json'
import multicall from 'utils/multicall'
import { getAddress, getMasterChefAddress, getWbnbAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import masterchefABI from 'config/abi/masterchef.json'

import { BIG_ZERO } from 'utils/bigNumber'
import { getSouschefV2Contract } from 'utils/contractHelpers'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPools = async () => {
  const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB')
  const calls = nonBnbPools.map((poolConfig) => {
    return {
      address: getMasterChefAddress(),
      name: 'poolInfo',
      params: [poolConfig.sousId],
    }
  })
  const poolsInfo = await multicall(masterchefABI, calls)
  return nonBnbPools.map((p, index) => {
    const info = poolsInfo[index]

    const harvestInterval = new BigNumber(info.harvestInterval._hex)
    const depositFeeBP = new BigNumber(info.depositFeeBP)
    return {
      sousId: p.sousId,
      depositFeeBP: depositFeeBP.div(100).toString(),
      harvestInterval: harvestInterval.div(60).div(60).toString(),
    }
  })
}

export const fetchPoolsTotalStaking = async () => {
  const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB')
  const bnbPool = poolsConfig.filter((p) => p.stakingToken.symbol === 'BNB')

  const callsNonBnbPools = nonBnbPools.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.stakingToken.address),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const callsBnbPools = bnbPool.map((poolConfig) => {
    return {
      address: getWbnbAddress(),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const nonBnbPoolsTotalStaked = await multicall(cakeABI, callsNonBnbPools)
  const bnbPoolsTotalStaked = await multicall(wbnbABI, callsBnbPools)

  return [
    ...nonBnbPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonBnbPoolsTotalStaked[index]).toJSON(),
    })),
    ...bnbPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(bnbPoolsTotalStaked[index]).toJSON(),
    })),
  ]
}

export const fetchPoolStakingLimit = async (sousId: number): Promise<BigNumber> => {	
  try {	
    const sousContract = getSouschefV2Contract(sousId)	
    const stakingLimit = await sousContract.poolLimitPerUser()	
    return new BigNumber(stakingLimit.toString())	
  } catch (error) {	
    return BIG_ZERO	
  }	
}	

export const fetchPoolsStakingLimits = async (	
  poolsWithStakingLimit: number[],	
): Promise<{ [key: string]: BigNumber }> => {	
  const validPools = poolsConfig	
    .filter((p) => p.stakingToken.symbol !== 'BNB' && !p.isFinished)	
    .filter((p) => !poolsWithStakingLimit.includes(p.sousId))	

  // Get the staking limit for each valid pool	
  // Note: We cannot batch the calls via multicall because V1 pools do not have "poolLimitPerUser" and will throw an error	
  const stakingLimitPromises = validPools.map((validPool) => fetchPoolStakingLimit(validPool.sousId))	
  const stakingLimits = await Promise.all(stakingLimitPromises)	

  return stakingLimits.reduce((accum, stakingLimit, index) => {	
    return {	
      ...accum,	
      [validPools[index].sousId]: stakingLimit,	
    }	
  }, {})	
}	
