import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';

const CreateFaqModal = ({ showfaq, setShowfaq, showfaq1, setShowfaq1, getDataannou11, editFaqs, setEbditFaqs }) => {
  
  let tok = localStorage.getItem("accessToken");
  const handleClosefaq = () => setShowfaq(false);
  const [rend, setRend] = useState(false);
  const handleShowfaq = () => setShowfaq(true);
  const [allFormData, setAllFormData] = useState({
    title: '',
    description: ''
  })

  const handleChange = (event) => {
    allFormData[event.target.name] = event.target.value;
    setAllFormData({ ...allFormData });
  }

  const ClearAll = () => {
    setAllFormData({
      name: '',
      description: '',
    })
  }

  const CreateFAQ = async () => {
    var data1 = ({
      title: allFormData?.title,
      description: allFormData?.description
    });

    if (allFormData?.title != '') {
      if (allFormData?.description != '') {
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
          method: "post",
          url: `${API_URL}/content/faqs/add-faq`,
          data: data1,
        };
        axios(config)
          .then(function (response) {
            // setLoader(false);
            toast.success('Task Created Successfully', {
              position: "top-right",
              autoClose: 2000,
            });
            getDataannou11()
            ClearAll();
            handleClosefaq();
          })
          .catch(function (error) {
            // setLoader(false);
            toast.error(error.response.data.message);
          });
      }
      else {
        toast.error('Please Write Answer', {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
    else {
      toast.error('Please Write Question', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  const UpdateTitle = (val) => {
    let dumObj = editFaqs;
    dumObj.title = val;
    setEbditFaqs(dumObj);
    setRend(!rend);
  }

  const UpdateDescription = (val) => {
    let dumObj = editFaqs;
    dumObj.description = val;
    setEbditFaqs(dumObj);
    setRend(!rend);
  }

  const UpdateFAQ = async (objj) => {
    let tok = localStorage.getItem("accessToken");
    var data1 = ({
      title: objj?.title,
      description: objj?.description
    });

    if (objj?.name != '') {
      if (objj?.description != '') {
        var config = {
          method: "patch",
          url: `${API_URL}/content/faqs/${editFaqs?._id}`,
          headers: {
            authorization: `Bearer ` + tok
          },
          data: data1,
        };
        axios(config)
          .then(function (response) {
            // setLoader(false);
            toast.success('FAQ Updated Successfully', {
              position: "top-right",
              autoClose: 2000,
            });
            getDataannou11()
            setEbditFaqs('')
            setShowfaq1();
          })
          .catch(function (error) {
            // setLoader(false);
            toast.error(error.response.data.message);
          });
      }
      else {
        toast.error('Please Write Answer', {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
    else {
      toast.error('Please Write Question', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  const ClearAll1 = () => {
    setShowfaq1(false)
  }

  return (
    <>
      {/* create faq modal here.................................... */}
      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showfaq} onHide={ClearAll1} centered>
        <Modal.Header closeButton>
          <Modal.Title>create a new faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>Title</label>
              <input value={allFormData?.title} name="title" onChange={handleChange} type="text" placeholder="Enter Title" />
            </div>
            <div className="option-field">
              <label>Description</label>
              <textarea value={allFormData?.descriptios} name="description" onChange={handleChange} placeholder="Enter Description Url...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosefaq} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button className="btn-pinkk" onClick={CreateFAQ}><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Create FAQ</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showfaq1} onHide={ClearAll1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>Title</label>
              <input value={editFaqs?.title} name="title" onChange={(e) => UpdateTitle(e.target.value)} type="text" placeholder="Enter Title" />
            </div>
            <div className="option-field">
              <label>Description</label>
              <textarea value={editFaqs?.description} name="description" onChange={(e) => UpdateDescription(e.target.value)}  placeholder="Enter Description Url...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosefaq} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button className="btn-pinkk" onClick={()=>UpdateFAQ(editFaqs)}><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Update</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateFaqModal
