import web3NoAccount from "./web3";
import tomiContract from "./tomiAbi2.json";

const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? web3NoAccount;
  // console.log('_web3',_web3);s
  return new _web3.eth.Contract(abi, address);
};

export const getTomiContract = (address, web3) => {
  return getContract(tomiContract, address, web3);
};
