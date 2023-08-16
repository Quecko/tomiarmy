import React, { useState, useCallback } from 'react'
import { Modal } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { API_URL } from "../../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from '../../../../hooks/loader'
import Signature from '../../../../hooks/dataSenders/userSign';
import { showCroppedImage } from '../../../../utils/cropImage';
import Cropper from "react-easy-crop";

const SquadModals = ({ show1, setShow1, setShow2, show2, SquadUsers, GetUserProfiledata, setindexwait }) => {

  // const [show1, setShow1] = useState(false);
  const [showModal1, setShowModal1] = useState(false)
  const handleClose1 = () => setShow1(false);
  const { userSign } = Signature()
  let tok = localStorage.getItem("accessToken");
  const [loader, setLoader] = useState(false);
  const handleClose2 = () => {
    setInputs({})
    setProfilePicture(null)
    setShow2(false)
  };
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => {
    setShow3(false)
    window.location.reload()
  };
  const handleShow3 = () => {
    setShow3(true)
  };

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);

  const [profilePicture, setProfilePicture] = useState(null);
  // const setProfilePic = (evt) => {
  //   setProfilePicture(evt.target.files[0]);
  // }

  const [inputs, setInputs] = useState({})
  const { account } = useWeb3React()
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const creatAquad = () => {
    setShow2(true)
    if (profilePicture) {
    if (inputs?.name) {
        if (inputs?.name.length < 15) {
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
              localStorage.setItem("accessToken", response?.data?.accessToken);
              const userString = JSON.parse(localStorage.getItem('user'));
              userString.isCommander = true;
              userString.memberOfSquad = true
              // Update local storage object with the updated data
              localStorage.setItem('user', JSON.stringify(userString));
              GetUserProfiledata()
              SquadUsers()
              window.scrollTo(0, 0);
              handleClose2();
              setInputs({})
              setProfilePicture(null)
              handleShow3();
              // window.location.reload()
              // setCall(!call)
              // GetUserProfiledata();
              // getData();
              // vateransApi();
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
          toast.error("Squad Name must be less or equal to 15 words.")
        }
      } else {
        toast.error("Squad Name required")
      }
    } else {
      toast.error("Squad Image is required")
    }
  }

  const leaveSquad = () => {
    // if (account) {
    var config = {
      method: "patch",
      url: `${API_URL}/tasks/squads/leave-squad`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };

    axios(config)
      .then(async (response) => {
        toast.success("Squad left successfully")
        localStorage.setItem("accessToken", response?.data?.accessToken);
        localStorage.setItem("user", JSON.stringify(response?.data?.data));
        const userString = JSON.parse(localStorage.getItem('user'));
        userString.memberOfSquad = false
        localStorage.setItem('user', JSON.stringify(userString));
        handleClose1()
        setShowModal1(true)
        setindexwait(0)
        localStorage.setItem("indexvalue", 0);

        // SquadUsers()
      })
      .catch(function (error) {
        toast.error(error.response.data.message)
      })
    // }
  }

  const SignUp = () => {
    loginUser()
    // window.location.reload()
  }


  const loginUser = async () => {
    // let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    // setShow(false);
    if (account) {
      const res0 = await userSign(account);
      if (account && res0) {
        await axios
          .post(`${API_URL}/auth/signin`, {
            walletAddress: account.toLowerCase(),
            sign: res0,
            rememberMe: true
          })
          .then((res) => {
            // toast.success('User Logged in Successfully', {
            //   position: 'top-center',
            //   autoClose: 5000,
            // });
            localStorage.setItem("accessToken", res?.data?.data?.accessToken);
            localStorage.setItem("user", JSON.stringify(res?.data?.data));
            setShowModal1(false)
            window.location.reload()
            setindexwait(0)
            localStorage.setItem("indexvalue", 0);

          })
          .catch((err) => {
            if (err?.response?.data?.statusCode === 404) {
              toast.error('No User Found', {
                position: 'top-center',
                autoClose: 5000,
              });
              localStorage.removeItem("connectorId");
              localStorage.removeItem("flag");
              // setShow(false);
              localStorage.removeItem("accessToken");
              localStorage.removeItem("user");
              localStorage.removeItem("wallet");
              window.location.assign('/')
            }
            localStorage.removeItem("connectorId");
            localStorage.removeItem("flag");
          });
      }
    }
    else {
      toast.error('Wallet Not Connected', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
    // else {
    //     let user1 = localStorage.getItem("user");
    //     user1 = JSON.parse(user1);
    //     setUser(user1);
    //     if (call !== undefined) {
    //         setCall(true);
    //     }
    //     if (user1?.rank === "general" || user1?.rank === "major general") {
    //         history.push("/general");
    //         getData();
    //         GetArmy();
    //     } else if (user1?.rank === "squad member") {
    //         history.push("/squad");
    //         GetTaskss();
    //         GetUserProfiledata();
    //         GetOpts();
    //         GetTasks();
    //         vateransApi();
    //     }
    //     window.scrollTo(0, 0);
    // }
  };

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



  return (
    <>
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
      {loader && <Loader />}
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

              <input type="file" accept="image/png, image/jpeg, image/jpg" className="d-none" id="upload" onChange={(e) => onFileChange(e)} />

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

      <Modal className='detailmodal gtgtgtgtgt' show={showModal1} centered>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
            <p>you leave the Squad Plaese signUp .</p>
            {/* <p>Are you sure you want to leave this squad?</p> */}
          </div>
          <div className='endbtn'>
            {/* <button  className="btn-blackk" ><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button> */}
            <button onClick={SignUp} className="btn-pinkk" ><img src='\up.svg' alt='img' className='img-fluid' />Sign In</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SquadModals
