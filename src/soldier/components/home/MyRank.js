import { React, useState, useEffect } from "react";
import privateRank from "../../../assets/icons/privateRank.svg";
import dcSquad from "../../../assets/icons/dcSquad.svg";
import Sergeant from "../../../assets/icons/Sergeant.svg";
import pointsBar from "../../../assets/icons/pointsBar.svg";
import { API_URL } from "../../../utils/ApiUrl"
import ProgressBar from "react-bootstrap/ProgressBar";
import { useWeb3React } from "@web3-react/core";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { toast } from 'react-toastify';
import axios from "axios";

const MyRank = ({ props }) => {
  let tok = localStorage.getItem("accessToken");
  const { account } = useWeb3React()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [topSquad, setTopSquad] = useState([]);
  const [loader,setLoader]=useState(false)

  const [army, setArmy] = useState([]);
  const GetNextRank = () => {
    if (props) {
      let dumObj = null;
      dumObj = army.findIndex((i) => {
        return i.name === props?.rank?.name;
      })
      dumObj = army[dumObj + 1];
      return <>
        <div className="private-rank sergeant">
          <img src={dumObj?.icon} alt="earned" style={{ width: "60px", height: "60px" }} />
          <h4>{dumObj?.name}</h4>
        </div>
      </>
    } else {
      return <> <img
        src="\static-icons\private-rank.png"
        alt="img"
        className="img-fluid"
      />
        <p className="lefttext">Loading</p>
        <div className="private-rank sergeant">
          <img src="\static-icons\private-rank.png" alt="earned" style={{ width: "60px", height: "60px" }} />
          <h4>"...Loading</h4>
        </div>
      </>
    }
  }

  const GetArmy = () => {
    var config = {
      method: "get",
      url: `${API_URL}/tasks/army-ranks`,
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
        // window.location.reload();
      });
  }

  const GetUserTopSquad = async (off) => {
    // let valu = null;
    // if (off) {
    //   valu = off;
    // } else {
    //   valu = 1;
    // }

    if (account) {
      var config = {
        method: "get",
        url: `${API_URL}/tasks/squads?offset=1&&limit=5`,
        headers: {
          authorization: `Bearer ` + tok
        },
      };

      axios(config)
        .then(function (response) {
          setLoader(false);
          // setCount(response.data.data.count)
          setTopSquad(response.data.data.squad)
          // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
          // setPages(arr);
          // setCurrentPage(valu)
          // setSearch('')
          // if (off <= response.data.data.squad.length) {
          //   if ((off - 1) == 0) {
          //     setLimit(1)
          //   }
          //   else {
          //     setLimit((off - 1) * 5)
          //   }
          // }
          // window.scrollTo(0, 0);
        })
        .catch(function (error) {
          console.log(error);
          setLoader(false);
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("user");
          // localStorage.removeItem("isCommander");
          // window.location.assign("/")
          // window.location.reload();
        });
    }
  }

  const SendInvite = (id) => {
    // if (account) {
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${tok}`;
    var config = {
      method: "post",
      url: `${API_URL}/tasks/squad-invitation-requests`,
      data: {
        squadId: id.toString()
      }
    };

    axios(config)
      .then(async (response) => {
        GetUserTopSquad()
        toast.success("Invite Sent Successfully");
      })
      .catch(function (err) {
        toast.error(err?.response?.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
        // setLoader(false);
      });
    // }
  }
  useEffect(() => {
    GetArmy();
    GetUserTopSquad()
  }, [account])
  return (
    <>
    <div className="data-box border-grad1">
      <h4>my rank</h4>
      <div className="rank-squad-row row">
        <div className="col-lg-6 ransk-name-left padd-sm">
          <div className="ransk-name-heading-row inner-data-box border-grad">
            <img src={props?.rank?.icon} alt="privateRank" />
            <div className="ransk-name-heading">
              <p>My Rank</p>
              <h4>{props?.rank?.name}</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ransk-name-right">
          {props?.squad?.symbol && props?.squad?.name ?
            <div className="ransk-name-heading-row inner-data-box border-grad">
              <img src={props?.squad?.symbol} alt="Squad" style={{ width: "50px", height: "50px", borderRadius: '10px' }} />
              <div className="ransk-name-heading">
                <p>My Squad</p>
                {/* <h4>{props?.props?.memberOfSquad === false ? '-' : ""}</h4> */}
                <h4>{props?.squad?.name}</h4>
              </div>
            </div>
            :
            <div className="ansk-name-heading-row inner-data-box border-grad  dfdfb">
              <div className="join_squad">
            <img src="\assets\join_join.png" alt="img" className='img-fluid' />
            <button onClick={handleShow}>Join Squad</button>
          </div>
            </div>
          }
        </div>
      </div>
      <div className="col-lg-12">
        <div className="inner-data-box border-grad">
          <div className="private-sergant">
            <div className="private-rank-row">
              <div className="private-rank dc-squad">
                <img src={props?.rank?.icon} alt="earned" style={{ width: "60px", height: "60px" }} />
                <h4>{props?.rank?.name}</h4>
              </div>
              {GetNextRank()}
              {/* <div className="private-rank sergeant">
              <img src="\static-icons\sergeant.png" alt="earned" style={{width: "60px", height: "60px"}} />
                <h4>Sergeant</h4>
              </div> */}
            </div>
            <div className="squad-points">
              <div className="private-rank-row">
                <div className="private-rank dc-squad">
                  <p>1,500 POINTS</p>
                </div>
                <div className="private-rank sergeant">
                  <p>5,000 POINTS</p>
                </div>
              </div>
              {props?.rank?.name === "private" &&
                <ProgressBar min={0} max={100} now={props?.points} />
              }
              {props?.rank?.name === "sergeant" &&
                <ProgressBar min={100} max={250} now={props?.points} />
              }
              {props?.rank?.name === "lieutenant" &&
                <ProgressBar min={250} max={500} now={props?.points} />
              }
              {props?.rank?.name === "captain" &&
                <ProgressBar min={500} max={1000} now={props?.points} />
              }
              {props?.rank?.name === "major" &&
                <ProgressBar min={1000} max={1500} now={props?.points} />
              }
              {props?.rank?.name === "colonel" &&
                <ProgressBar min={1500} max={3000} now={props?.points} />
              }
              {props?.rank?.name === "major general" &&
                <ProgressBar min={3000} max={3000} now={props?.points} />
              }
              {/* <img src={pointsBar} className="img-fluid" alt="img" style={{ marginLeft: "-15px", width: "100%" }} /> */}
              <img src="\Framedots.svg" alt="img" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* modal for join squad */}


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
                  {topSquad?.map((elem) => {
                    return (
                      <tr>
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
                      </tr>
                    )
                  })}
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
  );
};

export default MyRank;
