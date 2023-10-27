import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from 'axios';
import Loader from '../../../hooks/loader';


const AnnouncementModals = ({ showannounce, setShowannounce, getDataannou }) => {
  const handleCloseannounce = () => setShowannounce(false);
  const handleShowannounce = () => setShowannounce(true);

  const [showannounce1, setShowannounce1] = useState(false);
  const handleCloseannounce1 = () => setShowannounce1(false);
  const handleShowannounce1 = () => setShowannounce1(true);
  const [loader, setLoader] = useState(false);
  let tok = localStorage.getItem("accessToken");

  const SendMessage = (e) => {
    e?.preventDefault();
    if (message !== "") {
      setLoader(true)
      var data = "null";
      if (selectedItem?.name) {
        data = ({
          message: message,
          recipients: selectedItem?.name,
        });
      } else {
        data = ({
          message: message,
          recipients: "all soldiers",
        });
      }
      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${tok}`;
      var config = {
        method: "post",
        url: `${API_URL}/notifications/announcements`,
        data: data,
      };
      axios(config)
        .then(function (response) {
          getDataannou();
          handleCloseannounce();
          handleShowannounce1();
          setLoader(false);
          toast.success('Message Sent Successfully', {
            position: "top-right",
            autoClose: 2000,
          });
          setMessage("")
        })
        .catch(function (error) {
          setLoader(false);
          localStorage.clear()
          window.location.assign('/')
        });
    } else {
      toast.error("Message can't be empty!")
    }
  }
  const [army, setArmy] = useState([]);
  const [message, setMessage] = useState("")
  const [selectedItem, setSelectedItem] = useState("All Soldiers");

  const GetArmy = () => {
    let tok = localStorage.getItem("accessToken");
    var config = {
      method: "get",
      url: `${API_URL}/tasks/army-ranks?minimal=true`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        setArmy(response?.data?.data);
      })
      .catch(function (error) {
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
  }
  useEffect(() => {
    GetArmy();
  }, []);



  return (
    <>

      {/* announcement modal here ........................ */}
      {loader && <Loader />}
      <Modal className='createbasic-modal global-modal-style createtask-modal' show={showannounce} onHide={handleCloseannounce} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="option-field">
              <label>RECIPIENT</label>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {selectedItem?.name ? selectedItem.name : selectedItem}
                  <img src="\generalassets\icons\arrow-down.svg" alt="img" className='img-fluid' />
                </button>
                <ul class="dropdown-menu">
                  <a className="dropdown-item drop uppercase" onClick={() => setSelectedItem("All Soldiers")}>
                    {"All Soldiers"}
                  </a>
                  {army.map((item, index) => {
                    return (
                      <a style={{ textTransform: 'uppercase' }} key={index} className="dropdown-item drop uppercase" onClick={() => setSelectedItem(item)}>
                        {item?.name}
                      </a>
                    )
                  })}
                  {/* <li><a class="dropdown-item" href="#">Major Generals</a></li>
                  <li><a class="dropdown-item" href="#">Colonels</a></li>
                  <li><a class="dropdown-item" href="#">Majors</a></li>
                  <li><a class="dropdown-item" href="#">All Soldiers</a></li> */}
                </ul>
              </div>
            </div>
            <div className="option-field">
              <label>MESSAGE</label>
              <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Write your message...."></textarea>
            </div>
          </div>
          <div className="twice-btns">
            <button onClick={handleCloseannounce} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
            <button onClick={(e) => SendMessage(e)} className="btn-pinkk"><img src="\generalassets\icons\send.svg" alt="img" className='img-fluid' />Send</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="createdsuccess-modal global-modal-style" show={showannounce1} onHide={handleCloseannounce1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-created">
            <img src="\generalassets\other-imgs\announcement.svg" alt="img" className="img-fluid" />
            <h6>ANNOUNCEMENT SENT SUCCESSFULLY</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AnnouncementModals
