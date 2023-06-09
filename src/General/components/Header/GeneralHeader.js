import React, { useState } from "react";
import "../../../style.scss";
import { Link } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notificationIcon.svg";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import mobileLogo from "../../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';

const GeneralHeader = ({ routes, setroute, indexwait, handleShow, routesarmy, setroutearmy, setShowtask, showtask, showannounce, setShowannounce, showfaq, setShowfaq }) => {

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

  const handleCloseannounce = () => setShowannounce(false);
  const handleShowannounce = () => setShowannounce(true);

  const [showannounce1, setShowannounce1] = useState(false);
  const handleCloseannounce1 = () => setShowannounce1(false);
  const handleShowannounce1 = () => setShowannounce1(true);

  const handleClosefaq = () => setShowfaq(false);
  const handleShowfaq = () => setShowfaq(true);


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
              <h4>Welcome major general,  </h4>
              <p>your army awaits your orders</p>
            </div>
          ) : null}
          {indexwait === 1 ? (
            <div className="soldier-name">
              <h4>ALL TASKS </h4>
              <p>VIEW AND CREATE TASKS FOR YOUR ARMY</p>
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
          {indexwait === 4 ? (
            <div className="soldier-name">
              <h4>ANNOUNCEMENTS</h4>
              <p>VIEW AND CREATE ANNOUNCEMENTS FOR YOUR ARMY</p>
            </div>
          ) : null}
          {indexwait === 5 ? (
            <>
              {
                routesarmy ?
                  <button onClick={() => setroutearmy(!routesarmy)} className="btn-goback"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button> :
                  <div className="soldier-name">
                    <h4>Army</h4>
                    <p>view your army</p>
                  </div>
              }
            </>
          ) : null}
          {indexwait === 6 ? (
            <div className="soldier-name">
              <h4>Army Forum</h4>
              <p>Engage with your army</p>
            </div>
          ) : null}
          {indexwait === 7 ? (
            <div className="soldier-name">
              <h4>Bugs Report</h4>
              <p>View Bugs report</p>
            </div>
          ) : null}
          {indexwait === 8 ? (
            <div className="soldier-name">
              <h4>faqs</h4>
              <p>Create faqs for your army</p>
            </div>
          ) : null}
        </div>
        <div className="header-buttons">
          {
            indexwait === 0 ?
              <>
                <button onClick={() => { setroute(!routes); }} className="create-op-btn display-none-in-mobile" >
                  <img src="\generalassets\icons\createoperation.svg" alt="img" className="img-fluid me-2" />
                  <span> Create Operation</span>
                </button>
                <button onClick={handleShowtask} className="create-squad-btn display-none-in-mobile" >
                  <img src="\generalassets\icons\create-task.svg" alt="img" className="img-fluid me-2" />
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
                  !routes ? <button onClick={() => { setroute(!routes); }} className="create-squad-btn display-none-in-mobile" >
                    <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                    <span> Create Operation</span>
                  </button> : <button className="savechange-btn disabled display-none-in-mobile" >
                    <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                    <span> Save Changes</span>
                  </button>
                }
              </>
              : ""
          }
          {
            indexwait === 4 ?
              <button onClick={handleShowannounce} className="create-squad-btn display-none-in-mobile" >
                <img src="\generalassets\icons\announcement.svg" alt="img" className="img-fluid me-1" />
                <span> Create Announcement</span>
              </button>

              : ""
          }
          {
            indexwait === 8 ?
              <button onClick={handleShowfaq} className="create-squad-btn display-none-in-mobile" >
                <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                <span> Create FAQ</span>
              </button>

              : ""
          }
          {
            indexwait === 6 ?
              <button className="create-squad-btn" data-bs-toggle="modal" data-bs-target="#exampleModall">
                <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                <span>Start a new topic</span>
              </button>

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
            <h6>TASK SUCCESSFULLY CREATED</h6>
          </div>
        </Modal.Body>
      </Modal>

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
            <button onClick={handleCloseannounce} className="btn-cancel">Cancel</button>
            <button onClick={() => {
              handleCloseannounce();
              handleShowannounce1();
            }} className="btn-create">Send</button>
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
            <button onClick={handleClosefaq} className="btn-cancel">Cancel</button>
            <button className="btn-create">Create FAQ</button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="topicmodal">
        <div class="modal fade" id="exampleModall" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5>Start a New Topic</h5>
                <p>Title</p>
                <input type="text" placeholder="Enter Title...." />
                <p>Description</p>
                <textarea placeholder="Enter Description Url...."></textarea>
                <div className="twice-btn">
                  <button className="btn-cancel" data-bs-dismiss="modal" aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
                  <button className="btn-topic"> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Start a New Topic</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralHeader;
