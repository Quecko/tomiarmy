import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generalarmy.scss"
const GeneralArmy = () => {
    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Army  </h6>
                    <p>view your army</p>
                </div>
            </div>
            <section className='main-task general-army'>
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
                                    <Tab eventKey="home" title="Rank Approvals">
                                        <div className="parent-field">
                                            <div className="option-field option-field1">
                                                <input type="text" placeholder='Search' />
                                                <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' />
                                            </div>
                                            <div className="option-field option-field2">
                                                <input type="text" placeholder='Wallet Address' />
                                            </div>
                                            <div className="option-field option-field3">
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Filter Ranks
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Private</a></li>
                                                        <li><a class="dropdown-item" href="#">Sergeant</a></li>
                                                        <li><a class="dropdown-item" href="#">Lieutenant</a></li>
                                                        <li><a class="dropdown-item" href="#">Captain</a></li>
                                                        <li><a class="dropdown-item" href="#">Major</a></li>
                                                        <li><a class="dropdown-item" href="#">Major General</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='maincard'>
                                            <div className='display-none-in-mobile'>
                                                <div className="maintable">
                                                    <table class="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <p className='headtable'>Wallet</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Nickname</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>From</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>To</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Actions</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p className='paratable'>0x0F4D...B5D8</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>Umar_x2jz</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>Soldier</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>Soldier</p>
                                                                </td>
                                                                <td>
                                                                    <div className='dropbtn'>
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                            </Dropdown.Toggle>

                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#/action-1">
                                                                                    <p><img src='\Vector.svg' alt='img' className='img-fluid' />Promote</p>
                                                                                    <p><img src='\Vector.svg' alt='img' className='img-fluid' />Reject</p>
                                                                                    <p><img src='\Vector.svg' alt='img' className='img-fluid' />Details</p>
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

export default GeneralArmy