import React, { useState } from 'react'
import "./operation.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

const ExpiredOperation = ({ setroute, routes }) => {
    // const [route, setroute] = useState(false);

    return (
        <>
            {
                routes ?
                    <section className="active-operations">
                        <div className="upper-item">
                            <div className='left'>
                                <h6>operation : ELON MUSK <span style={{ color: "#FB2F2F" }}>ENDed oN: 23/12/23</span></h6>
                                <p>make elon musk tweet about tomi</p>
                            </div>

                        </div>
                        <div className="bottom-cards">
                            <div className="card-item border-grad">
                                <img src="\assets\points.svg" alt="img" className='img-fluid' />
                                <div className="inner-content">
                                    <p>Points</p>
                                    <h6>150,000</h6>
                                </div>
                            </div>
                            <div className="card-item border-grad">
                                <img src="\assets\tomitokens.svg" alt="img" className='img-fluid' />
                                <div className="inner-content">
                                    <p>TOMI Tokens</p>
                                    <h6>100,000</h6>
                                </div>
                            </div>
                            <div className="card-item border-grad">
                                <img src="\assets\totaltasks.svg" alt="img" className='img-fluid' />
                                <div className="inner-content">
                                    <p>Total Tasks</p>
                                    <h6>55</h6>
                                </div>
                            </div>
                            <div className="card-item border-grad unique-item">
                                <div className='inner-set'>
                                    <img src="\assets\rewardnft.svg" alt="img" className='img-fluid' />
                                    <div className="inner-content">
                                        <p>Reward NFT</p>
                                        <h6>ELN MSK #41234</h6>
                                    </div>
                                </div>
                                <div className="nft-img">
                                    <img src="\assets\nft.svg" alt="img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='maincard'>
                            <div className="maintable table-responsive">
                                <table class="table table-striped " >
                                    <thead>
                                        <tr>
                                            <th>
                                                <p className='headtable'>Task Title</p>
                                            </th>
                                            <th>
                                                <p className='headtable'>Task Description</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter Account....</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter AcRetweet the following tweet...</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter Account....</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter AcRetweet the following tweet...</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter Account....</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter AcRetweet the following tweet...</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter Account....</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter AcRetweet the following tweet...</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter Account....</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='paratable'>Follow this Twitter AcRetweet the following tweet...</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
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
                                        <Pagination.Item >...</Pagination.Item>
                                        <Pagination.Item>{6}</Pagination.Item>
                                    </Pagination>
                                    <p>Next</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    : <section className="active-operations">
                        <div className='maincard'>
                            <div className='display-none-in-mobile'>
                                <div className="maintable table-responsive">
                                    <table class="table table-striped " >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p className='headtable'>Operation Name</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Date Expired</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Points</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Tomi Tokens</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Total Tasks</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Status</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Details</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr onClick={() => setroute(!routes)}>
                                                <td>
                                                    <p className='paratable'>Ilong MAA</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>01/01/22</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>+5 Points</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>100 TOMI</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>25</p>
                                                </td>
                                                <td>
                                                    <div className='completebtn'>
                                                        <button className=''>Completed</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="\assets\arrow-enter.svg" alt="img" className='img-fluid' />
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
                                            <Pagination.Item >...</Pagination.Item>
                                            <Pagination.Item>{6}</Pagination.Item>
                                        </Pagination>
                                        <p>Next</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                <div className="heading-mobile">
                                    <p>Operation Name</p>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Ilong MAA</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Date Expired</h6>
                                                    <p>01/01/22</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Points</h6>
                                                    <p>+5</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Tomi Tokens</h6>
                                                    <p>100 TOMI</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Total Tasks</h6>
                                                    <p>25</p>
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
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Ilong MAA</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Date Expired</h6>
                                                    <p>01/01/22</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Points</h6>
                                                    <p>+5</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Tomi Tokens</h6>
                                                    <p>100 TOMI</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Total Tasks</h6>
                                                    <p>25</p>
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
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Ilong MAA</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Date Expired</h6>
                                                    <p>01/01/22</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Points</h6>
                                                    <p>+5</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Tomi Tokens</h6>
                                                    <p>100 TOMI</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Total Tasks</h6>
                                                    <p>25</p>
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
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Ilong MAA</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Date Expired</h6>
                                                    <p>01/01/22</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Points</h6>
                                                    <p>+5</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Tomi Tokens</h6>
                                                    <p>100 TOMI</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Total Tasks</h6>
                                                    <p>25</p>
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
                    </section>
            }


        </>
    )
}

export default ExpiredOperation
