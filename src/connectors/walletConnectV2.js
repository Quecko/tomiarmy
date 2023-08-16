import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { MAINNET_CHAINS } from '../utils/chains'

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number)

export const [walletConnectV2, hooks] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "14808831369ecdaaab7b8869eb13c6b0",
        chains: [1],
        optionalChains: [1],
        showQrModal: true
      },
      timeout : 10000,
      onError: (err => {
        console.log('erron in connector::::', err)
      })
    })
)