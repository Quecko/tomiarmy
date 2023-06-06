import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';

const ArmyDetail = () => {
    return (
        <>
            <section className="detail-army">
                <div className="upper-army">
                    <div className="inner-content">
                        <div className="text">
                            <p>Nickname</p>
                            <h6>Umar_x2jz</h6>
                        </div>
                        <div className="text">
                            <p>Last Rank Update</p>
                            <h6>15/05/2023</h6>
                        </div>
                        <div className="text">
                            <p>Rank</p>
                            <h6>Captain</h6>
                        </div>
                        <div className="text">
                            <p>TOMI Balance</p>
                            <h6>60,000 TOMI</h6>
                        </div>
                        <div className="text">
                            <p>Total Points</p>
                            <h6>+500,000 Points</h6>
                        </div>
                    </div>
                    <div className="inner-content">
                        <div className="text">
                            <p>Squad</p>
                            <h6>DC Squad</h6>
                        </div>
                        <div className="text">
                            <p>Date Joined</p>
                            <h6>15/05/2023</h6>
                        </div>
                        <div className="text">
                            <p>Discord Link</p>
                            <h6>Captain</h6>
                        </div>
                        <div className="text">
                            <p>Twitter Link</p>
                            <h6>60,000 TOMI</h6>
                        </div>
                        <div className="text">
                            <p>Wallet</p>
                            <h6>0x1B26AE67D84CD1CC33B30B63B2ECFF754D25DACB</h6>
                        </div>
                    </div>
                </div>
                <div className="main-heading">
                    <h6>CLAIM History</h6>
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
                                                        <p className='headtable'>Date/Time</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Total Reward</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Status</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className='paratable'>23/05/2023 12:41</p>
                                                    </td>
                                                    <td>
                                                        <p className='paratable'>500 TOMI</p>
                                                    </td>
                                                   <td> 
                                                        <p className="status-div green-bg">Claimed</p>
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
            </section>
        </>
    )
}

export default ArmyDetail
