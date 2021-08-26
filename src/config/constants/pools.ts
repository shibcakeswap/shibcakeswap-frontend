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
      97: '0xCDDBf71D725838f07A8EE36b9e87be17c2B6A450',
      56: '0xCDDBf71D725838f07A8EE36b9e87be17c2B6A450',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 999,
    isFinished: false,
  },
]

export default pools
