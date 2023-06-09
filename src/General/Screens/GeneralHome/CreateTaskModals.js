import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const CreateTaskModals = ({showtask, setShowtask}) => {

    const handleClosetask = () => setShowtask(false);
    const handleShowtask = () => setShowtask(true);
  
    const [showtask1, setShowtask1] = useState(false);
    const handleClosetask1 = () => setShowtask1(false);
    const handleShowtask1 = () => setShowtask1(true);
  
    const [showtask2, setShowtask2] = useState(false);
    const handleClosetask2 = () => setShowtask2(false);
    const handleShowtask2 = () => setShowtask2(true);
  
    const [showtask3, setShowtask3] = useState(false);
    const handleClosetask3 = () => setShowtask3(false);
    const handleShowtask3 = () => setShowtask3(true);
  return (
    <>
      
      {/* general task all modals here................................. */}
      <Modal className="createtask-modal global-modal-style" show={showtask} onHide={handleClosetask} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={() => {
            handleClosetask();
            handleShowtask1();
          }} className="border-grad"><img src="\generalassets\icons\basictask.svg" alt="img" className="img-fluid me-2" />Basic Task</button>
          <button onClick={() => {
            handleClosetask();
            handleShowtask2();
          }} className="border-grad"><img src="\generalassets\icons\socialtask.svg" alt="img" className="img-fluid me-2" />Social Task</button>
        </Modal.Body>
      </Modal>

      <Modal className="createbasic-modal global-modal-style" show={showtask1} onHide={handleClosetask1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Basic task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="twice-field">
              <div className="option-field">
                <label>Task Title</label>
                <input type="text" placeholder="Enter task title...." />
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
                <label>Related link</label>
                <input type="text" placeholder="Enter Related link..." />
              </div>
            </div>
            <div className="option-field">
              <label>DESCRIPTION</label>
              <textarea placeholder="Enter task description...."></textarea>
            </div>
            <div className="option-field">
              <label>Add Attachment</label>
              <div className="choose">
                <label htmlFor="upload" className="btn-choose">Choose</label>
                <h6>No file Selected</h6>
              </div>
            </div>
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
          <div className="twice-btns">
            <button onClick={handleClosetask1} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={() => {
              handleClosetask1();
              handleShowtask3();
            }} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createbasic-modal global-modal-style" show={showtask2} onHide={handleClosetask2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Social task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="twice-field">
              <div className="option-field">
                <label>Task Title</label>
                <input type="text" placeholder="Enter task title...." />
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
                <label>Related link</label>
                <input type="text" placeholder="Enter Related link..." />
              </div>
            </div>
            <div className="twice-field">
              <div className="option-field">
                <label>Hashtag</label>
                <input type="text" placeholder="Enter Hashtag...." />
              </div>
              <div className="option-field">
                <label>Mention</label>
                <input type="text" placeholder="Mention" />
              </div>
            </div>
            <div className="option-field">
              <label>DESCRIPTION</label>
              <textarea placeholder="Enter task description...."></textarea>
            </div>
            <div className="option-field">
              <label>Add Attachment</label>
              <div className="choose">
                <label htmlFor="upload" className="btn-choose">Choose</label>
                <h6>No file Selected</h6>
              </div>
            </div>
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
          <div className="twice-btns">
            <button onClick={handleClosetask2} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={() => {
              handleClosetask2();
              handleShowtask3();
            }} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showtask3} onHide={handleClosetask3} centered>
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

export default CreateTaskModals
