import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getTomiContract } from "../../utils/contractHelpers";

export const GetBalance = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.TomiContract;
  const contract = getTomiContract(tokenAddress, web3);
  const GetBal = useCallback(async (account) => {
    const approved = await contract.methods.balanceOf(account).call();
    return approved;
  }, [contract]);

  return { GetBal: GetBal };
};

export default GetBalance;