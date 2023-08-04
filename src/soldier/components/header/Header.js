import React, { useState, useEffect } from "react";
import "../../../style.scss";
import { Link } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notificationIcon.svg";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { useWeb3React } from "@web3-react/core";
import mobileLogo from "../../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';
import { API_URL } from "../../../utils/ApiUrl"
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import Signature from "../../../hooks/dataSenders/userSign";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../../hooks/useAuth";
import notiSound from "../../../assets/sound/sound.mp3";
import { TokenExpiredOrNot } from "../../../utils/TokenExpiredOrNot";



const Header = ({ routes, setroute, indexwait, handleShow, setShow2, setShow1, setShow4, setShow5, notifs, getNotif, getData, getDataOperation, getChat,setindexwait }) => {
  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  const { userSign } = Signature();
  const { account } = useWeb3React();
  const [squaddetail, setsquaddetail] = useState()
  const [loader, setLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const history = useHistory();
  const GetUserProfiledata = () => {
    // setLoader(true);
    let tok = localStorage.getItem("accessToken");
    if (account) {
      var config = {
        method: "get",
        url: `${API_URL}/auth/users/profile`,
        headers: {
          authorization: `Bearer ` + tok
        },
      };
      axios(config)
        .then(async (response) => {
          // setLoader(false);
          setsquaddetail(response.data.data)
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
  }

  // const [msgObj, setMsgObj] = useState(null);
  // const [squadids, setSquadids] = useState()
  // useEffect(() => {
  //     if(msgObj){
  //         setSquadids(JSON.parse(msgObj?.notification?.metadata?.squadId));
  //     }

  // }, [msgObj?.notification?.metadata !== undefined])

  useEffect(() => {
    let tok = localStorage.getItem("accessToken");
    let socket = io('https://devapi.tomiarmy.com', {
      transports: ["websocket", "polling"],
      path: "/chats/sockets",
    });
    socket.on("connect", () => {
      console.log('socket connected in header++++++++++++++++++++++++++', socket.connected);
      socket.emit("authentication", {
        token: tok,
      });
    });
    socket.on('WORK_PROOF_REJECTED', (notification) => {
      toast.info("Update On Your Submitted Task Please Check Your Notifications");
      audio.play()
      getNotif()
      getData()
      getDataOperation()
    });
    socket.on('WORK_PROOF_APPROVED', (notification) => {
      // toast.info("Update On Your Submitted Task Please Check Your Notifications");
      audio.play()
      getNotif()
      getData()
      getDataOperation()
    });
    socket.on('Recruite_Invite', (notification) => {
      // toast.info("You are Invited to join a Squad by a Commander Please Check Your Notifications");
      audio.play()
      getNotif()
      // setShowModal(true)
    });
    socket.on('Recruite_Invite_Accepted', (notification) => {
      // toast.info("Your Recruite Invitation has been Accepted Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Squad_Recruite_Invite', (notification) => {
      // toast.info("Squad Recruite Invite Send To You Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Squad_Recruite_Accepted', (notification) => {
      // toast.info("Your Squad Recruite Accepted Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Group_Message', () => {
      // toast.info("group message chat notification");
      getChat()
      getNotif()
    });
    socket.on('Co_Leader_Added', (notification) => {
      // toast.info("You are Promoted for Co-Leader Please Check Your Notifications");
      audio.play()
      getNotif()
      setShowModal(true)
    });
    socket.on('Co_Leader_Removed', (notification) => {
      // toast.info("You are Removed for as a Co-Leader Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Veteran_kicked_out', (notification) => {
      // toast.info("You are Removed from Squad Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Rank_Updated', (notification) => {
      // toast.info("You are Removed from Squad Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('Rank_Updated_By_General', (notification) => {
      // toast.info("You are Removed from Squad Please Check Your Notifications");
      audio.play()
      getNotif()
    });
    socket.on('message', (notification) => {
      // toast.info("You are Removed from Squad Please Check Your Notifications");
      audio.play()
      getNotif()
    });

    socket.on("disconnect", (reason) => {
      console.log(`Disconnected header: ${reason}`);
    });
  }, [])

  const AcceptInvite = async (item) => {
    const { squadId } = JSON.parse(item?.notification?.metadata);
    let tok = localStorage.getItem("accessToken");
    setLoader(true);
    var data = ({
      squad: squadId,
    });
    var config = {
      method: "post",
      url: `${API_URL}/tasks/recruite-invites/join`,
      headers: {
        authorization: `Bearer ` + tok
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setLoader(false);
        // getData();
        toast.success('Squad joined Successfully', {
          position: "top-right",
          autoClose: 2000,
        });
        const userString = JSON.parse(localStorage.getItem('user'));
        userString.memberOfSquad = response?.data?.data?.memberOfSquad;
        localStorage.setItem('user', JSON.stringify(userString));
        localStorage.setItem("accessToken", response?.data?.accessToken);
        setShowModal(true)
        // window.location.reload();
        // updateToken();
        // window.location.reload();
      })
      .catch(function (error) {
        setLoader(false);
        toast.error(error?.response?.data?.message)
      });
    setShow1(false);
  }


  useEffect(() => {
    // getNotif()
    GetUserProfiledata()
  }, [account]);


  const updateNotifications = (item) => {
    let tok = localStorage.getItem("accessToken");
    var config = {
      method: "patch",
      url: `${API_URL}/notifications/user-notifications/${item?.notification?.id}`,
      headers: {
        authorization: `Bearer ` + tok
      },

    };
    axios(config)
      .then(function (response) {
        loginUser()
      })
      .catch(function (error) {
        console.log(error);
      });
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
            setShowModal(false)
            window.location.reload()
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
              history.push("/")
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

  const SignUp = () => {
    loginUser()
    // window.location.reload()
  }

  let audio = new Audio(notiSound)

  let token = localStorage.getItem("accessToken");
  useEffect(() => {
    TokenExpiredOrNot()
  }, [])

  // const NotiSoundOn =()=>{
  //   audio.play() 
  // }

  const addNickName = (asd) => {
    setindexwait(asd)
    localStorage.setItem("indexvalue", asd);
  }

  return (
    <>
      <div
        className={
          indexwait === 0
            ? "home-headed-username Header-wrapper"
            : "home-headed-username-none Header-wrapper"
        }
      >
        <div className="home-headed-username">
          <div className="mobile-logo">
            <Link to={"/soldier"}>
              <img src={mobileLogo} alt="mobileLogo" />
            </Link>
          </div>
          {indexwait === 0 ? (
            <div className="soldier-name">
              <h4 className="shgysgasgcashbhsac"><div>Welcome </div>{data?.nickName ? <div style={{marginLeft:'6px'}}>{data?.nickName}</div>:
                <div className="no_user">
                  NO NICKNAME,
                  <button className="add_nick_name" onClick={() => { addNickName(8); }}><img src="\assets\add-circle.svg" alt="img" className="img-fluid me-2" /><div>ADD NICKNAME</div></button>
                </div>
              }
              </h4>
              <p>LET’S FIGHT FOR THE ARMY</p>
            </div>
          ) : null}
          {indexwait === 1 ? (
            <div className="soldier-name">
              <h4>ALL TASKS</h4>
              <p>VIEW AND complete TASKS</p>
            </div>
          ) : null}
          {indexwait === 3 ? (
            <div className="soldier-name">
              <h4>Your Squad</h4>
              <p>VIEW Your Squad</p>
            </div>
          ) : null}
          {indexwait === 2 ? (
            <>
              {
                routes ?
                  <button onClick={() => setroute(!routes)} className="btn-goback"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button> :
                  <div className="soldier-name">
                    <h4>Operations</h4>
                    <p>VIEW AND complete operations</p>
                  </div>
              }
            </>
          ) : null}
          {indexwait === 4 ? (
            <div className="soldier-name">
              <h4>announcements</h4>
              <p>view your announcements</p>
            </div>
          ) : null}
          {/* {indexwait === 6 || indexwait === 12 || indexwait === 13 ? (
            <div className="soldier-name">
              <h4>{indexwait == 12 ? 'My Post' : 'Army Forum'} </h4>
              <p>Engage with your {indexwait == 12 ? 'post' : 'army'}</p>
            </div>
          ) : null} */}
          {indexwait === 5 ? (
            <div className="soldier-name">
              <h4>Group Chat</h4>
              <p>Chat with your army</p>
            </div>
          ) : null}
          {indexwait === 7 ? (
            <div className="soldier-name">
              <h4>Claim Rewards</h4>
              <p>claim you rewards</p>
            </div>
          ) : null}
          {indexwait === 8 ? (
            <div className="soldier-name">
              <h4>settings</h4>
              <p>Change you nickname and link social accounts</p>
            </div>
          ) : null}
          {indexwait === 9 ? (
            <div className="soldier-name">
              <h4>Report a Bug</h4>
              <p>report a bug to get resolved</p>
            </div>
          ) : null}
          {indexwait === 10 ? (
            <div className="soldier-name">
              <h4>Faqs</h4>
              <p>view faqs</p>
            </div>
          ) : null}
          {indexwait === 11 ? (
            <div className="soldier-name">
              <h4>Recruiting Requests</h4>
              <p>view your army</p>
            </div>
          ) : null}
        </div>
        <div className="header-buttons">
          {
            indexwait === 0 ?
              <>
                <div class="btn-group notification-btn">
                  <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <img src={notificationIcon} alt="notificationIcon" />
                    {/* <span className="update-dot"></span> */}
                  </button>
                  <ul class="dropdown-menu border-grad1">
                    {notifs?.length > 0 ?
                      <>
                        {notifs?.map((item, index) => {
                          // const squadId = metadataString?.substring(metadataString.indexOf('squadId":"') + 10, metadataString.indexOf('"}'));
                          const extractCoLeaderValue = (metadataString) => {
                            const coLeaderAddedSubstring = '"coLeaderAdded":"';
                            if (coLeaderAddedSubstring?.includes) {
                              return metadataString?.includes('"coLeaderAdded":true');
                            }
                            return undefined
                          }
                          const extractCoLeaderValueRemoved = (metadataString) => {
                            const coLeaderAddedSubstring = '"coLeaderRemoved":"';
                            if (coLeaderAddedSubstring?.includes) {
                              return metadataString?.includes('"coLeaderAdded":true');
                            }
                            return undefined
                          }
                          const extractSquadIdValue = (metadataString) => {
                            const squadIdSubstring = '"squadId":"';
                            if (metadataString?.includes(squadIdSubstring)) {
                              const startIndex = metadataString?.indexOf(squadIdSubstring) + squadIdSubstring.length;
                              const endIndex = metadataString?.indexOf('"', startIndex);
                              return metadataString.substring(startIndex, endIndex);
                            }
                            return undefined;
                          }
                          const coLeaderAdded = extractCoLeaderValue(item?.notification?.metadata);
                          const coLeaderRemoved = extractCoLeaderValueRemoved(item?.notification?.metadata);
                          const squadId = extractSquadIdValue(item?.notification?.metadata);
                          return (
                            <div className="inner-div border-grad">
                              <div className="upper-text">
                                {/* <h6>Join DC SQUAD Again</h6> */}
                                <p><span></span>{moment(item?.createdAt).fromNow()}</p>
                              </div>
                              <p className="para">{item?.notification?.message}</p>
                              {squadId && data?.memberOfSquad == false &&
                                <div className="twice-btn">
                                  {/* <button className="btn-reject"><img src="\assets\reject-icon.svg" alt="img" className="img-fluid me-2" />Reject</button> */}
                                  <button className="btn-accept" onClick={() => AcceptInvite(item)}><img src="\assets\checkmark.svg" alt="img" className="img-fluid me-2" />Accept</button>
                                </div>
                              }
                              {coLeaderAdded == true && item?.isRead == false && data?.isCoLeader == false &&
                                <div className="twice-btn">
                                  <button className="btn-accept" onClick={() => updateNotifications(item)}><img src="\assets\checkmark.svg" alt="img" className="img-fluid me-2" />Sign up</button>
                                </div>
                              }
                              {coLeaderRemoved == true && item?.isRead == false && data?.isCoLeader == true &&
                                <div className="twice-btn">
                                  <button className="btn-accept" onClick={() => updateNotifications(item)}><img src="\assets\checkmark.svg" alt="img" className="img-fluid me-2" />Sign up</button>
                                </div>
                              }
                            </div>
                          )
                        })}
                      </>
                      :
                      <div className="inner-div border-grad">
                        <div className="upper-text">
                          <h6 className='para'>No Notifications to show.</h6>
                        </div>
                      </div>
                    }

                    {/* <div className="inner-div border-grad">
                      <div className="upper-text">
                        <h6>Join DC SQUAD Again</h6>
                        <p><span></span>Just Now</p>
                      </div>
                      <p className="para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="inner-div border-grad">
                      <div className="upper-text">
                        <h6>Join DC SQUAD Again</h6>
                        <p><span></span>Just Now</p>
                      </div>
                      <p className="para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> */}
                  </ul>
                </div>

                {data?.isCoLeader === false && data?.isCommander === true ?
                  ''
                  :
                  <button className="create-squad-btn display-none-in-mobile" onClick={() => setShow2(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_260_1810)">
                        <path
                          d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                          fill="#81828A"
                        />
                        <path
                          d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                          fill="#81828A"
                        />
                        <path
                          d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                          fill="#81828A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_260_1810">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span> Create Squad</span>
                  </button>
                }
              </>
              : ""
          }
          {
            indexwait === 3 ?
              <>
                {data?.isCoLeader === false && data?.isCommander === true ? (
                  <>
                    {/* <button className="leave display-none-in-mobile" onClick={() => setShow4(true)}>
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.35 1.5H11.4C9 1.5 7.5 3 7.5 5.4V8.4375H12.1875C12.495 8.4375 12.75 8.6925 12.75 9C12.75 9.3075 12.495 9.5625 12.1875 9.5625H7.5V12.6C7.5 15 9 16.5 11.4 16.5H13.3425C15.7425 16.5 17.2425 15 17.2425 12.6V5.4C17.25 3 15.75 1.5 13.35 1.5Z" fill="white" />
                        <path d="M4.17008 8.43751L5.72258 6.88501C5.83508 6.77251 5.88758 6.63 5.88758 6.4875C5.88758 6.345 5.83508 6.195 5.72258 6.09C5.50508 5.8725 5.14508 5.8725 4.92758 6.09L2.41508 8.60251C2.19758 8.82001 2.19758 9.18 2.41508 9.3975L4.92758 11.91C5.14508 12.1275 5.50508 12.1275 5.72258 11.91C5.94008 11.6925 5.94008 11.3325 5.72258 11.115L4.17008 9.56251H7.50008V8.43751H4.17008Z" fill="white" />
                      </svg>
                      <span>Invite Squad Member</span></button> */}
                    <button className="create-squad-btn display-none-in-mobile" onClick={() => setShow5(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="me-2"
                      >
                        <g clip-path="url(#clip0_260_1810)">
                          <path
                            d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                            fill="#81828A"
                          />
                          <path
                            d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                            fill="#81828A"
                          />
                          <path
                            d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                            fill="#81828A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_260_1810">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Add Co Leader</span>
                    </button>
                  </>
                )
                  :
                  (
                    <>
                      <button className="leave display-none-in-mobile" onClick={() => setShow1(true)}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.35 1.5H11.4C9 1.5 7.5 3 7.5 5.4V8.4375H12.1875C12.495 8.4375 12.75 8.6925 12.75 9C12.75 9.3075 12.495 9.5625 12.1875 9.5625H7.5V12.6C7.5 15 9 16.5 11.4 16.5H13.3425C15.7425 16.5 17.2425 15 17.2425 12.6V5.4C17.25 3 15.75 1.5 13.35 1.5Z" fill="white" />
                          <path d="M4.17008 8.43751L5.72258 6.88501C5.83508 6.77251 5.88758 6.63 5.88758 6.4875C5.88758 6.345 5.83508 6.195 5.72258 6.09C5.50508 5.8725 5.14508 5.8725 4.92758 6.09L2.41508 8.60251C2.19758 8.82001 2.19758 9.18 2.41508 9.3975L4.92758 11.91C5.14508 12.1275 5.50508 12.1275 5.72258 11.91C5.94008 11.6925 5.94008 11.3325 5.72258 11.115L4.17008 9.56251H7.50008V8.43751H4.17008Z" fill="white" />
                        </svg>
                        <span> Leave Squad</span></button>
                      <button className="create-squad-btn display-none-in-mobile" onClick={() => setShow2(true)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="me-2"
                        >
                          <g clip-path="url(#clip0_260_1810)">
                            <path
                              d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                              fill="#81828A"
                            />
                            <path
                              d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                              fill="#81828A"
                            />
                            <path
                              d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                              fill="#81828A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_260_1810">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span> Create Squad</span>
                      </button>
                    </>
                  )
                }

              </>
              : ""
          }
          {/* {
            indexwait === 6 || indexwait === 12 || indexwait === 13 ?
              <>
                <button className="create-squad-btn" >
                  <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                  <span>Start a new topic</span>
                </button>
              </>
              : ""
          } */}
          <button className="toggle-menu-btn" onClick={handleShow}>
            <img src={menuIcon} alt="menuIcon" />
          </button>
        </div>
      </div>

      {/* sign moodal */}
      <Modal className='detailmodal' show={showModal} centered>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <div className='imagesmodal'>
            <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
            <p>Your Squad Recruite Accepted Please</p>
            {/* <p>Are you sure you want to leave this squad?</p> */}
          </div>
          <div className='endbtn'>
            {/* <button  className="btn-blackk" ><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button> */}
            <button onClick={SignUp} className="btn-pinkk" ><img src='\up.svg' alt='img' className='img-fluid' />Sign In</button>
          </div>
        </Modal.Body>
      </Modal>


    </>
  );
};

export default Header;
