import React, { useEffect, useState } from 'react';
import './login.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConnectWallet from './ConnectWallet';
import Invitecode from './Invitecode';
// import Freesoldier from './Freesoldier';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import axios from 'axios';

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



      
    // const CLIENT_ID = '1174658223517741107';
    // const CLIENT_SECRET = '1bxx5PWLJ24CYe5jIGxRbeCMYrZxrcrn';
    // const REDIRECT_URI = 'http://localhost:3000'; // Your redirect URI

    // const handleLogin = () => {
    //     const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify`;
    //     window.location.href = AUTH_URL;
    // };

    // const handleRedirect = async () => {
    //     const code = new URLSearchParams(window.location.search).get('code');

    //     if (code) {
    //         console.log(code)
    //         const requestBody = {
    //             client_id: CLIENT_ID,
    //             client_secret: CLIENT_SECRET,
    //             grant_type: 'authorization_code',
    //             code: code,
    //             redirect_uri: REDIRECT_URI,
    //             scope: 'identify',
    //         };

    //         try {
    //             const response = await axios.post('https://discord.com/api/oauth2/token', requestBody);
    //             const accessToken = response.data.access_token;
    //             console.log('coed here is', response.data)
    //             // Handle the access token, e.g., store it in localStorage or state
    //             console.log(accessToken);
    //         } catch (error) {
    //             // Handle error
    //             console.error('Error exchanging code for access token:', error);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     handleRedirect();
    // }, []); // Run once when the component mounts


    
    return (
        <div className='login-wrapper loginwrappersccc'>
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
            <div className="bottom-link">
                <p className='paraaaaaa'>By continuing, you agree with tomiArmy's <Link to="/terms" style={{color: "#ff0083"}}>terms of use</Link></p>
            </div>
            {/* <div>
                <button onClick={handleLogin}>Login with Discord</button>
            </div> */}
        </div>
    )
}

export default Login2
