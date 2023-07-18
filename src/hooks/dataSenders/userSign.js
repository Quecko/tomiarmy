// import { useWeb3React } from "@web3-react/core";
// import { useCallback, useEffect } from "react";
// // import Web3 from "web3";
// import { getLibraryForSign } from "../../utils/web3React";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import useWeb3 from "../../hooks/useWeb3";
// import Web3 from 'web3';
// import { connectorsByName } from "../../utils/web3React";

// import { ethers, providers } from "ethers";
// export const Signature = (data) => {
//   // const { account } = useWeb3React()
//   const { account } = useWeb3React()
//   const web3 = useWeb3()
//   var library = null;
//   // useEffect(() => {
//   // if (account && web3 && connectorsByName) {
//   // library = getLibraryForSign(web3.givenProvider);
//   const connectorId = window.localStorage.getItem("connectorId")
  
//   if (connectorId === 'injected' && account) {
//     library = getLibraryForSign(web3?.givenProvider);
//   } else {
//     // return
//     if (connectorsByName['walletconnect'].walletConnectProvider) {
//       library = getLibraryForSign(connectorsByName['walletconnect'].walletConnectProvider);
//     }
//   }

//   //   } else {
//   //     // toast.error("you dont have metamask in your browser please change your browser or add metamask to proceed with the site ")
//   //   }
//   // }, [account, web3, connectorsByName])

//   const sign = useCallback(async (accountData) => {
//     if ((library && account)) {
//       try {
//         if (account) {
//           const connectorId = window.localStorage.getItem("connectorId")
//           if (connectorId === 'injected') {
//             library = getLibraryForSign(web3?.givenProvider);
//           } else {
//             library = getLibraryForSign(connectorsByName['walletconnect'].walletConnectProvider);
//           }
//           let signature = await library.send(
//             'personal_sign',
//             [ethers.utils.hexlify(ethers.utils.toUtf8Bytes((account))), account.toLowerCase()]
//           );
//           // let signature = await signing?.signMessage(web3.utils.hexToBytes(web3.utils.stringToHex(JSON.stringify({address : account , name : "Tomi Dao"}))) );
//           // toast.success(`${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`, {
//           //   position: "top-right",
//           //   autoClose: 2000,
//           // });
//           return signature
//         }
//         // AddProfile({ walletAddress: data })
//         // return signature;
//       }
//       catch (error) {
//         console.log("error", error)
//         // toast.error(error && error.message, {
//         //   position: "top-right",
//         //   autoClose: 2000,
//         // });
//       }
//     }
//   }, [account, library, data])
//   return { userSign: sign }
// }
// export default Signature



import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
// import Web3 from "web3";
import { getLibraryForSign } from "../../utils/web3React";
import 'react-toastify/dist/ReactToastify.css';
import useWeb3 from "../useWeb3";
import { connectorsByName } from "../../utils/web3React";

import {ethers} from "ethers";
export const Signature = (data) => {
  // const { account } = useWeb3React()
  const { account } = useWeb3React()
  const web3 = useWeb3()
  var library = null;
  const connectorId = window.localStorage.getItem("connectorId")
  if (connectorId === 'injected' && account) {
    library = getLibraryForSign(web3?.givenProvider);
  } else {
    if (connectorsByName.walletconnect.provider) {
      library = getLibraryForSign(connectorsByName.walletconnect.provider);
    }
  }
  const sign = useCallback(async (accountData) => {
    if ((library && account)) {
      try {
        if (account) {
          const connectorId = window.localStorage.getItem("connectorId")
          if (connectorId === 'injected') {
            library = getLibraryForSign(web3?.givenProvider);
          } else {
            library = getLibraryForSign(connectorsByName.walletconnect.provider);
          }
          let signature = await library.send(
            'personal_sign',
            [ethers.utils.hexlify(ethers.utils.toUtf8Bytes((account?.toLowerCase()))), account.toLowerCase()]
          );  
          return signature
        }
      }
      catch (error) {
        throw error
      }
    }
  }, [account, library, data])
  return { userSign: sign }
}
export default Signature

