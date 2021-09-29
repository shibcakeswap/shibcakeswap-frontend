import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Text } from '@shibcakeswap/uikit'

const ShibcakeWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('To trade SHIBCAKE, you must:')} </Text>
      <Text>• {t('Click on the settings icon')}</Text>
      <Text mb="24px">• {t('Set your slippage tolerance to 12%+')}</Text>
      <Text>{t('This is because ShibCake taxes a 10% (BUY) and 11% (SELL) fee on each transaction:')}</Text>
      <Text>• {t('5% fee = redistributed in PancakeSwap CAKE to all existing holders')}</Text>
      <Text>• {t('4% fee = to the marketing wallet')}</Text>
      <Text>• {t('2% fee = used to add liquidity')}</Text>
    </>
  )
}

export default ShibcakeWarning
