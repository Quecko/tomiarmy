import React, { useEffect, useState } from 'react'
import "./chat.scss"
import EmojiPicker from 'emoji-picker-react';
import Picker from 'emoji-picker-react';
import Button from 'react-bootstrap/Button';
import { API_URL } from "../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from "moment";
import { Modal } from 'react-bootstrap';
import { io } from "socket.io-client";
import { useRef } from 'react';

const Chat = ({ setPage, page, setChat, chat, getChat, pages, message, setMessage }) => {

  let tok = localStorage.getItem("accessToken");
  const [show, setshow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [topuser, settopuser] = useState([]);
  const [image, setImage] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCloseImageModal = () => setShowImageModal(false);
  const [imageDetail, setImagedetail] = useState()
  let user = JSON.parse(localStorage.getItem("user"))
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji.emoji);
  };

  const chatSectionRef = useRef(null);
  useEffect(() => {
    // Scroll to the end of the chat section when the component mounts
    scrollToBottom();
  }, [chat]);

  const scrollToBottom = () => {
    // if (chatSectionRef.current) {
    chatSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // }
  };
  const handleScroll = () => {
    const container = chatSectionRef.current;
    let scrollTop = Math.abs(container.scrollTop);
    if (scrollTop + container.clientHeight >= container.scrollHeight - 1 && page != pages) {
      setPage(page + 1);
    }
  }
    // Function to reset scrollTop to zero
