import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

const Squad = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Your Squad </h6>
          <p>VIEW Your Squad</p>
        </div>
        <div className="twice-btn">
          <button className="btn-leave" >
            <img src="\assets\leave-btn.svg" alt="img" className="img-fluid me-2" />
            Leave Squad
          </button>
          <button className="create-btn" >
            <img src="\assets\create-btn-icon.svg" alt="img" className="img-fluid me-2" />
            Create Squad
          </button>
        </div>
      </div>
      <section className='main-squad'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='maincardsquad border-grad1'>
                <div className='squadparent'>
                  <div className='innercard1 border-grad'>
                    <div className='parent' onClick={handleShow}>
                      <div className='left'>
                        <img src='\Grouppic.svg' alt='img' className='img-fluid' />
                      </div>
                      <div className='right'>
                        <p>My Squad</p>
                        <h6>DC Squad</h6>
                      </div>
                    </div>
                  </div>
                  <div className='innercard2 border-grad'>
                    <div className='parent'>
                      <div className='left'>
                      <img src="\static-icons\squadowner.png" alt="img" className='img-fluid' style={{width: "50px", height: "50px"}} />
                      </div>
                      <div className='right'>
                        <p>Squad Owner</p>
                        <h6>X2JZ</h6>
                      </div>
                    </div>
                  </div>
                  <div className='innercard2 border-grad'>
                    <div className='parent'>
                      <div className='left'>
                      <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{width: "50px", height: "50px"}} />
                      </div>
                      <div className='right'>
                        <p>Total Squad Tokens</p>
                        <h6>500 TOMI</h6>
                      </div>
                    </div>
                  </div>
                  <div className='innercard2 border-grad'>
                    <div className='parent'>
                      <div className='left'>
                      <img src="\static-icons\squad-members.png" alt="img" className='img-fluid' style={{width: "50px", height: "50px"}} />
                      </div>
                      <div className='right'>
                        <p>Total Squad Members</p>
                        <h6>1,531</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='maincard border-grad1'>
                <div className='display-none-in-mobile'>
                  <div className="maintable">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>
                            <p className='headtable'>Nickname</p>
                          </th>
                          <th>
                            <p className='headtable'>Rank</p>
                          </th>
                          <th>
                            <p className='headtable'>Wallet Address</p>
                          </th>
                          <th>
                            <p className='headtable'>Username</p>
                          </th>
                          <th>
                            <p className='headtable lefts'>TOMI Balance</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className='paratable'>Sharjeel</p>
                          </td>
                          <td>
                            <p className='paratable'><img src='\static-icons\private-rank.png' alt='img' className='img-fluid' style={{width: "50px", height: "50px"}} /> Private</p>
                          </td>
                          <td>
                            <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>
                          </td>
                          <td>
                            <p className='paratable'>@sharjeel</p>
                          </td>
                          <td>
                            <p className='paratable lefts'>@500 TOMI</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className='paratable'>Umar_x2jz</p>
                          </td>
                          <td>
                            <p className='paratable'><img src='\static-icons\sergeant.png' alt='img' className='img-fluid' style={{width: "50px", height: "50px"}} /> Sergeant</p>
                          </td>
                          <td>
                            <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>
                          </td>
                          <td>
                            <p className='paratable'>@Umar_x2jz</p>
                          </td>
                          <td>
                            <p className='paratable lefts'>@500 TOMI</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className='paratable'>Sharjeel</p>
                          </td>
                          <td>
                            <p className='paratable'><img src='\static-icons\lieutenant.png' alt='img' className='img-fluid' style={{width: "50px", height: "50px"}} />Lieutenant</p>
                          </td>
                          <td>
                            <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>
                          </td>
                          <td>
                            <p className='paratable'>@sharjeel</p>
                          </td>
                          <td>
                            <p className='paratable lefts'>@500 TOMI</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className='paratable'>Sharjeel</p>
                          </td>
                          <td>
                            <p className='paratable'><img src='\static-icons\captain.png' alt='img' className='img-fluid' style={{width: "50px", height: "50px"}} />Captain</p>
                          </td>
                          <td>
                            <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>
                          </td>
                          <td>
                            <p className='paratable'>@Umar_x2jz</p>
                          </td>
                          <td>
                            <p className='paratable lefts'>@500 TOMI</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagi">
                    <div className="left">
                      <p>Showing 1 to 10 of 57 entries</p>
                    </div>
                    <div className="right">
                      <p>Previous</p>
                      <Pagination>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item >{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item >{5}</Pagination.Item>
                        <Pagination.Item>{6}</Pagination.Item>
                      </Pagination>
                      <p>Next</p>
                    </div>
                  </div>
                </div>
                <div className="mobile-responsive-table d-none display-block-in-mobile">
                  <div className="heading-mobile">
                    <p>Nickname</p>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>sharjeel</Accordion.Header>
                      <Accordion.Body>
                        <div className="inner-fields">
                          <div className="inner-item">
                            <h6>Rank</h6>
                            <p><img src="\assets\private.svg" style={{ width: "22px", height: "22px" }} alt="img" className='img-fluid me-2' /> Private</p>
                          </div>
                          <div className="inner-item">
                            <h6>Wallet Address</h6>
                            <p>0x2F78....aB0C</p>
                          </div>
                          <div className="inner-item">
                            <h6>Username</h6>
                            <p>@sharjeel</p>
                          </div>
                          <div className="inner-item">
                            <h6>TOMI Balance</h6>
                            <p>500 TOMI</p>
                          </div>
                          <div className="inner-item">
                            <h6>Actions</h6>
                            <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                          </div>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>sharjeel</Accordion.Header>
                      <Accordion.Body>
                        <div className="inner-fields">
                          <div className="inner-item">
                            <h6>Rank</h6>
                            <p><img src="\assets\private.svg" style={{ width: "22px", height: "22px" }} alt="img" className='img-fluid me-2' /> Private</p>
                          </div>
                          <div className="inner-item">
                            <h6>Wallet Address</h6>
                            <p>0x2F78....aB0C</p>
                          </div>
                          <div className="inner-item">
                            <h6>Username</h6>
                            <p>@sharjeel</p>
                          </div>
                          <div className="inner-item">
                            <h6>TOMI Balance</h6>
                            <p>500 TOMI</p>
                          </div>
                          <div className="inner-item">
                            <h6>Actions</h6>
                            <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                          </div>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>sharjeel</Accordion.Header>
                      <Accordion.Body>
                        <div className="inner-fields">
                          <div className="inner-item">
                            <h6>Rank</h6>
                            <p><img src="\assets\private.svg" style={{ width: "22px", height: "22px" }} alt="img" className='img-fluid me-2' /> Private</p>
                          </div>
                          <div className="inner-item">
                            <h6>Wallet Address</h6>
                            <p>0x2F78....aB0C</p>
                          </div>
                          <div className="inner-item">
                            <h6>Username</h6>
                            <p>@sharjeel</p>
                          </div>
                          <div className="inner-item">
                            <h6>TOMI Balance</h6>
                            <p>500 TOMI</p>
                          </div>
                          <div className="inner-item">
                            <h6>Actions</h6>
                            <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                          </div>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>sharjeel</Accordion.Header>
                      <Accordion.Body>
                        <div className="inner-fields">
                          <div className="inner-item">
                            <h6>Rank</h6>
                            <p><img src="\assets\private.svg" style={{ width: "22px", height: "22px" }} alt="img" className='img-fluid me-2' /> Private</p>
                          </div>
                          <div className="inner-item">
                            <h6>Wallet Address</h6>
                            <p>0x2F78....aB0C</p>
                          </div>
                          <div className="inner-item">
                            <h6>Username</h6>
                            <p>@sharjeel</p>
                          </div>
                          <div className="inner-item">
                            <h6>TOMI Balance</h6>
                            <p>500 TOMI</p>
                          </div>
                          <div className="inner-item">
                            <h6>Actions</h6>
                            <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                          </div>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal className='detailmodal' show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>create Squad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg'alt='img'className='img-fluid'/>
            <p>Are you sure you want to leave this squad?</p>
          </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow1}><img src='\up.svg'alt='img'className='img-fluid'/>Yes’ I am sure</button>
            </div>
          </Modal.Body>

        </Modal> */}

        {/*         
        <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
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
              <p>Squad Name</p>
              <input type='text' placeholder='Enter Squad Name....' />
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow2}><img src='\add.svg'alt='img'className='img-fluid'/> Create Squad</button>
            </div>
          </Modal.Body>

        </Modal> */}

        <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
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
      </section>
    </>
  )
}

export default Squad