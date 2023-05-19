import React from 'react'
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import './login.scss';

const Freesoldier = () => {
    return (
        <div className='ConnectWallet-wrapper border-grad1'>
            <div className='army-textImg'>
                <img src={armyCap} alt="armyCap" className='capImg' />
                <img src={armyText} alt="armyText" className='textImg' />
            </div>
            <div className="mainhead">
                <h5 className="innerhead">You Don’t Have tomi Tokens in your wallet to create a account</h5>
            </div>
            <button className="buybtn">
                <img src="\assets\shopping-cart.svg" alt="buyimg" className="buyimg" />
                Buy Tokens</button>
        </div>
    )
}

export default Freesoldier