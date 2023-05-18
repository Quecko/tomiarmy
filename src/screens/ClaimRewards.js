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
      <section className="claim-section">
        <Tabs
          defaultActiveKey="availablereward"
          id="uncontrolled-tab-example"
          className="opeartions-tab"
        >
          <Tab eventKey="availablereward" title="Available Rewards">
            <AvailableReward />
          </Tab>
          <Tab eventKey="rewardprocess" title="Rewards In Procress">
            <RewardProcess />
          </Tab>
          <Tab eventKey="claimed" title="Claimed">
            <ClaimedReward />
          </Tab>
        </Tabs>
      </section>
    </>
  )
}

export default ClaimRewards