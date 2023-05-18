import React, { useState } from 'react'
import "./groupchat.scss"
import EmojiPicker from 'emoji-picker-react';

const GroupChat = () => {
  const [show, setshow] = useState(false);
  return (
    <section className="group-chat">
      <div className="twice-items">
        <div className="chat-section">
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
                    show &&  <div>
                    <EmojiPicker />
                  </div>
                  }
                  <a href="#" onClick={()=> setshow(!show)}><img src="\assets\emoji.svg" alt="img" className='img-fluid' /></a>
                </div>
                <button className='btn-send'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupChat