import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@shibcakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`



const Home: React.FC = () => {
  const { t } = useTranslation()
  const { currentLotteryPrize } = useFetchLotteryForPromos()

  return (
    <>
      <LotteryBanner currentLotteryPrize={currentLotteryPrize} />
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <CakeStats />
          </Cards>
          
            
        </div>
        <TotalValueLockedCard />
      </Page>
    </>
  )
}

export default Home
