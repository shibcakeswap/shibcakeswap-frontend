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
    tokenPerBlock: '0.10',
    sortOrder: 1,
    isFinished: false,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.cvp,
    contractAddress: {
      97: '',
      56: '0xb8aaaaa80ce35e6815cbb1872863942b9f48318d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.14',
  },
]

export default pools
