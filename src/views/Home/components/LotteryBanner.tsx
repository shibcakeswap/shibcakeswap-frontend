import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Button, Skeleton, Link } from '@shibcakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Balance from 'components/Balance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'

const NowLive = styled(Text)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 24px;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledLink = styled(Link)`
  width: 100%;
`

const Wrapper = styled.div`
  background-image: linear-gradient(#7645d9, #452a7a);
  max-height: max-content;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 256px;
  }
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  padding-bottom: 40px;
  padding-top: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 40px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  & img {
    width: 80%;
    margin-top: 24px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & img {
      margin-top: 0;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0.8;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & img {
      margin-top: -25px;
    }
  }
`

const PrizeFlex = styled(Flex)`
  flex-direction: column;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 640px;
  }
`

const Over = styled(Text)`
  :empty {
    margin-right: 0;
  }
`

const LotteryBanner: React.FC<{ currentLotteryPrize: string }> = ({ currentLotteryPrize }) => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = cakePriceBusd.times(currentLotteryPrize)
  const prizeTotal = getBalanceNumber(prizeInBusd)

  const prizeTotalText = prizeInBusd.isNaN() ? prizeTotal.toString() : '-'
  const prizeText = t('5% PancakeSwap CAKE Rewards!')
  const [over, inPrizes] = prizeText.split(prizeTotalText)

  return (
    <Wrapper>
      <Inner>
        <LeftWrapper>
          <NowLive>{t('Shibcake - Reflection Token')}</NowLive>
          <PrizeFlex>
            <Over fontSize="40px" color="#ffffff" bold mr="8px">
              {over}
            </Over>
            <Text fontSize="40px" color="#ffffff" bold>
              {inPrizes}
            </Text>
          </PrizeFlex>
          <StyledLink external href="https://shibcake.com">
          <Button width="100%" mt="8px" variant="secondary">
            {t('Go to the website')}
          </Button>
        </StyledLink>
        </LeftWrapper>
        <RightWrapper>
          <img src="/images/homepage/shibcake.png" alt="lottery bunny" />
        </RightWrapper>
      </Inner>
    </Wrapper>
  )
}

export default LotteryBanner
