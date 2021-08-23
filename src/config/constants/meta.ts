import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ShibcakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://shibcakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ShibcakeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ShibcakeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ShibcakeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ShibcakeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ShibcakeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ShibcakeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ShibcakeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ShibcakeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ShibcakeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ShibcakeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ShibcakeSwap')}`,
      }
    default:
      return null
  }
}
