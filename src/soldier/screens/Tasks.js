import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
const Tasks = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  return (
    <>
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
                >
                  <Tab eventKey="home" title="Active">
                    <div className='maincard'>
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
                            <tr>
                              <td>
                                <p className='paratable'>Like our facebook page</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className=''>Completed</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p  onClick={handleShow}><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>


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
                                  <button className='orange'>Pending</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
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
                                  <button className='orange'>Pending</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
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
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
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
                  </Tab>
                  <Tab eventKey="profile" title="Expired Tasks">
                    <div className='maincard'>
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
              <button onClick={()=> {
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
              <button onClick={()=>{
                handleShow2();
                handleClose1();
              }} ><img src='\send-square.svg'alt='img'className='img-fluid'/> Submit proof of work</button>
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

export default Tasks