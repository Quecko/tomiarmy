import React, { useEffect } from 'react'
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import './login.scss';

const Requestinvitation = () => {
    useEffect(() => {
        localStorage.removeItem("data");
        document.body.classList.add("request-remove");
        return () => {
            document.body.classList.remove("request-remove");
        };
    }, []);
    return (
        <section className="rqstinvitation">
            <div className='ConnectWallet-wrapper border-grad1'>
                <div className='army-textImg'>
                    <img src={armyCap} alt="armyCap" className='capImg' />
                    <img src={armyText} alt="armyText" className='textImg' />
                </div>
                <div className="mainhead">
                    <h5 className="innerhead">enter your nickname</h5>
                </div>
                <div className="invitemaintext">
                    <p className="invitetext">Nickname</p>
                </div>
                <div className="inviteinput">
                    <input type="text" placeholder='Enter your nickname...' className="inviteinputinner" />
                </div>
                <div className="buylast">
                    <button className="buybtn">
                        <img src="\assets\telegram.svg" alt="cnctwltimg" className="cnctwltimg" />
                        Continue</button>
                </div>
            </div>
        </section>
    )
}

export default Requestinvitation