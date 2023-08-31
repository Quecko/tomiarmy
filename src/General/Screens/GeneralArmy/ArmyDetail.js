import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import moment from 'moment';

const ArmyDetail = ({ setroutearmy, routesarmy, armyDetail,setArmyDetail }) => {
    

    let createdate = new Date(armyDetail?.last_rank_update?.createdAt);
    const createDate = moment(createdate).format("DD-MM-YYYY");
    let joindate = new Date(armyDetail?.createdAt);
    const joinDate = moment(joindate).format("DD-MM-YYYY");

    const back= ()=>{
        setroutearmy(!routesarmy)
        setArmyDetail([])
    }

    return (
        <>
            {
                !routesarmy ? "" :
                    <>
                        <button onClick={() =>back() } className="btn-goback goback-btn-mbl-block d-none mb-4"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" /><span>Go Back</span></button>
                    </>
            }
            <section className="detail-army">
                <div className="upper-army">
                    <div className="inner-content">
                        <div className="text">
                            <p>Nickname</p>
                            <h6>{armyDetail?.nickName}</h6>
                        </div>
                        <div className="text">
                            <p>Last Rank Update</p>
                            <h6>{armyDetail?.last_rank_update?.createdAt ? createDate : 'Not updated yet'}</h6>
                        </div>
                        <div className="text">
                            <p>Rank</p>
                            <h6>{armyDetail?.rank?.name}</h6>
                        </div>
                        <div className="text">
                            <p>TOMI Balance</p>
                            <h6>{armyDetail?.tomiTokens} TOMI</h6>
                        </div>
                        <div className="text">
                            <p>Total Points</p>
                            <h6>+{armyDetail?.points} Points</h6>
                        </div>
                    </div>
                    <div className="inner-content">
                        <div className="text">
                            <p>Squad</p>
                            <h6>{armyDetail?.squad?.name}</h6>
                        </div>
                        <div className="text">
                            <p>Date Joined</p>
                            <h6>{joinDate ? joinDate : '----'}</h6>
                        </div>
                        {/* <div className="text">
                            <p>Discord Link</p>
                            <h6>Captain</h6>
                        </div> */}
                        {/* <div className="text">
                            <p>Twitter Link</p>
                            <h6>60,000 TOMI</h6>
                        </div> */}
                        <div className="text">
                            <p>Wallet</p>
                            <h6>{armyDetail?.walletAddress}</h6>
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

                                                    </tr>

                                                </tbody>
                                                <tbody>
                                                    {armyDetail?.transactions?.map((elem, index) => {
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
                                                                    {elem?.txStatus == 'completed' ?
                                                                        <p className="status-div green-bg">{elem?.txStatus}</p>
                                                                        :
                                                                        <p className="status-div" style={{ background: '#FF8936' }}>{elem?.txStatus}</p>
                                                                    }
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
                                                <Pagination.Item >{3}</Pagination.Item>
                                                <Pagination.Item>{4}</Pagination.Item>
                                                <Pagination.Item >{5}</Pagination.Item>
                                                <Pagination.Item>{6}</Pagination.Item>
                                            </Pagination>
                                            <p>Next</p>
                                        </div>
                                    </div> */}
                                    </div>
                                    <div className="mobile-responsive-table d-none display-block-in-mobile">
                                        <div className="heading-mobile">
                                            <p>Date/Time</p>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            {armyDetail?.transactions?.map((elem, index) => {
                                                let createdate = new Date(elem?.createdAt);
                                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                                return (
                                                    <Accordion.Item eventKey={index}>
                                                        <Accordion.Header>{createDate}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="inner-fields">
                                                                <div className="inner-item">
                                                                    <h6>Total Reward</h6>
                                                                    <p>{elem?.amount} TOMI</p>
                                                                </div>
                                                                <div className="inner-item">
                                                                    <h6>Status</h6>
                                                                    {elem?.txStatus == 'completed' ?
                                                                        <button className="btn-green">{elem?.txStatus}</button>
                                                                        :
                                                                        <button className="" style={{ background: '#FF8936' }}>{elem?.txStatus}</button>
                                                                    }

                                                                </div>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )
                                            })}
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
