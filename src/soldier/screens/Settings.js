import React, { useState } from 'react'
import "./settings.scss"
import Modal from 'react-bootstrap/Modal';

const Settings = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>settings</h6>
          <p>Change you nickname and link social accounts</p>
        </div>
      </div>
      <section className="settings border-grad1">
           <div className="parent">
            <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Nick Name</h6>
                    <p>Umar_x2jz</p>
                </div>
                <a style={{cursor: "pointer"}} onClick={handleShow}><img src="\assets\edit-btn.svg" alt="img" className='img-fluid' /></a>
            </div>
            <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Twitter</h6>
                    <p>Not Linked</p>
                </div>
               <button className='btn-linkk'>Link</button>
            </div>
            <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Discord</h6>
                    <p>umar_x2jz./discord</p>
                </div>
              <button className='btn-unlink'>Unlink</button>
            </div>
           </div>
      </section>

      
      <Modal className='editname-modal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit nickname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="option-field">
            <label>Nickname</label>
            <input type="text" placeholder='Enter Your Nick Name' />
          </div>
          <button className='btn-save'>Save</button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Settings
