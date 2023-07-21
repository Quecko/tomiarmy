import React, { useEffect, useState } from 'react'
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
const CreateOperation = ({ svaebutton, setroutehome, routeshome, setexpired, tasks, getData, call, operationdata, routes, setoperationdata, setroute }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setEditableTask(null)
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const [showtask, setShowtask] = useState(false);
    const handleClosetask = () => setShowtask(false);
    const handleShowtask = () => setShowtask(true);
    const [rend, setRend] = useState(false);
    const [indexid, setindexid] = useState(null)
    const [startDate, setStartDate] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [profileP, setProfileP] = useState();

    const [allFormData, setAllFormData] = useState({
        name: operationdata?.name,
        reward: operationdata?.reward,
        tomitoken: operationdata?.tomiToken,
        description: operationdata?.description,
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

    const [specification, setspecification] = useState
        (
            {
                name: "",
                description: ""
            }
        );

    const handleInputChange = (e) => {
        // let temp = specification
        // const { name, value } = e.target;
        // temp[name] = value
        // setspecification({ ...temp })
        setspecification({ ...specification, [e.target.name]: e.target.value })
    };

    const [editableTask, setEditableTask] = useState(null);
    const [subtask, setsubtask] = useState(operationdata?.tasksList ? operationdata?.tasksList : [])
    const createsub = () => {
        setsubtask([...subtask, { ...specification }])
        setShow(false)

    }
    const deletesubtask = (id) => {
        setsubtask(subtask.filter((elem, index) => index !== id))
    }

    function updatetask() {
        const index = subtask.findIndex((v, index) => index === indexid)
        const newSubtasks = subtask
        newSubtasks.splice(index, 1, specification)
        setsubtask(newSubtasks)
        setEditableTask(null)
        setShow(false)
    }

    function editVideo(id) {
        setindexid(id)
        const task = (subtask.find((elem, index) => index == id))
        setEditableTask(task)
        setShow(true)
    }

    useEffect(() => {
        if (editableTask) {
            setspecification(editableTask)
        }
    }, [editableTask])

    const Createoperation = async () => {
        let tok = localStorage.getItem("accessToken");
        var data1 = new FormData();
        data1.append("name", allFormData?.name)
        data1.append("reward", allFormData?.reward)
        data1.append("description", allFormData?.description)
        data1.append("tasks", JSON.stringify(subtask))
        if (allFormData?.tomitoken) {
            data1.append("tomiToken", allFormData?.tomitoken)
        }
        if (startDate) {
            data1.append("expirationDate", startDate.toISOString())
        }
        if (profileP) {
            data1.append("operationImage", profileP)
        }
        if (allFormData?.name != '') {
            if (allFormData?.reward != '') {
                if (allFormData?.description != '') {
                    if (startDate) {
                        if (profileP) {
                            if (allFormData?.tomitoken != '') {
                                var config = {
                                    method: "post",
                                    url: `${API_URL}/tasks/operations`,
                                    headers: {
                                        authorization: `Bearer ` + tok
                                    },
                                    data: data1,
                                };
                                axios(config)
                                    .then(function (response) {
                                        //   setLoader(false);
                                        getData()
                                        setoperationdata('')
                                        setroute(!routes)
                                        ClearAll();
                                        setProfileP(null);
                                        setProfilePicture(null)
                                        toast.success('Operation Created Successfully', {
                                            position: "top-right",
                                            autoClose: 2000,
                                        })
                                    })
                                    .catch(function (error) {
                                        //   setLoader(false);
                                        if (error.response.data.statusCode == 409) {
                                            toast.error('Tasks with this name already exist', {
                                                position: 'top-right',
                                                autoClose: 5000,
                                            });
                                        } else if (error.response.data.statusCode == 500) {
                                            toast.error('Something went wrong', {
                                                position: 'top-right',
                                                autoClose: 5000,
                                            });
                                        }
                                        else if (error.response.data.statusCode == 400) {
                                            toast.error('Validation Failed', {
                                                position: 'top-right',
                                                autoClose: 5000,
                                            });
                                        }
                                    });
                            }
                            else {
                                toast.error('Please Write TomiToken', {
                                    position: "top-right",
                                    autoClose: 2000,
                                });
                            }
                        }
                        else {
                            toast.error('Please Select Operation Image', {
                                position: "top-right",
                                autoClose: 2000,
                            });
                        }
                    }
                    else {
                        toast.error('Please Select Expiration Date', {
                            position: "top-right",
                            autoClose: 2000,
                        });
                    }
                }
                else {
                    toast.error('Please Write Description', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }
            }
            else {
                toast.error('Please Write Reward Points', {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
        }
        else {
            toast.error('Please Write Name of Task', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const editoperation = async () => {
        let tok = localStorage.getItem("accessToken");
        var data1 = new FormData();
        data1.append("name", allFormData?.name)
        data1.append("reward", allFormData?.reward)
        data1.append("description", allFormData?.description)
        data1.append("tasks", JSON.stringify(subtask))
        if (allFormData?.tomitoken) {
            data1.append("tomiToken", allFormData?.tomitoken)
        }
        if (startDate) {
            data1.append("expirationDate", startDate.toISOString())
        }
        if (profileP) {
            data1.append("operationImage", profileP)
        }
        if (allFormData?.name != '') {
            if (allFormData?.reward != '') {
                if (allFormData?.description != '') {
                    if (startDate) {
                        // if (profileP || profilePicture) {
                        if (allFormData?.tomitoken != '') {
                            var config = {
                                method: "patch",
                                url: `${API_URL}/tasks/operations/${operationdata?._id}`,
                                headers: {
                                    authorization: `Bearer ` + tok
                                },
                                data: data1,
                            };
                            axios(config)
                                .then(function (response) {
                                    //   setLoader(false);
                                    setexpired(false)
                                    if (call === true) {
                                        getData()
                                    }
                                    setoperationdata('')
                                    setroute(!routes)

                                    ClearAll();
                                    setProfileP(null);
                                    setProfilePicture(null)
                                    toast.success('Operation Created Successfully', {
                                        position: "top-right",
                                        autoClose: 2000,
                                    })

                                })
                                .catch(function (error) {
                                    //   setLoader(false);
                                    if (error.response.data.statusCode == 409) {
                                        toast.error('Tasks with this name already exist', {
                                            position: 'top-right',
                                            autoClose: 5000,
                                        });
                                    } else if (error.response.data.statusCode == 500) {
                                        toast.error('Something went wrong', {
                                            position: 'top-right',
                                            autoClose: 5000,
                                        });
                                    }
                                    else if (error.response.data.statusCode == 400) {
                                        toast.error('Validation Failed', {
                                            position: 'top-right',
                                            autoClose: 5000,
                                        });
                                    }
                                });
                        }
                        else {
                            toast.error('Please Write TomiToken', {
                                position: "top-right",
                                autoClose: 2000,
                            });
                        }
                    }
                    // else {
                    //     toast.error('Please Select Operation Image', {
                    //         position: "top-right",
                    //         autoClose: 2000,
                    //     });
                    // }
                    // }
                    else {
                        toast.error('Please Select Expiration Date', {
                            position: "top-right",
                            autoClose: 2000,
                        });
                    }
                }
                else {
                    toast.error('Please Write Description', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }
            }
            else {
                toast.error('Please Write Reward Points', {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
        }
        else {
            toast.error('Please Write Name of Task', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const backgo = () => {
        setexpired(false)
        setoperationdata('')
        setroutehome(!routeshome)
        setroute(!routes)
    }
    var tasklentthfind = tasks?.length

    return (
        <>
            <div className='alkdaskdasdasd'>
                <button className="btn-goback" onClick={() => backgo()}><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button>
                {operationdata == '' && tasklentthfind > 0 ?
                    (
                        <button className={subtask?.lenght > 0 ? "savechange-btn disabled display-none-in-mobile" : "savechange-btn disabled display-none-in-mobile"} >
                            <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                            <span>Create Operation</span>
                        </button>
                    )
                    :
                    operationdata == '' && tasklentthfind <= 0 ?
                        (
                            <button onClick={Createoperation} className={subtask?.lenght > 0 ? "savechange-btn disabled display-none-in-mobile" : "savechange-btn "} >
                                <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                                <span>Create Operation</span>
                            </button>
                        )
                        :
                        operationdata !== '' && tasklentthfind > 0 ?
                            (
                                <button onClick={editoperation} className={subtask?.lenght > 0 ? "savechange-btn" : "savechange-btn "} >
                                    <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                                    <span>Save Changes</span>
                                </button>
                            )
                            :
                            operationdata !== '' && tasklentthfind <= 0 ?
                                (
                                    <button onClick={Createoperation} className={subtask?.lenght > 0 ? "savechange-btn disabled display-none-in-mobile" : "savechange-btn "} >
                                        <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                                        <span>Save Changes</span>
                                    </button>
                                )
                                :
                                (
                                    <button onClick={Createoperation} className={subtask?.lenght > 0 ? "savechange-btn disabled display-none-in-mobile" : "savechange-btn "} >
                                        <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                                        <span>Create Operation</span>
                                    </button>
                                )
                }

            </div>
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
                                    <input value={allFormData?.reward} name="reward" onChange={handleChange} type="number" placeholder="Enter reward points...." />
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
                                    <input value={allFormData?.tomitoken} name="tomitoken" onChange={handleChange} type="number" placeholder="Enter TOMI Tokens..." />
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
                                    {profilePicture ?
                                        (
                                            <>
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
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                {
                                                    operationdata?.imageUrl ? <label htmlFor="upload" className="w-100 h-100">
                                                        {" "}
                                                        <img
                                                            src={operationdata?.imageUrl ? operationdata?.imageUrl : ""}
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
                                            </>
                                        )
                                    }

                                    {/* <img src="\generalassets\icons\upload-icon.svg" alt="img" className="img-fluid" />
                <h6><label >browse</label></h6>
                <p>Supports: JPG, JPEG, PNG</p> */}
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
                {subtask?.length > 0 ?

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
                                    {subtask?.map((elem, index) => {
                                        return (
                                            <tr>
                                                <td>{elem?.name}</td>
                                                <td>{elem?.description}</td>
                                                <td>
                                                    <div className="tbl-dropdown text-end">
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={dosts} alt="dosts" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="stats-dropdown-menu">
                                                                <div className="stats-dropdown-bg">
                                                                    <Dropdown.Item onClick={() => editVideo(index)}>
                                                                        <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                        Edit
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item onClick={() => deletesubtask(index)}>
                                                                        <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                        Delete
                                                                    </Dropdown.Item>
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
                                    <p>Task</p>
                                </div>
                                <Accordion>
                                    {subtask?.map((elem, index) => {
                                        return (
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>{elem?.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="inner-fields">
                                                        <div className="inner-item">
                                                            <h6>Description</h6>
                                                            <p>{elem?.description}</p>
                                                        </div>
                                                        {/* <div className="inner-item">
                                                        <h6>Points</h6>
                                                        <p>1,000,000</p>
                                                    </div>
                                                    <div className="inner-item">
                                                        <h6>Status</h6>
                                                        <button className="btn-green">Completed</button>
                                                    </div> */}
                                                        <div className="inner-item">
                                                            <h6>Actions</h6>
                                                            <div className="tbl-dropdown text-end">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle id="dropdown-basic">
                                                                        <img src={dosts} alt="dosts" />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="stats-dropdown-menu">
                                                                        <div className="stats-dropdown-bg">
                                                                            <Dropdown.Item onClick={() => editVideo(index)}>
                                                                                <img src="\generalassets\icons\detail.svg" alt="submitIcon" />
                                                                                Edit
                                                                            </Dropdown.Item>
                                                                            <Dropdown.Item onClick={() => deletesubtask(index)}>
                                                                                <img src="\generalassets\icons\checkmark.svg" alt="submitIcon" />
                                                                                Delete
                                                                            </Dropdown.Item>
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
                    :
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
                }
            </section>

            <Modal className='createbasic-modal global-modal-style createtask-modal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editableTask ? (
                        <div className="inner-content">
                            <div className="option-field">
                                <label>Task Title</label>
                                <input value={specification?.name} onChange={(e) => handleInputChange(e)} name="name" type="text" placeholder="Enter task title...." />
                            </div>
                            <div className="option-field">
                                <label>DESCRIPTION</label>
                                <textarea value={specification?.description} onChange={(e) => handleInputChange(e)} name="description" placeholder="Enter task description...."></textarea>
                            </div>
                        </div>
                    )
                        :
                        (
                            <div className="inner-content">
                                <div className="option-field">
                                    <label>Task Title</label>
                                    <input onChange={(e) => handleInputChange(e)} name="name" type="text" placeholder="Enter task title...." />
                                </div>
                                <div className="option-field">
                                    <label>DESCRIPTION</label>
                                    <textarea onChange={(e) => handleInputChange(e)} name="description" placeholder="Enter task description...."></textarea>
                                </div>
                            </div>
                        )}

                    {/* handleClose();
                            handleShowtask(); */}
                    <div className="twice-btns">
                        <button onClick={handleClose} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
                        {editableTask ? (
                            <button onClick={updatetask} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Edit Task</button>
                        ) : (
                            <button onClick={createsub} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
                        )}
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
                        <h6>TASK SUCCESSFULLY CREATED</h6>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateOperation
