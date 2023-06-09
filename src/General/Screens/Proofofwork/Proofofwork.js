import React, { useState } from 'react'
import { Accordion, Dropdown, Modal, Pagination, Tab, Table, Tabs } from 'react-bootstrap'
import dosts from "../../../assets/icons/dots.svg";
import submitIcon from "../../../assets/icons/submitIcon.svg";
import './proofofwork.scss'

const Proofofwork = () => {
    const [showwork, setShowwork] = useState(false);
    const handleClosework = () => setShowwork(false);
    const handleShowwork = () => setShowwork(true);

    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);

    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);
    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Proof of Work  </h6>
                    <p>approve and reject TASKS pow of army</p>
                </div>
            </div>
            <section className='main-task mainpow'>
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
                                    <Tab eventKey="home" title="Tasks Proof of Work">
                                        <div className="col-xl-12 col-12 pe-0 padd-sm">
                                            <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                                                <div className="maincard-global">
                                                    <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Tasks</th>
                                                                <th>Points</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
                                                                </td>
                                                                <td>
                                                                    <div className="tbl-dropdown">
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                                <img src={dosts} alt="dosts" />
                                                                            </Dropdown.Toggle>

                                                                            <Dropdown.Menu className="stats-dropdown-menu">
                                                                                <div className="stats-dropdown-bg">
                                                                                    <Dropdown.Item onClick={handleShowwork}>
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item onClick={handleShowapprove}>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item onClick={handleShowreject}>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="pending">Pending</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <div className="pagi display-none-in-mobile">
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
                                                    <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                        <div className="heading-mobile">
                                                            <p>User</p>
                                                        </div>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>sharjeel</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="inner-fields">
                                                                        <div className="inner-item">
                                                                            <h6>Tasks</h6>
                                                                            <p>Like our facebook..</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Points</h6>
                                                                            <p>1,000,000</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Status</h6>
                                                                            <button className="btn-green">Completed</button>
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
                                    </Tab>
                                    <Tab eventKey="profile" title="Operations Proof of Work">
                                        <div className="col-xl-12 col-12 pe-0 padd-sm">
                                            <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                                                <div className="maincard-global">
                                                    <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Tasks</th>
                                                                <th>Points</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="pending">Pending</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>sharjeel</td>
                                                                <td>Like our facebook..</td>
                                                                <td>1,000,000</td>
                                                                <td>
                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
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
                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                        Details
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item>
                                                                                </div>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <div className="pagi display-none-in-mobile">
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
                                                    <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                        <div className="heading-mobile">
                                                            <p>User</p>
                                                        </div>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>sharjeel</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="inner-fields">
                                                                        <div className="inner-item">
                                                                            <h6>Tasks</h6>
                                                                            <p>Like our facebook..</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Points</h6>
                                                                            <p>1,000,000</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Status</h6>
                                                                            <button className="btn-green">Completed</button>
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
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showwork} onHide={handleClosework} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mainproofdetail">
                        <div className="proofdetailleft">
                            <div className="proofmain">
                                <p className="detailpara">Task Title</p>
                                <h6 className="detailhead">Like our facebook page before 10 May 2023</h6>
                            </div>
                            <div className="proofmain">
                                <p className="detailpara">Task Description</p>
                                <h6 className="detailhead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</h6>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">POW Url</p>
                                    <h6 className="detailhead" style={{ textDecoration: 'underline' }}>www.google.co.il</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">User</p>
                                    <h6 className="detailhead">Umar_x2jz</h6>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Points</p>
                                    <h6 className="detailhead">1,000,000</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">Status</p>
                                    <span className="detailbtn">Pending</span>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Start Date</p>
                                    <h6 className="detailhead">04/05/2023</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">End Date</p>
                                    <h6 className="detailhead">05/05/2023</h6>
                                </div>
                            </div>
                        </div>
                        <div className="proofdetailleft">
                            <div className="proofmain">
                                <p className="detailpara">POW Image</p>
                                <div className="powimg">
                                    <img src="\generalassets\other-imgs\proofofwork.png" alt="powimginner" className="powimginner" />
                                </div>
                                <div className="others-imgs">
                                <div className="powimg">
                                    <img src="\generalassets\other-imgs\proofofwork.png" alt="powimginner" className="powimginner" />
                                </div>
                                <div className="powimg">
                                    <img src="\generalassets\other-imgs\proofofwork.png" alt="powimginner" className="powimginner" />
                                </div>
                                <div className="powimg">
                                    <img src="\generalassets\other-imgs\proofofwork.png" alt="powimginner" className="powimginner" />
                                </div>
                                <div className="powimg">
                                    <img src="\generalassets\other-imgs\proofofwork.png" alt="powimginner" className="powimginner" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btnss">
                        <button onClick={() => {
                            handleClosework();
                            handleShowreject();
                        }} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                        <button onClick={() => {
                            handleClosework();
                            handleShowapprove();
                        }} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Approve</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showapprove} onHide={handleCloseapprove} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\approveimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">operation proof of work approved</p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showreject} onHide={handleClosereject} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\rejectimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">operation proof of work approved</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Proofofwork