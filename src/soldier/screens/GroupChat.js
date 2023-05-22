import React, { useState } from 'react'
import "./groupchat.scss"
import EmojiPicker from 'emoji-picker-react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const GroupChat = () => {
  const [show, setshow] = useState(false);


  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
    <section className="group-chat">
      <div className="row">
        <div className="col-xl-9 col-12 p-0 ordersm-2">
          <div className="chat-section border-grad1">
            <div className="chat-heading">
              <h6>Chat</h6>
            </div>
            <div className="chat-box">
              <div className="chat-inside">
                <div className="client-side">
                  <div className="upper-items">
                    <div className="twicee">
                      <div className="title-client">
                        <div className="profile">
                          <img src="\assets\profile-icon.svg" alt="img" className='img-fluid' />
                        </div>
                        <h6>John_Doe_04 </h6>
                      </div>
                      <div className="title-client">
                        <img src="\assets\private-rank.svg" alt="img" className='img-fluid' />
                        <h6>Private  <span>15:21</span></h6>
                      </div>
                    </div>
                    <div className="message-text">
                      <p>Laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
                <div className="client-side">
                  <div className="upper-items">
                    <div className="twicee">
                      <div className="title-client">
                        <div className="profile">
                          <img src="\assets\profile-icon.svg" alt="img" className='img-fluid' />
                        </div>
                        <h6>John_Doe_04 </h6>
                      </div>
                      <div className="title-client">
                        <img src="\assets\private-rank.svg" alt="img" className='img-fluid' />
                        <h6>Private  <span>15:21</span></h6>
                      </div>
                    </div>
                    <div className="message-text-pdf">
                      <div className="pdf-div">
                        <img src="\assets\pdf-icon.svg" alt="img" className='img-fluid' />
                        <div className="inner-text">
                          <h6>Tomi-Whitepaper.pdf</h6>
                          <p>5.3mb</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-side">
                  <div className="upper-items">
                    <div className="twicee">
                      <div className="title-client">
                        <h6>You </h6>
                        <div className="profile">
                          <img src="\assets\profile-icon.svg" alt="img" className='img-fluid' />
                        </div>
                      </div>
                      <div className="title-client">
                        <h6><span>15:21</span>Private </h6>
                        <img src="\assets\private-rank.svg" alt="img" className='img-fluid' />
                      </div>
                    </div>
                    <div className="message-text">
                      <p>Laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
                <div className="client-side">
                  <div className="upper-items">
                    <div className="twicee">
                      <div className="title-client">
                        <div className="profile">
                          <img src="\assets\profile-icon.svg" alt="img" className='img-fluid' />
                        </div>
                        <h6>John_Doe_04 </h6>
                      </div>
                      <div className="title-client">
                        <img src="\assets\private-rank.svg" alt="img" className='img-fluid' />
                        <h6>Private  <span>15:21</span></h6>
                      </div>
                    </div>
                    <div className="img-area">
                      <img src="\assets\mesg-img.png" alt="img" className='img-fluid' />
                    </div>
                  </div>
                </div>
                <div className="my-side">
                  <div className="upper-items">
                    <div className="twicee">
                      <div className="title-client">
                        <h6>You </h6>
                        <div className="profile">
                          <img src="\assets\profile-icon.svg" alt="img" className='img-fluid' />
                        </div>
                      </div>
                      <div className="title-client">
                        <h6><span>15:21</span>Private </h6>
                        <img src="\assets\private-rank.svg" alt="img" className='img-fluid' />
                      </div>
                    </div>
                    <div className="message-text">
                      <p>Laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-side">
                <div className="option-field">
                  <input type="text" placeholder='Write your message...' />
                </div>
                <div className="right-btns">
                  <label htmlFor='upload'><img src="\assets\file-upload.svg" alt="img" className='img-fluid' /></label>
                  <input type="file" className='d-none' id='upload' />
                  <div className='emoji-picker'>
                    {
                      show && <div>
                        <EmojiPicker />
                      </div>
                    }
                    <a onClick={() => setshow(!show)}><img src="\assets\emoji.svg" alt="img" className='img-fluid' /></a>
                  </div>
                  <button className='btn-send' onClick={handleShow1}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-12 pe-0 padd-sm ordersm-1">
          <div className='members-section border-grad1'>
            <div className="tophead">
              <h6>Members <span>(192)</span></h6>
            </div>
            <div className="option-field">
              <img src="\assets\search-icon.svg" alt="img" className="img-fluid search-icon" />
              <input type="text" placeholder="Search members" />
            </div>
            <div className="bottom-table">
              <div className="upper-heading">
                <p>Nickname</p>
                <p>Rank</p>
              </div>
              <div className="bottom-fields">
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <Offcanvas className="member-offcanvas" show={show1} onHide={handleClose1} placement='bottom'>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='members-section'>
            <div className="tophead">
              <h6>Members <span>(192)</span></h6>
            </div>
            <div className="option-field">
              <img src="\assets\search-icon.svg" alt="img" className="img-fluid search-icon" />
              <input type="search" placeholder="Search members" />
            </div>
            <div className="bottom-table">
              <div className="upper-heading">
                <p>Nickname</p>
                <p>Rank</p>
              </div>
              <div className="bottom-fields">
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                </div>
                <div className="inner-item">
                  <h6>Umar_x2jz</h6>
                  <h6><img src="\polygon1.svg" alt="img" className="img-fluid me-2" />Sergeant</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\polygon2.svg" alt="img" className="img-fluid me-2" />Lieutenant</h6>
                </div>
                <div className="inner-item">
                  <h6>Umar_x2jz</h6>
                  <h6><img src="\polygon3.svg" alt="img" className="img-fluid me-2" />Captain</h6>
                </div>
                <div className="inner-item">
                  <h6>Sharjeel</h6>
                  <h6><img src="\polygon4.svg" alt="img" className="img-fluid me-2" />Major</h6>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

</>
  )
}

export default GroupChat