import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { API_URL } from "../../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SquadModals = ({ show1, setShow1, setShow2, show2, SquadUsers, GetUserProfiledata }) => {

  // const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  let tok = localStorage.getItem("accessToken");

  const handleClose2 = () => {
    setInputs({})
    setProfilePicture(null)
    setShow2(false)
  };
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);

  const [profilePicture, setProfilePicture] = useState(null);
  const setProfilePic = (evt) => {
    setProfilePicture(evt.target.files[0]);
  }

  const [inputs, setInputs] = useState({})
  const { account } = useWeb3React()
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const [loader, setLoader] = useState()
  const creatAquad = () => {
    setShow2(true)
    if (inputs?.name) {
      if (profilePicture) {
        const data = new FormData();
        data.append("name", inputs?.name);
        data.append("squadImage", profilePicture);
        setLoader(true);
        // if (account) {
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
          method: "post",
          url: `${API_URL}/tasks/squads`,
          data: data
        };

        axios(config)
          .then(async (response) => {
            setLoader(false);
            const userString = JSON.parse(localStorage.getItem('user'));
            userString.isCommander = true;
            userString.memberOfSquad = true
            // Update local storage object with the updated data
            localStorage.setItem('user', JSON.stringify(userString));
            // localStorage.setItem('user', JSON.stringify(updateduser));
            // localStorage.setItem('user', JSON.stringify(response?.data?.data));
            localStorage.setItem("accessToken", response?.data?.accessToken);
            GetUserProfiledata()
            SquadUsers()
            window.scrollTo(0, 0);
            handleClose2();
            setInputs({})
            setProfilePicture(null)
            handleShow3();
            window.location.reload()
            // setCall(!call)
            // GetUserProfiledata();
            // getData();
            // vateransApi();
            setLoader(false);
            // textCopiedFun();
            // CloseModal();
          })
          .catch(function (error) {
            setProfilePicture(null)
            setInputs({})
            console.log(error);
            if (error.response.data.statusCode == 409) {
              handleClose2();
              toast.error("Squad for User already exists")
            }
            setLoader(false);
          });
        // }
      } else {
        toast.error("Squad Image required")
      }
    } else {
      toast.error("Squad Name required")
    }
  }

  const leaveSquad = () => {
    // if (account) {
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${tok}`;
    var config = {
      method: "post",
      url: `${API_URL}/tasks/squads/leave-squad`,
      // data: data
    };

    axios(config)
      .then(async (response) => {
        localStorage.removeItem("isCommander")
        toast.success("Squad left successfully");
        localStorage.setItem("accessToken", response?.data?.accessToken);
        localStorage.setItem("user", JSON.stringify(response?.data?.data));
        handleClose1()
      })
      .catch(function (error) {
        toast.error(error.response.data.message)
      })
    // }
  }



  return (
    <>
      <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dismiss User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
            <p>Are you sure you want to leave this squad and create a new one?</p>
            {/* <p>Are you sure you want to leave this squad?</p> */}
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" ><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button onClick={handleShow2} className="btn-pinkk" ><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
          </div>
        </Modal.Body>
      </Modal>


      <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            create Squad
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="upload-parent">
            <p className='uehyuj'>Upload Squad Symbol</p>
            <div className="upload uploadsss sdhfvbdshbfvh">
              {
                profilePicture ? <label htmlFor="upload">
                  {" "}
                  <img
                    src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
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

              <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

            </div>
          </div>
          <div className='maininput'>
            <p className="squad">Squad Name</p>
            <input type='text' value={inputs?.name ? inputs?.name : ''} name="name" onChange={(e) => handleChange1(e)} placeholder='Enter Squad Name....' />
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" onClick={handleClose2}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button className="btn-pinkk"

              onClick={creatAquad}
            // onClick={() => {
            //   handleClose2();
            //   handleShow3();
            // }}
            >
              <img src='\add.svg' alt='img' className='img-fluid' /> Create Squad</button>
          </div>
        </Modal.Body>
      </Modal>


      <Modal className='detailmodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Create Squad
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>

          <div className='arrowimg'>
            <img src='\Groupsquad.svg' alt='img' className='img-fluid' />
            <p>Squad successfully created</p>
          </div>

        </Modal.Body>

      </Modal>

      <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Leave Squad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
            {/* <p>Are you sure you want to leave this squad and create a new one?</p> */}
            <p>Are you sure you want to leave this squad?</p>
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" onClick={handleClose1}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button className="btn-pinkk" onClick={leaveSquad}><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SquadModals
