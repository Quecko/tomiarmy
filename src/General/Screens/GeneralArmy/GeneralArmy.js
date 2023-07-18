import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generalarmy.scss"
import ArmyDetail from './ArmyDetail';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from 'axios';

const GeneralArmy = ({ routesarmy, setroutearmy }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [data3, setData3] = useState(null);
    const handleShow = (elem) => {
        setData3(elem);
        setShow(true);
    }

    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);
    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);
    const [data2, setData2] = useState([]);
    const { account } = useWeb3React();

    const GeneralApproval = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        let wall = localStorage.getItem("wallet");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/tasks/pending-ranks-update?offset=1&&limit=5`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    // setLoader(false);
                    // setCount2(response.data.data.count)
                    setData2(response?.data?.data?.pendingRanksUpdate);
                    // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                    // setPages2(arr);
                    // setCurrentPage2(valu)
                })
                .catch(function (error) {
                    // setLoader(false);
                    // localStorage.removeItem("accessToken");
                    // localStorage.removeItem("user");
                    // window.location.assign("/")
                    // window.location.reload();
                });
        }
    }

    useEffect(() => {
        // if (currentPage > 1) {
        //     getData(currentPage);
        // } else {
        GeneralApproval();
        // }
    }, [account])

    const RejectAccept = (item, bool) => {
        // setLoader(true);
        let tok = localStorage.getItem("accessToken");
        var data = ({
            status: bool
        });
        var config = {
            method: "patch",
            url: `${API_URL}/tasks/pending-ranks-update/${item._id}/status`,
            headers: {
                authorization: `Bearer ` + tok
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                GeneralApproval();
                handleClose();
                if (bool === "approve") {
                    handleShowapprove();
                    toast
                        .success("Request Approved Successfully!", {
                            position: "top-right",
                            autoClose: 3000,
                        })
                    // history.push("/general")
                } else {
                    handleShowreject();
                    toast
                        .error("Request Reject Successfully!", {
                            position: "top-right",
                            autoClose: 3000,
                        })
                }
            })
            .catch(function (error) {
                // setLoader(false);
                toast.error(error.response.data.message);
            });
    }

    return (
        <>
            {
                routesarmy ?
                    <>
                        <ArmyDetail setroutearmy={setroutearmy} routesarmy={routesarmy} />
                    </>
                    :
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
                                                    {/* <div className="parent-field">
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
                                                    </div> */}
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
                                                                        {
                                                                            data2?.map((elem, ind) => {
                                                                                return (
                                                                                    <tr key={ind} >
                                                                                        <td>
                                                                                            <p className='paratable'>{elem?.walletAddress}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p className='paratable'>{elem?.nickName}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p className='paratable'>{elem?.from}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p className='paratable'>{elem?.to}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <div className='dropbtn global-dropdown-style'>
                                                                                                <Dropdown>
                                                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                                                    </Dropdown.Toggle>

                                                                                                    <Dropdown.Menu>
                                                                                                        <Dropdown.Item href="#/action-1">
                                                                                                            <p onClick={() => handleShow(elem)} ><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Promote</p>
                                                                                                            <p onClick={() => { setroutearmy(!routesarmy) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                        </Dropdown.Item>
                                                                                                    </Dropdown.Menu>
                                                                                                </Dropdown>
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
                                                                <p>Wallet</p>
                                                            </div>
                                                            <Accordion defaultActiveKey="0">
                                                                {data2?.map((elem, ind) => {
                                                                    return (
                                                                        <Accordion.Item eventKey={ind}>
                                                                            <Accordion.Header>{elem?.walletAddress}</Accordion.Header>
                                                                            <Accordion.Body>
                                                                                <div className="inner-fields">
                                                                                    <div className="inner-item">
                                                                                        <h6>Nickname</h6>
                                                                                        <p>{elem?.nickName}</p>
                                                                                    </div>
                                                                                    <div className="inner-item">
                                                                                        <h6>From</h6>
                                                                                        <p>{elem?.from}</p>
                                                                                    </div>
                                                                                    <div className="inner-item">
                                                                                        <h6>To</h6>
                                                                                        <p>{elem?.to}</p>
                                                                                    </div>
                                                                                    <div className="inner-item">
                                                                                        <h6>Actions</h6>
                                                                                        <div className='dropbtn global-dropdown-style'>
                                                                                            <Dropdown>
                                                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                                                </Dropdown.Toggle>

                                                                                                <Dropdown.Menu>
                                                                                                    <Dropdown.Item href="#/action-1">
                                                                                                        <p onClick={() => handleShow(elem)} ><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Promote</p>
                                                                                                        <p onClick={() => { setroutearmy(!routesarmy) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                    </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                            </Dropdown>
                                                                                        </div>
                                                                                        {/* <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a> */}
                                                                                    </div>
                                                                                </div>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    )
                                                                })}
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

                        <Modal className='promote-modal global-modal-style' show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>RANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="inner-div">
                                    <h6 className='inner-head'>Are you sure you want to promote this user?</h6>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>Wallet</p>
                                            <h6>{data3?.walletAddress}</h6>
                                        </div>
                                        <div className="text">
                                            <p>Nickname</p>
                                            <h6>{data3?.nickName}</h6>
                                        </div>
                                        <div className="text">
                                            <p>From</p>
                                            <h6>{data3?.from}</h6>
                                        </div>
                                        <div className="text">
                                            <p>To</p>
                                            <h6>{data3?.to}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="btnss">
                                    <button onClick={() => RejectAccept(data3, "reject")} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                                    <button onClick={() => RejectAccept(data3, "approve")} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Promote</button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal className="createdsuccess-modal global-modal-style powmodal" show={showapprove} onHide={handleCloseapprove} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>RANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="approvemain">
                                    <img src="\generalassets\other-imgs\approveimg.png" alt="approveimg" className="approveimg img-fluid" />
                                    <p className="approvetext">rank promotion approved</p>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal className="createdsuccess-modal global-modal-style powmodal" show={showreject} onHide={handleClosereject} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>pRANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="approvemain">
                                    <img src="\generalassets\other-imgs\rejectimg.png" alt="approveimg" className="approveimg img-fluid" />
                                    <p className="approvetext">rank promotion rejected</p>
                                </div>
                            </Modal.Body>
                        </Modal>

                    </>
            }

        </>
    )
}

export default GeneralArmy