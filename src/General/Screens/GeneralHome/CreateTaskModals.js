import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';


const CreateTaskModals = ({ showtask, setShowtask, getData }) => {

  const handleClosetask = () => setShowtask(false);
  const handleShowtask = () => setShowtask(true);
  const [loader, setLoader] = useState(false);
  const [showtask1, setShowtask1] = useState(false);
  const [showtask2, setShowtask2] = useState(false);
  const handleClosetask2 = () => setShowtask2(false);
  const [showtask3, setShowtask3] = useState(false);
  const handleClosetask3 = () => setShowtask3(false);
  const handleShowtask3 = () => setShowtask3(true);
  const [startDate, setStartDate] = useState(null);

  // console.log("asfsdfdsf",typeof date)
  // console.log("sdfsfsfsf", date)
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileP, setProfileP] = useState();
  const [docfile, setdocfile] = useState(null);
  const [docfilep, setdocfilep] = useState();
  const [type, settype] = useState('');

  const handleClosetask1 = () => {
    ClearAll();
    setStartDate()
    setProfilePicture(null)
    setdocfile(null)
    setProfileP(null)
    setdocfilep(null)
    setShowtask1(false)
  }

  const handleShowtask2 = () => {
    settype('social')
    setShowtask2(true);
  }

  const handleShowtask1 = () => {
    settype('basic')
    setShowtask1(true);
  }

  const setProfilePic = (evt) => {
    const file = evt.target.files[0];
    if (file.size >= 2872139) {
      toast.error("File cannot be greater than 3mbs")
    } else {
      setProfilePicture(evt.target.files[0]);
      const file = evt.target.files[0]
      setProfileP(file)
    }
  };

  const setProfile = (evt) => {
    const file = evt.target.files[0];
    if (file.size >= 2872139) {
      toast.error("File cannot be greater than 3mbs")
    } else {
      setdocfile(evt.target.files[0]);
      const file = evt.target.files[0]
      setdocfilep(file)
    }
  };

  const [allFormData, setAllFormData] = useState({
    name: '',
    link: '',
    reward: '',
    description: '',
    hashtag: '',
    mention: ''
  })

  const handleChange = (event) => {
    allFormData[event.target.name] = event.target.value;
    setAllFormData({ ...allFormData });
  }

  const ClearAll = () => {
    setAllFormData({
      name: '',
      link: '',
      reward: '',
      description: '',
      hashtag: '',
      mention: ''
    })
  }

  const CreateTask = async () => {
    let tok = localStorage.getItem("accessToken");
    var data1 = new FormData();
    data1.append("name", allFormData?.name)
    data1.append("reward", allFormData?.reward)
    data1.append("type", type)
    data1.append("description", allFormData?.description)
    if (allFormData?.link) {
      data1.append("relatedLink", allFormData?.link)
    }
    if (startDate) {
      data1.append("expirationDate", startDate)
    }
    if (type === 'social') {
      if (allFormData?.hashtag) {
        data1.append("hashtag", allFormData?.hashtag)
      }
      if (allFormData?.mention) {
        data1.append("mention", allFormData?.mention)
      }
    }
    if (profileP) {
      data1.append("image", profileP)
    }
    if (docfilep) {
      data1.append("attachment", docfilep)
    }
    if (allFormData?.name != '') {
      if (allFormData?.reward != '') {
        if (allFormData?.description != '') {
          var config = {
            method: "post",
            url: `${API_URL}/tasks`,
            headers: {
              authorization: `Bearer ` + tok
            },
            data: data1,
          };
          axios(config)
            .then(function (response) {
              setLoader(false);
              toast.success('Task Created Successfully', {
                position: "top-right",
                autoClose: 2000,
              });
              getData()
              setStartDate()
              setProfilePicture(null)
              setdocfile(null)
              setProfileP(null)
              setdocfilep(null)
              ClearAll();
              if (type === 'basic') {
                handleClosetask1();
                handleShowtask3();
              }
              else {
                handleClosetask2();
                handleShowtask3();
              }
            })
            .catch(function (error) {
              setLoader(false);
              if (error.response.data.statusCode == 409) {
                toast.error('Tasks with this name already exist', {
                  position: 'top-right',
                  autoClose: 5000,
                });
              } else if (error.response.data.statusCode == 500) {
                toast.error('Something went wrong', {
                  position: 'top-right',
                  autoClose: 5000,
                });
              }
              else if (error.response.data.statusCode == 400) {
                toast.error('Validation Failed', {
                  position: 'top-right',
                  autoClose: 5000,
                });
              }
            });
        }
        else {
          toast.error('Please Write Description', {
            position: "top-right",
            autoClose: 2000,
          });
        }
      }
      else {
        toast.error('Please Write Reward Points', {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
    else {
      console.log()
      toast.error('Please Write Title of Task', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }


  return (
    <>
      {loader && <Loader />}
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
                <input value={allFormData?.name} name="name" onChange={handleChange} type="text" placeholder="Enter task title...." />
              </div>
              <div className="option-field">
                <label>Reward Points</label>
                <input value={allFormData?.reward} name="reward" onChange={handleChange} type="text" placeholder="Enter reward points...." />
              </div>
            </div>
            <div className="twice-field">
              <div className="option-field">
                <label>Expiration Date</label>
                <DatePicker selected={startDate} placeholder="Select expiration date..." onChange={(date) => setStartDate(date)} />
                {/* <input type="date" placeholder="Select expiration date..." /> */}
              </div>
              <div className="option-field">
                <label>Related link</label>
                <input value={allFormData?.link} name="link" onChange={handleChange} type="text" placeholder="Enter Related link..." />
              </div>
            </div>
            <div className="option-field">
              <label>DESCRIPTION</label>
              <textarea value={allFormData?.description} name="description" onChange={handleChange} placeholder="Enter task description...."></textarea>
            </div>
            <div className="option-field">
              <label>Add Attachment</label>
              <div className="choose">
                <label htmlFor="uploadfile" className="btn-choose">Choose</label>
                {docfile ? <h6>{URL?.createObjectURL(docfile)}</h6> : <h6>No file Selected</h6>}
                <input type="file" className="d-none" onChange={(e) => setProfile(e)} id="uploadfile" />
              </div>
            </div>
            <div className="upload-field">
              <p>Upload Image</p>
              <div className="upload">
                {
                  profilePicture ? <label htmlFor="upload" className="w-100 h-100">
                    {" "}
                    <img
                      src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                      alt="img"
                      className="img-fluid setimg-p"
                    />
                  </label> : <label htmlFor="upload">
                    {" "}
                    <img
                      src="\generalassets\icons\upload-icon.svg"
                      alt="img"
                      className="img-fluid"
                    />
                    <h6><label htmlFor="upload">browse</label></h6>
                    <p className="text">Supports: JPG, JPEG, PNG</p>
                  </label>
                }
                {/* <img src="\generalassets\icons\upload-icon.svg" alt="img" className="img-fluid" />
                <h6><label >browse</label></h6>
                <p>Supports: JPG, JPEG, PNG</p> */}
                <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" onChange={(e) => setProfilePic(e)} id="upload" />
              </div>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosetask1} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={CreateTask} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
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
                <input value={allFormData?.name} name="name" onChange={handleChange} type="text" placeholder="Enter task title...." />
              </div>
              <div className="option-field">
                <label>Reward Points</label>
                <input value={allFormData?.reward} name="reward" onChange={handleChange} type="number" placeholder="Enter reward points...." />
              </div>
            </div>
            <div className="twice-field">
              <div className="option-field">
                <label>Expiration Date</label>
                <DatePicker selected={startDate} placeholder="Select expiration date..." onChange={(date) => setStartDate(date)} />
                {/* <input type="date" placeholder="Select expiration date..." /> */}
              </div>
              <div className="option-field">
                <label>Related link</label>
                <input value={allFormData?.link} name="link" onChange={handleChange} type="text" placeholder="Enter Related link..." />
              </div>
            </div>
            <div className="twice-field">
              <div className="option-field">
                <label>Hashtag</label>
                <input value={allFormData?.hashtag} name="hashtag" onChange={handleChange} type="text" placeholder="Enter Hashtag...." />
              </div>
              <div className="option-field">
                <label>Mention</label>
                <input value={allFormData?.mention} name="mention" onChange={handleChange} type="text" placeholder="Mention" />
              </div>
            </div>
            <div className="option-field">
              <label>DESCRIPTION</label>
              <textarea value={allFormData?.description} name="description" onChange={handleChange} placeholder="Enter task description...."></textarea>
            </div>
            <div className="option-field">
              <label>Add Attachment</label>
              <div className="choose">
                <label htmlFor="uploadfile" className="btn-choose">Choose</label>
                {docfile ? <h6>{URL?.createObjectURL(docfile)}</h6> : <h6>No file Selected</h6>}
                <input type="file" className="d-none" onChange={(e) => setProfile(e)} id="uploadfile" />
              </div>
            </div>
            <div className="upload-field">
              <p>Upload Image</p>
              <div className="upload">
                {
                  profilePicture ? <label htmlFor="upload" className="w-100 h-100">
                    {" "}
                    <img
                      src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                      alt="img"
                      className="img-fluid setimg-p"
                    />
                  </label> : <label htmlFor="upload">
                    {" "}
                    <img
                      src="\generalassets\icons\upload-icon.svg"
                      alt="img"
                      className="img-fluid"
                    />
                    <h6><label htmlFor="upload">browse</label></h6>
                    <p className="text">Supports: JPG, JPEG, PNG</p>
                  </label>
                }
                {/* <img src="\generalassets\icons\upload-icon.svg" alt="img" className="img-fluid" />
                <h6><label >browse</label></h6>
                <p>Supports: JPG, JPEG, PNG</p> */}
                <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" onChange={(e) => setProfilePic(e)} id="upload" />
              </div>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosetask2} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={CreateTask}
              className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />CREATE TASK</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showtask3} onHide={handleClosetask3} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="task-created">
            <img src="\generalassets\icons\tasksuccessfulllycreated.png" alt="img" className="img-fluid" />
            <h6>{type} Task SUCCESSFULLY CREATED</h6>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default CreateTaskModals
