import React, { useState } from "react";
import "../../../style.scss";
import { Link } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notificationIcon.svg";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import mobileLogo from "../../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';

const GeneralHeader = ({ routes, setroute, indexwait, handleShow }) => {

  const [showtask, setShowtask] = useState(false);
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
      <div
        className={
          indexwait === 0
            ? "home-headed-username Header-wrapper"
            : "home-headed-username-none Header-wrapper"
        }
      >
        <div className="home-headed-username">
          <div className="mobile-logo">
            <Link to={"/soldier"}>
              <img src={mobileLogo} alt="mobileLogo" />
            </Link>
          </div>
          {indexwait === 0 ? (
            <div className="soldier-name">
              <h4>Welcome general, </h4>
              <p>your army awaits your orders</p>
            </div>
          ) : null}
          {indexwait === 2 ? (
            <>
              {
                routes ?
                  <button onClick={() => setroute(!routes)} className="btn-goback"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button> :
                  <div className="soldier-name">
                    <h4>Operations</h4>
                    <p>VIEW AND complete operations</p>
                  </div>
              }
            </>
          ) : null}
          {indexwait === 3 ? (
                  <div className="soldier-name">
                    <h4>Proof of Work</h4>
                    <p>approve and reject TASKS pow of army</p>
                  </div>
          ) : null}
        </div>
        <div className="header-buttons">
          {
            indexwait === 0 ?
              <>
                <button className="create-squad-btn display-none-in-mobile" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_260_1810)">
                      <path
                        d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                        fill="#81828A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_260_1810">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Create Operation</span>
                </button>
                <button className="create-squad-btn display-none-in-mobile" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_260_1810)">
                      <path
                        d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                        fill="#81828A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_260_1810">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Create Task</span>
                </button>
              </>
              : ""
          }
          {
            indexwait === 1 ?
              <>
                <button onClick={handleShowtask} className="create-squad-btn display-none-in-mobile" >
                  <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                  <span> Create Task</span>
                </button>
              </>
              : ""
          }
          {
            indexwait === 2 ?
              <>
                {
                  !routes ? <button onClick={() => { setroute(!routes); console.log("create operations: ", routes); }} className="create-squad-btn display-none-in-mobile" >
                    <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                    <span> Create Operation</span>
                  </button> : <button className="btn-save-changes display-none-in-mobile" >
                    <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                    <span> Save Changes</span>
                  </button>
                }

              </>
              : ""
          }
          <button className="toggle-menu-btn" onClick={handleShow}>
            <img src={menuIcon} alt="menuIcon" />
          </button>
        </div>
      </div>


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
            <button onClick={handleClosetask1} className="btn-cancel">Cancel</button>
            <button onClick={() => {
              handleClosetask1();
              handleShowtask3();
            }} className="btn-create">CREATE TASK</button>
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
            <button onClick={handleClosetask2} className="btn-cancel">Cancel</button>
            <button onClick={() => {
              handleClosetask2();
              handleShowtask3();
            }} className="btn-create">CREATE TASK</button>
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
  );
};

export default GeneralHeader;
