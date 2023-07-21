import React from 'react';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { createRoot } from 'react-dom/client'
import { hooks as walletConnectV2Hooks, walletConnectV2 } from './connectors/walletConnectV2.js'
import { hooks as metaMaskHooks, metaMask } from './connectors/metaMask'
import { UserContext } from './contexts/RefreshContext';
const connectors = [
  [walletConnectV2, walletConnectV2Hooks],
  [metaMask, metaMaskHooks]
]
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
     <Web3ReactProvider connectors={connectors}>
      <App />
     </Web3ReactProvider>
   </Provider>,
  // document.getElementById('root')
);

