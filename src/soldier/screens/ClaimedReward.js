import React from 'react'
import "./claim.scss"
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';

const ClaimedReward = () => {
    return (
        <>
            <section className="availble-reward border-grad1">
                <div className='maincard'>
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
                                        <p className='headtable'>Actions</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                    <button className='btn-claim'>Initiate Claim</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                        <button className='btn-processing'> <img src="\assets\claimed-cicon.svg" alt="img" className='img-fluid' />
                                            Claimed</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                    <button className='btn-claim'>Initiate Claim</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                        <button className='btn-processing'> <img src="\assets\claimed-cicon.svg" alt="img" className='img-fluid' />
                                            Claimed</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                    <button className='btn-claim'>Initiate Claim</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                        <button className='btn-processing'> <img src="\assets\claimed-cicon.svg" alt="img" className='img-fluid' />
                                            Claimed</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>24/03/2023</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>50,000 TOMI</p>
                                    </td>
                                    <td>
                                    <button className='btn-claim'>Initiate Claim</button>
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
            </section>
        </>
    )
}

export default ClaimedReward
