import React from 'react';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import metamaskIcon from '../assets/icons/metamaskIcon.svg';
import walletConnectIcon from '../assets/icons/walletConnectIcon.svg';
import { Link } from 'react-router-dom';
import Freesoldier from './Freesoldier';

const ConnectWallet = ({ setjoinsquad, joinsquad }) => {
    const backtoinvitecode = () => {
        setjoinsquad(false)
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
                <Link to="/soldier" className="w-100">
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
            {/* <Freesoldier /> */}
        </>
    )
}

export default ConnectWallet
