import React, { useState } from 'react';
import freesoldier from '../assets/icons/freesoldier.png';
import joinsquad from '../assets/icons/joinsquad.png';
// import { Link } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';
import Invitecode from './Invitecode';

const SignUp = () => {

    const [role, setRole] = useState('')
    const onselecttab = (rolee) => {
        setRole(rolee)
    }

    return (
        <>
            {role === 'squadjoin' ?
                <Invitecode role={role} setRole={setRole} />
                :
                role === 'solider' ?
                    <ConnectWallet role={role} setRole={setRole} />
                    :
                    <div className='ConnectWallet-wrapper border-grad1'>
                        <div className='army-textImg'>
                            {/* <img src={armyCap} alt="armyCap" className='capImg' />
                    <img src={armyText} alt="armyText" className='textImg' /> */}
                            <img src="\login-logo.svg" alt="img" className='img-fluid set-custom-mobile-logo' />
                        </div>
                        <div className="mainhead">
                            <h5 className="innerhead">Sign Up</h5>
                        </div>
                        <button onClick={() => onselecttab('squadjoin')} className='metamask-btn border-grad'>
                            <img src={joinsquad} alt='metamaskIcon' />
                            Join Squad
                        </button>

                        <button onClick={() => onselecttab('solider')} className='walletConnect-btn border-grad'>
                            <img src={freesoldier} alt='walletConnectIcon' />
                            Free Solider
                        </button>
                    </div>
            }

        </>
    )
}

export default SignUp
