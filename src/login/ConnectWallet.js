import React, { useEffect, useState } from 'react';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import metamaskIcon from '../assets/icons/metamaskIcon.svg';
import walletConnectIcon from '../assets/icons/walletConnectIcon.svg';
// import { Link } from 'react-router-dom';
import Freesoldier from './Freesoldier';
import Modal from 'react-bootstrap/Modal';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom'
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useWeb3 from "../hooks/useWeb3";
import axios from "axios";
import Signature from "../hooks/dataSenders/userSign";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { API_URL } from '../utils/ApiUrl'

const ConnectWallet = ({ setjoinsquad, joinsquad, role, setinvitecode, invitecode }) => {
    const { account } = useWeb3React();
    const { userSign } = Signature();
    const [log, setLog] = useState(false)
    // console.log("value",account)
    const history = useHistory();
    const { login, logout } = useAuth();
    const trustWallet = async () => {
        localStorage.setItem("flag", "true");
        localStorage.setItem("connectorId", "walletconnect");
        if (account) {
            logout();
            localStorage.clear();
        } else {
            login("walletconnect");
            setLog(true)
            //   loginUser();
            //   if (location.pathname !== "/") {
            //     // setShow(false)
            //   } else {
            //     loginUser();
            //   }
        }
    };
    const connectMetaMask1 = () => {
        localStorage.setItem("connectorId", "injected");
        localStorage.setItem("flag", "true");
        if (account) {
            logout();
        } else {
            login("injected");
            setLog(true)
            // loginUser();
            //   if (location.pathname !== "/") {
            //     setShow(false)
            //   } else {
            //     loginUser();
            //   }
        }
    };

    const loginUser = async () => {
        // console.log("values get here is",account)
        // let tok = localStorage.getItem("accessToken");
        // let wall = localStorage.getItem("wallet");
        // setShow(false);
        if (account) {
            const res0 = await userSign(account);
            if (account && res0 && role == 'alreadymember') {
                await axios
                    .post(`${API_URL}/auth/signin`, {
                        walletAddress: account,
                        sign: res0,
                        rememberMe: true
                    })
                    .then((res) => {
                        console.log(res, "response for already member")
                        toast.success('User Logged in Successfully', {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        // localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                        // setShow(false)
                        localStorage.setItem("user", JSON.stringify(res?.data?.data));
                        if (res?.data?.data?.rank.name === "general" || res?.data?.data?.rank.name === "major general") {
                            history.push("/general");
                        }
                        else if ((res?.data?.data?.rank.name !== "general")) {
                            history.push("/soldier");
                        }
                        localStorage.setItem("wallet", account);
                    })
                    .catch((err) => {
                        if (err?.response?.data?.statusCode == 404) {
                            toast.error('No User Found', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                            localStorage.removeItem("connectorId");
                            localStorage.removeItem("flag");
                            // console.log("logout", err)
                            // setShow(false);
                            localStorage.removeItem("accessToken");
                            localStorage.removeItem("user");
                            localStorage.removeItem("wallet");
                            history.push("/")
                        }
                        localStorage.removeItem("connectorId");
                        localStorage.removeItem("flag");
                        // console.log("does not work")
                    });
            }
            else if (account && res0 && role == 'squadjoin') {
                await axios
                    .post(`${API_URL}/auth/signup`, {
                        walletAddress: account,
                        sign: res0,
                        inviteCode: invitecode
                    })
                    .then((res) => {
                        toast.success('Join Request Sent Successfully To Commander', {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                        history.push("/requestinvitation?id=" + role);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message, {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        //  setShow(false);
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("user");
                        localStorage.removeItem("wallet");
                        history.push("/")
                    });
            }
            else if (account && res0 && role == 'solider') {
                await axios
                    .post(`${API_URL}/auth/signup`, {
                        walletAddress: account,
                        sign: res0,
                    })
                    .then((res) => {
                        toast.success('Free Solider Account Created Successfully', {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                        history.push("/requestinvitation?id=" + role);
                    })
                    .catch((err) => {
                        if (err?.response?.data?.statusCode == 404) {
                            toast.error('InviteCode is not valid', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                            localStorage.removeItem("connectorId");
                            localStorage.removeItem("flag");
                            // console.log("logout", err)
                            // setShow(false);
                            // localStorage.removeItem("accessToken");
                            // localStorage.removeItem("user");
                            // localStorage.removeItem("wallet");
                            // history.push("/")
                        }
                        localStorage.removeItem("connectorId");
                        localStorage.removeItem("flag");
                        // console.log("does not work")
                    });
            }
        }
        else {
            toast.error('Wallet Not Connected', {
                position: 'top-center',
                autoClose: 5000,
            });
        }
        // else {
        //     let user1 = localStorage.getItem("user");
        //     user1 = JSON.parse(user1);
        //     setUser(user1);
        //     if (call !== undefined) {
        //         setCall(true);
        //     }
        //     if (user1?.rank === "general" || user1?.rank === "major general") {
        //         console.log("major00000")
        //         history.push("/general");
        //         getData();
        //         GetArmy();
        //     } else if (user1?.rank === "squad member") {
        //         console.log("major44444")
        //         history.push("/squad");
        //         GetTaskss();
        //         GetUserProfiledata();
        //         GetOpts();
        //         GetTasks();
        //         vateransApi();
        //     }
        //     window.scrollTo(0, 0);
        // }
    };

    useEffect(() => {
        if (account && log) {
            setLog(false)
            // console.log("asjasdaskjaskjdha",account)
            loginUser();
        }
    }, [account, log])


    const backtoinvitecode = () => {
        setjoinsquad(false)
        setinvitecode('')
    }
    return (
        <>
            <div className='ConnectWallet-wrapper border-grad1'>
                {joinsquad === true ? (
                    <button className='omomomomom' onClick={backtoinvitecode}>Back To InviteCode</button>
                )
                    :
                    (
                        ''
                    )
                }
                <div className='army-textImg'>
                    {/* <img src={armyCap} alt="armyCap" className='capImg' />
                    <img src={armyText} alt="armyText" className='textImg' /> */}
                    <img src="\login-logo.svg" alt="img" className='img-fluid' />
                </div>
                <div className="mainhead">
                    <h5 className="innerhead">Connect Wallet</h5>
                </div>

                <button onClick={connectMetaMask1} className='metamask-btn border-grad'>
                    <img src={metamaskIcon} alt='metamaskIcon' />
                    MetaMask
                </button>

                <button onClick={trustWallet} className='walletConnect-btn border-grad'>
                    <img src={walletConnectIcon} alt='walletConnectIcon' />
                    Wallet Connect
                </button>
            </div>
            {/* <Freesoldier /> */}
        </>
    )
}

export default ConnectWallet
