import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const SquadModals = ({setShow2, show2}) => {

    const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);

  const handleClose2 = () => setShow2(false);
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
  return (
    <>
      <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>create Squad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='imagesmodal'>
              <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
              <p>Are you sure you want to leave this squad and create a new one?</p>
              {/* <p>Are you sure you want to leave this squad?</p> */}
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow2}><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
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
              <div className="upload uploadsss">
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

                <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

              </div>
            </div>
            <div className='maininput'>
              <p className="squad">Squad Name</p>
              <input type='text' placeholder='Enter Squad Name....' />
            </div>
            <div className='endbtn'>
              <button className="btn-blackk" onClick={handleClose2}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button className="btn-pinkk" onClick={() => {
                handleClose2();
                handleShow3();
              }}><img src='\add.svg' alt='img' className='img-fluid' /> Create Squad</button>
            </div>
          </Modal.Body>
        </Modal>


        <Modal className='detailmodal' show={show3} onHide={handleClose3} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Leave Squad
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>

            <div className='arrowimg'>
              <img src='\Groupsquad.svg' alt='img' className='img-fluid' />
              <p>Squad successfully created</p>
            </div>

          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show4} onHide={handleClose4} centered>
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
              <button className="btn-blackk" onClick={handleClose4}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button className="btn-pinkk"><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
            </div>
          </Modal.Body>
        </Modal>
    </>
  )
}

export default SquadModals
