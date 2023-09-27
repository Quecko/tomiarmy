import React, { useEffect, useState } from 'react'
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../utils/ApiUrl'
import './login.scss';

const Requestinvitation = () => {
    const [nick, setNick] = useState("");
    const history = useHistory();
    useEffect(() => {
        localStorage.removeItem("data");
        document.body.classList.add("request-remove");
        return () => {
            document.body.classList.remove("request-remove");
        };
    }, []);

    const AddNick = (e) => {
        var val = window.location.href;
        val = new URL(val);
        var id = val.searchParams.get("id");
        e.preventDefault();
        if (nick?.length > 2) {
         
            // setLoader(true);
            let tok = localStorage.getItem("accessToken");
            var data = ({
                nickName: nick,
            });
            var config = {
                method: "patch",
                url: `${API_URL}/auth/users`,
                headers: {
                    authorization: `Bearer ` + tok
                },
                data: data,
            };
            axios(config)
                .then(function (response) {
                    // setLoader(false);
                    // history.push("/squad");
                    if (id == 'solider') {
                        const existingData = JSON.parse(localStorage.getItem('user'));
                        existingData.nickName = response?.data?.data?.nickName
                        const updatedData = JSON.stringify(existingData);
                        localStorage.setItem('user', updatedData);
                        history.push("/soldier");
                    }
                    else {
                        const existingData = JSON.parse(localStorage.getItem('user'));
                        existingData.nickName = response?.data?.data?.nickName
                        const updatedData = JSON.stringify(existingData);
                        localStorage.setItem('user', updatedData);
                        history.push("/dcsquad");
                    }
                })
                .catch(function (error) {
                    // setLoader(false);
                    toast.error(error?.response?.data?.message, {
                        position: 'top-center',
                        autoClose: 5000,
                    });
                });
            
        } else {
            toast.error("Nickname must be at least three characters long!", {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    }

    return (
        <section className="rqstinvitation">
            <div className='ConnectWallet-wrapper border-grad1'>
                <div className='army-textImg'>
                    {/* <img src={armyCap} alt="armyCap" className='capImg' />
                    <img src={armyText} alt="armyText" className='textImg' /> */}
                    <img src="\login-logo.svg" alt="img" className='img-fluid' />
                </div>
                <div className="mainhead">
                    <h5 className="innerhead">enter your nickname</h5>
                </div>
                <div className="invitemaintext">
                    <p className="invitetext">Nickname</p>
                </div>
                <form onSubmit={(e) => AddNick(e)}>
                    <div className="inviteinput">
                        <input type="text" onChange={(e) => setNick(e.target.value)} placeholder='Enter your nickname...' className="inviteinputinner" />
                    </div>
                    <div className="buylast">
                        <button className="buybtn">
                            <img src="\assets\telegram.svg" alt="cnctwltimg" className="cnctwltimg" />
                            Continue</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Requestinvitation