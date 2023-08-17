import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import metamaskIcon from '../assets/icons/metamaskIcon.svg';
import walletConnectIcon from '../assets/icons/walletConnectIcon.svg';
import { Link } from 'react-router-dom';
import "./requestinvitemodal.scss"

const RequestInvitationmodal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    return (
        <>
            <button onClick={handleShow4}>shvcscyvcyvyvsc</button>
            <Modal className="createtask-modal global-modal-style new-modal-scss" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">Connect Wallet to join as free soldier</h5>
                        </div>
                        <Link to="/home" className="w-100">
                            <button className='metamask-btn border-grad'>
                                <img src={metamaskIcon} alt='metamaskIcon' />
                                MetaMask
                            </button>
                        </Link>
                        <button className='walletConnect-btn border-grad'>
                            <img src={walletConnectIcon} alt='walletConnectIcon' />
                            Wallet Connect
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createtask-modal global-modal-style new-modal-scss" show={show1} onHide={handleClose1} centered>
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
            </Modal>

            <Modal className="createtask-modal global-modal-style new-modal-scss new-modal-invitecode" show={show2} onHide={handleClose2} centered>
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
            </Modal>

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
                            <input type="text" placeholder='Enter your squad invite code' className="inviteinputinner" />
                            <button className="invitebtn">
                                <img src="\assets\telegram.svg" alt="telegramicon" className="telegramicon" />
                                Continue</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createtask-modal global-modal-style new-modal-scss" show={show4} onHide={handleClose4} centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ConnectWallet-wrapper'>
                        <div className='army-textImg'>
                            <img src="\logo-army.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead mb-0">Looks like you don't have an account </h5>
                            <h6>signup as a free solider or join a squad</h6>
                        </div>
                        <Link to="/home" className="w-100">
                            <button className='metamask-btn border-grad'>
                                <img style={{width: "50px", height: "50px", marginRight: "10px"}} src="\joinsquad.png" alt='metamaskIcon' />
                                Join Squad
                            </button>
                        </Link>
                        <button className='walletConnect-btn border-grad'>
                            <img style={{width: "50px", height: "50px", marginRight: "10px"}} src="\freesoldier.png" alt='walletConnectIcon' />
                            Free Solider
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RequestInvitationmodal
