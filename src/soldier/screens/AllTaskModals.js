import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const AllTaskModals = ({showtask, setShowtask}) => {
   
    const handleClosetask = () => setShowtask(false);
  
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [profilePicture, setProfilePicture] = useState(null);
    const setProfilePic = (evt) => {
      setProfilePicture(evt.target.files[0]);
    }
  
  
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
    const handleAddClick = () => {
      setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
  
  return (
    <>
     <Modal className='detailmodal' show={showtask} onHide={handleClosetask} centered>
          <Modal.Header closeButton>
            <Modal.Title>task details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='innercard'>
              <p className='head'>Task Title</p>
              <h6 className='head1'>Like our facebook page before 10 May 2023</h6>
              <h3 className='discription'>Task Description</h3>
              <h6 className='head1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</h6>
              <div className='parent'>
                <div className='left'>
                  <p className='link'>Related link</p>
                  <h6 className='point underliness'>www.google.co.il</h6>
                </div>
                <div className='right'>
                  <p className='link'>Points</p>
                  <h6 className='point'>1,000,000</h6>
                </div>
              </div>
              <div className='parent mt-3'>
                <div className='left'>
                  <p className='link'>Start Date</p>
                  <h6 className='point'>04/05/2023</h6>
                </div>
                <div className='right'>
                  <p className='link'>End Date</p>
                  <h6 className='point'>05/05/2023</h6>
                </div>
              </div>
              <p className='attachment'>05/05/2023</p>
              <div className='taskdetail'>

                <p>   <img src='\Group.svg' alt='img' className='img-fluid' />task-detail.mp4</p>
              </div>
              <p className='link'>Image</p>
              <img src='\picframe.png' alt='img' className='img-fluid' />
            </div>
            <div className='endbtn'>
              <button className='btn-blackk'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button className='btn-pinkk' onClick={() => {
                handleShow1();
                handleClosetask();
              }}>Submit proof of work</button>
            </div>
          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className='heading'>
                <h4>submit proof of work</h4>
                <p>upload at least one of the below items</p>
              </div>
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <div className='maininput'>
              <p>POW Url</p>
              <input type='text' placeholder='Enter POW Url....' />
            </div>
            <div className="upload-parent">
              <p className='uehyuj'>Upload Proof of Work Image</p>
              <div className="upload">
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
                    <p className='support'>Supports: JPG, JPEG, PNG</p>
                  </label>
                }

                <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

              </div>
              <div className="others-upload">
                {inputList.map((x, i) => {
                  return (
                    <>

                      <div className="upload">
                        <label htmlFor="upload">+</label>
                        {inputList.length !== 1 && <button
                        className="btn-remove"
                        onClick={() => handleRemoveClick(i)}>x</button>}
                      </div>
                      {inputList.length - 1 === i && inputList.length < 4 ? <button onClick={handleAddClick} className='btn-addmore'>Add More</button> : ""}
                    </>
                  );
                })}
              </div>

            </div>


            <div className='endbtn'>
              <button className='btn-blackk'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button className='btn-pinkk' onClick={() => {
                handleShow2();
                handleClose1();
              }} ><img src='\send-square.svg' alt='img' className='img-fluid' /> Submit proof of work</button>
            </div>
          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              submit proof of work
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>

            <div className='arrowimg'>
              <img src='\arrowmodal.svg' alt='img' className='img-fluid' />
              <p>proof of work successfully submitted</p>
            </div>

          </Modal.Body>

        </Modal> 
    </>
  )
}

export default AllTaskModals
