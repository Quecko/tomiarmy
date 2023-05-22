import React from "react";
import { Dropdown, Table } from "react-bootstrap";
import dosts from "../../assets/icons/dots.svg";
import submitIcon from "../../assets/icons/submitIcon.svg";

const GeneralTasks = () => {
  return (
    <div className="data-box general-tasks-wrapper border-grad1">
      <h4 className="general">recent tasks from general</h4>
      <Table striped bordered hover responsive className="general-tasks-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Points</th>
            <th>Status</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="tbl-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={dosts} alt="dosts" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item>
                        <img src={submitIcon} alt="submitIcon" />
                        Submit Proof
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="pending">Pending</div>
            </td>
            <td>
              <div className="expired">Expired</div>
            </td>
            <td>
              <div className="tbl-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={dosts} alt="dosts" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item>
                        <img src={submitIcon} alt="submitIcon" />
                        Submit Proof
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="pending">Pending</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="tbl-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={dosts} alt="dosts" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item>
                        <img src={submitIcon} alt="submitIcon" />
                        Submit Proof
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="tbl-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={dosts} alt="dosts" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item>
                        <img src={submitIcon} alt="submitIcon" />
                        Submit Proof
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="tbl-dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src={dosts} alt="dosts" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item>
                        <img src={submitIcon} alt="submitIcon" />
                        Submit Proof
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GeneralTasks;
