import React, { useEffect, useState } from 'react';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import './login.scss';
import ConnectWallet from './ConnectWallet';

const Invitecode = () => {
    const [joinsquad, setjoinsquad] = useState(false)
    const joinsquadwallet = () => {
        setjoinsquad(true)
    }
    return (
        <>
            {joinsquad ?
                (
                    <ConnectWallet setjoinsquad={setjoinsquad} joinsquad={joinsquad}/>
                )
                :
                (
                    <div className='ConnectWallet-wrapper border-grad1'>
                        <div className='army-textImg'>
                            {/* <img src={armyCap} alt="armyCap" className='capImg' />
                            <img src={armyText} alt="armyText" className='textImg' /> */}
                             <img src="\login-logo.svg" alt="img" className='img-fluid' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">Enter Invite Code</h5>
                        </div>
                        <div className="invitemaintext">
                            <p className="invitetext">Invite code</p>
                        </div>
                        <div className="inviteinput">
                            <input type="text" placeholder='Enter invite code...' className="inviteinputinner" />
                            <button className="invitebtn">
                                <img src="\assets\telegram.svg" alt="telegramicon" className="telegramicon" />
                                Enter
                            </button>
                        </div>
                        <div className="lastbtn">
                            <button className="cnctwltbtn" onClick={joinsquadwallet}>
                                <img src="\assets\empty-wallet.svg" alt="cnctwltimg" className="cnctwltimg" />
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Invitecode