import tokens from 'config/constants/tokens'
import { Address } from './types'

const { bondly, shibcake } = tokens

interface WarningToken {
  symbol: string
  address: Address
}

interface WarningTokenList {
  [key: string]: WarningToken
}

const SwapWarningTokens = <WarningTokenList>{
  shibcake,
  bondly,
}

export default SwapWarningTokens
