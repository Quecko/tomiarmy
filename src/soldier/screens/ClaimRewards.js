import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./claim.scss"
import AvailableReward from './AvailableReward';
import RewardProcess from './RewardProcess';
import ClaimedReward from './ClaimedReward';
import { Modal } from 'react-bootstrap';




const ClaimRewards = () => {

  const [showprofile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const [showprofile1, setShowProfile1] = useState(false);
  const handleCloseProfile1 = () => setShowProfile1(false);
  const handleShowProfile1 = () => setShowProfile1(true);
  


  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Claim Rewards</h6>
          <p>claim you rewards</p>
        </div>
      </div>
      <section className="claim-section">
        <div className="upper-div">
          <div className="parent">
            <div className="left">
              <div className="imgs">
                <img src="\assets\claim-img1.png" alt="img" className='img-fluid' />
              </div>
              <div className="inner-text">
                <p className='claim-text'>Unclaimed Points</p>
                <h6>50,000 <span>~500 TOMI</span></h6>
                <p className='claim-text1'>1 Point = 0.01 TOMI</p>
              </div>
            </div>
            <div className="right">
              <button onClick={handleShowProfile}>Claim</button>
            </div>
          </div>
          <div className="parent">
            <div className="left">
              <div className="imgs">
                <img src="\assets\claim-img1.png" alt="img" className='img-fluid' />
              </div>
              <div className="inner-text">
              <p className='claim-text'>Unclaimed TOMI</p>
                <h6>5000</h6>
                
              </div>
            </div>
            <div className="right">
              <button>Claim</button>
            </div>
          </div>
        </div>
        <Tabs
          defaultActiveKey="availablereward"
          id="uncontrolled-tab-example"
          className="opeartions-tab border-grad1"
        >
          <Tab eventKey="availablereward" title="My Tasks Rewards">
            <AvailableReward />
          </Tab>
          {/* <Tab eventKey="rewardprocess" title="Squad tasks Rewards">
            <RewardProcess />
          </Tab> */}
          <Tab eventKey="claimed" title="Squad tasks Rewards">
            <ClaimedReward />
          </Tab>
        </Tabs>
      </section>

      <Modal className='detailmodal claimrewad-modal' show={showprofile} onHide={handleCloseProfile} centered>
        <Modal.Header closeButton>
          <Modal.Title>
          Claim Reward
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <h6>How much points you want to claim right now?</h6>
            <div className="option-field">
            <div className="inner-text">
            <p className="left-text">
              Points
              </p>
              <p className="right-text">
              Balance: <span>50,000 Points</span>
              </p>
            </div>
              <div className="input-inner">
                <input type="text" placeholder='Enter Number of Points....' />
                <a href="#">MAX</a>
              </div>
            </div>
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" onClick={handleCloseProfile}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button className="btn-pinkk" onClick={() => {
              handleCloseProfile();
              handleShowProfile1();
            }}
            >
              <img src='\assets\upload-icon.svg' alt='img' className='img-fluid' /> Claim</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal className='detailmodal claimrewad-modal claimed-reward' show={showprofile1} onHide={handleCloseProfile1} centered>
        <Modal.Header closeButton>
          <Modal.Title>
          Claim Reward
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="body-claimed-reward">
            <h4>500 TOMI</h4>
            <p>Claimed successfully. check your wallet to see balance.</p>
          </div>
          <div className='endbtn'>
            
            <button className="btn-pinkk"
            >
               Okay</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ClaimRewards