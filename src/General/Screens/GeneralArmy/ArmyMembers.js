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


const ArmyMembers = ({ routesarmy, setroutearmy }) => {

    let tok = localStorage.getItem("accessToken");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);

    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);

    const [showrank, setShowrank] = useState(false);
    const handleCloserank = () =>{
        setArmymajor()
        setShowrank(false);
    }
    const [dataarmymember, setdataarmymember] = useState();

    const handleShowrank = (elem) => {
        setdataarmymember(elem)
        setShowrank(true);
    }


    
    const [data, setData] = useState([]);
    const [Armymajor, setArmymajor] = useState([]);
    const [selectedrank, setselectedrank] = useState('Select Rank');
    const { account } = useWeb3React();

    const armyembers = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/auth/users/army-members?offset=1&&limit=5`,
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
        // GetArmymajor();
        armyembers();
        // }
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
                const newArray = response?.data?.data?.slice(index+1);
              
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
            // setLoader(true);
            // window.$(`#UpdaterankMajorArmyMemebr`).modal("hide");
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
                    // setLoader(false);
                    // window.$(`#UpdaterankMajorArmyMemebr`).modal("hide");
                    GetArmymajor();
                    setselectedrank();
                    toast.success('Request Send To General Successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                })
                .catch(function (error) {
                    // setLoader(false);
                    toast.error(error.response.data.message);
                });
        }
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
                                                <Tab eventKey="home" title="Army Members">
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
                                                                                <p className='headtable'>Rank</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Points</p>
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
                                                                                        <p className='paratable'>{elem.nickName}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem?.rank?.name}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className='paratable'>{elem?.points}</p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className='dropbtn global-dropdown-style'>
                                                                                            <Dropdown>
                                                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu>
                                                                                                    <Dropdown.Item href="#/action-1">
                                                                                                        <p onClick={() => handleShowrank(elem)}><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Rank Update</p>
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
                                                                                        <h6>Actions</h6>
                                                                                        <div className='dropbtn global-dropdown-style'>
                                                                                            <Dropdown>
                                                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu>
                                                                                                    <Dropdown.Item href="#/action-1">
                                                                                                        <p onClick={() => handleShowrank(elem)}><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Rank Update</p>
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