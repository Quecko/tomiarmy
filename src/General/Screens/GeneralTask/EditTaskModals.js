import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const EditTaskModals = ({showtaskdetail, setShowtaskdetail, showtaskedit, setShowtaskedit}) => {
    const handleClosetaskdetail = () => setShowtaskdetail(false);
    const handleClosetaskedit = () => setShowtaskedit(false);


    const [showtasksuccess, setShowtasksuccess] = useState(false);
    const handleClosetasksuccess = () => setShowtasksuccess(false);
  
  
  return (
    <>
        <Modal className='detailmodal' show={showtaskdetail} onHide={handleClosetaskdetail} centered>
          <Modal.Header closeButton>
            <Modal.Title>task details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='innercard'>
              <p className='head'>Task Title</p>
              <h6 className='head1'>Like our facebook page before 10 May 2023</h6>
              <h3 className='discription'>Task Description</h3>
              <h6 className='head1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</h6>
              <div className='parent'>
                <div className='left'>
                  <p className='link'>Related link</p>
                  <h6 className='point underliness'>www.google.co.il</h6>
                </div>
                <div className='right'>
                  <p className='link'>Points</p>
                  <h6 className='point'>1,000,000</h6>
                </div>
              </div>
              <div className='parent mt-3'>
                <div className='left'>
                  <p className='link'>Start Date</p>
                  <h6 className='point'>04/05/2023</h6>
                </div>
                <div className='right'>
                  <p className='link'>End Date</p>
                  <h6 className='point'>05/05/2023</h6>
                </div>
              </div>
              <p className='attachment'>05/05/2023</p>
              <div className='taskdetail'>

                <p>   <img src='\Group.svg' alt='img' className='img-fluid' />task-detail.mp4</p>
              </div>
              <p className='link'>Image</p>
              <img src='\picframe.png' alt='img' className='img-fluid' />
            </div>
            <div className='endbtn'>
              <button className='btn-blackk'><span><img src='\generalassets\icons\btn-delete.svg' alt='img' className='img-fluid' /></span>Delete</button>
              <button className='btn-pinkk' onClick={() => {
                setShowtaskedit(true);
                handleClosetaskdetail();
                
              }}> <img src="\generalassets\icons\edit-task.svg" alt="img" className='img-fluid me-2' /> Edit</button>
            </div>
          </Modal.Body>

        </Modal> 

        <Modal className="createbasic-modal global-modal-style" show={showtaskedit} onHide={handleClosetaskedit} centered>
        <Modal.Header closeButton>
          <Modal.Title>EDIT task</Modal.Title>
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
            <button onClick={handleClosetaskedit} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={() => {
              handleClosetaskedit();
              setShowtasksuccess(true);
            }} className="btn-pinkk"><img src="\generalassets\icons\save-change.svg" alt="img" className='img-fluid' />SAVE CHANGES</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showtasksuccess} onHide={handleClosetasksuccess} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Save Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-created">
            <img src="\generalassets\icons\tasksuccessfulllycreated.png" alt="img" className="img-fluid" />
            <h6>Save Changes SUCCESSFULLY Done</h6>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default EditTaskModals
