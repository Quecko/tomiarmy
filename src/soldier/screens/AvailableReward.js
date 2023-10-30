import React from 'react'
import "./claim.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import moment from 'moment';

const AvailableReward = ({ transactionHistory }) => {
    return (
        <>
            <section className="availble-reward border-grad1">
                <div className='maincard'>
                    <div className='display-none-in-mobile'>
                        <div className="maintable table-responsive">
                            <table class="table table-striped " >
                                <thead>
                                    <tr>
                                        <th>
                                            <p className='headtable'>Date</p>
                                        </th>
                                        <th>
                                            <p className='headtable'>Amount</p>
                                        </th>
                                        <th>
                                            <p className='headtable'>Status</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionHistory?.transactions?.map((elem, index) => {
                                        let createdate = new Date(elem?.createdAt);
                                        const createDate = moment(createdate).format("DD-MM-YYYY");
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <p className='paratable'>{createDate}</p>
                                                </td>
                                                <td>
                                                    <p className='paratable'>{elem?.amount} TOMI</p>
                                                </td>
                                                <td>
                                                    <div className='parent'>
                                                        {elem?.txStatus == "completed" ?
                                                            <p><img src='\checkmark1.svg' alt='img' className='img-fluid' />Claimed</p>
                                                            : elem?.txStatus == "pending" ?
                                                                <p style={{ color: 'rgb(255, 137, 54)' }}><img src='\clock1111.svg' alt='img' className='img-fluid' />Pending</p>
                                                                : elem?.txStatus == "refund" ?
                                                                    <p style={{ color: '#8147FF' }}><img src='\refund1111.svg' alt='img' className='img-fluid' />Refund</p>
                                                                    :
                                                                    elem?.txStatus == "refund rejected" ?
                                                                    <p  className='askjdasnckjasnckjabc'>Refund Rejected</p>
                                                                    :
                                                                    ''
                                                        }
                                                    </div>
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
                            <p>Date</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                            {transactionHistory?.transactions?.map((elem, index) => {
                                let createdate = new Date(elem?.createdAt);
                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{createDate}</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Amount</h6>
                                                    <p>{elem?.amount} TOMI</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <div className='parent'>
                                                        {elem?.txStatus == "completed" ?
                                                            <p><img src='\checkmark1.svg' alt='img' className='img-fluid' />Claimed</p>
                                                            : elem?.txStatus == "pending" ?
                                                                <p style={{ color: 'rgb(255, 137, 54)' }}><img src='\clock1111.svg' alt='img' className='img-fluid' />Pending</p>
                                                                : elem?.txStatus == "refund" ?
                                                                    <p style={{ color: '#8147FF' }}><img src='\refund1111.svg' alt='img' className='img-fluid' />Refund</p>
                                                                    :
                                                                    elem?.txStatus == "refund rejected" ?
                                                                    <p  className='askjdasnckjasnckjabc'>Refund Rejected</p>
                                                                    :
                                                                    ''
                                                        }
                                                    </div>
                                                </div>
                                                {/* <div className="inner-item">
                                                    <h6>Actions</h6>
                                                    <button className="btn-pink">Initiate Claim</button>
                                                </div> */}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AvailableReward
