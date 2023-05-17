import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./operation.scss"
import ActiveOperation from './ActiveOperation';

const Operations = () => {
  return (
    <>
      <section className="operations">
        <Tabs
          defaultActiveKey="activeop"
          id="uncontrolled-tab-example"
          className="opeartions-tab"
        >
          <Tab eventKey="activeop" title="Active Operation">
           <ActiveOperation />
          </Tab>
          <Tab eventKey="expiredop" title="Expired Operations">
            tab 2
          </Tab>
        </Tabs>
      </section>
    </>
  )
}

export default Operations