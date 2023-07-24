import React, { useState, useEffect } from 'react';
import "../../../soldier/screens/bugreport.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useWeb3React } from "@web3-react/core";
import "./generalreport.scss"
import moment from 'moment';
const GeneralReport = () => {
    const [show, setShow] = useState(false);
    const [data, setdata] = useState(null);
    const [date, setdate] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (elem) => {
        setShow(true)
        let createdate = new Date(elem?.createdAt);
        const createDate = moment(createdate).format("DD-MM-YYYY HH:MM");
        setdate(createDate)
        setdata(elem)
    };
    const [expired, setexpired] = useState("Pending");
    const [bugs, setbugs] = useState([]);
    const { account } = useWeb3React();


    const settabss = (event) => {
        if (event === 'activeop') {
            setexpired("Pending")
        }
        else if (event === 'expiredop') {
            setexpired("Resolved")
        }
    }

    const getDataannou = async (off, dsfdsgds) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        // let wall = localStorage.getItem("wallet");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/content/bug-reports/get-bugs-report-list?offset=1&&limit=100&&status=${expired}`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    // setLoader(false);
                    // setCount(response.data.data.count)
                    setbugs(response?.data?.data?.bugReports);
                    // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                    // setPages(arr);
                    // setCurrentPage(valu)
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
        getDataannou();
        // }
    }, [account, expired])

    const resolvebug = (elem) => {
        let tok = localStorage.getItem("accessToken");
        var data = "null";
        data = ({
            status: "Resolved"
        });
        var config = {
            method: "patch",
            url: `${API_URL}/content/bug-reports/${elem?._id}`,
            headers: {
                authorization: `Bearer ` + tok
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                getDataannou();
                // setLoader(false);
                toast.success('Bug Report resolved Successfully', {
                    position: "top-right",
                    autoClose: 2000,
                });
            })
            .catch(function (error) {
                // setLoader(false);
            });
    }


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
                    onSelect={settabss}
                >
                    <Tab eventKey="activeop" title="Pending">
                        <section className='main-task general-army'>
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
                                                                    <p className='headtable'>Date received</p>
                                                                </th>
                                                                {/* <th>
                                                                    <p className='headtable'>Reported by</p>
                                                                </th> */}
                                                                <th>
                                                                    <p className='headtable'>Issues</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Status</p>
                                                                </th>
                                                                <th>
                                                                    <p className='headtable'>Status</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {bugs && bugs?.map((elem, index) => {
                                                                let createdate = new Date(elem?.createdAt);
                                                                const createDate = moment(createdate).format("DD-MM-YYYY HH:MM");
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <p className='paratable'>{createDate}</p>
                                                                        </td>
                                                                        {/* <td>
                                                                            <p className='paratable'>Umar_x2jz</p>
                                                                        </td> */}
                                                                        <td>
                                                                            <p className='paratable'>{elem?.issue}</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className={elem?.status === 'Pending' ? 'status-div pending-bg' : 'status-div reolved-bg'}>{elem?.status}</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className='dropbtn global-dropdown-style'>
                                                                                <Dropdown>
                                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item href="#/action-1">
                                                                                            <p onClick={() => resolvebug(elem)}><img src='\generalassets\icons\checkmark.svg' alt='img' className='img-fluid' />Resolved</p>
                                                                                            <p onClick={() => handleShow(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                        </Dropdown.Item>
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }
                                                            )}
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
                                                    <p>Date received</p>
                                                </div>
                                                <Accordion defaultActiveKey="0">
                                                    {bugs && bugs?.map((elem, index) => {
                                                        let createdate = new Date(elem?.createdAt);
                                                        const createDate = moment(createdate).format("DD-MM-YYYY HH:MM");
                                                        return (
                                                            <Accordion.Item eventKey={index}>
                                                                <Accordion.Header>{createDate}</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="inner-fields">
                                                                        <div className="inner-item">
                                                                            <h6>Issues</h6>
                                                                            <p>{elem?.issue}</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Status</h6>
                                                                            <p className={elem?.status === 'Pending' ? 'status-div pending-bg' : 'status-div reolved-bg'}>{elem?.status}</p>
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
                                                                                            <p onClick={() => resolvebug(elem)}><img src='\generalassets\icons\checkmark.svg' alt='img' className='img-fluid' />Resolved</p>
                                                                                            <p onClick={() => handleShow(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
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
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Tab>
                    <Tab eventKey="expiredop" title="Resolved">
                        <div className='maincard border-grad1'>
                            <div className="display-none-in-mobile">
                                <div className="maintable table-responsive">
                                    <table class="table table-striped " >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p className='headtable'>Date received</p>
                                                </th>
                                                {/* <th>
                                                    <p className='headtable'>Reported by</p>
                                                </th> */}
                                                <th>
                                                    <p className='headtable'>Issues</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Status</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bugs && bugs?.map((elem, index) => {
                                                let createdate = new Date(elem?.createdAt);
                                                const createDate = moment(createdate).format("DD-MM-YYYY HH:MM");
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <p className='paratable'>{createDate}</p>
                                                        </td>
                                                        {/* <td>
                                                                            <p className='paratable'>Umar_x2jz</p>
                                                                        </td> */}
                                                        <td>
                                                            <p className='paratable'>{elem?.issue}</p>
                                                        </td>
                                                        <td>
                                                            <p className={elem?.status === 'Pending' ? 'status-div pending-bg' : 'status-div reolved-bg'}>{elem?.status}</p>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )
                                            }
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
                                    <p>Date received</p>
                                </div>
                                <Accordion >
                                    {bugs && bugs?.map((elem, index) => {
                                        let createdate = new Date(elem?.createdAt);
                                        const createDate = moment(createdate).format("DD-MM-YYYY HH:MM");
                                        return (
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>{createDate}</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="inner-fields">
                                                        <div className="inner-item">
                                                            <h6>Issues</h6>
                                                            <p>{elem?.issue}</p>
                                                        </div>
                                                        <div className="inner-item">
                                                            <h6>Status</h6>
                                                            <p className={elem?.status === 'Pending' ? 'status-div pending-bg' : 'status-div reolved-bg'}>{elem?.status}</p>
                                                            {/* <button className="btn-green">Resolved</button> */}
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
            </section>

            <Modal className='bugdetail-modal global-modal-style' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>bug details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="parent">
                        <div className="left">
                            <div className="text">
                                <p>Issue</p>
                                <h6>{data?.issue}</h6>
                            </div>
                            <div className="text">
                                <p>Additional Note</p>
                                <h6>{data?.description}</h6>
                            </div>
                            <div className="twice-text">
                                <div className="text">
                                    <p>Reported by</p>
                                    <h6>Umar_x2jz</h6>
                                </div>
                                <div className="text">
                                    <p>Date received</p>
                                    <h6>{date}</h6>
                                </div>
                            </div>
                            <div className="text">
                                <p>Status</p>
                                <p className='status-div pending-bg'>{data?.status}</p>
                            </div>
                        </div>
                        <div className="right">
                            <h6 className="main-head">Attachment</h6>
                            <div className="upload">
                                <img src={data?.imageUrl} alt="img" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default GeneralReport
