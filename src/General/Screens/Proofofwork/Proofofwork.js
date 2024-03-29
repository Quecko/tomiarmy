import React, { useState, useEffect } from 'react'
import { Accordion, Dropdown, Modal, Pagination, Tab, Table, Tabs } from 'react-bootstrap'
import dosts from "../../../assets/icons/dots.svg";
import submitIcon from "../../../assets/icons/submitIcon.svg";
import './proofofwork.scss'
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from 'axios';
import Loader from '../../../hooks/loader'

const Proofofwork = () => {
    let tok = localStorage.getItem("accessToken");
    const [showwork, setShowwork] = useState(false);
    const [showwork1, setShowwork1] = useState(false);
    const [singledetail, setsingledetail] = useState(null)
    const [imagedetail, setimagedetail] = useState(null)
    const handleClosework = () => setShowwork(false);
    const handleClosework1 = () => setShowwork1(false);
    const [loader, setLoader] = useState(false);
    const handleShowwork = (elem) => {
        setsingledetail(elem)
        setShowwork(true);
    }
    const [operationList, setOperationList] = useState([])

    const handleShowwork1 = (elem) => {
        setsingledetail(elem)
        setShowwork1(true);
    }
    const { account } = useWeb3React();
    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);
    const [showapprove1, setShowapprove1] = useState(false);
    const handleCloseapprove1 = () => setShowapprove1(false);
    const handleShowapprove1 = () => setShowapprove1(true);


    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);
    const [showreject1, setShowreject1] = useState(false);
    const handleClosereject1 = () => setShowreject1(false);
    const handleShowreject1 = () => setShowreject1(true);

    const [expired, setexpired] = useState(false);
    const [tasks, settasks] = useState([]);
    const [taskdetail, settaskdetail] = useState(null);

    const [taskss, settaskss] = useState(null);

    const settabss = (event) => {
        if (event === 'home') {
            setexpired(false)
        }
        else if (event === 'profile') {
            setexpired(true)
        }
    }



    useEffect(() => {
        // if (currentPage > 1) {
        //     getData(currentPage);
        // } else {
        if (taskss != null) {
            allworkproofs();
        }
        // }
    }, [account, taskss])

    const getData = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        var config = {
            method: "get",
            url: `${API_URL}/tasks/work-proofs?offset=1&&limit=100`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                // setCount(response.data.data.count)
                settasks(response?.data?.data?.workProof);
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

    const getDataoperation = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        var config = {
            method: "get",
            url: `${API_URL}/tasks/operations?offset=1&&limit=100&&expired=false`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                // setCount(response.data.data.count)
                allworkproofs(response?.data?.data?.operation[0]?._id)
                // settaskss(response?.data?.data?.operation[0]?._id);
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

    const allworkproofs = async (id) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }

        var config = {
            method: "get",
            url: `${API_URL}/tasks/operations/work-proof?offset=1&limit=100&operationId=${id}`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                settasks(response?.data?.data?.workProof);
                // setLoader(false);
                // setCount(response.data.data.count)
                // settaskss(response?.data?.data?.operation[0]?._id);
                // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                // setPages(arr);
                // setCurrentPage(valu)
            })
            .catch(function (error) {
                toast.warning(
                    "Error",
                    {
                        position: "top-right",
                        autoClose: 3000,
                    }
                );
                settaskss(null)
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });

    }

    const toastsend = () =>{
        toast.warning(
            "This WorkProof is Already Approved",
            {
                position: "top-right",
                autoClose: 3000,
            }
        );
    }

    const Acceptreject = async (singledetail, approvedcheck) => {
        // setOpens(true);
        setLoader(true)
        axios
            .patch(
                API_URL + "/tasks/work-proofs/" +
                singledetail?._id,
                {
                    isApproved: approvedcheck
                },
                { headers: { authorization: `Bearer ${tok}` } }
            )
            .then((response) => {
                if (response.data.data.isApproved == true) {
                    handleClosework();
                    // handleShowapprove1();
                    toast.success(
                        "Task proof of work approved",
                        {
                            position: "top-right",
                            autoClose: 3000,
                        }
                    );
                    setLoader(false)
                } else {
                    handleClosework();
                    toast.error(
                        "Task proof of work rejected",
                        {
                            position: "top-right",
                            autoClose: 3000,
                        }
                    );
                    // handleShowreject1();
                    setLoader(false)
                }
                getData()
                    // setCall(!call)
                    // window.location.reload()
                    // window.$('#powork').modal('hide')
                    .catch((err) => {
                        // setOpens(false);
                        setLoader(false)
                        toast.warning(
                            "Error",
                            {
                                position: "top-right",
                                autoClose: 3000,
                            }
                        );
                        return false;
                    });
            });
    }
    const Acceptrejectoperation = async (operationList, singledetail, approvedcheck) => {
        // setOpens(true);
        setLoader(true)
        axios
            .patch(
                API_URL + "/tasks/operations/" + operationList?.operationId?._id + "/work-proof/" +
                operationList?._id,
                {
                    isApproved: approvedcheck,
                    taskId: singledetail?._id,
                },
                { headers: { authorization: `Bearer ${tok}` } }
            )
            .then((response) => {
                if (approvedcheck == 'true') {
                    handleClosework1();
                    toast.success(
                        " operation proof of work approved",
                        {
                            position: "top-right",
                            autoClose: 3000,
                        }
                    );
                   
                    handleShowapprove();
                    // allworkproofs();
                    GetDataOfOperation(operationList);
                    setLoader(false)
                } else {
                    handleClosework1();
                    toast.error(
                        " operation proof of work rejected",
                        {
                            position: "top-right",
                            autoClose: 3000,
                        }
                    );
                    // handleShowreject();
                    // allworkproofs();
                    GetDataOfOperation(operationList);
                    setLoader(false)
                }
                getData()
                setLoader(false)
                settaskdetail()
                    // setCall(!call)
                    // window.location.reload()
                    // window.$('#powork').modal('hide')
                    .catch((err) => {
                        // setOpens(false);
                        setLoader(false)
                        toast.warning(
                            "Error",
                            {
                                position: "top-right",
                                autoClose: 3000,
                            }
                        );
                        return false;
                    });
            });
    }

    const closebuttonback = () => {
        setOperationList()
    }

    const [imageModal, setImageModal] = useState(false)
    const handleImageClose = () => setImageModal(false);
    const ImageDetails = (elem) => {
        setImageModal(true)
        setimagedetail(elem)
    }

    var result = singledetail?.url?.split("_")?.pop();


    const GetDataOfOperation = (elem) => {
        // setLoader(true);
        var config = {
            method: "get",
            url: `${API_URL}/tasks/operations/${elem?.operation?._id ? elem?.operation?._id : elem?.operationId?._id}/work-proof/${elem?._id}`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };

        axios(config)
            .then(function (response) {
                setOperationList(response?.data?.data)

                // setLoader(false);
            })
            .catch(function (error) {
                // setLoader(false);
            });
    }
    useEffect(() => {
        // if (currentPage > 1) {
        //     getData(currentPage);
        // } else {
        if (expired === false) {
            getData();
        }
        else {
            getDataoperation();
        }
        // }
    }, [account, expired])
    return (
        <>
            {loader && <Loader />}
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Proof of Work  </h6>
                    <p>approve and reject TASKS pow of army</p>
                </div>
            </div>
            <section className='main-task mainpow'>
                <div className='container-fluid padd-sm p-0'>
                    <div className='row'>
                        <div className='col-sm-12 padd-sm p-0'>
                            <div className='my-tabs'>
                                <Tabs
                                    defaultActiveKey="home"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3"
                                    onSelect={settabss}
                                >
                                    <Tab eventKey="home" title="Tasks Proof of Work">
                                        <div className="col-xl-12 col-12 pe-0 padd-sm">
                                            <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                                                <div className="maincard-global">
                                                    <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Tasks</th>
                                                                <th>Points</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {tasks?.map((elem, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{elem?.user?.nickName}</td>
                                                                        <td>{elem?.task?.name?.slice(0, 40) + "..."}</td>
                                                                        <td>{elem?.task?.reward}</td>
                                                                        {/* <td>
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
                                                                        </td> */}
                                                                        <td>
                                                                            <div style={{ maxWidth: '83px', width: '100%' }} className="pending">Pending</div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="tbl-dropdown">
                                                                                <Dropdown>
                                                                                    <Dropdown.Toggle id="dropdown-basic">
                                                                                        <img src={dosts} alt="dosts" />
                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu className="stats-dropdown-menu">
                                                                                        <div className="stats-dropdown-bg">
                                                                                            <Dropdown.Item onClick={() => { handleShowwork(elem) }}>
                                                                                                <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                Details
                                                                                            </Dropdown.Item>
                                                                                            {/* <Dropdown.Item onClick={handleShowapprove}>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item onClick={handleShowreject}>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item> */}
                                                                                        </div>
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                    {/* <div className="pagi display-none-in-mobile">
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
                                                    <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                        <div className="heading-mobile">
                                                            <p>User</p>
                                                        </div>
                                                        <Accordion>
                                                            {tasks?.map((elem, index) => {
                                                                return (
                                                                    <Accordion.Item eventKey={index}>
                                                                        <Accordion.Header>{elem?.user?.nickName}</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <div className="inner-fields">
                                                                                <div className="inner-item">
                                                                                    <h6>Tasks</h6>
                                                                                    <p>{elem?.task?.name?.slice(0, 40) + "..."}</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Points</h6>
                                                                                    <p>{elem?.task?.reward}</p>
                                                                                </div>
                                                                                {/* <div className="inner-item">
                                                                                <h6>Status</h6>
                                                                                <button className="btn-green">Completed</button>
                                                                            </div> */}
                                                                                <div className="inner-item">
                                                                                    <h6>Actions</h6>
                                                                                    <div className="tbl-dropdown">
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                                                <img src={dosts} alt="dosts" />
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu className="stats-dropdown-menu">
                                                                                                <div className="stats-dropdown-bg">
                                                                                                    <Dropdown.Item onClick={() => { handleShowwork(elem) }}>
                                                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                        Details
                                                                                                    </Dropdown.Item>
                                                                                                    {/* <Dropdown.Item onClick={handleShowapprove}>
                                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                        Approve
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item onClick={handleShowreject}>
                                                                                        <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                                                        Reject
                                                                                    </Dropdown.Item> */}
                                                                                                </div>
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
                                    </Tab>
                                    <Tab eventKey="profile" title="Operations Proof of Work">
                                        {operationList?.taskProofs?.length > 0 ?

                                            (
                                                <div className="col-xl-12 col-12 pe-0 padd-sm">
                                                    <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                                                        <div className="maincard-global">
                                                            <button onClick={closebuttonback} className='asdasdasdasd'>Back</button>

                                                            <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                                                <thead>
                                                                    <tr>
                                                                        <th>User</th>
                                                                        <th>Tasks</th>
                                                                        {/* <th>Points</th> */}
                                                                        <th>Status</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {operationList && operationList?.taskProofs?.map((elem, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>{operationList?.userId?.nickName}</td>
                                                                                <td>{elem?.name}</td>
                                                                                {/* <td>1,000,000</td> */}
                                                                                {elem?.isApproved === true ? <td>
                                                                                    <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Completed</div>
                                                                                </td> : <td>
                                                                                    <div style={{ maxWidth: '83px', width: '100%', background: 'rgb(255, 137, 54)' }} className="completed">Pending</div>
                                                                                </td>}
                                                                                <td>
                                                                                    <div className="tbl-dropdown">
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                                                <img src={dosts} alt="dosts" />
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu className="stats-dropdown-menu">
                                                                                                <div className="stats-dropdown-bg">
                                                                                                {elem?.isApproved === true ?
                                                                                                (
                                                                                                    <Dropdown.Item onClick={() => { toastsend() }}>
                                                                                                    <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                    Details
                                                                                                </Dropdown.Item>
                                                                                                )
                                                                                                :
                                                                                                (
                                                                                                    <Dropdown.Item onClick={() => { handleShowwork1(elem) }}>
                                                                                                    <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                    Details
                                                                                                </Dropdown.Item>
                                                                                                )
                                                                    }
                                                                                                   
                                                                                                </div>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </tbody>
                                                            </Table>
                                                            {/* <div className="pagi display-none-in-mobile">
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
                                                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                                <div className="heading-mobile">
                                                                    <p>User</p>
                                                                </div>

                                                                <Accordion >
                                                                    {operationList && operationList?.taskProofs?.map((elem, index) => {
                                                                        return (
                                                                            <Accordion.Item eventKey={index}>
                                                                                <Accordion.Header>{operationList?.userId?.nickName}</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                    <div className="inner-fields">
                                                                                        <div className="inner-item">
                                                                                            <h6>Tasks</h6>
                                                                                            <p>{elem?.name}</p>
                                                                                        </div>
                                                                                        {/* <div className="inner-item">
            <h6>Points</h6>
            <p>1,000,000</p>
        </div> */}
                                                                                        <div className="inner-item">
                                                                                            <h6>Status</h6>
                                                                                            {elem?.isApproved === true ?
                                                                                                <button className="btn-green">Completed</button>
                                                                                                :
                                                                                                <button style={{ background: 'rgb(255, 137, 54)' }} className="btn-green">Completed</button>
                                                                                            }
                                                                                        </div>
                                                                                        <div className="inner-item">
                                                                                            <h6>Actions</h6>
                                                                                            <div className="tbl-dropdown">
                                                                                                <Dropdown>
                                                                                                    <Dropdown.Toggle id="dropdown-basic">
                                                                                                        <img src={dosts} alt="dosts" />
                                                                                                    </Dropdown.Toggle>

                                                                                                    <Dropdown.Menu className="stats-dropdown-menu">
                                                                                                        <div className="stats-dropdown-bg">
                                                                                                        {elem?.isApproved === true ?
                                                                                                (
                                                                                                    <Dropdown.Item onClick={() => { toastsend() }}>
                                                                                                    <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                    Details
                                                                                                </Dropdown.Item>
                                                                                                )
                                                                                                :
                                                                                                (
                                                                                                    <Dropdown.Item onClick={() => { handleShowwork1(elem) }}>
                                                                                                    <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                                    Details
                                                                                                </Dropdown.Item>
                                                                                                )
                                                                    }
                                                                                                        </div>
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
                                            )
                                            :
                                            (
                                                <div className="col-xl-12 col-12 pe-0 padd-sm">
                                                    <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                                                        <div className="maincard-global">
                                                            <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                                                <thead>
                                                                    <tr>
                                                                        <th>User</th>
                                                                        <th>Tasks</th>
                                                                        <th>Points</th>
                                                                        {/* <th>Status</th> */}
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {tasks && tasks?.map((elem, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>{elem?.user?.nickName}</td>
                                                                                <td>{elem?.operation?.name}</td>
                                                                                <td>{elem?.operation?.reward}</td>
                                                                                {/* <td>
                                                                            <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Pending</div>
                                                                        </td> */}
                                                                                <td>
                                                                                    <div className="tbl-dropdown text-end">
                                                                                        <button onClick={() => GetDataOfOperation(elem)} className='btn-detail'>Detail</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </tbody>
                                                            </Table>
                                                            {/* <div className="pagi display-none-in-mobile">
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
                                                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                                <div className="heading-mobile">
                                                                    <p>User</p>
                                                                </div>
                                                                <Accordion>
                                                                    {tasks && tasks?.map((elem, index) => {
                                                                        return (
                                                                            <Accordion.Item eventKey={index}>
                                                                                <Accordion.Header>{elem?.user?.nickName}</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                    <div className="inner-fields">
                                                                                        <div className="inner-item">
                                                                                            <h6>Tasks</h6>
                                                                                            <p>{elem?.operation?.name}</p>
                                                                                        </div>
                                                                                        <div className="inner-item">
                                                                                            <h6>Points</h6>
                                                                                            <p>{elem?.operation?.reward}</p>
                                                                                        </div>
                                                                                        {/* <div className="inner-item">
                                                                                    <h6>Status</h6>
                                                                                    <button className="btn-green">Completed</button>
                                                                                </div> */}
                                                                                        <div className="inner-item">
                                                                                            <h6>Actions</h6>
                                                                                            <div className="tbl-dropdown text-end">
                                                                                                <button onClick={() => GetDataOfOperation(elem)} className='btn-detail'>Detail</button>
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
                                            )
                                        }
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showwork} onHide={handleClosework} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mainproofdetail">
                        <div className="proofdetailleft">
                            <div className="proofmain">
                                <p className="detailpara">Task Title</p>
                                <h6 className="detailhead">{singledetail?.task?.name}</h6>
                            </div>
                            <div className="proofmain">
                                <p className="detailpara">Task Description</p>
                                <h6 className="detailhead">{singledetail?.task?.description}</h6>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">POW URL</p>
                                    <a href={singledetail?.url} target='_blank'>
                                        <h6 className="detailhead" style={{ textDecoration: 'underline' }}>{result}</h6>
                                    </a>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">User</p>
                                    <h6 className="detailhead">{singledetail?.user?.nickName}</h6>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Points</p>
                                    <h6 className="detailhead">{singledetail?.task?.reward}</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">Status</p>
                                    <span className="detailbtn">Pending</span>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Submitted Date</p>
                                    <h6 className="detailhead">
                                        {
                                            singledetail?.createdAt
                                                ?.slice(0, 10)
                                                .split('-')
                                                .reverse()
                                                .join('-')}
                                    </h6>
                                </div>
                                {/* <div className="proofmain">
                                    <p className="detailpara">End Date</p>
                                    <h6 className="detailhead">{
                                            singledetail?.createdAt
                                                ?.slice(0, 10)
                                                .split('-')
                                                .reverse()
                                                .join('-')}</h6>
                                </div> */}
                            </div>
                        </div>
                        <div className="proofdetailleft">
                            <div className="proofmain">
                                <p className="detailpara">POW Image</p>
                                <div className="others-imgs">
                                    {singledetail?.image && singledetail?.image?.map((elem, index) => {
                                        return (
                                            <div className="powimg" onClick={() => ImageDetails(elem)}>
                                                <img src={elem} alt="powimginner" className="powimginner" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btnss">
                        <button onClick={() => {
                            Acceptreject(singledetail, 'false')
                        }} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                        <button onClick={() => {
                            Acceptreject(singledetail, 'true')
                        }} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Approve</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showwork1} onHide={handleClosework1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mainproofdetail">
                        <div className="proofdetailleft">
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Task Title</p>
                                    <h6 className="detailhead">{singledetail?.name}</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">User</p>
                                    <h6 className="detailhead">{taskdetail?.user?.nickName}</h6>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">POW URL</p>
                                    <h6 className="detailhead" style={{ textDecoration: 'underline' }}>{singledetail?.url}</h6>
                                </div>
                                <div className="proofmain">
                                    <p className="detailpara">Status</p>
                                    <span className="detailbtn">Pending</span>
                                </div>
                            </div>
                            <div className="detailmain">
                                <div className="proofmain">
                                    <p className="detailpara">Submitted Date</p>
                                    <h6 className="detailhead">
                                        {
                                            taskdetail?.createdAt
                                                ?.slice(0, 10)
                                                .split('-')
                                                .reverse()
                                                .join('-')}
                                    </h6>
                                </div>
                                {/* <div className="proofmain">
                                    <p className="detailpara">End Date</p>
                                    <h6 className="detailhead">05/05/2023</h6>
                                </div> */}
                            </div>
                            
                        </div>
                        <div className="proofdetailleft">
                            <div className="proofmain">
                                <p className="detailpara">POW Image</p>
                                <div className="others-imgs">
                                    {singledetail?.image && singledetail?.image?.map((elem, index) => {
                                        return (
                                            <div className="powimg" onClick={() => ImageDetails(elem)}>
                                                <img src={elem} alt="powimginner" className="powimginner" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btnss">
                        <button onClick={() => {
                            Acceptrejectoperation(operationList, singledetail, 'false')
                        }} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                        <button onClick={() => {
                            Acceptrejectoperation(operationList, singledetail, 'true')
                        }} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Approve</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showapprove} onHide={handleCloseapprove} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\approveimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">operation proof of work approved</p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showreject} onHide={handleClosereject} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\rejectimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">operation proof of work rejected</p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showapprove1} onHide={handleCloseapprove1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\approveimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">Task proof of work approved</p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style powmodal" show={showreject1} onHide={handleClosereject1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>proof of work</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src="\generalassets\other-imgs\rejectimg.png" alt="approveimg" className="approveimg img-fluid" />
                        <p className="approvetext">Task proof of work rejected</p>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Image detail modal */}
            <Modal className="createdsuccess-modal global-modal-style powmodal scsdvsdvrverberbrtnsvdrbrt" show={imageModal} onHide={handleImageClose} centered>
                <Modal.Header closeButton>
                    {/* <Modal.Title>proof of work</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="approvemain">
                        <img src={imagedetail} alt="approveimg" className="approveimg img-fluid" />
                        {/* <p className="approvetext">operation proof of work approved</p> */}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Proofofwork