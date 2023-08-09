import web3NoAccount from "./web3";
import tomiContract from "./tomiAbi2.json";
import redeemTokensAbi from "./redeemTokensAbi.json";

const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract(abi, address);
};

export const getTomiContract = (address, web3) => {
  return getContract(tomiContract, address, web3);
};

export const getRedeemTokenContract = (address, web3) => {
  return getContract(redeemTokensAbi, address, web3);
};