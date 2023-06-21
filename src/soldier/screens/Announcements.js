import React, { useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { API_URL } from '../../utils/ApiUrl';
import axios from 'axios';
const Announcements = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loader,setLoader]=useState(false)
  const [announcements,setAnnouncements]=useState([])
  let tok = localStorage.getItem("accessToken");
  const [selecttab, setselecttab] = useState('home')
  const [read,setRead] = useState(true)
  const getAnnouncements = async (event) => {
    console.log('event',event);
    var config = {
      method: "get",
      url: `${API_URL}/announcements/user-announcements?offset=1&limit=5&isRead=${read}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setAnnouncements(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoader(false);
      });
  }

  useEffect(() => {
    if (selecttab === 'profile') { 
      setRead(false)
      getAnnouncements()
    }
    else {
      setRead(true)
      getAnnouncements()
    }
  }, [selecttab]);


  console.log('announcements',announcements);
   

  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>ANNOUNCEMENTS</h6>
          <p>view your announcements</p>
        </div>
      </div>
      <section className='main-announcement'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='my-tabs'>
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 border-grad1"
                  onSelect={setselecttab}
                >
                  <Tab eventKey="home" title="Read Announcements">
                    {/* <Sonnet /> */}
                    <div className='maincard border-grad1'>
                      <div className='display-none-in-mobile'>
                        <div className="maintable">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  <p className='headtable'>Announcement</p>
                                </th>
                                <th>
                                  <p className='headtable'>Date Received</p>
                                </th>
                                <th>
                                  <p className='headtable'>Actions</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow this Twitter Account....</p>
                                </td>
                                <td>
                                  <p className='paratable'>01/01/23</p>
                                </td>
                                <td>
                                  <div className='dropbtn'>
                                    <Dropdown>
                                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\reading-book1.svg' alt='img' className='img-fluid' />Mark as read</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                        </Dropdown.Item>

                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow this Twitter Account....</p>
                                </td>
                                <td>
                                  <p className='paratable'>01/01/23</p>
                                </td>
                                <td>
                                  <div className='dropbtn'>
                                    <Dropdown>
                                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\reading-book1.svg' alt='img' className='img-fluid' />Mark as read</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                        </Dropdown.Item>

                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow this Twitter Account....</p>
                                </td>
                                <td>
                                  <p className='paratable'>01/01/23</p>
                                </td>
                                <td>
                                  <div className='dropbtn'>
                                    <Dropdown>
                                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\reading-book1.svg' alt='img' className='img-fluid' />Mark as read</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                        </Dropdown.Item>

                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className='paratable'>Follow this Twitter Account....</p>
                                </td>
                                <td>
                                  <p className='paratable'>01/01/23</p>
                                </td>
                                <td>
                                  <div className='dropbtn'>
                                    <Dropdown>
                                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\reading-book1.svg' alt='img' className='img-fluid' />Mark as read</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                        </Dropdown.Item>
                                        <div className='brdr'></div>
                                        <Dropdown.Item href="#/action-1">
                                          <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
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
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Announcement</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
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
                  <Tab eventKey="profile" title={<p>Unread Announcements <img src='\two.svg' alt='img' className='img-fluid' /></p>}>
                    {/* <Sonnet /> */}
                    <div className='maincard border-grad1'>
                      <div className="maintable display-none-in-mobile">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                <p className='headtable'>Announcement</p>
                              </th>
                              <th>
                                <p className='headtable'>Date Received</p>
                              </th>
                              <th>
                                <p className='headtable'>Actions</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className='paratable'>Follow this Twitter Account....</p>
                              </td>
                              <td>
                                <p className='paratable'>01/01/23</p>
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
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                      </Dropdown.Item>
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                      </Dropdown.Item>

                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow this Twitter Account....</p>
                              </td>
                              <td>
                                <p className='paratable'>01/01/23</p>
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
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                      </Dropdown.Item>
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                      </Dropdown.Item>

                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow this Twitter Account....</p>
                              </td>
                              <td>
                                <p className='paratable'>01/01/23</p>
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
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                      </Dropdown.Item>
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                      </Dropdown.Item>

                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow this Twitter Account....</p>
                              </td>
                              <td>
                                <p className='paratable'>01/01/23</p>
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
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                      </Dropdown.Item>
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                      </Dropdown.Item>

                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow this Twitter Account....</p>
                              </td>
                              <td>
                                <p className='paratable'>01/01/23</p>
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
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={handleShow}><img src='\Vectordetail.svg' alt='img' className='img-fluid' />details</p>
                                      </Dropdown.Item>
                                      <div className='brdr'></div>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\trash.svg' alt='img' className='img-fluid' />delete</p>
                                      </Dropdown.Item>

                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                      <div className="mobile-responsive-table d-none display-block-in-mobile">
                        <div className="heading-mobile">
                          <p>Announcement</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
                                </div>
                                <div className="inner-item">
                                  <h6>Actions</h6>
                                  <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Follow this Twitter Account....</Accordion.Header>
                            <Accordion.Body>
                              <div className="inner-fields">
                                <div className="inner-item">
                                  <h6>Date Received</h6>
                                  <p>01/01/22</p>
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
            <Modal.Title>announcement Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='modalcard'>
              <h4>Announcement</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            </div>
            <div className='modalcard mt-4'>
              <h4>Date Received</h4>
              <p>01/01/23</p>
            </div>
            <div className='okbtn'>
              <button><span><img src='\checkmarks.svg' alt='img' className='img-fluid' /></span>Okay</button>
            </div>
          </Modal.Body>

        </Modal>
      </section>
    </>
  )
}

export default Announcements