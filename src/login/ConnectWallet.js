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
import { API_URL } from '../utils/ApiUrl'
import GetBalance from "../hooks/dataFetchers/getBalance";

const ConnectWallet = ({ setjoinsquad, joinsquad, role, setRole, setinvitecode, invitecode }) => {
    const { account } = useWeb3React();
    const { userSign } = Signature();
    const [log, setLog] = useState(false)
    const history = useHistory();
    const { login, logout } = useAuth();
    const [showmodal, setShowModal] = useState(false)
    const [loader, setLoader] = useState(false);
    const { GetBal } = GetBalance();

    const forWalletConnect = () => {
        setShowModal(true)
        setTimeout(() => {
            setShowModal(false)
        }, 10000)
    }


    // const trustWallet = async () => {
    //     localStorage.setItem("flag", "true");
    //     localStorage.setItem("connectorId", "walletconnect");
    //     if (account) {
    //         logout();
    //         localStorage.clear();
    //     } else {
    //         login("walletconnect");
    //         setLog(true)
    //         //   loginUser();
    //         //   if (location.pathname !== "/") {
    //         //     // setShow(false)
    //         //   } else {
    //         //     loginUser();
    //         //   }
    //     }
    // };

    const trustWallet = async () => {
        // handleShow()
        if (account) {
            const connectorId = window.localStorage.getItem("connectorId")
            await logout(connectorId);
            localStorage.removeItem("connectorId");
            localStorage.removeItem("flag");
        } else {
            login("walletconnect");
            localStorage.setItem('connectorId', 'walletconnect');
            localStorage.setItem("flag", "true");
            setLog(true)
        }
    };

    const connectMetaMask1 = async () => {
        if (account) {
            const connectorId = window.localStorage.getItem("connectorId")
            await logout(connectorId);
            localStorage.removeItem("connectorId");
            localStorage.removeItem("flag");
        } else {
            login("injected");
            localStorage.setItem("connectorId", "injected");
            localStorage.setItem("flag", "true");
            setLog(true)
        }
    };


    const loginUser = async () => {
        // let tok = localStorage.getItem("accessToken");
        // let wall = localStorage.getItem("wallet");
        // setShow(false);
        if (account) {
            if (localStorage.getItem("connectorId") === "walletconnect") {
                forWalletConnect()
            }
            const res0 = await userSign(account);
            if (account && res0 && role === 'alreadymember') {
                await axios
                    .post(`${API_URL}/auth/signin`, {
                        walletAddress: account.toLowerCase(),
                        sign: res0,
                        rememberMe: true
                    })
                    .then(async (res) => {
                        console.log('reessssssss',res);
                        // const res1 = await GetBal(account);
                     
                        // console.log(res1)
                        // if (res1 === "1") {
                        //     history.push("/tomitoken")
                        //     // alert('scesaev')
                        //     // history.push("/buytoken")
                        // } else {
                            localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                            localStorage.setItem("wallet", res?.data?.data?.walletAddress);
                            // setShow(false)
                            localStorage.setItem("user", JSON.stringify(res?.data?.data));
                            if (res?.data?.data?.rank.name === "general") {
                                history.push("/general");
                            } else if (res?.data?.data?.rank.name === "major general") {
                                history.push("/majorgeneral");
                            }
                            else if (res?.data?.data?.isCommander === true) {
                                history.push("/leader");
                            }
                            else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name !== '') {
                                history.push("/soldier");
                            } else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name == '') {
                                history.push("/soldier");
                            }
                            else {
                                // localStorage.clear()
                                // window.location.assign('/')
                            }
                          
                            toast.success('User Logged in Successfully', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                        // }

                    })
                    .catch((err) => {
                        if (err?.response?.data?.statusCode === 404) {
                            toast.error('No User Found', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                            localStorage.clear()
                            window.location.assign('/')
                        }
                        // localStorage.clear()
                        // window.location.assign('/')
                    });
            }
            else if (account && res0 && role === 'squadjoin') {
                await axios
                    .post(`${API_URL}/auth/signup`, {
                        walletAddress: account.toLowerCase(),
                        sign: res0,
                        inviteCode: invitecode,
                    })
                    .then((res) => {
                        toast.success('Join Request Sent Successfully To Commander', {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                        localStorage.setItem("wallet", res?.data?.data?.walletAddress);
                        localStorage.setItem("user", JSON.stringify(res?.data?.data));
                        history.push("/requestinvitation?id=" + role);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message, {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        //  setShow(false);
                        localStorage.clear()
                        window.location.assign('/')
                    });
            }
            else if (account && res0 && role === 'solider') {
                await axios
                    .post(`${API_URL}/auth/signup`, {
                        walletAddress: account.toLowerCase(),
                        sign: res0,
                    })
                    .then((res) => {
                        toast.success('Free Solider Account Created Successfully', {
                            position: 'top-center',
                            autoClose: 5000,
                        });
                        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
                        localStorage.setItem("wallet", res?.data?.data?.walletAddress);
                        localStorage.setItem("user", JSON.stringify(res?.data?.data));
                        // dispatch(addUer(res?.data?.data));
                        history.push("/requestinvitation?id=" + role);
                    })
                    .catch((err) => {
                        if (err?.response?.data?.statusCode == 404) {
                            toast.error('InviteCode is not valid', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                            localStorage.clear()
                            window.location.assign('/')
                            // setShow(false);
                            // localStorage.removeItem("accessToken");
                            // localStorage.removeItem("user");
                            // localStorage.removeItem("wallet");
                            // history.push("/")
                        }
                        else if (err?.response?.data?.statusCode == 409) {
                            toast.error('You hava already memeber', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                        }
                        localStorage.clear()
                        window.location.assign('/')
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
        //         history.push("/general");
        //         getData();
        //         GetArmy();
        //     } else if (user1?.rank === "squad member") {
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
            loginUser();
            setLog(false)
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
                {
                    role === 'solider' &&
                    <button className='omomomomom' onClick={() => setRole('')}>Back To Sign Up</button>

                }
                <div className='army-textImg'>
                    <img src="\login-logo.svg" alt="img" className='img-fluid' />
                </div>
                <div className="mainhead">
                    <h5 className="innerhead">Connect Wallet</h5>
                </div>

                <button onClick={connectMetaMask1} className='metamask-btn ygdshgdsaygdasuygd border-grad'>
                    <img src={metamaskIcon} alt='metamaskIcon' />
                    MetaMask
                </button>

                <button onClick={trustWallet} className='walletConnect-btn border-grad'>
                    <img src={walletConnectIcon} alt='walletConnectIcon' />
                    Wallet Connect
                </button>
            </div>
            {/* <Freesoldier /> */}

            <Modal className='detailmodal hgvtfhftyftyfytft' show={showmodal} centered>
                <Modal.Header>
                    <Modal.Title>Sign in please</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='imagesmodal'>
                        <img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1689945078/Group_48095361_akaxgi.png' alt='img' className='img-fluid' />
                        <p>Please check your connected app on your mobile for signature</p>
                        {/* <p>Are you sure you want to leave this squad?</p> */}
                    </div>
                    <div className='endbtn'>
                        <button onClick={() => setShowModal(false)} className="btn-pinkk" ><img src='\up.svg' alt='img' className='img-fluid' />ok</button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ConnectWallet
