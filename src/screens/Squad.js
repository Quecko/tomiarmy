import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
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
      <section className='main-squad'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='maincardsquad border-grad1'>
                <div className='squadparent'>
                  <div className='innercard1 border-grad'>
                    <div className='parent'onClick={handleShow}>
                    <div className='left'>
                      <img src='\Grouppic.svg'alt='img'className='img-fluid'/>
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
                      <img src='\Frameownwe.svg'alt='img'className='img-fluid'/>
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
                      <img src='\Frametokens.svg'alt='img'className='img-fluid'/>
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
                      <img src='\Framemember.svg'alt='img'className='img-fluid'/>
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
                                <p className='headtable'>TOMI Balance</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'><img src='\polygon.svg'alt='img'className='img-fluid'/> Private</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'><img src='\polygon1.svg'alt='img'className='img-fluid'/> Sergeant</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'><img src='\polygon2.svg'alt='img'className='img-fluid'/>Lieutenant</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'><img src='\polygon3.svg'alt='img'className='img-fluid'/>Captain</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
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