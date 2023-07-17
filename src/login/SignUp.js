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
import ConnectWallet from './ConnectWallet';
import Invitecode from './Invitecode';

const SignUp = ({ setjoinsquad, joinsquad, setinvitecode, invitecode }) => {
    const { account } = useWeb3React();
    const { userSign } = Signature();
    const [log, setLog] = useState(false)
    const history = useHistory();
    const { login, logout } = useAuth();
 
    const [role, setRole]= useState('')
    const onselecttab = (rolee) =>{
        setRole(rolee)
    }
    
  
    return (
        <>
        {role === 'squadjoin' ?
        <Invitecode role={role} setRole={setRole}/>
        :
        role === 'solider' ?
        <ConnectWallet role={role} setRole={setRole}/>
        :
        <div className='ConnectWallet-wrapper border-grad1'>
              <div className='army-textImg'>
                    {/* <img src={armyCap} alt="armyCap" className='capImg' />
                    <img src={armyText} alt="armyText" className='textImg' /> */}
                    <img src="\login-logo.svg" alt="img" className='img-fluid' />
                </div>
                <div className="mainhead">
                    <h5 className="innerhead">Sign Up</h5>
                </div>
        <button onClick={() =>onselecttab('squadjoin')} className='metamask-btn border-grad'>
            <img src={metamaskIcon} alt='metamaskIcon' />
            Join Squad
        </button>

        <button onClick={() =>onselecttab('solider')} className='walletConnect-btn border-grad'>
            <img src={walletConnectIcon} alt='walletConnectIcon' />
            Free Solider
        </button>
    </div>
        }
        
        </>
    )
}

export default SignUp
