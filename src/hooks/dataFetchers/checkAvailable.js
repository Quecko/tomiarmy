import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import Environment from "../../utils/Environment";
import { getRedeemTokenContract } from "../../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

export const CoolDown = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = Environment.redeemTokens;
  const contract = getRedeemTokenContract(tokenAddress, web3);
  const LastRedeem = useCallback(async () => {
    const cooldown = await contract.methods.cooldownPeriod().call();
    const rdeemlast = await contract.methods.lastRedeemTime(account).call();
    console.log("valuewe get here is",cooldown, rdeemlast)
    return approved;
  }, [contract]);

  return { LastRedeem: LastRedeem };
};

export default CoolDown;
