import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";
import { API_URL } from '../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../hooks/loader';
import moment from "moment";
import { useWeb3React } from "@web3-react/core";


const Tasks = ({ setShowtask ,settaskdetail,tasks,setexpireds}) => {
  const [loader, setLoader] = useState(false);
  // const [tasks, settasks] = useState([]);
  const { account } = useWeb3React();
  // useEffect(() => {
  //   // if (currentPage > 1) {
  //   //     getData(currentPage);
  //   // } else {
  //   getData();
  //   // }
  // }, [account, expired])


  // const getData = async (off) => {
  //   // let valu = null;
  //   // if (off) {
  //   //     valu = off;
  //   // } else {
  //   //     valu = 1;
  //   // }
  //   let tok = localStorage.getItem("accessToken");
  //   // let wall = localStorage.getItem("wallet");
  //   if (account) {
  //     var config = {
  //       method: "get",
  //       url: `${API_URL}/tasks?offset=1&&limit=5&&expired=${expired}`,
  //       headers: {
  //         authorization: `Bearer ` + tok
  //       },
  //     };
  //     axios(config)
  //       .then(function (response) {
  //         setLoader(false);
  //         // setCount(response.data.data.count)
  //         settasks(response?.data?.data?.tasks);
  //         // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
  //         // setPages(arr);
  //         // setCurrentPage(valu)
  //       })
  //       .catch(function (error) {
  //         setLoader(false);
  //         // localStorage.removeItem("accessToken");
  //         // localStorage.removeItem("user");
  //         // window.location.assign("/")
  //         // window.location.reload();
  //       });
  //   }
  // }


  const settabss = (event) => {
    if (event === 'home') {
      setexpireds(false)
    }
    else if (event === 'profile') {
      setexpireds(true)
    }
  }

  const SubmitProofOfWork =(elem)=>{
    setShowtask(true)
    settaskdetail(elem)
  }



  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>ALL TASKS  </h6>
          <p>VIEW AND complete TASKS</p>
        </div>
      </div>
      <section className='main-task'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='my-tabs'>
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                  onSelect={settabss}
                >
                  <Tab eventKey="home" title="Active">
                    <div className='maincard'>
                      <div className='display-none-in-mobile'>
                        <div className="maintable">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <p className='headtable'>Task</p>
                                </th>
                                <th>
                                  <p className='headtable'>Points</p>
                                </th>
                                <th>
                                  <p className='headtable'>Status</p>
                                </th>
                                <th>
                                  <p className='headtable'>Expiry</p>
                                </th>
                                <th>
                                  <p className='headtable'>Action</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tasks?.map((elem, index) => {
                                let expiredate = new Date(elem?.expirationDate);
                                const ExpireDate = moment(expiredate).format("DD-MM-YYYY");
                                let createdate = new Date(elem?.createdAt);
                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                console.log('task', tasks);
                                return (
                                  <tr>
                                    <td>
                                      <p className='paratable'>{elem?.name}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>+{elem?.reward}</p>
                                    </td>
                                    <td>
                                      <div className='completebtn'>
                                        {
                                          elem?.taskSubmitted ?
                                          <button style={{background:'#FEC600'}}>In Process</button>
                                            : elem?.taskApproval ?
                                              <button style={{background:'#04C453'}}>Completed</button>
                                              :
                                              <button style={{background:'#FF8936'}}>Pending</button>
                                        }
                                        
                                      </div>
                                    </td>
                                    <td>
                                      <p className='paratable'>{ExpireDate}</p>
                                    </td>
                                    <td>
                                      <div className='dropbtn'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={()=>SubmitProofOfWork(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>

                        </div>
                        <div className="pagi">
                          <div className="left">
                            <p>Showing 1 to 10 of 57 entries</p>
                          </div>
                          <div className="right">
                            <p>Previous</p>
                            <Pagination>
                              <Pagination.Item active>{1}</Pagination.Item>
                              <Pagination.Item>{2}</Pagination.Item>
                              <Pagination.Item >{3}</Pagination.Item>
                              <Pagination.Item>{4}</Pagination.Item>
                              <Pagination.Item >{5}</Pagination.Item>
                              <Pagination.Item>{6}</Pagination.Item>
                            </Pagination>
                            <p>Next</p>
                          </div>
                        </div>
                      </div>
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Task</p>
                        </div>
                        <Accordion defaultActiveKey="0">
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
                  </Tab>
                  <Tab eventKey="profile" title="Expired Tasks">
                    <div className='maincard'>
                      <div className='display-none-in-mobile'>
                        <div className="maintable">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <p className='headtable'>Task</p>
                                </th>
                                <th>
                                  <p className='headtable'>Points</p>
                                </th>
                                <th>
                                  <p className='headtable'>Status</p>
                                </th>
                                <th>
                                  <p className='headtable'>Expiry</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tasks?.map((elem, index) => {
                                let expiredate = new Date(elem?.expirationDate);
                                const ExpireDate = moment(expiredate).format("DD-MM-YYYY");
                                let createdate = new Date(elem?.createdAt);
                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                return (
                                  <tr>
                                    <td>
                                      <p className='paratable'>{elem?.name}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>+{elem?.reward}</p>
                                    </td>
                                    <td>
                                      <div className='completebtn'>
                                        {
                                          elem?.taskSubmitted ?
                                          <button style={{background:'#FEC600'}}>In Process</button>
                                            : elem?.taskApproval ?
                                              <button style={{background:'#04C453'}}>Completed</button>
                                              :
                                              <button style={{background:'#FF8936'}}>Pending</button>
                                        }
                                        
                                      </div>
                                    </td>
                                    <td>
                                      <p className='paratable'>{ExpireDate}</p>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                            {/* <tbody>
                              <tr>
                                <td>
                                  <p className='paratable'>Like our facebook page</p>
                                </td>
                                <td>
                                  <p className='paratable'>+5</p>
                                </td>
                                <td>
                                  <div className='completebtn'>
                                    <button>Completed</button>
                                  </div>
                                </td>
                                <td>
                                  <p className='paratable'>12:34 12/12/23</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Like our facebook page</p>
                                </td>
                                <td>
                                  <p className='paratable'>+5</p>
                                </td>
                                <td>
                                  <div className='completebtn'>
                                    <button className='red'>Rejected</button>
                                  </div>
                                </td>
                                <td>
                                  <p className='paratable'>12:34 12/12/23</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow our twitter acc...</p>
                                </td>
                                <td>
                                  <p className='paratable'>+5</p>
                                </td>
                                <td>
                                  <div className='completebtn'>
                                    <button>comleted</button>
                                  </div>
                                </td>
                                <td>
                                  <p className='paratable'>12:34 12/12/23</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow our twitter acc...</p>
                                </td>
                                <td>
                                  <p className='paratable'>+5</p>
                                </td>
                                <td>
                                  <div className='completebtn'>
                                    <button className='red'>Rejected</button>
                                  </div>
                                </td>
                                <td>
                                  <p className='paratable'>12:34 12/12/23</p>
                                </td>
                              </tr>
                            </tbody> */}
                          </table>
                        </div>
                        <div className="pagi">
                          <div className="left">
                            <p>Showing 1 to 10 of 57 entries</p>
                          </div>
                          <div className="right">
                            <p>Previous</p>
                            <Pagination>
                              <Pagination.Item active>{1}</Pagination.Item>
                              <Pagination.Item>{2}</Pagination.Item>
                              <Pagination.Item >{3}</Pagination.Item>
                              <Pagination.Item>{4}</Pagination.Item>
                              <Pagination.Item >{5}</Pagination.Item>
                              <Pagination.Item>{6}</Pagination.Item>
                            </Pagination>
                            <p>Next</p>
                          </div>
                        </div>
                      </div>
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Task</p>
                        </div>
                        <Accordion defaultActiveKey="0">
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

                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Tasks