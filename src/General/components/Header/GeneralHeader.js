import React, { useState } from "react";
import "../../../style.scss";
import { Link } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notificationIcon.svg";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import mobileLogo from "../../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';

const GeneralHeader = ({ routes, setroute, routeshome, setroutehome, indexwait, handleShow, routesarmy, setroutearmy, setShowtask, showtask, showannounce, setShowannounce, showfaq, setShowfaq }) => {
  let user1 = localStorage.getItem("user");
  user1 = JSON.parse(user1);
  console.log("sdsadsada",user1)
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
            <>
              {
                routeshome ?
                  <button onClick={() => setroutehome(!routeshome)} className="btn-goback"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button> :
                  <div className="soldier-name">
                    <h4>Welcome {user1?.rank?.name},</h4>
                    <p>your army awaits your orders</p>
                  </div>
              }
            </>
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
                  "":
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
          {indexwait === 5 || indexwait === 9 ? (
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
          {/* {indexwait === 6 || indexwait === 10 ? (
            <div className="soldier-name">
              <h4>Army Forum</h4>
              <p>Engage with your army</p>
            </div>
          ) : null} */}
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
        <div className="header-buttons" style={{maxWidth: "360px", width: "100%", justifyContent: "flex-end"}}>
          {
            indexwait === 0 ?
              <>
                {!routeshome ? <> 
                {/* <button style={{maxWidth: "171px", width: "100%"}} onClick={() => { setroutehome(!routeshome); }} className="create-op-btn display-none-in-mobile" >
                  <img src="\generalassets\icons\createoperation.svg" alt="img" className="img-fluid me-2" />
                  <span> Create Operation</span>
                </button> */}
                  <button style={{maxWidth: "171px", width: "100%"}} onClick={setShowtask} className="create-squad-btn display-none-in-mobile" >
                    <img src="\generalassets\icons\create-task.svg" alt="img" className="img-fluid me-2" />
                    <span> Create Task</span>
                  </button> </> : 
                  ""
                //   <button  className="savechange-btn disabled display-none-in-mobile" >
                //   <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                //   <span> Save Changes</span>
                // </button>
                }
              </>
              : ""
          }
          {
            indexwait === 1 ?
              <>
                <button onClick={setShowtask} className="create-squad-btn display-none-in-mobile" >
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
                  !routes && <button onClick={() => { setroute(!routes); }} className="create-squad-btn display-none-in-mobile" >
                    <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                    <span> Create Operation</span>
                  </button>
                }
              </>
              : ""
          }
          {
            indexwait === 4 ?
              <button onClick={setShowannounce} className="create-squad-btn display-none-in-mobile" >
                <img src="\generalassets\icons\announcement.svg" alt="img" className="img-fluid me-1" />
                <span> Create Announcement</span>
              </button>

              : ""
          }
          {
            indexwait === 8 ?
              <button onClick={setShowfaq} className="create-squad-btn display-none-in-mobile" >
                <img src="\assets\add-task.svg" alt="img" className="img-fluid me-1" />
                <span> Create FAQ</span>
              </button>

              : ""
          }
          {/* {
            indexwait === 6 || indexwait === 10 ?
              <button className="create-squad-btn" data-bs-toggle="modal" data-bs-target="#exampleModall">
                <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                <span>Start a new topic</span>
              </button>

              : ""
          } */}
          <button className="toggle-menu-btn" onClick={handleShow}>
            <img src={menuIcon} alt="menuIcon" />
          </button>
        </div>
      </div>
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
