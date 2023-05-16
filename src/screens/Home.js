import React from "react";
import taskCompleted from "../assets/icons/task-completed.svg";
import { Dropdown } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="row">
        <div className="col-lg-8 stats-box data-box">
          <h4>MY STATS</h4>
          <div className="stats-data-boxes">
            <div className="inner-data-box">
              <p>TOMI Tokens Earned </p>
            </div>
            <div className="inner-data-box">
              <p>Points</p>
            </div>
            <div className="inner-data-box">
              <p>Total Squad Tokens</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 task-status">
          <div className="data-box">
            <div className="task-status-box-header">
              <h4>My Tasks Status</h4>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  All Time
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="row m-0 tasks-box-row">
              <div className="col-lg-6 task-completed-graph">
                <img src={taskCompleted} alt="taskCompleteds" />
              </div>
              <div className="col-lg-6">
                <div className="tasks-list-items">
                  <div className="tasks-items">
                    <p>Total Tasks</p>
                    <h4>295</h4>
                  </div>
                  <div className="tasks-items">
                    <p>Total Tasks</p>
                    <h4>295</h4>
                  </div>
                  <div className="tasks-items">
                    <p>Total Tasks</p>
                    <h4>295</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
