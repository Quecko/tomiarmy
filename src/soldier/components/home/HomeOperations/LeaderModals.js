import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import { useWeb3React } from '@web3-react/core';
import { API_URL } from "../../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LeaderModals = ({ show4, setShow4, show5, setShow5 }) => {


    const handleClose1 = () => setShow4(false);
    const handleClose2 = () => setShow5(false);

    const { account } = useWeb3React()

    const [loader, setLoader] = useState()

    const [squadMembers, setSquadMembers] = useState([]);

    console.log('squadMembers', squadMembers);

    const getData = async () => {

        let tok = localStorage.getItem("accessToken");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/auth/users/squad-members?offset=1&&limit=5&&queryParam=Active Squad`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    setLoader(false);
                    setSquadMembers(response?.data?.data);
                })
                .catch(function (error) {
                    setLoader(false);
                    // localStorage.removeItem("accessToken");
                    // localStorage.removeItem("user");
                    // window.location.assign("/")
                    // window.location.reload();
                });
        }
    }

    useEffect(() => {
        getData();
    }, [account])

    const addCoLeader = () => {
        // setShow2(true)
        let tok = localStorage.getItem("accessToken");
        if (account) {
            // window.$("#exampleModalLabel11").modal("hide");
            var config = {
                method: "post",
                url: `${API_URL}/tasks/squad-co-leaders/add-coLeader`,
                headers: {
                    authorization: `Bearer ` + tok
                },
                coLeaderId: "6399ab0e84e0b5f46b53603b"
            };

            axios(config)
                .then(async (response) => {
                    setLoader(false);
                    localStorage.setItem("accessToken", response?.data?.accessToken);
                    handleClose1();
                    setLoader(false);
                })
                .catch(function (error) {
                    // console.log(error);
                    // window.location.reload()
                    // window.$("#exampleModalLabel11").modal("hide");
                    // setLoader(false);
                    // window.$("#exampleModalLabel11").modal("hide");
                    if (error.response.data.statusCode == 409) {
                        window.$("#exampleModalLabel11").modal("hide");
                        toast.error("Squad for User already exists")
                    }
                    setLoader(false);
                });
        }

    }
    const inviteSquadMember = () => {
        // setShow2(true)
        let tok = localStorage.getItem("accessToken");
        if (account) {
            // window.$("#exampleModalLabel11").modal("hide");
            var config = {
                method: "post",
                url: `${API_URL}/tasks/squad-invitation-requests/recruite-accept`,
                headers: {
                    authorization: `Bearer ` + tok
                },
                squadInvitationRequestId: "6399ab0e84e0b5f46b53603b"
            };

            axios(config)
                .then(async (response) => {
                    setLoader(false);
                    localStorage.setItem("accessToken", response?.data?.accessToken);
                    handleClose2();
                    setLoader(false);
                })
                .catch(function (error) {
                    // console.log(error);
                    // window.location.reload()
                    // window.$("#exampleModalLabel11").modal("hide");
                    // setLoader(false);
                    // window.$("#exampleModalLabel11").modal("hide");
                    if (error.response.data.statusCode == 409) {
                        window.$("#exampleModalLabel11").modal("hide");
                        toast.error("Squad for User already exists")
                    }
                    setLoader(false);
                });
        }

    }


   const [member,setMember]=useState(null)

    const AddMember=(elem)=>{
        setShow4(false)
        setShow5(true)
        setMember(elem)
    }

    return (
        <>
            <Modal className='detailmodal' show={show4} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Search Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='maincard'>
                        <div className='display-none-in-mobile'>
                            <div className="maintable">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <p className='headtable'>Nickname</p>
                                            </th>
                                            <th>
                                                <p className='headtable'>Rank</p>
                                            </th>
                                            <th>
                                                <p className='headtable'>Wallet Address</p>
                                            </th>
                                            <th>
                                                <p className='headtable'>Action</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {squadMembers?.users?.map((elem, index) => {
                                            const walletAddressLength = elem?.walletAddress?.length;
                                            return (
                                                <tr>
                                                    <td>
                                                        <p className='paratable'>{elem?.nickName ? elem?.nickName : "------"}</p>
                                                    </td>
                                                    <td>
                                                        <div className="set-custom">
                                                            <img style={{width:'40px',height:'40px'}} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                                            <p className='paratable'>{elem?.rank?.name}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className='paratable'>
                                                            {`${elem?.walletAddress.slice(0, 8)}...${elem?.walletAddress.slice(
                                                                walletAddressLength - 8
                                                            )}`}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='dropbtn'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">
                                                                        
                                                                        <p onClick={()=>AddMember(elem)}>
                                                                            <img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
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
                    </div>
                    <div className='endbtn'>
                        <button className='btn-blackk'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                        <button className='btn-pinkk'><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='detailmodal invitemember-modal' show={show5} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Invite a squad member</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="inviteamember">
                        <div className="left">
                            <h6>Twitter</h6>
                        </div>
                        <div className="right">
                            {/* <p>@Umar_x2jz <img src="\assets\copy.svg" alt="img" className='img-fluid ms-2' /></p> */}
                            <p>{member?.nickName}<img src="\assets\copy.svg" alt="img" className='img-fluid ms-2' /></p>
                        </div>
                    </div>

                    <div className='endbtn'>
                        <button className='btn-pinkk w-100'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Ok</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LeaderModals
