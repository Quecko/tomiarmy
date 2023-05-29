import React, { useEffect } from 'react'
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import { useHistory } from 'react-router-dom'
import './login.scss';

const Dcsquad = () => {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem("data");
        document.body.classList.add("request-remove");
        return () => {
            document.body.classList.remove("request-remove");
        };
    }, []);
    const Joinsquad = (e) => {
        history.push("/soldier");
    }
  return (
    <section className="rqstinvitation">
    <div className='ConnectWallet-wrapper border-grad1'>
        <div className='army-textImg'>
            {/* <img src={armyCap} alt="armyCap" className='capImg' />
            <img src={armyText} alt="armyText" className='textImg' /> */}
              <img src="\login-logo.svg" alt="img" className='img-fluid' />
        </div>
        <div className="mainhead formargin">
            <h5 className="innerhead">Welcome to DC Squad!</h5>
        </div>
        <div className="buylast">
            <button className="buybtn"onClick={Joinsquad}>
                <img src="\assets\thumb-up.svg" alt="cnctwltimg" className="cnctwltimg" />
                Okay</button>
        </div>
    </div>
</section>
  )
}

export default Dcsquad