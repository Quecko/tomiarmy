import React, { useState } from "react";
import "../../style.scss";
import { Link, useLocation } from "react-router-dom";
import notificationIcon from "../../assets/icons/notificationIcon.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import mobileLogo from "../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';

const Header = ({ routes, setroute }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("🚀 ~ file: Header.js:16 ~ Header ~ currentPath:", currentPath);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const sidebar = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const [profilePicture, setProfilePicture] = useState(null);
  const setProfilePic = (evt) => {
    setProfilePicture(evt.target.files[0]);
  }
  return (
    <>
      <div
        className={
          currentPath === "/"
            ? "home-headed-username Header-wrapper"
            : "home-headed-username-none Header-wrapper"
        }
      >
        <div className="home-headed-username">
          <div className="mobile-logo">
            <Link to={"/"}>
              <img src={mobileLogo} alt="mobileLogo" />
            </Link>
          </div>
          {currentPath === "/" ? (
            <div className="soldier-name">
              <h4>Welcome BATMAN,</h4>
              <p>LET’S FIGHT FOR THE ARMY</p>
            </div>
          ) : null}
          {currentPath === "/tasks" ? (
            <div className="soldier-name">
              <h4>ALL TASKS</h4>
              <p>VIEW AND complete TASKS</p>
            </div>
          ) : null}
          {currentPath === "/squad" ? (
            <div className="soldier-name">
              <h4>Your Squad</h4>
              <p>VIEW Your Squad</p>
            </div>
          ) : null}
          {currentPath === "/operations" ? (
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
          {currentPath === "/announcements" ? (
            <div className="soldier-name">
              <h4>announcements</h4>
              <p>view your announcements</p>
            </div>
          ) : null}
          {currentPath === "/forum" ? (
            <div className="soldier-name">
              <h4>Army Forum</h4>
              <p>Engage with your army</p>
            </div>
          ) : null}
        </div>
        <div className="header-buttons">
          {
            currentPath === "/" ?
              <>
                <button className="notification-btn">
                  <img src={notificationIcon} alt="notificationIcon" />
                </button>
                <button className="create-squad-btn" >
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
                  Create Squad
                </button>
              </>
              : ""
          }
          {
            currentPath === "/squad" ?
              <>
                <button className="create-squad-btn" onClick={handleShow1}>
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
                  Create Squad
                </button>
              </>
              : ""
          }
          {
            currentPath === "/forum" ?
              <>
                <button className="create-squad-btn" data-bs-toggle="modal" data-bs-target="#exampleModall">
                  <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                  Start a new topic
                </button>
              </>
              : ""
          }
          <button className="toggle-menu-btn" onClick={handleShow}>
            <img src={menuIcon} alt="menuIcon" />
          </button>

          <Offcanvas show={show} onHide={handleClose} className="menu-off-canvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="sidebar-column">
                <Sidebar sidebar={sidebar} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>create Squad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg'alt='img'className='img-fluid'/>
            {/* <p>Are you sure you want to leave this squad and create a new one?</p> */}
            <p>Are you sure you want to leave this squad?</p>
          </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow2}><img src='\up.svg'alt='img'className='img-fluid'/>Yes’ I am sure</button>
            </div>
          </Modal.Body>
        </Modal>

            
        <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
          <Modal.Header closeButton>
            <Modal.Title>
            create Squad
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>         
            <div className="upload-parent">
              <p className='uehyuj'>Upload Squad Symbol</p>
              <div className="upload uploadsss">
                {
                  profilePicture ? <label htmlFor="upload">
                    {" "}
                    <img
                      src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                      alt="img"
                      className="img-fluid"
                    />
                  </label> : <label htmlFor="upload">
                    {" "}
                    <img
                      src="\uploadimage.svg"
                      alt="img"
                      className="img-fluid"
                    />
                    <p className='dropimage'>Drop your image here, or<span>browse</span> </p>
                    <h6 className='support1'>Supports: JPG, JPEG, PNG</h6>
                    <p className='optimal'>Optimal Image size: 500x500 px</p>
                  </label>
                }

                <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

              </div>
            </div>
            <div className='maininput'>
              <p className="squad">Squad Name</p>
              <input type='text' placeholder='Enter Squad Name....' />
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow3}><img src='\add.svg'alt='img'className='img-fluid'/> Create Squad</button>
            </div>
          </Modal.Body>
        </Modal>

        
        <Modal className='detailmodal' show={show3} onHide={handleClose3} centered>
          <Modal.Header closeButton>
            <Modal.Title>
            Create Squad
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>

            <div className='arrowimg'>
              <img src='\Groupsquad.svg' alt='img' className='img-fluid' />
              <p>Squad successfully created</p>
            </div>

          </Modal.Body>

        </Modal>



      </div>
      <div className="topicmodal">
        <div class="modal fade" id="exampleModall" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h5>Start a New Topic</h5>
                <p>Title</p>
                <input type="text" placeholder="Title" />
                <p>Description</p>
                <textarea placeholder="Description"></textarea>
                <div className="twice-btn">
                  <button className="btn-cancel"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
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

export default Header;
