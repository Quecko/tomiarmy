import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { MAINNET_CHAINS } from '../utils/chains'

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number)

console.log("mainnet", mainnet)
console.log("optionalChains", optionalChains)

export const [walletConnectV2, hooks] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "d3d17068fcfacb3f2f11cdfe04101217",
        chains: [1],
        optionalChains: [4],
        showQrModal: true
      },
      timeout : 10000,
      onError: (err => {
        console.log('erron in connector::::', err)
      })
    })
)