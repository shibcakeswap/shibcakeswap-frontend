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
    earningToken: tokens.cakepcs,
    contractAddress: {
      97: '0x0Be3E246E8Ad159784B460B3EDCa4c55936E239d',
      56: '0x0Be3E246E8Ad159784B460B3EDCa4c55936E239d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.024305',
    isFinished: false,
  },
]

export default pools
