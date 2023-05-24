import React from 'react'
import "./bugreport.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';

const BugReport = () => {
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
                    <Tab eventKey="activeop" title="Report a Bug">
                        <div className="reportabug border-grad1">
                            <div className="option-field">
                                <label>Issue</label>
                                <input type="text" placeholder='Write your issue...' />
                            </div>
                            <div className="option-field">
                                <label>Additional Note</label>
                                <textarea placeholder='Describe your issue' />
                                <span className='words-count'>0/500</span>
                            </div>
                            <div className="option-field">
                                <label>Add Attachment</label>
                                <div className="upload-file">
                                    <label htmlFor="upload">Choose</label>
                                    <p>No file Selected</p>
                                    <input type="file" className='d-none' id='upload' />
                                </div>
                            </div>
                            <button className='btn-save'>Save</button>
                        </div>
                    </Tab>
                    <Tab eventKey="expiredop" title="Reported Bugs">
                        <div className='maincard border-grad1'>
                            <div className="display-none-in-mobile">
                                <div className="maintable table-responsive">
                                    <table class="table table-striped " >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p className='headtable'>Date Submitted</p>
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
                                                    <p className='paratable'>Button Is Not Working</p>
                                                </td>
                                                <td>
                                                    <div className='completebtn'>
                                                        <button className=''>Resolved</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='paratable'>23/05/2023 01:58</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>Button Is Not Working</p>
                                                </td>
                                                <td>
                                                    <div className='completebtn'>
                                                        <button className=''>Resolved</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='paratable'>23/05/2023 01:58</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>Button Is Not Working</p>
                                                </td>
                                                <td>
                                                    <div className='completebtn'>
                                                        <button className=''>Resolved</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='paratable'>23/05/2023 01:58</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>Button Is Not Working</p>
                                                </td>
                                                <td>
                                                    <div className='completebtn'>
                                                        <button className=''>Resolved</button>
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
        </>
    )
}

export default BugReport
