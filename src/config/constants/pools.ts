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
    stakingToken: tokens.cake,
    earningToken: tokens.twt,
    contractAddress: {
      97: '0x861e2e0f890de10ec586a594c0022627053e8558',
      56: '0x861e2e0f890de10ec586a594c0022627053e8558',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
