import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./operation.scss"
import ActiveOperation from './ActiveOperation';
import ExpiredOperation from './ExpiredOperation';


const Operations = ({ setroute, routes, setShowtask }) => {
  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Operations</h6>
          <p>VIEW AND complete operations</p>
        </div>
      </div>
      <section className="operations">
        <Tabs
          defaultActiveKey="activeop"
          id="uncontrolled-tab-example"
          className={routes ? "opeartions-tab d-none" : "opeartions-tab"}
        >
          <Tab eventKey="activeop" title="Active Operation">
            <ActiveOperation setShowtask={setShowtask} />
          </Tab>
          <Tab eventKey="expiredop" title="Expired Operations">
            <ExpiredOperation setroute={setroute} routes={routes} />
          </Tab>
        </Tabs>
      </section>
    </>
  )
}

export default Operations