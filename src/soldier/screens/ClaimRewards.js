import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./claim.scss"
import AvailableReward from './AvailableReward';
import RewardProcess from './RewardProcess';
import ClaimedReward from './ClaimedReward';




const ClaimRewards = () => {
  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Claim Rewards</h6>
          <p>claim you rewards</p>
        </div>
      </div>
      <section className="claim-section">
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
    </>
  )
}

export default ClaimRewards