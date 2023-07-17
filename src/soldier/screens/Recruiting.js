import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./recruiting.scss"
import axios from 'axios';
import { API_URL } from '../../utils/ApiUrl';
import { toast } from 'react-toastify';
import Loader from '../../hooks/loader';
import moment from "moment";
import { useWeb3React } from "@web3-react/core";

const Recruiting = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const { account } = useWeb3React()
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [profilePicture, setProfilePicture] = useState(null);
  const setProfilePic = (evt) => {
    setProfilePicture(evt.target.files[0]);
  }

  const [loader, setLoader] = useState(false);
  const [requests, setRequests] = useState([]);


  const getData = async () => {
    let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    if (account) {
      var config = {
        method: "get",
        url: `${API_URL}/tasks/squad-invitation-requests?offset=1&&limit=100`,
        headers: {
          authorization: `Bearer ` + tok
        },
      };
      axios(config)
        .then(function (response) {
          setLoader(false);
          // setCount(response.data.data.count)
          const filteredData = response?.data?.data?.squadInvitationRequests.filter(item => !item.hidden_request);
          setRequests(filteredData);
          // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
          // setPages(arr);
          // setCurrentPage(valu)
        })
        .catch(function (error) {
          setLoader(false);
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("user");
          // window.location.assign("/")
          // window.location.reload();
        });
    }
  }

  useEffect(() => {
    // if (currentPage > 1) {
    //     getData(currentPage);
    // } else {
    getData();
    // }
  }, [account])

  const UserRecrruit = (id) => {
    let tok = localStorage.getItem("accessToken");
    setLoader(true);
    var data = ({
      squadInvitationRequestId: id,
    });
    var config = {
        method: "post",
        url: `${API_URL}/tasks/squad-invitation-requests/recruite-accept`,
        headers: {
            authorization: `Bearer ` + tok
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            setLoader(false);
            getData();
            toast.success('User Recruited Successfully', {
                position: "top-right",
                autoClose: 2000,
            });
            // setrecruitess(recruitess + 1)
            // window.location.reload()
        })
        .catch(function (error) {
            getData();
            // setrecruitess(recruitess + 1)
            setLoader(false);
            toast.error(error?.response?.data?.message)
        });
}

const hiderecruit = (id) => {
    let tok = localStorage.getItem("accessToken");
    setLoader(true);
    var data = ({
      squadInvitationRequestId: id,
    });
    var config = {
        method: "post",
        url: `${API_URL}/tasks/squad-invitation-requests/squad-hidden-requests`,
        headers: {
            authorization: `Bearer ` + tok
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            setLoader(false);
            getData();
        })
        .catch(function (error) {
            getData();
            setLoader(false);
            toast.error(error?.response?.data?.message)
        });
}


  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Recruiting Requests </h6>
          <p>view your army</p>
        </div>
      </div>
      <section className='main-recruit'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='my-tabs'>
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Recruiting Requests">
                    <div className='maincard'>
                      <div className='display-none-in-mobile'>
                        <div className="maintable">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <p className='headtable'>Wallet Address</p>
                                </th>
                                <th>
                                  <p className='headtable'>User Name</p>
                                </th>
                                <th>
                                  <p className='headtable'>Tomi Tokens</p>
                                </th>
                                <th>
                                  <p className='headtable'>Actions</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {requests?.map((elem, index) => {
                                const walletAddressLength = elem?.walletAddress?.length;
                                return (
                                  <tr key={index}>
                                    <td>
                                      <p className='paratable'>
                                        {`${elem?.walletAddress.slice(0, 8)}...${elem?.walletAddress.slice(
                                          walletAddressLength - 8
                                        )}`}
                                      </p>
                                    </td>
                                    <td>
                                      <p className='paratable'>@{elem?.nickName}</p>
                                    </td>
                                    <td>
                                      <p className='paratable'>{elem?.tomiTokens}</p>
                                    </td>
                                    <td>
                                      <div className='dropbtn'>
                                        <Dropdown>
                                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={()=>UserRecrruit(elem?._id)}><img src='\Vector.svg' alt='img' className='img-fluid' />Recruit</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                              <p onClick={()=>hiderecruit(elem?._id)}><img src='\Vector.svg' alt='img' className='img-fluid' />Hide</p>
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
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <Modal className='detailmodal' show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>task details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='innercard'>
              <p className='head'>Task Title</p>
              <h6 className='head1'>Like our facebook page before 10 May 2023</h6>
              <h3 className='discription'>Task Description</h3>
              <h6 className='head1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</h6>
              <div className='parent'>
                <div className='left'>
                  <p className='link'>Related link</p>
                  <h6 className='point underliness'>www.google.co.il</h6>
                </div>
                <div className='right'>
                  <p className='link'>Points</p>
                  <h6 className='point'>1,000,000</h6>
                </div>
              </div>
              <div className='parent mt-3'>
                <div className='left'>
                  <p className='link'>Start Date</p>
                  <h6 className='point'>04/05/2023</h6>
                </div>
                <div className='right'>
                  <p className='link'>End Date</p>
                  <h6 className='point'>05/05/2023</h6>
                </div>
              </div>
              <p className='attachment'>05/05/2023</p>
              <div className='taskdetail'>

                <p>   <img src='\Group.svg' alt='img' className='img-fluid' />task-detail.mp4</p>
              </div>
              <p className='link'>Image</p>
              <img src='\picframe.png' alt='img' className='img-fluid' />
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={() => {
                handleShow1();
                handleClose();
              }}>Submit proof of work</button>
            </div>
          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className='heading'>
                <h4>submit proof of work</h4>
                <p>upload at least one of the below items</p>
              </div>
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <div className='maininput'>
              <p>POW Url</p>
              <input type='text' placeholder='Enter POW Url....' />
            </div>
            <div className="upload-parent">
              <p className='uehyuj'>Upload Proof of Work Image</p>
              <div className="upload">
                {
                  profilePicture ? <label htmlFor="upload">
                    {" "}
                    <img
                      src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                      alt="img"
                      className="img-fluid"
                    />
                  </label> : <label htmlFor="upload">
                    {" "}
                    <img
                      src="\uploadimage.svg"
                      alt="img"
                      className="img-fluid"
                    />
                    <p className='dropimage'>Drop your image here, or<span>browse</span> </p>
                    <p className='support'>Supports: JPG, JPEG, PNG</p>
                  </label>
                }

                <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

              </div>
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={() => {
                handleShow2();
                handleClose1();
              }} ><img src='\send-square.svg' alt='img' className='img-fluid' /> Submit proof of work</button>
            </div>
          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              submit proof of work
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>

            <div className='arrowimg'>
              <img src='\arrowmodal.svg' alt='img' className='img-fluid' />
              <p>proof of work successfully submitted</p>
            </div>

          </Modal.Body>

        </Modal>
      </section>
    </>
  )
}

export default Recruiting