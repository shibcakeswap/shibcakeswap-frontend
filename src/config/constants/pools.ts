import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0x1Dc5685088D038CCe7B826BB7688142c7b5c6DeC',
      56: '0x1Dc5685088D038CCe7B826BB7688142c7b5c6DeC',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 1,
    stakingToken: tokens.shibcake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0x9c7a11e06efcbe1a2e204a046fc42c0aa85bfc60',
      56: '0x9c7a11e06efcbe1a2e204a046fc42c0aa85bfc60',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0005',
    sortOrder: 999,
    isFinished: false,
  },
]

export default pools
