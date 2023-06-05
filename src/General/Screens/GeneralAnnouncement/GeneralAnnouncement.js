import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generalannouncement.scss"
const GeneralAnnouncement = () => {
    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>ANNOUNCEMENTS </h6>
                    <p>VIEW AND CREATE ANNOUNCEMENTS FOR YOUR ARMY</p>
                </div>
            </div>
            <section className='main-task'>
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
                                                        <p className='headtable'>Announcement</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>To</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Date Sent</p>
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
                                                        <p className='paratable'>All Soldiers</p>
                                                    </td>
                                                    <td>
                                                        <p className='paratable'>01/01/23</p>
                                                    </td>
                                                    <td>
                                                        <a href="#"><img src="\generalassets\icons\btn-delete.svg" alt="img" className='img-fluid' /></a>
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
        </>
    )
}

export default GeneralAnnouncement