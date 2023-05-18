import React, { useEffect } from 'react';
import './login.scss';

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
    </div>
  )
}

export default Login
