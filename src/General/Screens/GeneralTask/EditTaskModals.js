import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';

const EditTaskModals = ({ showtaskdetail, setShowtaskdetail, showtaskedit, setShowtaskedit, taskdetail, getData }) => {
  const handleClosetaskdetail = () => setShowtaskdetail(false);
  const handleClosetaskedit = () => setShowtaskedit(false);
  const [showtasksuccess, setShowtasksuccess] = useState(false);
  const handleClosetasksuccess = () => setShowtasksuccess(false);
  const [detailsingle, setdetailsingle] = useState()
  const [startDate, setStartDate] = useState(null);
  const [rend, setRend] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileP, setProfileP] = useState();
  const [docfile, setdocfile] = useState(null);
  const [docfilep, setdocfilep] = useState();
  const [exsistimage, setexsistimage] = useState(null);
  const [docfilepp, setdocfilepp] = useState(null);

  // console.log("asfsdfdsf",typeof date)
  var result = taskdetail?.attachment?.split("_")?.pop();

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

  useEffect(() => {
    setdetailsingle(taskdetail)
    setexsistimage(taskdetail?.image)
    var result = taskdetail?.attachment?.split("_")?.pop();
    setdocfilepp(result)
    // setStartDate()
  }, [taskdetail])

  const UpdateName = (val) => {
    let dumObj = detailsingle;
    dumObj.name = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const Updatereward = (val) => {
    let dumObj = detailsingle;
    dumObj.reward = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const UpdaterelatedLink = (val) => {
    let dumObj = detailsingle;
    dumObj.relatedLink = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const Updatedescription = (val) => {
    let dumObj = detailsingle;
    dumObj.description = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const UpdateMention = (val) => {
    let dumObj = detailsingle;
    dumObj.mention = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const UpdatehashTag = (val) => {
    let dumObj = detailsingle;
    dumObj.hashtag = val;
    setdetailsingle(dumObj);
    setRend(!rend);
  }

  const UpdateTask = async (objj) => {
    let tok = localStorage.getItem("accessToken");
    var data1 = new FormData();
    data1.append("name", detailsingle?.name)
    data1.append("reward", detailsingle?.reward)
    data1.append("description", detailsingle?.description)
    data1.append("relatedLink", detailsingle?.relatedLink)
    if (startDate) {
      data1.append("expirationDate", startDate)
    }
    if (detailsingle?.type === 'social') {
      if (detailsingle?.hashtag) {
        data1.append("hashtag", detailsingle?.hashtag)
      }
      if (detailsingle?.mention) {
        data1.append("mention", detailsingle?.mention)
      }
    }
    if (profileP) {
      data1.append("image", profileP)
    }
    if (docfilep) {
      data1.append("attachment", docfilep)
    }
    if (detailsingle?.name != '') {
      if (detailsingle?.reward != '') {
        if (detailsingle?.description != '') {
          var config = {
            method: "patch",
            url: `${API_URL}/tasks/${objj._id}`,
            headers: {
              authorization: `Bearer ` + tok
            },
            data: data1,
          };
          axios(config)
            .then(function (response) {
              // setLoader(false);
              handleClosetaskedit();
              setShowtasksuccess(true);
              getData()
              // setdetailsingle()
              // setStartDate()
              setProfilePicture(null)
              setdocfile(null)
              setProfileP(null)
              setdocfilep(null)
            })
            .catch(function (error) {
              // setLoader(false);
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
      <Modal className='detailmodal' show={showtaskdetail} onHide={handleClosetaskdetail} centered>
        <Modal.Header closeButton>
          <Modal.Title>task details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='innercard'>
            <p className='head'>Task Title</p>
            <h6 className='head1'>{taskdetail?.name}</h6>
            <h3 className='discription'>Task Description</h3>
            <h6 className='head1'>{taskdetail?.description}</h6>
            <div className='parent'>
              {taskdetail?.relatedLink && (
                <div className='left'>
                  <p className='link'>Related link</p>
                  <a href={taskdetail?.relatedLink} target='_blank'>
                    <h6 className='point underliness'>{taskdetail?.relatedLink}</h6>
                  </a>
                </div>
              )}
              <div className='right'>
                <p className='link'>Points</p>
                <h6 className='point'>{taskdetail?.reward}</h6>
              </div>
            </div>
            {taskdetail?.type === 'social' &&
              (
                <div className='parent mt-3'>
                  {taskdetail?.hashtag && (
                    <div className='left'>
                      <p className='link'>Hashtag</p>
                      <h6 className='point underliness'>{taskdetail?.hashtag}</h6>
                    </div>
                  )}
                  {taskdetail?.mention && (
                    <div className='right'>
                      <p className='link'>Mention</p>
                      <h6 className='point'>{taskdetail?.mention}</h6>
                    </div>
                  )}
                </div>
              )
            }
            <div className='parent mt-3'>
              <div className='left'>
                <p className='link'>Start Date</p>
                <h6 className='point'>{moment(taskdetail?.createdate).format("DD-MM-YYYY")}</h6>
              </div>
              {taskdetail?.expirationDate && (
                <div className='right'>
                  <p className='link'>End Date</p>
                  <h6 className='point'>{moment(taskdetail?.expirationDate
                  ).format("DD-MM-YYYY")}</h6>
                </div>
              )}
            </div>
            {taskdetail?.attachment && (
              <>
                <p className='attachment'>Attachment</p>
                <div className='taskdetail'>
                  <a href={taskdetail?.attachment} target='_blank'><p><img src='\Group.svg' alt='img' className='img-fluid' />{result ? result : ""}</p></a>
                </div>
              </>
            )}
            {taskdetail?.image && (
              <>
                <p className='link'>Image</p>
                <img src={taskdetail?.image} alt='img' className='img-fluid' />
              </>
            )}
          </div>
          <div className='endbtn'>
            <button className='btn-blackk'><span><img src='\generalassets\icons\btn-delete.svg' alt='img' className='img-fluid' /></span>Delete</button>
            <button className='btn-pinkk' onClick={() => {
              setShowtaskedit(true);
              handleClosetaskdetail();

            }}> <img src="\generalassets\icons\edit-task.svg" alt="img" className='img-fluid me-2' /> Edit</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal className="createbasic-modal global-modal-style" show={showtaskedit} onHide={handleClosetaskedit} centered>
        <Modal.Header closeButton>
          <Modal.Title>EDIT task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="twice-field">
              <div className="option-field">
                <label>Task Title</label>
                <input onChange={(e) => UpdateName(e.target.value)} value={detailsingle?.name} type="text" placeholder="Enter task title...." />
              </div>
              <div className="option-field">
                <label>Reward Points</label>
                <input onChange={(e) => Updatereward(e.target.value)} value={detailsingle?.reward} type="number" placeholder="Enter reward points...." />
              </div>
            </div>
            <div className="twice-field">
              <div className="option-field">
                <label>Expiration Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                {/* <input value={detailsingle?.expirationDate} type="date" placeholder="Select expiration date..." /> */}
              </div>
              <div className="option-field">
                <label>Related link</label>
                <input onChange={(e) => UpdaterelatedLink(e.target.value)} value={detailsingle?.relatedLink} type="text" placeholder="Enter Related link..." />
              </div>
            </div>
            {taskdetail?.type === 'social' &&
              <div className="twice-field">
                <div className="option-field">
                  <label>Hashtag</label>
                  <input onChange={(e) => UpdatehashTag(e.target.value)} value={detailsingle?.hashtag} type="text" placeholder="Enter Hashtag...." />
                </div>
                <div className="option-field">
                  <label>Mention</label>
                  <input onChange={(e) => UpdateMention(e.target.value)} value={detailsingle?.mention} type="text" placeholder="Mention" />
                </div>
              </div>
            }
            <div className="option-field">
              <label>DESCRIPTION</label>
              <textarea onChange={(e) => Updatedescription(e.target.value)} value={detailsingle?.description} placeholder="Enter task description...."></textarea>
            </div>
            <div className="option-field">
              <label>Add Attachment</label>
              <div className="choose">
                <label htmlFor="uploadfile" className="btn-choose">Choose</label>
                {docfile ?
                  (
                    <>
                      {docfile ?
                        <h6>{URL?.createObjectURL(docfile)}</h6>
                        :
                        <h6>No file Selected</h6>
                      }
                    </>
                  )
                  :
                  (
                    <>
                      {docfilepp ?
                        <h6>{docfilepp}</h6>
                        :
                        <h6>No file Selected</h6>
                      }
                    </>
                  )
                }

                <input type="file" className="d-none" onChange={(e) => setProfile(e)} id="uploadfile" />
              </div>
            </div>
            <div className="upload-field">
              <p>Upload Image</p>
              <div className="upload">
                {profilePicture ?
                  (
                    <>
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
                    </>
                  )
                  :
                  (
                    <>
                      {
                        exsistimage ? <label htmlFor="upload" className="w-100 h-100">
                          {" "}
                          <img
                            src={exsistimage ? exsistimage : ""}
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
                    </>
                  )
                }

                {/* <img src="\generalassets\icons\upload-icon.svg" alt="img" className="img-fluid" />
                <h6><label >browse</label></h6>
                <p>Supports: JPG, JPEG, PNG</p> */}
                <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" onChange={(e) => setProfilePic(e)} id="upload" />
              </div>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosetaskedit} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={() => UpdateTask(detailsingle)} className="btn-pinkk"><img src="\generalassets\icons\save-change.svg" alt="img" className='img-fluid' />SAVE CHANGES</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showtasksuccess} onHide={handleClosetasksuccess} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Save Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-created">
            <img src="\generalassets\icons\tasksuccessfulllycreated.png" alt="img" className="img-fluid" />
            <h6>Save Changes SUCCESSFULLY Done</h6>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default EditTaskModals
