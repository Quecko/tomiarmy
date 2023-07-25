import React, { useState } from 'react'
import "./settings.scss"
import Modal from 'react-bootstrap/Modal';
import { API_URL } from "../../utils/ApiUrl"
import axios from 'axios';
import { toast } from 'react-toastify';

const Settings = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const datacommander = localStorage.getItem('user')
    const data = JSON.parse(datacommander)
    const [nick,setNick]=useState(data?.nickName)
    const [loader, setLoader] = useState()

    const addNickName = async () => {
      let tok = localStorage.getItem("accessToken");
      if(nick!=''){
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
          toast.success('Update NickName Successfully', {
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
    }


  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>settings</h6>
          <p>Change you nickname and link social accounts</p>
        </div>
      </div>
      <section className="settings border-grad1">
           <div className="parent">
            <div className="inner-card border-grad">
                <div className="inner-text">
                    <h6>Nick Name</h6>
                    <p>{data?.nickName}</p>
                </div>
                <a style={{cursor: "pointer"}} onClick={handleShow}><img src="\assets\edit-btn.svg" alt="img" className='img-fluid' /></a>
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

      
      <Modal className='editname-modal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit nickname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="option-field">
            <label>Nickname</label>
            <input value={nick} onChange={(e)=>setNick(e.target?.value)} type="text" placeholder='Enter Your Nick Name' />
          </div>
          <button onClick={addNickName} className='btn-save'>Save</button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Settings
