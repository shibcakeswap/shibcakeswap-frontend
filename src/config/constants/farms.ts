import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x818CEE824f8CaEAa05Fb6a1f195935e364D52Af0',
      56: '0x818CEE824f8CaEAa05Fb6a1f195935e364D52Af0',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CAKE-SHIBCAKE LP ShibcakeSwap',
    lpAddresses: {
      97: '0x71e7ce468929e255c6c65f69b7aedf98b50c2261',
      56: '0x71e7ce468929e255c6c65f69b7aedf98b50c2261',
    },
    token: tokens.cake,
    quoteToken: tokens.shibcake,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x6d915a079899342fb8348bad8f7b78f6641c7d00',
      56: '0x6d915a079899342fb8348bad8f7b78f6641c7d00',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'CAKE-CAKEPCS LP ShibcakeSwap',
    lpAddresses: {
      97: '0x55419d4b37e55531402047f36269ac89b8fa3f95',
      56: '0x55419d4b37e55531402047f36269ac89b8fa3f95',
    },
    token: tokens.cake,
    quoteToken: tokens.cakepcs,
  },
    {
    pid: 4,
    lpSymbol: 'SHIBCAKE-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x3067a8a504585c29f30bfcb5c7eaa6a942a18374',
      56: '0x3067a8a504585c29f30bfcb5c7eaa6a942a18374',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
    {
    pid: 2,
    lpSymbol: 'SHIBCAKE-BNB LP PancakeSwap',
    lpAddresses: {
      97: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
      56: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BUSD LP ShibcakeSwap',
    lpAddresses: {
      97: '0x853a4306e2106bd5bbafc94a9f94cd12118b4ab6',
      56: '0x853a4306e2106bd5bbafc94a9f94cd12118b4ab6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
    {
    pid: 7,
    lpSymbol: 'SHIBCAKE-BUSD LP ShibcakeSwap',
    lpAddresses: {
      97: '0xc563625ecf8935d474cb3cce6d243d36ba165012',
      56: '0xc563625ecf8935d474cb3cce6d243d36ba165012',
    },
    token: tokens.shibcake,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'CAKE-USDT LP ShibcakeSwap',
    lpAddresses: {
      97: '0x67d870b1bd463641a69b93a6b9b1dc7074a53a0c',
      56: '0x67d870b1bd463641a69b93a6b9b1dc7074a53a0c',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '',
      56: '0xc52c61c3af83aa026c4de6480183eb07a31c664f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'CAKEPCS-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x3f32af6108591aebb0646730de23263d4371eec7',
      56: '0x3f32af6108591aebb0646730de23263d4371eec7',
    },
    token: tokens.cakepcs,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 14,
    lpSymbol: 'USDT-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '',
      56: '0x23dbfdd7a8675983fa63215b8aace285cfcc124b',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'CAKEPCS-BUSD LP ShibcakeSwap',
    lpAddresses: {
      97: '0xc27e6aacf06874544bcee91854eca1f65c754921',
      56: '0xc27e6aacf06874544bcee91854eca1f65c754921',
    },
    token: tokens.cakepcs,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'USDT-BUSD LP ShibcakeSwap',
    lpAddresses: {
      97: '',
      56: '0x0adacf6ff5c963cac0682bca843719368e715b34',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
]

export default farms
