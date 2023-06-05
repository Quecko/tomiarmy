import React, { useState } from 'react'
import "./generaloperation.scss"
import Modal from 'react-bootstrap/Modal';

const CreateOperation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showtask, setShowtask] = useState(false);
    const handleClosetask = () => setShowtask(false);
    const handleShowtask = () => setShowtask(true);
    return (
        <>
            <section className="create-operation border-grad1">
                <div className="row">
                    <div className="col-xl-6 col-12 p-0 padd-sm">
                        <div className="createoperation-form">
                            <div className="twice-field">
                                <div className="option-field">
                                    <label>Operation Name</label>
                                    <input type="text" placeholder="Enter operation name...." />
                                </div>
                                <div className="option-field">
                                    <label>Reward Points</label>
                                    <input type="text" placeholder="Enter reward points...." />
                                </div>
                            </div>
                            <div className="twice-field">
                                <div className="option-field">
                                    <label>Expiration Date</label>
                                    <input type="date" placeholder="Select expiration date..." />
                                </div>
                                <div className="option-field">
                                    <label>TOMI Tokens</label>
                                    <input type="text" placeholder="Enter TOMI Tokens..." />
                                </div>
                            </div>
                            <div className="option-field mb-0">
                                <label>DESCRIPTION</label>
                                <textarea placeholder="Enter task description...."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 pe-0 padd-sm">
                        <div className="createoperation-form">
                            <div className="upload-field">
                                <p>Upload Image</p>
                                <div className="upload">
                                    <img src="\generalassets\icons\upload-icon.svg" alt="img" className="img-fluid" />
                                    <h6>Drop your image here, or <label htmlFor="upload">browse</label></h6>
                                    <p>Supports: JPG, JPEG, PNG</p>
                                    <input type="file" className="d-none" id="upload" />
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
                        <button onClick={handleShow} className="create-squad-btn display-none-in-mobile" >
                            <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                            <span> Create Task</span>
                        </button>
                    </div>
                </div>
                <div className="bottom-content border-grad1">
                    <div className="inner-field">
                        <p>Task</p>
                        <p>Date Created</p>
                        <p>Date Expires</p>
                        <p>Points</p>
                        <p>Actions</p>
                    </div>
                    <div className="middle-item">
                        <img src="\generalassets\other-imgs\creat-task.svg" alt="img" className='img-fluid' />
                        <h6>No task available for this operation.</h6>
                        <button className="create-squad-btn display-none-in-mobile" >
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
                        <button onClick={handleClose} className="btn-cancel">Cancel</button>
                        <button onClick={() => {
                            handleClose();
                            handleShowtask();
                        }} className="btn-create">CREATE TASK</button>
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
