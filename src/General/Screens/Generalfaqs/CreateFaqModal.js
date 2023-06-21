import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';

const CreateFaqModal = ({ showfaq, setShowfaq }) => {
  const handleClosefaq = () => setShowfaq(false);
  const handleShowfaq = () => setShowfaq(true);

  const [allFormData, setAllFormData] = useState({
    name: '',
    description: '',
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
    let tok = localStorage.getItem("accessToken");
    var data1 = ({
    title: allFormData?.name,
    description: allFormData?.description
    });

    if (allFormData?.name != '') {
      if (allFormData?.description != '') {
        var config = {
          method: "post",
          url: `${API_URL}/content/faqs/add-faq`,
          headers: {
            authorization: `Bearer ` + tok
          },
          data: data1,
        };
        axios(config)
          .then(function (response) {
            // setLoader(false);
            toast.success('Task Created Successfully', {
              position: "top-right",
              autoClose: 2000,
            });
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
      console.log()
      toast.error('Please Write Question', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }


  return (
    <>
      {/* create faq modal here.................................... */}
      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showfaq} onHide={handleClosefaq} centered>
        <Modal.Header closeButton>
          <Modal.Title>create a new faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>Title</label>
              <input value={allFormData?.name} name="name" onChange={handleChange} type="text" placeholder="Enter Title" />
            </div>
            <div className="option-field">
              <label>Description</label>
              <textarea value={allFormData?.description} name="description" onChange={handleChange} placeholder="Enter Description Url...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleClosefaq} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button className="btn-pinkk" onClick={CreateFAQ}><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Create FAQ</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateFaqModal
