import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import moment from 'moment'
import axios from 'axios';
import { API_URL } from '../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import Loader from '../../hooks/loader';
import Accordion from 'react-bootstrap/Accordion';


const TopSquadModal = ({ showTopSquadModal, setShowTopSquadModal }) => {

    const [search, setSearch] = useState('')
    const [topSquad, setTopSquad] = useState([]);
    const [loader, setLoader] = useState(false)
    let tok = localStorage.getItem("accessToken");
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pages, setPages] = useState([]);
    const [rend, setRend] = useState(false);
    const [limit, setLimit] = useState(1)

    const handleClose = () => {
        setShowTopSquadModal(false)
    }

    const GetUserTopSquad = async (off) => {
        let valu = null;
        if (off) {
            valu = off;
        } else {
            valu = 1;
        }
        // if (account) {
        var config = ''
        if (search !== '') {
            config = {
                method: "get",
                url: `${API_URL}/tasks/squads?offset=${valu}&&limit=5&&name=${search}`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
        }

        else {
            config = {
                method: "get",
                url: `${API_URL}/tasks/squads?offset=${valu}&&limit=5`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
        }


        axios(config)
            .then(function (response) {
                setLoader(false);
                setCount(response.data.data.count)
                setTopSquad(response.data.data.squad)
                let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                setPages(arr);
                setCurrentPage(valu)
                // setSearch('')
                if (off <= response.data.data.squad.length) {
                    if ((off - 1) == 0) {
                        setLimit(1)
                    }
                    else {
                        setLimit((off - 1) * 5)
                    }
                }
                // window.scrollTo(0, 0);
            })
            .catch(function (error) {
                console.log(error);
                setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // localStorage.removeItem("isCommander");
                // window.location.assign("/")
                // window.location.reload();
            });
        // }
    }

    const getPrevData = (off) => {
        let offset = parseInt(off) - 1;
        if (offset > 0) {
            setLoader(true);
            var config = null;
            config = {
                method: "get",
                url: `${API_URL}/tasks/squads?offset=${offset}&&limit=5`,
                headers: {
                    Authorization: "Bearer " + tok,
                    "Content-Type": "application/json",
                },
            };

            axios(config)
                .then(function (response) {
                    let arr = Array.from(
                        Array(parseInt(response.data.data.pages)).keys()
                    );
                    setPages(arr);
                    setTopSquad(response.data.data.squad)
                    if (currentPage - 1 >= 0) {
                        setCurrentPage(currentPage - 1);

                    }
                    if (off >= 0) {
                        if ((offset - 1) == 0) {
                            setLimit(1)
                        }
                        else {
                            setLimit((offset - 1) * 5)
                        }
                    }
                    // else{
                    //   setLimit(off)
                    // }
                    setRend(!rend);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoader(false);
        }
    };

    const getNextData = (off) => {
        let offset = parseInt(off) + 1;
        if (pages.length > off) {
            if (off < topSquad.length) {
                var config = null;
                config = {
                    method: "get",
                    url: `${API_URL}/tasks/squads?offset=${offset}&&limit=5`,
                    headers: {
                        Authorization: "Bearer " + tok,
                        "Content-Type": "application/json",
                    },
                };

                axios(config)
                    .then(function (response) {
                        let arr = Array.from(
                            Array(parseInt(response.data.data.pages)).keys()
                        );
                        setPages(arr);
                        setTopSquad(response.data.data.squad)
                        if (off <= topSquad.length) {
                            setCurrentPage(offset);
                            setLimit(off * 5)
                        }
                        setRend(!rend);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    };

    const SendInvite = (id) => {
        setLoader(true)
        // if (account) {
        axios.defaults.headers.post[
            "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
            method: "post",
            url: `${API_URL}/tasks/squad-invitation-requests`,
            data: {
                squadId: id.toString()
            }
        };

        axios(config)
            .then(async (response) => {
                GetUserTopSquad()
                setLoader(false)
                toast.success("Invite Sent Successfully");
            })
            .catch(function (err) {
                toast.error(err?.response?.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                setLoader(false);
            });
        // }
    }
    useEffect(() => {
        GetUserTopSquad()
    }, [])

    const clear = () => {
        setSearch('')
    }
    useEffect(() => {
        if (search == '') {
            GetUserTopSquad(currentPage)
        }
    }, [search])


    return (

        <>
            {loader && <Loader />}
            {/* modal for join squad */}
            <Modal className='joinsquad-modal' show={showTopSquadModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Top Squads</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="parent-modal">
                        <div className="option-field">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='border-grad1' />
                            {/* <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' /> */}
                            <div className="twice-new-btn-sm">
                                <button className="btn-search" onClick={() => GetUserTopSquad(1)}>Search</button>
                                {search !== '' &&
                                    <button className="btn-reset" >
                                        <img src='/reset.png' alt='' onClick={clear} />
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="maintable table-responsive display-none-in-mobile">
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                        <th>
                                            <p className='headtable'>Squads</p>
                                        </th>
                                        <th>
                                            <p className='headtable'>Total Members</p>
                                        </th>
                                        <th>
                                            <p className='headtable'>TOMI Balance</p>
                                        </th>
                                        <th>
                                            <p className='headtable'>Action</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topSquad?.length > 0 ?
                                        topSquad?.map((elem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="parent">
                                                            <div className="profile">
                                                                <img src={elem?.symbol} alt="img" className='img-fluid' />
                                                            </div>
                                                            <p className='paratable'>{elem?.name}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className='paratable'>{elem?.membersCount}</p>
                                                    </td>
                                                    <td>
                                                        <p className='paratable'>{elem?.totalTokens} TOMI</p>
                                                    </td>
                                                    <td>
                                                        <button className={elem?.squad_invitation_requests ? 'btn-requested' : 'btn-requestjoin'} onClick={() => SendInvite(elem?._id)}>{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        : <h4>
                                            NO Squad
                                        </h4>
                                    }
                                </tbody>
                            </table>
                            {topSquad?.length > 0 &&
                                <div className="pagi">
                                    <div>
                                        {/* <p>Showing {limit} to {currentPage * 5 >= count ? currentPage - (currentPage - count) : currentPage * 5} of {count} entries</p> */}
                                    </div>
                                    <nav className="right">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <button
                                                    onClick={() => getPrevData(currentPage)}
                                                    className="page-link arrowssss scsdsdfefssdvsdvsd"
                                                >
                                                    {/* <i className="fas curPointer fa-angle-left"></i> */}
                                                    Previous
                                                </button>
                                            </li>
                                            {pages?.map((item, index) => {
                                                return (
                                                    <li key={index} className="page-item cursor-pointer">
                                                        <p
                                                            className={
                                                                "page-link " +
                                                                (index + 1 === parseInt(currentPage)
                                                                    ? "active-pag"
                                                                    : "")
                                                            }
                                                            onClick={() => GetUserTopSquad(index + 1)}
                                                            style={{ fontSize: "13px !important" }}
                                                        >
                                                            {index + 1}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                            <li className="page-item">
                                                <button
                                                    onClick={() => getNextData(currentPage)}
                                                    className="page-link arrowssss"
                                                >
                                                    {/* <i className="fas curPointer fa-angle-right"></i> */}
                                                    Next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            }
                        </div>
                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                            <div className="heading-mobile">
                                <p>Squads</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                                {topSquad?.map((elem, index) => {
                                    return (
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header> <img style={{ width: '34px', height: '34px' }} src={elem?.symbol} alt="img" className='img-fluid me-2' /> {elem?.name}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="inner-fields">
                                                    <div className="inner-item">
                                                        <h6>TOMI Balance</h6>
                                                        <p>{elem?.totalTokens}</p>
                                                    </div>
                                                    <div className="inner-item">
                                                        <h6>Total Members</h6>
                                                        <p>{elem?.membersCount}</p>
                                                    </div>
                                                    <div className="inner-item">
                                                        <h6>Actions</h6>
                                                        <button className={elem?.squad_invitation_requests ? ' btn-requested' : ' btn-requestjoin'} onClick={() => SendInvite(elem?._id)} >{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        // <tr>
                                        //     <td>
                                        //         <div className="parent">
                                        //             <div className="profile">
                                        //                 <img src={elem?.symbol} alt="img" className='img-fluid' />
                                        //             </div>
                                        //             <p className='paratable'>{elem?.name}</p>
                                        //         </div>
                                        //     </td>
                                        //     <td>
                                        //         <p className='paratable'>{elem?.membersCount}</p>
                                        //     </td>
                                        //     <td>
                                        //         <p className='paratable'>{elem?.totalTokens} TOMI</p>
                                        //     </td>
                                        //     <td>
                                        //         <button className={elem?.squad_invitation_requests ? 'btn-requested' : 'btn-requestjoin'} onClick={() => SendInvite(elem?._id)}>{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                                        //     </td>
                                        // </tr>
                                    )
                                })}
                            </Accordion>
                            <div className="pagi">
                                <div>
                                    {/* <p>Showing {limit} to {currentPage * 5 >= count ? currentPage - (currentPage - count) : currentPage * 5} of {count} entries</p> */}
                                </div>
                                <nav className="right">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <button
                                                onClick={() => getPrevData(currentPage)}
                                                className="page-link arrowssss scsdsdfefssdvsdvsd"
                                            >
                                                {/* <i className="fas curPointer fa-angle-left"></i> */}
                                                Previous
                                            </button>
                                        </li>
                                        {pages?.map((item, index) => {
                                            return (
                                                <li key={index} className="page-item cursor-pointer">
                                                    <p
                                                        className={
                                                            "page-link " +
                                                            (index + 1 === parseInt(currentPage)
                                                                ? "active-pag"
                                                                : "")
                                                        }
                                                        onClick={() => GetUserTopSquad(index + 1)}
                                                        style={{ fontSize: "13px !important" }}
                                                    >
                                                        {index + 1}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                        <li className="page-item">
                                            <button
                                                onClick={() => getNextData(currentPage)}
                                                className="page-link arrowssss"
                                            >
                                                {/* <i className="fas curPointer fa-angle-right"></i> */}
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )



}

export default TopSquadModal