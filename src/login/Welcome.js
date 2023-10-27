import React from 'react'
import "./login.scss"
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const [showComponent, setShowComponent] = useState(true);
    const history = useHistory();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited') !== 'true';

    console.log("isFirstVisit", isFirstVisit)

    if (isFirstVisit) {
      setTimeout(() => {
        setShowComponent(false);
        localStorage.setItem('visited', 'true');
        history.push("/");
      }, 3000);
    } 
  }, []);

  return (
    <>
      <section className="welcome-img">
        <img src="\welcomeimg.jpg" alt="img" className='img-fluid' />
      </section>
    </>
  )
}

export default Welcome
