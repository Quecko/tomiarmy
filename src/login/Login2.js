import React, { useEffect, useState } from 'react';
import './login.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConnectWallet from './ConnectWallet';
import Invitecode from './Invitecode';
// import Freesoldier from './Freesoldier';
import SignUp from './SignUp';
import { useHistory } from 'react-router-dom';

const Login2 = () => {

    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem("data");
        document.body.classList.add("padding-remove");
        return () => {
            document.body.classList.remove("padding-remove");
        };
    }, []);
    const [role, setRole]= useState('alreadymember')
    const onselecttab = (rolee) =>{
        setRole(rolee)
    }

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('visited') !== 'true';
    
        // console.log("isFirstVisit", isFirstVisit)
    
        if (isFirstVisit) {
          history.push("/welcome");
        } 
      }, []);
    
    return (
        <div className='login-wrapper'>
            <img src='\loginTopLeftImg.png' alt='img' className='img-fluid border-left-shadow' />
            <img src='\loginRightBottomImg.png' alt='img' className='img-fluid border-right-shadow' />
            <div className='login-tabs-wrapper '>
                <Tabs
                    defaultActiveKey={"alreadymember"}
                    transition={false}
                    id="noanim-tab-example"
                    onSelect={onselecttab}
                >
                    <Tab eventKey="alreadymember" title="Login">
                        <ConnectWallet role={role} />
                    </Tab>
                    {/* <Tab eventKey="Signup" title="Signup">
                        <Invitecode role={role} />
                    </Tab> */}
                    <Tab eventKey="solider" title="Sign up">
                        <SignUp role={role} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Login2
