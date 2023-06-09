import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const AnnouncementModals = ({showannounce, setShowannounce}) => {
    const handleCloseannounce = () => setShowannounce(false);
    const handleShowannounce = () => setShowannounce(true);
  
    const [showannounce1, setShowannounce1] = useState(false);
    const handleCloseannounce1 = () => setShowannounce1(false);
    const handleShowannounce1 = () => setShowannounce1(true);
  return (
    <>
      
      {/* announcement modal here ........................ */}

      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showannounce} onHide={handleCloseannounce} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>RECIPIENT</label>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Recipient
                  <img src="\generalassets\icons\arrow-down.svg" alt="img" className='img-fluid' />
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Major Generals</a></li>
                  <li><a class="dropdown-item" href="#">Colonels</a></li>
                  <li><a class="dropdown-item" href="#">Majors</a></li>
                  <li><a class="dropdown-item" href="#">All Soldiers</a></li>
                </ul>
              </div>
            </div>
            <div className="option-field">
              <label>MESSAGE</label>
              <textarea placeholder="Write your message...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleCloseannounce} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={() => {
              handleCloseannounce();
              handleShowannounce1();
            }} className="btn-pinkk"><img src="\generalassets\icons\send.svg" alt="img" className='img-fluid' />Send</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showannounce1} onHide={handleCloseannounce1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-created">
            <img src="\generalassets\other-imgs\announcement.svg" alt="img" className="img-fluid" />
            <h6>ANNOUNCEMENT SENT SUCCESSFULLY</h6>
          </div>

        </Modal.Body>
      </Modal>

    </>
  )
}

export default AnnouncementModals
