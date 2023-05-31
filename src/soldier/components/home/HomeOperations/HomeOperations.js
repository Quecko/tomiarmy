import { React, useState, useEffect } from "react";
import "./homeoperations.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import TopSquad from './TopSquad';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { API_URL } from "../../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const HomeOperations = () => {

  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [topSquad, setTopSquad] = useState([]);
  console.log("data", topSquad)
  const [commander, setCommander] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let tok = localStorage.getItem("accessToken");

  const GetUserTopSquad = () => {
    // setLoader(true);
    console.log("token", tok)
    var config = {
      method: "get",
      url: `${API_URL}/squads?offset=1&limit=10`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(async (response) => {
        // console.log("resProfile",response)
        // setLoader(false);
        setTopSquad(response.data.data.squad)
        // setcoms(response?.data?.data?.squad?.commander)
        // setnewss(response?.data?.data?._id)
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
      });
  }

  const SendInvite = async (id) => {
    // e.preventDefault();
    // setLoader(true);
    await axios
      .post(`${API_URL}/squad-invitation-requests`, {
        squadId: id.toString(),
      }, {
        headers: {
          authorization: `Bearer ` + tok
        }
      })
      .then((res) => {
        // window.$("#examplemodalinvite").modal("hide");
        GetUserTopSquad()
        toast.success("Invite Sent Successfully");
        // setLoader(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
        // setLoader(false);
      });
  }

  const SquadUsers = async (off) => {
    let valu = null;
    // if (off) {
    //     valu = off;
    // } else {
    //     valu = 1;
    // }
    let wall = localStorage.getItem("wallet");
        var config = {
            method: "get",
            url: `${API_URL}/users?offset=1&&limit=5`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                setCommander(response?.data?.data?.commanderWalletAddress)
  // console.log("data11", response)

                setUsers(response?.data?.data?.users);
                // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                // setPages(arr);
                // setCurrentPage(valu)
            })
            .catch(function (error) {
                // console.log(error);
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.reload();
            });
}

  useEffect(() => {
    GetUserTopSquad()
    SquadUsers()
  }, []);
  return (
    <>
      <div className="warpper-lock-operation">
        {data?.isCommander === false && data?.memberOfSquad === false
          ?
          <div className="lock-operation">
            <img src="\assets\lock-eye.svg" alt="img" className='img-fluid' />
            <h6>Join squad to view operations</h6>
            <button onClick={handleShow}>Join Squad</button>
          </div>
          : ''
        }

        <section className="home-operations border-grad1">
          <div className="upper-item">
            <div className='left'>
              <h6>operation : ELON MUSK <span>ENDS IN: 23:34:12</span></h6>
              <p>make elon musk tweet about tomi</p>
            </div>
            <a href="#">View <span>All Operation Tasks</span> <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
          </div>
          <div className="bottom-cards">
            <div className="card-item border-grad">
              <img src="\static-icons\points.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
              <div className="inner-content">
                <p>Points</p>
                <h6>150,000</h6>
              </div>
            </div>
            <div className="card-item border-grad">
              <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
              <div className="inner-content">
                <p>TOMI Tokens</p>
                <h6>100,000</h6>
              </div>
            </div>
            <div className="card-item border-grad">
              <img src="\static-icons\tomitasks.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
              <div className="inner-content">
                <p>Total Tasks</p>
                <h6>55</h6>
              </div>
            </div>
            <div className="card-item border-grad unique-item">
              <div className='inner-set'>
                <img src="\static-icons\rewardnft.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                <div className="inner-content">
                  <p>Reward NFT</p>
                  <h6>ELN MSK #41234</h6>
                </div>
              </div>
              <div className="nft-img">
                <img src="\assets\nft.svg" alt="img" className='img-fluid' />
              </div>
            </div>
          </div>
          <div className='maincard display-none-in-mobile'>
            <div className="maintable table-responsive">
              <table class="table table-striped " >
                <thead>
                  <tr>
                    <th>
                      <p className='headtable'>Task</p>
                    </th>
                    <th>
                      <p className='headtable'>Points</p>
                    </th>
                    <th>
                      <p className='headtable'>TOMI Tokens</p>
                    </th>
                    <th>
                      <p className='headtable'>Progress</p>
                    </th>
                    <th>
                      <p className='headtable'>Status</p>
                    </th>
                    <th>
                      <p className='headtable'>Action</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className='paratable'>Like our facebook page</p>
                    </td>
                    <td>
                      <p className='paratable'>+5</p>
                    </td>
                    <td>
                      <p className='paratable'>500 TOMI</p>
                    </td>
                    <td>
                      <div className="twice">
                        <img src="\assets\greenline.svg" alt="img" className='img-fluid' />
                        <p className='paratable'>100 of 100</p>
                      </div>
                    </td>
                    <td>
                      <div className='completebtn'>
                        <button className=''>Completed</button>
                      </div>
                    </td>
                    <td>
                      <div className='dropbtn'>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src='\Vectordots.svg' alt='img' className='' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className='paratable'>Like our facebook page</p>
                    </td>
                    <td>
                      <p className='paratable'>+5</p>
                    </td>
                    <td>
                      <p className='paratable'>500 TOMI</p>
                    </td>
                    <td>
                      <div className="twice">
                        <img src="\assets\orangeline.svg" alt="img" className='img-fluid' />
                        <p className='paratable'>67 of 100</p>
                      </div>
                    </td>
                    <td>
                      <div className='completebtn'>
                        <button className='orange'>In Progress</button>
                      </div>
                    </td>
                    <td>
                      <div className='dropbtn'>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src='\Vectordots.svg' alt='img' className='' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className='paratable'>Follow our twitter acc...</p>
                    </td>
                    <td>
                      <p className='paratable'>+5</p>
                    </td>
                    <td>
                      <p className='paratable'>500 TOMI</p>
                    </td>
                    <td>
                      <div className="twice">
                        <img src="\assets\blankline.svg" alt="img" className='img-fluid' />
                        <p className='paratable'>0 of 100</p>
                      </div>
                    </td>
                    <td>
                      <div className='completebtn'>
                        <button className='orange'>In Progress</button>
                      </div>
                    </td>
                    <td>
                      <div className='dropbtn'>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src='\Vectordots.svg' alt='img' className='' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className='paratable'>Follow our twitter acc...</p>
                    </td>
                    <td>
                      <p className='paratable'>+5</p>
                    </td>
                    <td>
                      <p className='paratable'>500 TOMI</p>
                    </td>
                    <td>
                      <div className="twice">
                        <img src="\assets\redline.svg" alt="img" className='img-fluid' />
                        <p className='paratable'>5 of 100</p>
                      </div>
                    </td>
                    <td>
                      <div className='completebtn'>
                        <button className='red'>Not Started</button>
                      </div>
                    </td>
                    <td>
                      <div className='dropbtn'>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src='\Vectordots.svg' alt='img' className='' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mobile-responsive-table d-none display-block-in-mobile">
            <div className="heading-mobile">
              <p>Task</p>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Like our facebook page</Accordion.Header>
                <Accordion.Body>
                  <div className="inner-fields">
                    <div className="inner-item">
                      <h6>Points</h6>
                      <p>+5</p>
                    </div>
                    <div className="inner-item">
                      <h6>TOMI Tokens</h6>
                      <p>500 TOMI</p>
                    </div>
                    <div className="inner-item">
                      <h6>Progress</h6>
                      <p><img src="\assets\greenline.svg" alt="img" className='img-fluid me-2' />100 of 100</p>
                    </div>
                    <div className="inner-item">
                      <h6>Status</h6>
                      <button className="btn-green">Completed</button>
                    </div>
                    <div className="inner-item">
                      <h6>Actions</h6>
                      <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Follow our twitter acc...</Accordion.Header>
                <Accordion.Body>
                  <div className="inner-fields">
                    <div className="inner-item">
                      <h6>Points</h6>
                      <p>+5</p>
                    </div>
                    <div className="inner-item">
                      <h6>TOMI Tokens</h6>
                      <p>500 TOMI</p>
                    </div>
                    <div className="inner-item">
                      <h6>Progress</h6>
                      <p><img src="\assets\greenline.svg" alt="img" className='img-fluid me-2' />100 of 100</p>
                    </div>
                    <div className="inner-item">
                      <h6>Status</h6>
                      <button className="btn-green">Completed</button>
                    </div>
                    <div className="inner-item">
                      <h6>Actions</h6>
                      <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Like our facebook page</Accordion.Header>
                <Accordion.Body>
                  <div className="inner-fields">
                    <div className="inner-item">
                      <h6>Points</h6>
                      <p>+5</p>
                    </div>
                    <div className="inner-item">
                      <h6>TOMI Tokens</h6>
                      <p>500 TOMI</p>
                    </div>
                    <div className="inner-item">
                      <h6>Progress</h6>
                      <p><img src="\assets\greenline.svg" alt="img" className='img-fluid me-2' />100 of 100</p>
                    </div>
                    <div className="inner-item">
                      <h6>Status</h6>
                      <button className="btn-green">Completed</button>
                    </div>
                    <div className="inner-item">
                      <h6>Actions</h6>
                      <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Like our facebook page</Accordion.Header>
                <Accordion.Body>
                  <div className="inner-fields">
                    <div className="inner-item">
                      <h6>Points</h6>
                      <p>+5</p>
                    </div>
                    <div className="inner-item">
                      <h6>TOMI Tokens</h6>
                      <p>500 TOMI</p>
                    </div>
                    <div className="inner-item">
                      <h6>Progress</h6>
                      <p><img src="\assets\greenline.svg" alt="img" className='img-fluid me-2' />100 of 100</p>
                    </div>
                    <div className="inner-item">
                      <h6>Status</h6>
                      <button className="btn-green">Completed</button>
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
        </section>
      </div>
      {data?.isCommander === false && data?.memberOfSquad === false
        ?
        <TopSquad  props={topSquad} GetUserTopSquad={GetUserTopSquad}/>

        :
        <>
          <section className="home-operations border-grad1">
            <div className='maincard display-none-in-mobile'>
              <div className="upper-head">
                <h6>Your Squad</h6>
                <a href="#">View All <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
              </div>
              <div className="maintable table-responsive">
                <table class="table table-striped ">
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
                  {users?.map((elem) => {
                  return (
                    <>
                     <tr>
                      <td>
                        <p className='paratable'>{elem?.nickName}</p>
                      </td>
                      <td>
                        <p className='paratable'><img src={elem?.rank?.icon} alt="img" className='img-fluid me-2' style={{ width: "50px", height: "50px" }} />{elem?.rank?.name}</p>
                      </td>
                      <td>
                        <p className='paratable'>{elem?.walletAddress}</p>
                      </td>
                      <td>
                        <p className='paratable'>-</p>
                      </td>
                      <td>
                        <p className='paratable'>{elem?.tomiTokens} TOMI</p>
                      </td>
                    </tr>
                    </>
                  )
                })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mobile-responsive-table d-none display-block-in-mobile">
              <div className="uscyivyscvsvscy">
                <h6>Your Squad</h6>
              </div>
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
                        <h6>TOMI Balance</h6>
                        <p>500 TOMI</p>
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
                        <h6>TOMI Balance</h6>
                        <p>500 TOMI</p>
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
                        <h6>TOMI Balance</h6>
                        <p>500 TOMI</p>
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
                        <h6>TOMI Balance</h6>
                        <p>500 TOMI</p>
                      </div>

                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </section>
        </>
      }

      <Modal className='joinsquad-modal' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Top Squads</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="parent-modal">
            <div className="option-field">
              <input type="text" placeholder='Search' className='border-grad1' />
              <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' />
            </div>
            <div className="maintable table-responsive display-none-in-mobile">
              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>
                      <p className='headtable'>Squads</p>
                    </th>
                    <th>
                      <p className='headtable'>Total Members</p>
                    </th>
                    <th>
                      <p className='headtable'>TOMI Balance</p>
                    </th>
                    <th>
                      <p className='headtable'>Action</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {topSquad?.map((elem) => {
                      return (
                        <>
                          <td>
                            <div className="parent">
                              <div className="profile">
                                <img src={elem?.symbol} alt="img" className='img-fluid' />
                              </div>
                              <p className='paratable'>{elem?.name}</p>
                            </div>
                          </td>
                          <td>
                            <p className='paratable'>{elem?.membersCount}</p>
                          </td>
                          <td>
                            <p className='paratable'>{elem?.totalTokens} TOMI</p>
                          </td>
                          <td>
                            <button className={elem?.squad_invitation_requests ? 'btn-requested' : 'btn-requestjoin'} onClick={() => SendInvite(elem?._id)}>{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                          </td>
                        </>
                      )
                    })}


                  </tr>

                </tbody>
              </table>
            </div>
            <div className="mobile-responsive-table d-none display-block-in-mobile">
              <div className="heading-mobile">
                <p>Squads</p>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header> <img src="\assets\squad-profile.png" alt="img" className='img-fluid me-2' /> DC Squad</Accordion.Header>
                  <Accordion.Body>
                    <div className="inner-fields">
                      <div className="inner-item">
                        <h6>TOMI Balance</h6>
                        <p>25</p>
                      </div>
                      <div className="inner-item">
                        <h6>Total Members</h6>
                        <p>500 TOMI</p>
                      </div>
                      <div className="inner-item">
                        <h6>Actions</h6>
                        <button className='btn-pink'>Request to join</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> <img src="\assets\squad-profile.png" alt="img" className='img-fluid me-2' /> DC Squad</Accordion.Header>
                  <Accordion.Body>
                    <div className="inner-fields">
                      <div className="inner-item">
                        <h6>TOMI Balance</h6>
                        <p>25</p>
                      </div>
                      <div className="inner-item">
                        <h6>Total Members</h6>
                        <p>500 TOMI</p>
                      </div>
                      <div className="inner-item">
                        <h6>Actions</h6>
                        <button className='btn-pink'>Request to join</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header> <img src="\assets\squad-profile.png" alt="img" className='img-fluid me-2' /> DC Squad</Accordion.Header>
                  <Accordion.Body>
                    <div className="inner-fields">
                      <div className="inner-item">
                        <h6>TOMI Balance</h6>
                        <p>25</p>
                      </div>
                      <div className="inner-item">
                        <h6>Total Members</h6>
                        <p>500 TOMI</p>
                      </div>
                      <div className="inner-item">
                        <h6>Actions</h6>
                        <button className='btn-pink'>Request to join</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> <img src="\assets\squad-profile.png" alt="img" className='img-fluid me-2' /> DC Squad</Accordion.Header>
                  <Accordion.Body>
                    <div className="inner-fields">
                      <div className="inner-item">
                        <h6>TOMI Balance</h6>
                        <p>25</p>
                      </div>
                      <div className="inner-item">
                        <h6>Total Members</h6>
                        <p>500 TOMI</p>
                      </div>
                      <div className="inner-item">
                        <h6>Actions</h6>
                        <button className='btn-pink'>Request to join</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default HomeOperations
