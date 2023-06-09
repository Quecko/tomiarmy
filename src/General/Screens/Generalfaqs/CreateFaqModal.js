import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';

const CreateFaqModal = ({showfaq, setShowfaq}) => {
    const handleClosefaq = () => setShowfaq(false);
    const handleShowfaq = () => setShowfaq(true);
  return (
    <>
      
      {/* create faq modal here.................................... */}


      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showfaq} onHide={handleClosefaq} centered>
        <Modal.Header closeButton>
          <Modal.Title>create a new faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="option-field">
              <label>Description</label>
              <textarea placeholder="Enter Description Url...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosefaq} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Create FAQ</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateFaqModal
