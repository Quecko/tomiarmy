import React from "react";
import { Dropdown, Table } from "react-bootstrap";
import dosts from "../../../assets/icons/dots.svg";
import submitIcon from "../../../assets/icons/submitIcon.svg";
import Accordion from 'react-bootstrap/Accordion';
import moment from "moment";

const GeneralTasks = ({setShowtask ,settaskdetail,tasks}) => {

  const SubmitProofOfWork =(elem)=>{
    setShowtask(true)
    settaskdetail(elem)
  }
  
  return (
    <div className="data-box general-tasks-wrapper border-grad1">
      <h4 className="general">recent tasks from general</h4>
      <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
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
          {tasks?.slice(0, 5).map((elem, index) => {
            let expiredate = new Date(elem?.expirationDate);
            const ExpireDate = moment(expiredate).format("DD-MM-YYYY");
            let createdate = new Date(elem?.createdAt);
            const createDate = moment(createdate).format("DD-MM-YYYY");
            return (
              <tr>
                <td>{elem?.name}</td>
                <td>+{elem?.reward}</td>
                <td>
                  {
                    elem?.taskSubmitted &&!elem?.taskApproval ?
                      <div className="completed" style={{ background: '#FEC600' }}>In Process</div>
                      : elem?.taskApproval===true ?
                        <div className="completed" style={{ background: '#04C453' }}>Completed</div>
                        :
                        <div className="completed" style={{ background: '#FF8936' }}>Pending</div>
                  }
                </td>
                <td>{createDate}</td>
                <td>
                  <div className="tbl-dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        <img src={dosts} alt="dosts" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="stats-dropdown-menu">
                        <div className="stats-dropdown-bg"  onClick={()=>SubmitProofOfWork(elem)}>
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
            )
          })}
        </tbody>
        <tbody>
          {/* <tr>
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
          </tr> */}
          {/* <tr>
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
          </tr> */}
          {/* <tr>
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
          </tr> */}
          {/* <tr>
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
          </tr> */}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </Table>
      <div className="mobile-responsive-table d-none display-block-in-mobile">
        <div className="heading-mobile">
          <p>Task</p>
        </div>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Like our facebook page</Accordion.Header>
            <Accordion.Body>
              <div className="inner-fields">
                <div className="inner-item">
                  <h6>Points</h6>
                  <p>+5</p>
                </div>
                <div className="inner-item">
                  <h6>Status</h6>
                  <button className="btn-green">Completed</button>
                </div>
                <div className="inner-item">
                  <h6>Expiry</h6>
                  <p>12:34 12/12/23</p>
                </div>
                <div className="inner-item">
                  <h6>Actions</h6>
                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Follow our twitter acc...</Accordion.Header>
            <Accordion.Body>
              <div className="inner-fields">
                <div className="inner-item">
                  <h6>Points</h6>
                  <p>+5</p>
                </div>
                <div className="inner-item">
                  <h6>Status</h6>
                  <button className="btn-green">Completed</button>
                </div>
                <div className="inner-item">
                  <h6>Expiry</h6>
                  <p>12:34 12/12/23</p>
                </div>
                <div className="inner-item">
                  <h6>Actions</h6>
                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Like our facebook page</Accordion.Header>
            <Accordion.Body>
              <div className="inner-fields">
                <div className="inner-item">
                  <h6>Points</h6>
                  <p>+5</p>
                </div>
                <div className="inner-item">
                  <h6>Status</h6>
                  <button className="btn-green">Completed</button>
                </div>
                <div className="inner-item">
                  <h6>Expiry</h6>
                  <p>12:34 12/12/23</p>
                </div>
                <div className="inner-item">
                  <h6>Actions</h6>
                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Like our facebook page</Accordion.Header>
            <Accordion.Body>
              <div className="inner-fields">
                <div className="inner-item">
                  <h6>Points</h6>
                  <p>+5</p>
                </div>
                <div className="inner-item">
                  <h6>Status</h6>
                  <button className="btn-green">Completed</button>
                </div>
                <div className="inner-item">
                  <h6>Expiry</h6>
                  <p>12:34 12/12/23</p>
                </div>
                <div className="inner-item">
                  <h6>Actions</h6>
                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default GeneralTasks;
