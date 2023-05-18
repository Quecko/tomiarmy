import React from "react";
import taskCompleted from "../assets/icons/task-completed.svg";
import earned from "../assets/icons/earned.svg";
import points from "../assets/icons/points.svg";
import squadToken from "../assets/icons/squadToken.svg";
import { Dropdown } from "react-bootstrap";
import MyRank from "../components/home/MyRank";
import GeneralTasks from "../components/home/GeneralTasks";
import HomeOperations from "../components/home/HomeOperations/HomeOperations";

const Home = () => {
  return (
    <>
    <div className="home-wrapper">
      <div className="row">
        <div className="col-lg-7 stats-box data-box">
          <div className="task-status-box-header">
            <h4>MY STATS</h4>
            <Dropdown className="stats-dropdown">
              <Dropdown.Toggle id="dropdown-basic">All Time</Dropdown.Toggle>
              <Dropdown.Menu className="stats-dropdown-menu">
                <div className="stats-dropdown-bg">
                  <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="border-bottom-0 item-active"
                  >
                    All Time
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="stats-data-boxes">
            <div className="inner-data-box border-grad">
              <div className="stats-item-box">
                <img src={earned} alt="earned" />
                <p>TOMI Tokens Earned </p>
                <h4>112</h4>
              </div>
            </div>
            <div className="inner-data-box border-grad">
              <div className="stats-item-box">
                <img src={points} alt="points" />
                <p>Points</p>
                <h4>3,500</h4>
              </div>
            </div>
            <div className="inner-data-box border-grad">
              <div className="stats-item-box">
                <img src={squadToken} alt="squadToken" />
                <p>Total Squad Tokens </p>
                <h4>500 TOMI</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 task-status">
          <div className="data-box">
            <div className="task-status-box-header">
              <h4>My Tasks Status</h4>
              <Dropdown className="tasks-status-dropdown">
                <Dropdown.Toggle id="dropdown-basic">All Time</Dropdown.Toggle>

                <Dropdown.Menu className="stats-dropdown-menu">
                  <div className="stats-dropdown-bg">
                    <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="border-bottom-0 item-active"
                    >
                      All Time
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="row m-0 tasks-box-row inner-data-box border-grad">
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
      <div className="row ranks-general-task-row">
        <div className="col-lg-5 my-ranks-box">
          <MyRank />
        </div>
        <div className="col-lg-7 general-task-box">
          <GeneralTasks />
        </div>
      </div>
    </div>
    <HomeOperations />
    </>
  );
};

export default Home;
