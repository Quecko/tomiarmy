import React, { useState } from 'react'
import "./generaloperation.scss"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';
import Modal from 'react-bootstrap/Modal';
import { Accordion, Dropdown, Pagination, Tab, Table, Tabs } from 'react-bootstrap'
import dosts from "../../../assets/icons/dots.svg";
const CreateOperation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showtask, setShowtask] = useState(false);
    const handleClosetask = () => setShowtask(false);
    const handleShowtask = () => setShowtask(true);

    const [startDate, setStartDate] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [profileP, setProfileP] = useState();

    const [allFormData, setAllFormData] = useState({
        name: '',
        reward: '',
        tomitoken: '',
        description: '',
    })

    const handleChange = (event) => {
        allFormData[event.target.name] = event.target.value;
        setAllFormData({ ...allFormData });
    }

    const ClearAll = () => {
        setAllFormData({
            name: '',
            reward: '',
            tomitoken: '',
            description: '',
        })
    }


    const setProfilePic = (evt) => {
        const file = evt.target.files[0];
        if (file.size >= 2872139) {
            toast.error("File cannot be greater than 3mbs")
        } else {
            setProfilePicture(evt.target.files[0]);
            const file = evt.target.files[0]
            setProfileP(file)
        }
    };


    return (
        <>
            <section className="create-operation border-grad1">
                <div className="row">
                    <div className="col-xl-6 col-12 p-0 padd-sm">
                        <div className="createoperation-form">
                            <div className="twice-field">
                                <div className="option-field">
                                    <label>Operation Name</label>
                                    <input value={allFormData?.name} name="name" onChange={handleChange} type="text" placeholder="Enter operation name...." />
                                </div>
                                <div className="option-field">
                                    <label>Reward Points</label>
                                    <input value={allFormData?.reward} name="reward" onChange={handleChange} type="text" placeholder="Enter reward points...." />
                                </div>
                            </div>
                            <div className="twice-field">
                                <div className="option-field">
                                    <label>Expiration Date</label>
                                    <DatePicker selected={startDate} placeholder="Select expiration date..." onChange={(date) => setStartDate(date)} />
                                    {/* <input type="date" placeholder="Select expiration date..." />
                                     */}
                                </div>
                                <div className="option-field">
                                    <label>TOMI Tokens</label>
                                    <input value={allFormData?.tomitoken} name="tomitoken" onChange={handleChange} type="text" placeholder="Enter TOMI Tokens..." />
                                </div>
                            </div>
                            <div className="option-field mb-0">
                                <label>DESCRIPTION</label>
                                <textarea value={allFormData?.description} name="description" onChange={handleChange} placeholder="Enter task description...."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 pe-0 padd-sm">
                        <div className="createoperation-form">
                            <div className="upload-field">
                                <p>Upload NFT</p>
                                <div className="upload">
                                    {
                                        profilePicture ? <label htmlFor="upload" className="w-100 h-100">
                                            {" "}
                                            <img
                                                src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                                                alt="img"
                                                className="img-fluid setimg-p"
                                            />
                                        </label> : <label htmlFor="upload">
                                            {" "}
                                            <img
                                                src="\generalassets\icons\upload-icon.svg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                            <h6><label htmlFor="upload">browse</label></h6>
                                            <p className="text">Supports: JPG, JPEG, PNG</p>
                                        </label>
                                    }
                                    <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" onChange={(e) => setProfilePic(e)} id="upload" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="create-general-task">
                <div className="upper-field">
                    <div className="left-side">
                        <h6>operation TASKS</h6>
                        <p>VIEW AND CREATE TASKS FOR this operation</p>
                    </div>
                    <div className="right-side">
                        <button onClick={handleShow} className="create-squad-btn " >
                            <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                            <span> Create Task</span>
                        </button>
                    </div>
                </div>
                <div className="bottom-content border-grad1">
                    <div className="inner-field">
                        <p>Task Title</p>
                        <p>Task Description</p>
                        <p>Actions</p>
                    </div>
                    <div className="middle-item">
                        <img src="\generalassets\other-imgs\creat-task.svg" alt="img" className='img-fluid' />
                        <h6>No task available for this operation.</h6>
                        <button onClick={handleShow} className="create-squad-btn" >
                            <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                            <span> Create Task</span>
                        </button>
                    </div>
                    <div className="last-content">
                        <p>Showing 1 to 10 of 57 entries</p>
                        <div className="pagi">
                            <h6>Previous</h6>
                            <a href="#" className='active'>1</a>
                            <h6>Next</h6>
                        </div>
                    </div>
                </div>
                <div className="data-box general-tasks-wrappergeneral border-grad1 p-0">
                    <div className="maincard-global">
                        <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                            <thead>
                                <tr>
                                    <th>Task Title</th>
                                    <th>Task Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Follow this Twitter Account....</td>
                                    <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</td>

                                    <td>
                                        <div className="tbl-dropdown text-end">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    <img src={dosts} alt="dosts" />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                    <div className="stats-dropdown-bg">
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item >
                                                            <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                            Approve
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                            Reject
                                                        </Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Follow this Twitter AcRetweet the following tweet...</td>
                                    <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</td>

                                    <td>
                                        <div className="tbl-dropdown  text-end">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    <img src={dosts} alt="dosts" />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                    <div className="stats-dropdown-bg">
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                            Approve
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                            Reject
                                                        </Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Start a discussion on tomi discord server</td>
                                    <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</td>

                                    <td>
                                        <div className="tbl-dropdown  text-end">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    <img src={dosts} alt="dosts" />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                    <div className="stats-dropdown-bg">
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                            Approve
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                            Reject
                                                        </Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>join the telegram channel</td>
                                    <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</td>
                                    <td>
                                        <div className="tbl-dropdown  text-end">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    <img src={dosts} alt="dosts" />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                    <div className="stats-dropdown-bg">
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                            Approve
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <img src="\generalassets\icons\Subtract.svg" alt="submitIcon" />
                                                            Reject
                                                        </Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="pagi display-none-in-mobile">
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
                        </div>
                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                            <div className="heading-mobile">
                                <p>User</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>sharjeel</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="inner-fields">
                                            <div className="inner-item">
                                                <h6>Tasks</h6>
                                                <p>Like our facebook..</p>
                                            </div>
                                            <div className="inner-item">
                                                <h6>Points</h6>
                                                <p>1,000,000</p>
                                            </div>
                                            <div className="inner-item">
                                                <h6>Status</h6>
                                                <button className="btn-green">Completed</button>
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
                </div>
            </section>

            <Modal className='createbasic-modal global-modal-style createtask-modal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="inner-content">
                        <div className="option-field">
                            <label>Task Title</label>
                            <input type="text" placeholder="Enter task title...." />
                        </div>
                        <div className="option-field">
                            <label>DESCRIPTION</label>
                            <textarea placeholder="Enter task description...."></textarea>
                        </div>
                    </div>
                    <div className="twice-btns">
                        <button onClick={handleClose} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
                        <button onClick={() => {
                            handleClose();
                            handleShowtask();
                        }} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="createdsuccess-modal global-modal-style" show={showtask} onHide={handleClosetask} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create New task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="task-created">
                        <img src="\generalassets\icons\tasksuccessfulllycreated.png" alt="img" className="img-fluid" />
                        <h6>tASK SUCCESSFULLY CREATED</h6>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateOperation
