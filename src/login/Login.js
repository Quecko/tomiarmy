import React, { useEffect } from 'react';
import './login.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConnectWallet from './ConnectWallet';

const Login = () => {
    useEffect(() => {
        localStorage.removeItem("data");
        document.body.classList.add("padding-remove");
        return () => {
            document.body.classList.remove("padding-remove");
        };
    }, []);
    return (
        <div className='login-wrapper'>
            <img src='\loginTopLeftImg.png' alt='img' className='img-fluid border-left-shadow' />
            <img src='\loginRightBottomImg.png' alt='img' className='img-fluid border-right-shadow' />
            <div className='login-tabs-wrapper'>
                <Tabs
                    defaultActiveKey="alreadymember"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="alreadymember" title="Already a member">
                        <ConnectWallet />
                    </Tab>
                    <Tab eventKey="squad" title="Join Squad">
                        Sonnet2222
                    </Tab>
                    <Tab eventKey="solider" title="Free Solider">
                        Sonnet333
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Login
