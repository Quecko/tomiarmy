import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import Environment from "../../utils/Environment";
import { getRedeemTokenContract } from "../../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

export const RedeemToken = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contractAddress = Environment.redeemTokens;
  const contract = getRedeemTokenContract(contractAddress, web3);
  const redeemTokenHook = useCallback(
    async (time, amount, v, r, s) => {
      var gasFunPrice;
      web3.eth.getGasPrice().then((result) => {
        var result2 = parseInt(result) + 3000000000;
        // // console.log("gasfun", typeof result2, result2)
        gasFunPrice = result2.toString();
      });
      try {
        const gas = await contract.methods
          .redeemTokens(time, amount, v, r, s)
          .estimateGas({
            from: account,
          });
        const details = await contract.methods
          .redeemTokens(time, amount, v, r, s)
          .send({ gas: gas, gasPrice: gasFunPrice, from: account });
        return details;
      } catch (error) {
        throw error;
      }
    },
    [contract, account]
  );

  return { redeemTokenHook: redeemTokenHook };
};

export default RedeemToken;