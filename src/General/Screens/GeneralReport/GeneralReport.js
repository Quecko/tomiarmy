import React from 'react'
import "../../../soldier/screens/bugreport.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./generalreport.scss"

const GeneralReport = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Report a Bug</h6>
                    <p>report a bug to get resolved</p>
                </div>
            </div>
            <section className="bug-report">
                <Tabs
                    defaultActiveKey="activeop"
                    id="uncontrolled-tab-example"
                    className="opeartions-tab border-grad1"
                >
                    <Tab eventKey="activeop" title="Pending">
                        <section className='main-task general-army'>
                            <div className='container-fluid padd-sm p-0'>
                                <div className='row'>
                                    <div className='col-sm-12 padd-sm p-0'>
                                        <div className='maincard'>
                                            <div className='display-none-in-mobile'>
                                                <div className="maintable">
                                                    <table class="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <p className='headtable'>Date received</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Reported by</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Issues</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Status</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Status</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p className='paratable'>23/05/2023 01:58</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>Umar_x2jz</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>Button Is Not Working</p>
                                                                </td>
                                                                <td>
                                                                    <p className='status-div pending-bg'>Pending</p>
                                                                </td>
                                                                <td>
                                                                    <div className='dropbtn global-dropdown-style'>
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                            </Dropdown.Toggle>

                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#/action-1">
                                                                                    <p ><img src='\generalassets\icons\checkmark.svg' alt='img' className='img-fluid' />Resolved</p>
                                                                                    <p onClick={handleShow}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
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
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </Tab>
                    <Tab eventKey="expiredop" title="Resloved">
                        <div className='maincard border-grad1'>
                            <div className="display-none-in-mobile">
                                <div className="maintable table-responsive">
                                    <table class="table table-striped " >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p className='headtable'>Date received</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Reported by</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Issues</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Status</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className='paratable'>23/05/2023 01:58</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>Umar_x2jz</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>Button Is Not Working</p>
                                                </td>
                                                <td>
                                                    <p className='status-div green-bg'>Resolved</p>
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
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Item >...</Pagination.Item>
                                            <Pagination.Item>{6}</Pagination.Item>
                                        </Pagination>
                                        <p>Next</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                <div className="heading-mobile">
                                    <p>Date Submitted</p>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </section>

            <Modal className='bugdetail-modal global-modal-style' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>bug details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="parent">
                <div className="left">
                    <div className="text">
                        <p>Issue</p>
                        <h6>Button Is Not Working</h6>
                    </div>
                    <div className="text">
                        <p>Additional Note</p>
                        <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</h6>
                    </div>
                    <div className="twice-text">
                        <div className="text">
                        <p>Reported by</p>
                        <h6>Umar_x2jz</h6>
                        </div>
                        <div className="text">
                        <p>Date received</p>
                        <h6>04/05/2023</h6>
                        </div>
                    </div>
                    <div className="text">
                        <p>Status</p>
                        <p className='status-div pending-bg'>Pending</p>
                    </div>
                </div>
                <div className="right">
                    <h6 className="main-head">Attachment</h6>
                    <div className="upload">
                        <img src="\generalassets\other-imgs\dummy.png" alt="img" className='img-fluid' />
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default GeneralReport
