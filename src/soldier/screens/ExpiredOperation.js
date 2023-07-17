import React, { useState } from 'react'
import "./operation.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import moment from 'moment';
import Countdown from 'react-countdown';

const ExpiredOperation = ({ setroute, routes, tasks }) => {
    // const [route, setroute] = useState(false);
    const [data, setData] = useState(null);
    const getdata = (elem) => {
        setroute(!routes)
        setData(elem)
    }

    const Getlength = (task) => {
        const result = task?.length
        return result
    }
    const GetTime = (time) => {
        let endtime = new Date(time)
        return endtime;
    }
    return (
        <>
            {
                routes ?
                <section className="active-operations aa">
                <div className="upper-item">
                    <div className='left'>
                        <h6>operation : {data?.name} <span style={{ color: "#FB2F2F" }}>ENDS IN:<Countdown style={{ color: "#FB2F2F" }} date={GetTime(data?.expirationDate)} /></span></h6>
                        <p>{data?.description}</p>
                    </div>
                    {/* <a href="#">View All Operation Tasks <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a> */}
                </div>
                <div className="bottom-cards">
                    <div className="card-item border-grad">
                        <img src="\static-icons\points.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                        <div className="inner-content">
                            <p>Points</p>
                            <h6>{data?.reward}</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad">
                        <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                        <div className="inner-content">
                            <p>TOMI Tokens</p>
                            <h6>{data?.tomiToken}</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad">
                        <img src="\static-icons\tomitasks.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                        <div className="inner-content">
                            <p>Total Tasks</p>
                            <h6>{Getlength(data?.tasksList)}</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad unique-item">
                        <div className='inner-set'>
                            <img src="\static-icons\rewardnft.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                            <div className="inner-content">
                                <p>Reward NFT</p>
                                <h6>ELN MSK</h6>
                            </div>
                        </div>
                        <div className="nft-img">
                            <img src={data?.imageUrl} alt="img" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className='maincard display-none-in-mobile'>
                    <div className="maintable table-responsive">
                        <table class="table table-striped " >
                            <thead>
                                <tr>
                                    <th>
                                        <p className='headtable'>Task</p>
                                    </th>
                                    {/* <th>
                                        <p className='headtable'>Points</p>
                                    </th> */}
                                    {/* <th>
                                        <p className='headtable'>TOMI Tokens</p>
                                    </th> */}
                                    <th>
                                        <p className='headtable'>Description</p>
                                    </th>
                                    {/* <th>
                                        <p className='headtable'>Progress</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Status</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Action</p>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {data?.tasksList?.map((elem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <p className='paratable'>{elem?.name}</p>
                                            </td>
                                            <td>
                                                <p className='paratable'>{elem?.description}</p>
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
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item >...</Pagination.Item>
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
                                        {/* <tbody> */}
                                        {/* <tr onClick={() => setroute(!routes)}>
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
                                            </tr> */}

                                        <tbody>

                                            {tasks?.length > 0 && tasks?.map((elem, index) => {
                                                const ExpireDate = moment(elem?.expirationDate).format("DD-MM-YYYY");
                                                return (
                                                    <tr key={index} onClick={() => getdata(elem)}>
                                                        <td>
                                                            <p className='paratable'>{elem?.name}</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>{ExpireDate}</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>{elem?.reward} Points</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>{elem?.tomiToken} TOMI</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>{Getlength(elem?.tasksList)}</p>
                                                        </td>
                                                        <td>
                                                            <div className='completebtn text-end'>
                                                                {
                                                                    elem?.taskSubmitted ?
                                                                        <button style={{ background: '#FEC600' }}>In Process</button>
                                                                        : elem?.taskApproval ?
                                                                            <button style={{ background: '#04C453' }}>Completed</button>
                                                                            :
                                                                            <button style={{ background: '#FF8936' }}>Pending</button>
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="\assets\arrow-enter.svg" alt="img" className='img-fluid' />
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        {/* </tbody> */}
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
