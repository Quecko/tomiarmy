import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import metamaskIcon from '../assets/icons/metamaskIcon.svg';
import walletConnectIcon from '../assets/icons/walletConnectIcon.svg';
import freesoldier from '../assets/icons/freesoldier.png';
import joinsquad from '../assets/icons/joinsquad.png';
import { Link } from 'react-router-dom';
import "./requestinvitemodal.scss"
import { useWeb3React } from '@web3-react/core';
import useAuth from '../hooks/useAuth';
import { API_URL } from '../utils/ApiUrl';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Signature from '../hooks/dataSenders/userSign';
import { toast } from "react-toastify";

const RequestInvitationmodal = ({ reqModal, setReqModal }) => {
    const [invitecode, setinvitecode] = useState('')
    const [showmodal, setShowModal] = useState(false)
    const { account } = useWeb3React()
    let wall = localStorage.getItem("wallet");
    const { login, logout } = useAuth()
    const [log, setLog] = useState(false)
    const history = useHistory()
    const { userSign } = Signature()

    const forWalletConnect = () => {
        setShowModal(true)
        setTimeout(() => {
            setShowModal(false)
        }, 10000)
    }

    const handleClose = () => setReqModal(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => {
        setinvitecode('')
        setShow3(false)
    }
    const handleShow3 = () => setShow3(true);

    // const [show4, setShow4] = useState(false);
    // const handleClose4 = () => setShow4(false);
    // const handleShow4 = () => setShow4(true);


    const [role, setRole] = useState('')

    const onselecttab = (rolee) => {
        setRole(rolee)
        handleShow3()
    }
    const onselecttab1 = (rolee) => {
        setRole(rolee)
        handleShow2()
    }

    const [loading, setLoading] = useState(false);
    const trustWallet = async () => {
        if (!loading) {
            if (account && wall) {
                setLoading(true);
                const connectorId = window.localStorage.getItem("connectorId");
                logout(connectorId)
                    .then(() => {
                        localStorage.removeItem("connectorId");
                        localStorage.removeItem("flag");
                    })
                    .catch(error => {
                        console.error("An error occurred during logout:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            } else {
                setLoading(true);
                login("walletconnect")
                    .then(() => {
                        localStorage.setItem('connectorId', 'walletconnect');
                        localStorage.setItem("flag", "true");
                        setLog(true);
                    })
                    .catch(error => {
                        console.error("An error occurred during login:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }
    };
    const connectMetaMask1 = () => {
        if (!loading) {
            if (account && wall) {
                setLoading(true);
                const connectorId = window.localStorage.getItem("connectorId");
                logout(connectorId)
                    .then(() => {
                        localStorage.removeItem("connectorId");
                        localStorage.removeItem("flag");
                        // toast.success('Your wallet disconnect please try again', {
                        //     position: 'top-center',
                        //     autoClose: 5000,
                        // });
                    })
                    .catch(error => {
                        console.error("An error occurred during logout:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            } else {
                setLoading(true);
                login("injected")
                    .then(() => {
                        localStorage.setItem("connectorId", "injected");
                        localStorage.setItem("flag", "true");
                        setLog(true);
                    })
                    .catch(error => {
                        console.error("An error occurred during login:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
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
            if (account && res0 && role === 'squadjoin') {
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
                            // localStorage.clear()
                            // window.location.assign('/')
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
                        else if (err?.response?.data?.statusCode == 400) {
                            toast.error('Not enough tomi Tokens', {
                                position: 'top-center',
                                autoClose: 5000,
                            });
                        }
                        // localStorage.clear()
                        // window.location.assign('/')
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


    const joinsquadwallet = () => {
        if (invitecode === '') {
            toast.error('Please Enter Invite Code First', {
                position: 'top-center',
                autoClose: 5000,
            });
        }
        else {
            handleShow2()
        }
    }

    useEffect(() => {
        if (account && log) {
            loginUser();
            setLog(false)
        }
    }, [account, log])


    return (
        <>
            {/* <button onClick={handleShow4}>shvcscyvcyvyvsc</button> */}
            {/* first modal foor free soilder aand join  squad */}
            <Modal className="createtask-modal global-modal-style new-modal-scss" show={reqModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">Looks like you don't have an account </h5>
                            <h6 className='dcevver'>signup as a free solider or join a squad</h6>
                        </div>
                        <button onClick={() => onselecttab('squadjoin')} className='metamask-btn border-grad'>
                            <img src={joinsquad} alt='metamaskIcon' />
                            Join Squad
                        </button>
                        <button onClick={() => onselecttab1('solider')} className='walletConnect-btn border-grad'>
                            <img src={freesoldier} alt='walletConnectIcon' />
                            Free Solider
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* metamask screen */}

            <Modal className="createtask-modal global-modal-style new-modal-scss" show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
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
                </Modal.Body>
            </Modal>
            {/* 
            <Modal className="createtask-modal global-modal-style new-modal-scss new-modal-invitecode" show={show4} onHide={handleClose4} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">enter your nickname</h5>
                        </div>
                        <div className="invitemaintext">
                            <p className="invitetext">Nickname</p>
                        </div>
                        <div className="inviteinput">
                            <input type="text" placeholder='Enter your nickname...' className="inviteinputinner" />
                            <button className="invitebtn">
                                <img src="\assets\telegram.svg" alt="telegramicon" className="telegramicon" />
                                Continue</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}

            <Modal className="createtask-modal global-modal-style new-modal-scss new-modal-invitecode" show={show3} onHide={handleClose3} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">enter your squad invite code</h5>
                        </div>
                        <div className="invitemaintext">
                            <p className="invitetext">squad invite code</p>
                        </div>
                        <div className="inviteinput">
                            <input type="text" placeholder='Enter your squad invite code' value={invitecode} onChange={(e) => setinvitecode(e.target.value)} className="inviteinputinner" />
                            <button className={invitecode ? "invitebtn" : "invitebtn asdasfafas"} onClick={joinsquadwallet}>
                                <img src="\assets\empty-wallet.svg" alt="telegramicon" className="telegramicon" />
                                Connect Wallet</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* modal for walletconnect signup */}

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

            {/* <Modal className="createtask-modal global-modal-style new-modal-scss" show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead mainhead2">
                            <h5 className="innerhead">You Don’t Have tomi Tokens in your wallet to create a account</h5>
                        </div>
                        <button className='buy-token-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M12.6875 17.665C13.4124 17.665 14 17.0774 14 16.3525C14 15.6277 13.4124 15.04 12.6875 15.04C11.9626 15.04 11.375 15.6277 11.375 16.3525C11.375 17.0774 11.9626 17.665 12.6875 17.665Z" fill="white" />
                                <path d="M6.6875 17.665C7.41237 17.665 8 17.0774 8 16.3525C8 15.6277 7.41237 15.04 6.6875 15.04C5.96263 15.04 5.375 15.6277 5.375 16.3525C5.375 17.0774 5.96263 17.665 6.6875 17.665Z" fill="white" />
                                <path d="M4.13 3.74504L3.98 5.58254C3.95 5.93504 4.2275 6.22754 4.58 6.22754H16.0625C16.3775 6.22754 16.64 5.98754 16.6625 5.67254C16.76 4.34504 15.7475 3.26504 14.42 3.26504H5.2025C5.1275 2.93504 4.9775 2.62004 4.745 2.35754C4.37 1.96004 3.845 1.72754 3.305 1.72754H2C1.6925 1.72754 1.4375 1.98254 1.4375 2.29004C1.4375 2.59754 1.6925 2.85254 2 2.85254H3.305C3.5375 2.85254 3.755 2.95004 3.9125 3.11504C4.07 3.28754 4.145 3.51254 4.13 3.74504Z" fill="white" />
                                <path d="M15.8825 7.35254H4.37754C4.06254 7.35254 3.80754 7.59254 3.77754 7.90004L3.50754 11.1625C3.40254 12.445 4.40754 13.54 5.69004 13.54H14.03C15.155 13.54 16.145 12.6175 16.2275 11.4925L16.475 7.99004C16.505 7.64504 16.235 7.35254 15.8825 7.35254Z" fill="white" />
                            </svg>
                            Buy Tokens
                        </button>
                    </div>
                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default RequestInvitationmodal