const resetScrollTop = () => {
  const container = chatSectionRef.current;
  container.scrollTop = 0;
}


  // get top user or member
  const gettopusers = async () => {
    var config = {
      method: "get",
      url: `${API_URL}/auth/users/squad-members?offset=1&limit=5&queryParam=Active Squad`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        settopuser(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const ImageHandleChange = (evt) => {
    const file = evt.target.files[0];
    if (file.size >= 15000000) {
      toast.error("File cannot be greater than 15mbs")
    } else {
      setImage(evt.target.files[0]);
      const file = evt.target.files[0]
      setUploadImage(file)
    }
  };

  // get top user or member
  const sendChat = async (e) => {
    e.preventDefault()
    if (message != '' || image!='' ) {
      if (!loading) {
        setLoading(true);
        var data = new FormData();
        if (message) {
          data.append("message", message)
        }
        if (uploadImage) {
          data.append("chatsImage", uploadImage)
        }
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
          method: "post",
          url: `${API_URL}/chats/group-messages/general-chat`,
          data: data
        };
        axios(config)
          .then(function (response) {
            if (response?.status === 201) {
              // getChat()
              scrollToBottom()
              resetScrollTop()
              setMessage('')
              setImage('')
              setUploadImage('')
            }
            // setChat(response?.data?.data?.groupMessages);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
    // else{
    //   toast.error('please write some thing', {
    //     position: "top-right",
    //     autoClose: 2000,
    //   });
    // }
  }

  useEffect(() => {
    gettopusers()
    // getChat()
  }, [])

  const showImage = (elem) => {
    setShowImageModal(true)
    setImagedetail(elem)
  }

  const clearImage = () => {
    setImage('')
    setUploadImage('')
  }


  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile forchatgroup" >
        <div className="inner-heading">
          <h6>Group Chat</h6>
          <p>Chat with your army</p>
        </div>
        <a onClick={handleShow1}>View All Members <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
      </div>
      <section className="group-chat" >
        <div className="row">
          <div className="col-xl-12 col-12 p-0 ordersm-2">
            <div className='chat-section sdsdsdsdsd'>
              <div className="chat-heading ">
                <h6>Chat</h6>
              </div>
            </div>
            <div className="chat-section border-grad1" ref={chatSectionRef} onScroll={handleScroll} >

              <div className="chat-box">
                <div className="chat-inside">
                  {chat?.map?.((elem, index) => {
                    let createdate = new Date(elem?.createdAt);
                    const createDate = moment(createdate).format("DD-MM-YYYYY hh:mm:ss a");
                    var extension = elem?.media?.split('.').pop();
                    var result = elem?.media?.split("_")?.pop();
                    // var allowedExtensionsImage = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                    // var allowedExtensionsPdf = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
                    // if(allowedExtensionsImage.exec(elem?.media)){
                    //   return true
                    // }
                    // else if(allowedExtensionsPdf.exec(elem?.media)){
                    //   return false
                    // }
                    return (
                      <>
                        {elem?.user?.walletAddress === user?.walletAddress ?
                          <div key={index} className="my-side">
                            <div className="upper-items">
                              <div className="twicee">
                                <div className="title-client">
                                  <h6>You </h6>
                                  <div className="profile">
                                    <img src={elem?.user?.profileImage} alt="img" className='img-fluid' />
                                  </div>
                                </div>
                                <div className="title-client">
                                  <h6><span>{createDate}</span>{elem?.user?.rank?.name} </h6>
                                  <img src={elem?.user?.rank?.icon} height='42px' width='42px' alt="img" className='img-fluid' />
                                </div>
                              </div>
                              {elem?.message &&
                                <div className="message-text">
                                  <p>{elem?.message}</p>
                                </div>
                              }
                            </div>
                            {extension === 'jpg' || extension === 'png' || extension === 'jpeg' || extension === 'gif' || extension === 'webp' ?
                              <div className="wrapper-send-img">
                                <img className='asdsadasdasdsa' onClick={() => showImage(elem)} src={elem?.media} />
                              </div>
                              :
                              extension === 'doc' || extension === 'docx' || extension == 'pdf' || extension === 'txt' || extension === 'xml' || extension === 'xlsx' || extension === 'ppt' || extension === 'pptx' ?
                                <div className='scwv'>
                                  <a href={elem?.media} target='_blank'>{result ? result : ''}</a>
                                </div>
                                :
                                extension === 'mp4' || extension === 'webm' || extension === 'mov' || extension === 'wmv'
                                  || extension === 'flv' || extension === 'mkv' ?
                                  <div className='scwv'>
                                    <video className='asdsadasdasdsas' controls>
                                      <source src={elem?.media} type="video/mp4" />
                                    </video>
                                  </div> :
                                  extension === 'mp3' || extension === 'wav' ||
                                    extension === 'mpeg' || extension === 'ogg' || extension === 'webm' ?
                                    <div className='scwv'>
                                      <audio width="300" height="32" controls>
                                        <source src={elem?.media} />
                                      </audio>
                                    </div>
                                    :
                                    ""
                            }

                          </div>
                          :
                          <div className="client-side" >
                            <div className="upper-items">
                              <div className="twicee">
                                <div className="title-client">
                                  <div className="profile">
                                    <img src={elem?.user?.profileImage} alt="img" className='img-fluid' />
                                  </div>
                                  <h6>{elem?.user?.nickName}</h6>
                                </div>
                                <div className="title-client">
                                  <img src={elem?.user?.rank?.icon} height='42px' width='42px' alt="img" className='img-fluid' />
                                  <h6>{elem?.user?.rank?.name}  <span>{createDate}</span></h6>
                                </div>
                              </div>
                              {elem?.message &&
                                <div className="message-text">
                                  <p>{elem?.message}</p>
                                </div>
                              }
                            </div>
                            {extension === 'jpg' || extension === 'png' || extension === 'jpeg' || extension === 'gif' || extension === 'webp' ?
                              <div className="wrapper-send-img">
                                 <img className='asdsadasdasdsa' onClick={() => showImage(elem)} src={elem?.media} />
                              </div>
                              :
                              extension === 'doc' || extension === 'docx' || extension == 'pdf' || extension === 'txt' || extension === 'xml' || extension === 'xlsx' || extension === 'ppt' || extension === 'pptx' ?
                                <div className='scwv'>
                                  <a href={elem?.media} target='_blank'>{result ? result : ''}</a>
                                </div>
                                :
                                extension === 'mp4' || extension === 'webm' || extension === 'mov' || extension === 'wmv'
                                  || extension === 'flv' || extension === 'mkv' ?
                                  <div className='scwv'>
                                    <video className='asdsadasdasdsas' controls>
                                      <source src={elem?.media} type="video/mp4" />
                                    </video>
                                  </div> :
                                  extension === 'mp3' || extension === 'wav' ||
                                    extension === 'mpeg' || extension === 'ogg' || extension === 'webm' ?
                                    <div className='scwv'>
                                      <audio wwidth="300" height="32" controls>
                                        <source src={elem?.media} />
                                      </audio>
                                    </div>
                                    :
                                    ""
                            }
                          </div>
                        }
                      </>
                    )
                  })}
                  {/* <div className="client-side">
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
                  </div> */}
                </div>

              </div>

            </div>
            <div className='chat-section dfdsfsfdsfsdfsdfsdf'>
            <form onSubmit={(e)=>sendChat(e)}>
              <div className="bottom-side">
                <div className="option-field">
                  <input type="text" placeholder='Write your message...' value={message} onChange={(e) => handleInputChange(e)} />
                </div>
               
              
               <div className="right-btns">
                  <label htmlFor='upload' style={{ cursor: "pointer" }}>
                    <img src="\assets\file-upload.svg" alt="img" className='img-fluid set-hw-icon' />
                  </label>
                  <input type="file" className='d-none' id='upload'
                    onChange={(e) => ImageHandleChange(e)}
                    accept="audio/mp3, audio/wav, audio/mpeg, audio/ogg, audio/webm,
                    video/mp4, video/webm, video/mov, video/wmv, video/flv, video/avi, video/mkv,
                    image/png, image/jpg,image/jpeg, image/gif, image/webp,
                   .xlsx,.xls,.doc,.docx,.txt,.pdf,.ppt, .pptx" />
                    {/* <input type="file" className='d-none' id='upload' onChange={(e) => ImageHandleChange(e)} /> */}
                    <div className='emoji-picker'>
                      {
                        show && <div>
                          <Picker onEmojiClick={handleEmojiClick} />
                        </div>
                      }
                      <a style={{ cursor: "pointer" }} onClick={() => setshow(!show)}><img src="\assets\emoji.svg" alt="img" className='img-fluid set-hw-icon' /></a>
                    </div>
                    <button className='btn-send' type='submit' disabled={loading} >{loading ? 'sending...' : 'send'}</button>
                    <button className='chat-mobile-btn d-none' type='submit' disabled={loading}><img src="\assets\chat-msg-mobile.png" alt="img" className='img-fluid' /></button>
                  </div>
                </div>
              {image &&
                  (image?.name?.split('.').pop() === 'png'
                    || image?.name?.split('.').pop() === 'jpg' || image?.name?.split('.').pop() === 'jpeg' ||
                    image?.name?.split('.').pop() === 'gif' || image?.name?.split('.').pop() === 'webp')
                  &&
                  <div className='set-inner-upload-item'>
                    <div className="upload-single-item">
                    <img
                      src={image ? URL?.createObjectURL(image) : ""}
                      alt="img"
                      className='fvrbrt'
                    />
                    <img onClick={clearImage} src="\generalassets\icons\cancel-icon.svg" alt="img" className='close-icon-set' />
                    </div>
                  </div>
                }
                {image &&
                  (image?.name?.split('.').pop() === 'mp3' || image?.name?.split('.').pop() === 'wav'
                    || image?.name?.split('.').pop() === 'mpeg' || image?.name?.split('.').pop() === 'ogg'
                    || image?.name?.split('.').pop() === 'webm' ||
                    image?.name?.split('.').pop() === 'mp4' || image?.name?.split('.').pop() === 'webm'
                    || image?.name?.split('.').pop() === 'mov' || image?.name?.split('.').pop() === 'wmv'
                    || image?.name?.split('.').pop() === 'avi' || image?.name?.split('.').pop() === 'mkv' ||
                    image?.name?.split('.').pop() === 'xlsx' || image?.name?.split('.').pop() === 'xls'
                    || image?.name?.split('.').pop() === 'doc' || image?.name?.split('.').pop() === 'docx'
                    || image?.name?.split('.').pop() === 'txt' || image?.name?.split('.').pop() === 'pdf'
                    || image?.name?.split('.').pop() === 'ppt' || image?.name?.split('.').pop() === 'pptx'
                  )
                  &&
                  <div className='set-inner-upload-item'>
                    <div className="upload-single-item ifpdffile">
                    <div className="upload-pdf">
                      <img src="\assets\pdf-icon-new.svg" alt="img" className='img-fluid' />
                      <div className="inner-text">
                        <h6>{image?.name}</h6>
                        <p>PDF</p>
                      </div>
                    </div>
                    <img onClick={clearImage} src="\generalassets\icons\cancel-icon.svg" alt="img" className='close-icon-set' />
                    </div>
                  </div>
                }
              </form>
            </div>

          </div>
          {/* <div className="col-xl-3 col-12 pe-0 padd-sm ordersm-1">
            <div className='members-section border-grad1 display-none-in-mobile'>
              <div className="tophead">
                <h6>Members <span>({topuser?.count})</span></h6>
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

                  {topuser?.users?.map((elem) => {
                    return (
                      <div className="inner-item">
                        <h6>{elem?.nickName}</h6>
                        <h6><img src={elem?.rank?.icon} alt="img" className="img-fluid me-2" style={{ width: "50px", height: "50px" }} />{elem?.rank?.name}</h6>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </section>
      {/* <Offcanvas className="member-offcanvas" show={show1} onHide={handleClose1} placement='bottom'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='members-section'>
            <div className="tophead">
              <h6>Members <span>({topuser?.count})</span></h6>
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
                {topuser?.users?.map((elem) => {
                  return (
                    <div className="inner-item">
                      <h6>{elem?.nickName}</h6>
                      <h6><img src={elem?.rank?.icon} alt="img" className="img-fluid me-2" style={{ width: "50px", height: "50px" }} />{elem?.rank?.name}</h6>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}

      <Modal className='detailmodal' show={showImageModal} onHide={handleCloseImageModal} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='innercard'>
            {imageDetail?.media && (
              <>
                {/* <p className='link'>Image</p> */}
                <img src={imageDetail?.media} alt='img' className='img-fluid scwcwec' />
              </>
            )}
          </div>
          <div className='endbtn'>
            <button className='btn-blackk' onClick={() => { handleCloseImageModal() }}><span></span>cancel</button>
            <button className='btn-pinkk' onClick={() => { handleCloseImageModal() }}>ok</button>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Chat