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
import Loader from "../../../hooks/loader";


const ArmyMembers = ({ routesarmy, setroutearmy }) => {
    const [loader, setLoader] = useState(false);
    let tok = localStorage.getItem("accessToken");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const [Armymajor, setArmymajor] = useState([]);
    const [selectedrank, setselectedrank] = useState('Select Rank');
    const [filterRank, setFilterRank] = useState('All Rank');
    const [search, setSearch] = useState('')
    const { account } = useWeb3React();
    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);
    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);
    const [showrank, setShowrank] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pages, setPages] = useState([]);
    const [rend, setRend] = useState(false);
    const [limit, setLimit] = useState(1)
    let user1 = localStorage.getItem("user");
    let user = JSON.parse(user1);
    var inputTouched = false;

    const handleCloserank = () => {
        setselectedrank('Select Rank')
        setArmymajor()
        setShowrank(false);
    }
    const [dataarmymember, setdataarmymember] = useState();

    const handleShowrank = (elem) => {
        setdataarmymember(elem)
        setShowrank(true);
    }


    const armyembers = async (off) => {
        let valu = null;
        if (off) {
            valu = off;
        } else {
            valu = 1;
        }
        // if (account) {
        var config = ''

        if (search != '' && filterRank != 'All Rank') {
            config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=${valu}&&limit=10&&rank=${filterRank}&&nickName=${search}`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            }
        }
        else if (filterRank != 'All Rank') {
            config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=${valu}&&limit=10&&rank=${filterRank}`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            }
        }
        else if (search != '') {
            config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=${valu}&&limit=10&&nickName=${search}`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            }
        }
        else {
            config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=${valu}&&limit=10`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
        }
        axios(config)
            .then(function (response) {
                setData(response?.data?.data?.users);
                setCurrentPage(valu)
                setCount(response.data.data.count)
                let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                setPages(arr);
                setCurrentPage(valu)
                // setSearch('')
                // setFilterRank('Filter Rank')
                if (off <= response.data.data.users.length) {
                    if ((off - 1) == 0) {
                        setLimit(1)
                    }
                    else {
                        setLimit((off - 1) * 10)
                    }
                }
            })
            .catch(function (error) {
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
        // }

    }



    useEffect(() => {
        let user1 = localStorage.getItem("user");
        user1 = JSON.parse(user1);
        if (user1?.rank?.name === "major general") {
            armyembers();
        }
    }, [account])

    const GetArmymajor = () => {
        var config = {
            method: "get",
            url: `${API_URL}/tasks/army-ranks?minimal=true`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                const index = response?.data?.data.findIndex(rank => rank.name == dataarmymember?.rank?.name);
                // Split the array from the "lieutenant" index to the end
                const newArray = response?.data?.data?.slice(index + 1);
                setArmymajor(newArray);
            })
            .catch(function (error) {
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
    }

    const updateRankMajor = () => {
        if (selectedrank === 'Select Rank' || selectedrank === '') {
            toast.error('Please Select Rank', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        else {
            setLoader(true);
            handleCloserank();
            var data = ({
                nickName: dataarmymember?.nickName,
                walletAddress: dataarmymember?.walletAddress,
                from: dataarmymember?.rank?.name,
                to: selectedrank?.name,
                userId: dataarmymember?._id,
            });
            var config = {
                method: "post",
                url: `${API_URL}/tasks/pending-ranks-update`,
                headers: {
                    authorization: `Bearer ` + tok
                },
                data: data,
            };
            axios(config)
                .then(function (response) {
                    setLoader(false);
                    GetArmymajor();
                    setselectedrank();
                    toast.success('Request Send To General Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                })
                .catch(function (error) {
                    setLoader(false);
                    toast.error(error.response.data.message);
                });
        }
    }
    const [armyDetail, setArmyDetail] = useState([])
    const armyMembeerDetails = async (elem) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        // if (account) {
        setroutearmy(!routesarmy)
        var config = {
            method: "get",
            url: `${API_URL}/auth/users/army-member-details?userId=${elem?._id}`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                setArmyDetail(response?.data?.data[0]);
            })
            .catch(function (error) {
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
        // }
    }

    const armyMembers = [
        { id: 1, rank: 'All Rank' },
        { id: 2, rank: 'private' },
        { id: 3, rank: 'sergeant' },
        { id: 4, rank: 'lieutenant' },
        { id: 5, rank: 'captain' },
        { id: 6, rank: 'major' },
        // { id: 6, rank: 'major general' },
        // { id: 7, rank: 'general' },

    ];


    const getPrevData = (off) => {
        let offset = parseInt(off) - 1;
        if (offset > 0) {
            setLoader(true);
            var config = null;
            config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=${offset}&&limit=5`,
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
                    setData(response?.data?.data?.users);
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
            if (off < data.length) {
                var config = null;
                config = {
                    method: "get",
                    url: `${API_URL}/auth/users/army-members?offset=${offset}&&limit=5`,
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
                        setData(response?.data?.data?.users);
                        if (off < data.length) {
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

    const getSearchData = async (off) => {
        let valu = null;
        if (off) {
            valu = off;
        } else {
            valu = 1;
        }
        if (search != '') {
            if (filterRank != 'Filter Rank') {
                // if (account && jcommander === true) {
                var config = {
                    method: "get",
                    url: `${API_URL}/auth/users/army-members?offset=${valu}&&limit=5&&rank=${filterRank}&&nickName=${search}`,
                    headers: {
                        authorization: `Bearer ` + tok
                    },
                };

                axios(config)
                    .then(function (response) {
                        // setLoader(false);
                        // setCount(response.data.data.count)
                        setData(response?.data?.data?.users);
                        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                        // setPages(arr);
                        setCurrentPage(valu)
                        // setLoader(false);
                        setCount(response.data.data.count)
                        setData(response?.data?.data?.users);
                        let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                        setPages(arr);
                        setCurrentPage(valu)
                        // setSearch('')
                        // setFilterRank('Filter Rank')
                        if (off <= response.data.data.users.length) {
                            if ((off - 1) == 0) {
                                setLimit(1)
                            }
                            else {
                                setLimit((off - 1) * 5)
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        setLoader(false);
                        // localStorage.removeItem("accessToken");
                        // localStorage.removeItem("user");
                        // window.location.assign("/")
                        // window.location.reload();
                    });
                // }
            }
            else {
                toast.error('Please select the Raank', {
                    position: "top-right",
                    autoClose: 2000,
                });
            }

        }
        else {
            toast.error('Please Enter the value of search', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const clear = () => {
        setSearch('')
        setFilterRank('All Rank')
    }
    useEffect(() => {
        if (search == '') {
            armyembers(currentPage)
        }
        // else if(filterRank == 'All Rank'){
        //     armyembers(currentPage)
        // }
    }, [search])

    const Resetallfeilds = () => {
        setSearch('')
        setFilterRank('All Rank')
    }

    const BlockUnblock = (id, bool) => {
        // console.log("id", id?._id, bool)
        setLoader(true);
        var data = ({
            userId: id?._id,
            isBlocked: bool
        });
        var config = {
            method: "patch",
            url: `${API_URL}/auth/users/toggle-block-user`,
            headers: {
                authorization: `Bearer ` + tok
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                setLoader(false);
                armyembers(1);
                // GetArmymajor();
                // setselectedrank();
                // toast.success('Request Send To General Successfully!', {
                //     position: "top-right",
                //     autoClose: 2000,
                // });
            })
            .catch(function (error) {
                setLoader(false);
                toast.error(error.response.data.message);
            });
    }


    return (
        <>
            {loader && <Loader />}
            {
                routesarmy ?
                    <>
                        <ArmyDetail setroutearmy={setroutearmy} routesarmy={routesarmy} armyDetail={armyDetail} setArmyDetail={setArmyDetail} />
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
                                                <Tab eventKey="home" title="Army Members">
                                                    <div className="parent-field">
                                                        <div className="option-field option-field1 option-field2">
                                                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search By Nickname' />
                                                            {/* <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' /> */}
                                                        </div>
                                                        {/* <div className="option-field option-field2">
                                                            <input type="text" placeholder='Wallet Address' />
                                                        </div> */}
                                                        <div className="twice-btnss">
                                                            <div className="option-field option-field3">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        {filterRank}
                                                                    </button>
                                                                    <ul class="dropdown-menu">
                                                                        {armyMembers.map((item, index) => (
                                                                            <li key={item.id}>
                                                                                <a
                                                                                    className={"dropdown-item" + (item?.rank === filterRank ? ' ev3v3v3__item-active' : '')}
                                                                                    onClick={() => setFilterRank(item?.rank)}>{item?.rank}</a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <button className='btn-search' onClick={() => armyembers(1)}>Search</button>
                                                            <button className="btn-search" onClick={Resetallfeilds}>Reset</button>
                                                        </div>

                                                    </div>
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
                                                                                <p className='headtable'>Rank</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Points</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Status</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Actions</p>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {data && data?.map((elem, index) => {
                                                                            return (
                                                                                <tr key={index}>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem?.walletAddress}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem.nickName ? elem?.nickName : '----'}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem?.rank?.name}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem?.points}</p>
                                                                                    </td>
                                                                                    {elem?.isBlocked == false ?
                                                                                        (
                                                                                            <td>
                                                                                                <p className='paratable'>Active User</p>
                                                                                            </td>
                                                                                        )
                                                                                        :
                                                                                        (
                                                                                            <td>
                                                                                                <p className='paratable'>Blocked User</p>
                                                                                            </td>
                                                                                        )
                                                                                    }
                                                                                    <td>
                                                                                        <div className='dropbtn global-dropdown-style'>
                                                                                            <Dropdown>
                                                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu>
                                                                                                    <Dropdown.Item href="#/action-1">
                                                                                                        {user?.rank?.name == 'general' ?
                                                                                                            (
                                                                                                                <>
                                                                                                                    <p onClick={() => armyMembeerDetails(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                                    {elem?.isBlocked == false ?
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, true)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Block User</p>
                                                                                                                        )
                                                                                                                        :
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, false)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />UnBlock User</p>
                                                                                                                        )
                                                                                                                    }
                                                                                                                </>
                                                                                                            )
                                                                                                            :
                                                                                                            (
                                                                                                                <>
                                                                                                                    <p onClick={() => handleShowrank(elem)}><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Rank Update</p>
                                                                                                                    <p onClick={() => armyMembeerDetails(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                                    {elem?.isBlocked == false ?
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, true)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Block User</p>
                                                                                                                        )
                                                                                                                        :
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, false)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />UnBlock User</p>
                                                                                                                        )
                                                                                                                    }
                                                                                                                </>
                                                                                                            )
                                                                                                        }

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
                                                                                        onClick={() => armyembers(index + 1)}
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
                                                                {data && data?.map((elem, index) => {
                                                                    return (
                                                                        <Accordion.Item eventKey={index}>
                                                                            <Accordion.Header>{elem?.walletAddress}</Accordion.Header>
                                                                            <Accordion.Body>
                                                                                <div className="inner-fields">
                                                                                    <div className="inner-item">
                                                                                        <h6>Nickname</h6>
                                                                                        <p>{elem.nickName}</p>
                                                                                    </div>
                                                                                    <div className="inner-item">
                                                                                        <h6>Rank</h6>
                                                                                        <p>{elem?.rank?.name}</p>
                                                                                    </div>

                                                                                    <div className="inner-item">
                                                                                        <h6>Points</h6>
                                                                                        <p>{elem?.points}</p>
                                                                                    </div>
                                                                                    <div className="inner-item">
                                                                                        <h6>Status</h6>
                                                                                        {elem?.isBlocked == false ?
                                                                                            (
                                                                                                <p>Active User</p>
                                                                                            )
                                                                                            :
                                                                                            (
                                                                                                <p>Blocked User</p>
                                                                                            )
                                                                                        }
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
                                                                                                        {user?.rank?.name == 'general' ?
                                                                                                            (
                                                                                                                <>
                                                                                                                    <p onClick={() => armyMembeerDetails(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                                    {elem?.isBlocked == false ?
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, true)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Block User</p>
                                                                                                                        )
                                                                                                                        :
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, false)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />UnBlock User</p>
                                                                                                                        )
                                                                                                                    }
                                                                                                                </>
                                                                                                            )
                                                                                                            :
                                                                                                            (
                                                                                                                <>
                                                                                                                    <p onClick={() => handleShowrank(elem)}><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Rank Update</p>
                                                                                                                    <p onClick={() => armyMembeerDetails(elem)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                                                    {elem?.isBlocked == false ?
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, true)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Block User</p>
                                                                                                                        )
                                                                                                                        :
                                                                                                                        (
                                                                                                                            <p onClick={() => BlockUnblock(elem, false)}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />UnBlock User</p>
                                                                                                                        )
                                                                                                                    }
                                                                                                                </>
                                                                                                            )
                                                                                                        }

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
                                                                                        onClick={() => armyembers(index + 1)}
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
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div >

                        </section >

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
                                            <h6>0x0F4D...B5D8</h6>
                                        </div>
                                        <div className="text">
                                            <p>Nickname</p>
                                            <h6>sharjeel</h6>
                                        </div>
                                        <div className="text">
                                            <p>From</p>
                                            <h6>Captain</h6>
                                        </div>
                                        <div className="text">
                                            <p>To</p>
                                            <h6>Private</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="btnss">
                                    <button onClick={handleClose} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                                    <button onClick={() => {
                                        handleClose();
                                        handleShowapprove();
                                    }} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Promote</button>
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


                        <Modal className='createbasic-modal global-modal-style createtask-modal' show={showrank} onHide={handleCloserank} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Rank Update</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="inner-content">
                                    <div className="option-field">
                                        <label>Rank Update</label>
                                        <div class="dropdown">
                                            <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={GetArmymajor}>
                                                {selectedrank?.name ? selectedrank.name : selectedrank}
                                                <img src="\generalassets\icons\arrow-down.svg" alt="img" className='img-fluid' />
                                            </button>
                                            <ul class="dropdown-menu">
                                                {Armymajor?.map((item, index) => {
                                                    return (
                                                        <li><a class="dropdown-item" onClick={() => setselectedrank(item)}>{item?.name}</a></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="twice-btns">
                                    <button onClick={handleCloserank} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
                                    <button onClick={updateRankMajor} className="btn-pinkk"><img src="\generalassets\icons\send.svg" alt="img" className='img-fluid' />Update</button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
            }

        </>
    )
}

export default ArmyMembers