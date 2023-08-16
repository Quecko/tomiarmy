import React, { useEffect, useState, useCallback } from 'react'
import "./settings.scss"
import Modal from 'react-bootstrap/Modal';
import { API_URL } from "../../utils/ApiUrl"
import axios from 'axios';
import { toast } from 'react-toastify';
import { TokenExpiredOrNot } from '../../utils/TokenExpiredOrNot';
import Loader from '../../hooks/loader'
import Cropper from "react-easy-crop";
import { showCroppedImage } from '../../utils/cropImage';

const Settings = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  const [nick, setNick] = useState(data?.nickName)
  const [loader, setLoader] = useState()
  let tok = localStorage.getItem("accessToken");
  const [showprofile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true)
  const [showForumDeleteModal, setShowForumDeleteModal] = useState(false);
  const handleCloseDeleteForum = () => setShowForumDeleteModal(false);
  const [profilePicture, setProfilePicture] = useState('');

  // const setProfilePic = (evt) => {
  //   setIsShown(true)
  //   setProfilePicture(evt.target.files[0]);
  // }

  // imaage crop
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [widthh, setWidthh] = useState(0)
  const [heightt, setHeightt] = useState(0)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(false);
  };
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIsShown(true)
      setProfilePicture(file);
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const [p, setP] = useState('')
  const getProfile = async () => {
    var config = {
      method: "get",
      url: `${API_URL}/auth/users/profile`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setP(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addNickName = async () => {
    // let t=TokenExpiredOrNot()
    // console.log('t',t)
    // if(t){
    if (nick != '') {
      setLoader(true)
      var config = {
        method: "patch",
        url: `${API_URL}/auth/users`,
        headers: {
          authorization: `Bearer ` + tok
        },
        data: {
          nickName: nick
        },
      };
      axios(config)
        .then(function (response) {
          const existingData = JSON.parse(localStorage.getItem('user'));
          existingData.nickName = response?.data?.data?.nickName
          const updatedData = JSON.stringify(existingData);
          localStorage.setItem('user', updatedData);
          setLoader(false);
          handleClose()
          toast.success('Update nick name successfully', {
            position: "top-right",
            autoClose: 2000,
          });
        })
        .catch(function (error) {
          console.log(error);
          setLoader(false);
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("user");
          // window.location.reload();
        });
    }
    // }
    // else{
    //   alert('token expired')
    // }
  }

  const addProfile = async () => {
    let tok = localStorage.getItem("accessToken");
    if (profilePicture != '') {
      setLoader(true)
      var data1 = new FormData();
      data1.append("userProfileImage", profilePicture)
      var config = {
        method: "patch",
        url: `${API_URL}/auth/users/profile-image`,
        headers: {
          authorization: `Bearer ` + tok
        },
        data: data1,
      };
      axios(config)
        .then(function (response) {
          handleCloseProfile()
          setProfilePicture('')
          // const existingData = JSON.parse(localStorage.getItem('user'));
          // existingData.nickName = response?.data?.data?.nickName
          // const updatedData = JSON.stringify(existingData);
          // localStorage.setItem('user', updatedData);
          getProfile()
          setLoader(false);
          handleClose()
          setCroppedImage('')
          toast.success('Update profile successfully', {
            position: "top-right",
            autoClose: 2000,
          });
        })
        .catch(function (error) {
          console.log(error);
          setLoader(false);
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("user");
          // window.location.reload();
        });
    }
    else {
      toast.error("Please select profile Image")
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  const editHandler = () => {
    window.scrollTo(0, 0)
    setIsShown(true)
    // handleClick();
  }







  return (
    <>
      {loader && <Loader />}
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>settings</h6>
          <p>Change you nickname and link social accounts</p>
        </div>
      </div>
      <section className="settings border-grad1">
        <div className="parent">
          <div className="inner-card border-grad">
            <div className="parent-profile">
              <div className="profile" onClick={handleShowProfile} style={{ cursor: "pointer" }}>
                <img src={p?.profileImage} alt="img" className='img-fluid' />
              </div>
              <h6>Profile Image</h6>
            </div>
            <div className="twice-img">
              {/* <label htmlFor='uploadimg' className='me-2'><img src="\assets\gallery-add.svg" alt="img" className='img-fluid' /></label>
                <input type="file" className='d-none' id='uploadimg' /> */}
              <a onClick={handleShowProfile}><img src="\assets\gallery-add.svg" alt="img" className='img-fluid' /></a>
            </div>
          </div>
          <div className="inner-card border-grad">
            <div className="inner-text">
              <h6>Nick Name</h6>
              <p>{data?.nickName}</p>
            </div>
            <a style={{ cursor: "pointer" }} onClick={handleShow}><img src="\assets\edit-btn.svg" alt="img" className='img-fluid' /></a>
          </div>
          {/* <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Twitter</h6>
                    <p>Not Linked</p>
                </div>
               <button className='btn-linkk'>Link</button>
            </div> */}
          {/* <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Discord</h6>
                    <p>umar_x2jz./discord</p>
                </div>
              <button className='btn-unlink'>Unlink</button>
            </div> */}
        </div>
      </section>



      {isShown && (
        <>
          <section className="cropimage">
            <div className="container-fluid">
              <div>
                <div className="parent-img-div">
                  {/* <img
                src="\add-circle.svg"
                alt="img"
                className="img-fluid close-icon"
                onClick={handleClick}
              /> */}
                  {profilePicture && (
                    <>
                      <div>
                        <Cropper
                          image={imageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={1 / 1}
                          onCropChange={setCrop}
                          onCropComplete={onCropComplete}
                          onZoomChange={setZoom}
                        />
                      </div>

                      {/* <label className="watermark-pic" htmlFor="upload">
        <img
          src="\assest\watermark.png"
          alt="img"
          className="img-fluid"
        />
      </label> */}
                    </>
                  )}

                  <div className="bottom-btn">
                    <button onClick={() => showCroppedImage(imageSrc, croppedAreaPixels, setWidthh, setHeightt, croppedImage, setCroppedImage, setProfilePicture, handleClick)} className="btncommon">
                      {/* <img
                    src="\upload.svg"
                    alt="img"
                    className="img-fluid"
                  /> */}
                      Crop
                    </button>
                  </div>
                </div>

                {/* <input type="file" id="upload" className="d-none" onChange={(evt) => logoPicHandle(evt)} /> */}
              </div>
            </div>
          </section>
        </>
      )}


      <Modal className='editname-modal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit nickname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="option-field">
            <label>Nickname</label>
            <input value={nick} onChange={(e) => setNick(e.target?.value)} type="text" placeholder='Enter Your Nick Name' />
          </div>
          <button onClick={addNickName} className='btn-save'>Save</button>
        </Modal.Body>
      </Modal>

      <Modal className='detailmodal' show={showprofile} onHide={handleCloseProfile} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Upload profile picture
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="upload-parent">
            <p className='uehyuj'>Profile Pitcure</p>
            <div className="upload uploadsss sdhfvbdshbfvh" style={{ height: "336px" }}>
              {
                profilePicture ?
                  (
                    <>
                      {
                        profilePicture ?
                          <label htmlFor="upload">
                            {" "}
                            <img
                              src={croppedImage}
                              alt="img"
                              className="img-fluid"
                            />
                          </label> :

                          <label htmlFor="upload">
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
                    </>

                  )
                  :
                  (
                    <>
                      {
                        p ?
                          <label htmlFor="upload">
                            {" "}
                            <img
                              src={p ? p?.profileImage : ""}
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
                    </>
                  )
              }
              {/* 
              {croppedImage && (
                <div className="main-img sdbfvsdhgfvdsh h-100 w-100">
                  <img
                    src={croppedImage}
                    className=" upload___immg"
                  />
                </div>
              )
              } */}
              <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" id="upload" onChange={(e) => onFileChange(e)} />

            </div>
            {/* <div className="bottom-btnss">
              <input
                id="upload11"
                type="file"
                className="d-none"
                onChange={onFileChange}
              />{" "}
              <label
                for="upload11"
                className="cursor___pointer  btncommon"
              >
                {" "}
                Upload
              </label>
              <button disabled={croppedImage ? false : true} className="btncommon ml-2 helloo" onClick={editHandler}>
                Edit
              </button>
            </div> */}
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" onClick={handleCloseProfile}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            {profilePicture === '' ?
              <button className="btn-pinkk hsgdvshgdghdsdf" disabled
              >
                <img src='\assets\upload-icon.svg' alt='img' className='img-fluid' /> Upload profile picture
              </button>
              : <button className="btn-pinkk" onClick={addProfile}
              >
                <img src='\assets\upload-icon.svg' alt='img' className='img-fluid' /> Upload profile picture
              </button>}
          </div>
        </Modal.Body>
      </Modal>

      <Modal className='topic-new-modal' show={showForumDeleteModal} onHide={handleCloseDeleteForum} centered>
        <Modal.Body>
          <h5>Are you sure you want to <br /> delete?</h5>
          <div className="twice-btn">
            <button className="btn-cancel" onClick={handleCloseDeleteForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
            <button className="btn-topic"> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Delete</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Settings

