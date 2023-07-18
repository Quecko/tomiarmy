import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generaltask.scss"
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';
import moment from "moment";
import { useWeb3React } from "@web3-react/core";

const GeneralTask = ({ setShowtask, setShowtaskdetail, setShowtaskedit, setdetailtask, setexpired, getData, tasks }) => {
  const [loader, setLoader] = useState(false);


  const settabss = (event) => {
    if (event === 'home') {
      setexpired(false)
    }
    else if (event === 'profile') {
      setexpired(true)
    }
  }

  const deletetask = (elem) => {

    let tok = localStorage.getItem("accessToken");
    // setOpens(true);
    axios
      .delete(
        API_URL + "/tasks/" +
        elem?._id,
        { headers: { authorization: `Bearer ${tok}` } }
      )
      .then((response) => {
        getData();
        // setOpens(false);
        // setCall(!call);
        toast
          .success("Successfully Delete Task", {
            position: "top-right",
            autoClose: 3000,
          })
        window.$('#exampleModal2').modal('hide')
          .catch((err) => {
            // setOpens(false);
            toast.warning(
              "Error",
              {
                position: "top-right",
                autoClose: 3000,
              }
            );
            return false;
          });
      });
  }
  // const detailfunction = (elem) =>{
  //   setdetailtask(elem)
  // }
  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>ALL TASKS</h6>
          <p>VIEW AND CREATE TASKS FOR YOUR ARMY</p>
        </div>
        <button onClick={() => setShowtask(true)} className="create-btn" >
          <img src="\assets\add-task.svg" alt="img" className="img-fluid me-2" />
          Create Task
        </button>
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
                                  <p className='headtable'>Date Created</p>
                                </th>
                                <th>
                                  <p className='headtable'>Date Expires</p>
                                </th>
                                <th>
                                  <p className='headtable'>Points</p>
                                </th>
                                <th>
                                  <p className='headtable'>Actions</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tasks?.map((elem, index) => {
                                let expiredate = new Date(elem?.expirationDate);
                                const ExpireDate = moment(elem?.expirationDate).format("DD-MM-YYYY");
                                let createdate = new Date(elem?.createdAt);
                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                return (
                                  <tr key={index}>
                                    <td>
                                      <p className='paratable'>{elem?.name}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{createDate}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{ExpireDate}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{elem?.reward} Points</p>
                                    </td>
                                    <td>
                                      <div className='dropbtn global-dropdown-style'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={() => { setShowtaskdetail(true); setdetailtask(elem) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                              <p onClick={() => { setShowtaskedit(true); setdetailtask(elem) }}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                              <p onClick={() => deletetask(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                        {/* <div className="pagi">
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
                        </div> */}
                      </div>
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Task</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                          {tasks?.map((elem, index) => {
                            let expiredate = new Date(elem?.expirationDate);
                            const ExpireDate = moment(elem?.expirationDate).format("DD-MM-YYYY");
                            let createdate = new Date(elem?.createdAt);
                            const createDate = moment(createdate).format("DD-MM-YYYY");
                            return (
                              <Accordion.Item eventKey={index}>
                                <Accordion.Header>{elem?.name}</Accordion.Header>
                                <Accordion.Body>
                                  <div className="inner-fields">
                                    <div className="inner-item">
                                      <h6>Date Created</h6>
                                      <p>{createDate}</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Date Expires</h6>
                                      <p>{ExpireDate}</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Points</h6>
                                      <p>+{elem?.reward} Points</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Actions</h6>
                                      <div className='dropbtn global-dropdown-style'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={() => { setShowtaskdetail(true); setdetailtask(elem) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                              <p onClick={() => { setShowtaskedit(true); setdetailtask(elem) }}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                              <p onClick={() => deletetask(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      {/* <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a> */}
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            )
                          })}

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
                                  <p className='headtable'>Date Created</p>
                                </th>
                                <th>
                                  <p className='headtable'>Date Expires</p>
                                </th>
                                <th>
                                  <p className='headtable'>Points</p>
                                </th>
                                <th>
                                  <p className='headtable'>Actions</p>
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
                                  <tr key={index}>
                                    <td>
                                      <p className='paratable'>{elem?.name}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{createDate}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{ExpireDate}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{elem?.reward} Points</p>
                                    </td>
                                    <td>
                                      <div className='dropbtn global-dropdown-style'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={() => { setShowtaskdetail(true); setdetailtask(elem) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                              <p onClick={() => { setShowtaskedit(true); setdetailtask(elem) }}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                              <p onClick={() => deletetask(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                        {/* <div className="pagi">
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
                        </div> */}
                      </div>
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Task</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                          {tasks?.map((elem, index) => {
                            let expiredate = new Date(elem?.expirationDate);
                            const ExpireDate = moment(expiredate).format("DD-MM-YYYY");
                            let createdate = new Date(elem?.createdAt);
                            const createDate = moment(createdate).format("DD-MM-YYYY");
                            return (
                              <Accordion.Item eventKey={index}>
                                <Accordion.Header>{elem?.name}</Accordion.Header>
                                <Accordion.Body>
                                  <div className="inner-fields">
                                    <div className="inner-item">
                                      <h6>Date Created</h6>
                                      <p>{createDate}</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Date Expires</h6>
                                      <p>{ExpireDate}</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Points</h6>
                                      <p>+{elem?.reward} Points</p>
                                    </div>
                                    <div className="inner-item">
                                      <h6>Actions</h6>
                                      <div className='dropbtn global-dropdown-style'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={() => { setShowtaskdetail(true); setdetailtask(elem) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                              <p onClick={() => { setShowtaskedit(true); setdetailtask(elem) }}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                              <p onClick={() => deletetask(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      {/* <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a> */}
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            )
                          })}

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

export default GeneralTask