import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@shibcakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
 const totalValue = useTotalValue()

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
          <>
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          <Text color="textSubtle">{t('Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
