import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../style.scss";
import logo from "../../../assets/icons/logo.svg";
import logoutIcon from "../../../assets/icons/logoutIcon.svg";
import Home from "../../screens/Home";
import Tasks from "../../screens/Tasks";
import Operations from "../../screens/Operations";
import Squad from "../../screens/Squad";
import Announcements from "../../screens/Announcements";
import GroupChat from "../../screens/GroupChat";
import ArmyForum from "../../screens/ArmyForum";
import Header from "../header/Header";
import { Offcanvas } from "react-bootstrap";
import ClaimRewards from "../../screens/ClaimRewards";
import Settings from "../../screens/Settings";
import BugReport from "../../screens/BugReport";
import FAQS from "../../screens/FAQS";
import Recruiting from "../../screens/Recruiting";
import SquadModals from "../home/HomeOperations/SquadModals";
import { reverse } from "lodash";
import AllTaskModals from "../../screens/AllTaskModals";
import LeaderModals from "../home/HomeOperations/LeaderModals";
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import Signature from "../../../hooks/dataSenders/userSign";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../../utils/ApiUrl'
import Accordion from 'react-bootstrap/Accordion';
import ArmyForumModal from "../../screens/ArmyForumModal";
import AllOperationTaskModal from "../../screens/AllOperationTaskModal";

const Sidebar = () => {
  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  const indexvv = localStorage.getItem("indexvalue");
  const [indexwait, setindexwait] = useState(0);
  const [routes, setroute] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showtask, setShowtask] = useState(false);
  const [taskdetail, settaskdetail] = useState(null);
  const [showtask1, setShowtask1] = useState(false);
  const [taskdetail1, settaskdetail1] = useState(null);
  const [operationId, setOperationId] = useState(null);
  const [coLeaderDetails, setCoLeaderDetails] = useState(null);
  const { account } = useWeb3React()
  const history = useHistory();
  const { userSign } = Signature();
  const [loader, setLoader] = useState(false);
  const [operations, setOperations] = useState([])
  const [tasks, settasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [squaddetail, setsquaddetail] = useState()
  const [expired, setexpired] = useState(false);
  const [expireds, setexpireds] = useState(false);

  const [chat, setChat] = useState([]);
  const [page, setPage] = useState(1)
  const [firstTime, setFirstTime] = useState(true);
  const [pages, allPages] = useState(1)
  const [message, setMessage] = useState('');
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [rend, setRend] = useState(false);
  const [statusData,setStatus]=useState('')

  useEffect(() => {
    if (indexvv == "0") {
      setindexwait(0)
    }
    else if (indexvv == "1") {
      setindexwait(1)
    }
    else if (indexvv == "2") {
      setindexwait(2)
    }
    else if (indexvv == "3") {
      setindexwait(3)
    }
    else if (indexvv == "4") {
      setindexwait(4)
    }
    else if (indexvv == "5") {
      setindexwait(5)
    }
    else if (indexvv == "6") {
      setindexwait(6)
    }
    else if (indexvv == "7") {
      setindexwait(7)
    }
    else if (indexvv == "8") {
      setindexwait(8)
    }
    else if (indexvv == "9") {
      setindexwait(9)
    }
    else if (indexvv == "10") {
      setindexwait(10)
    }
    else if (indexvv == "11") {
      setindexwait(11)
    }
    else if (indexvv == "12") {
      setindexwait(12)
    }
    else if (indexvv == "13") {
      setindexwait(13)
    }
  }, [indexvv])
  const hitfunctionss = (asd) => {
    setindexwait(asd)
    localStorage.setItem("indexvalue", asd);
  }
  const Lougout = () => {
    localStorage.clear();
    window.location.assign("/")
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const sidebar = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  var user12 = localStorage.getItem("user");
  user12 = JSON.parse(user12)
  // useEffect(() => {
  //   if (account === user12?.walletAddress) {
  //   }
  //   else if (account) {
  //     // window.scrollTo(0, 0);
  //     loginUser();
  //   }
  // }, [account])


  // const loginUser = async () => {
  //   // let tok = localStorage.getItem("accessToken");
  //   // let wall = localStorage.getItem("wallet");
  //   // setShow(false);
  //   if (account) {
  //     const res0 = await userSign(account);
  //     if (account && res0) {
  //       await axios
  //         .post(`${API_URL}/auth/signin`, {
  //           walletAddress: account,
  //           sign: res0,
  //           rememberMe: true
  //         })
  //         .then((res) => {
  //           // toast.success('User Logged in Successfully', {
  //           //     position: 'top-center',
  //           //     autoClose: 5000,
  //           // });
  //           localStorage.setItem("accessToken", res?.data?.data?.accessToken);
  //           // setShow(false)
  //           localStorage.setItem("user", JSON.stringify(res?.data?.data));
  //           if (res?.data?.data?.rank.name === "general") {
  //             history.push("/general");
  //           } else if (res?.data?.data?.rank.name === "major general") {
  //             history.push("/majorgenerL");
  //           }
  //           else if (res?.data?.data?.isCommander === true) {
  //             history.push("/leader");
  //           }
  //           else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name !== '') {
  //             history.push("/soldier");
  //           } else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name == '') {
  //             history.push("/soldier");
  //           }
  //           else {
  //             history.push("/");
  //           }
  //           localStorage.setItem("wallet", account);
  //         })
  //         .catch((err) => {
  //           if (err?.response?.data?.statusCode === 404) {
  //             toast.error('No User Found', {
  //               position: 'top-center',
  //               autoClose: 5000,
  //             });
  //             localStorage.removeItem("connectorId");
  //             localStorage.removeItem("flag");
  //             // setShow(false);
  //             localStorage.removeItem("accessToken");
  //             localStorage.removeItem("user");
  //             localStorage.removeItem("wallet");
  //             history.push("/")
  //           }
  //           localStorage.removeItem("connectorId");
  //           localStorage.removeItem("flag");
  //         });
  //     }
  //     else {
  //       history.push('/')
  //     }
  //   }
  //   else {
  //     toast.error('Wallet Not Connected', {
  //       position: 'top-center',
  //       autoClose: 5000,
  //     });
  //   }
  // };

  const getDataOperation = async (off) => {

    // let valu = null;
    // if (off) {
    //   valu = off;
    // } else {
    //   valu = 1;
    // }
    let tok = localStorage.getItem("accessToken");
    let wall = localStorage.getItem("wallet");
    // if (account) {
    var config = {
      method: "get",
      url: `${API_URL}/tasks/operations?offset=1&&limit=100&&expired=${expired}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setLoader(false);
        // setCount(response.data.data.count)
        if (expired === true) {
          setOperations(response?.data?.data?.operation);
        }
        else {
          setOperations(response?.data?.data?.operation[0]);
        }
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }

  const getData = async (off) => {
    // let valu = null;
    // if (off) {
    //     valu = off;
    // } else {
    //     valu = 1;
    // }
    let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    // if (account) {
    var config = {
      method: "get",
      url: `${API_URL}/tasks?offset=1&&limit=100&&expired=${expireds}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setLoader(false);
        // setCount(response.data.data.count)
        settasks(response?.data?.data?.tasks);
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }

  const getNotif = (soc) => {
    let tok = localStorage.getItem("accessToken");
    setNotifs([]);
    // if (account || soc) {
    var config = {
      method: "get",
      url: `${API_URL}/notifications/user-notifications?offset=1&&limit=100000`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setNotifs(response?.data?.data.userNotifications);
        setRend(!rend);
      })
      .catch(function (error) {
        console.log(error);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
      });
    // }
  }

  const SquadUsers = async (off) => {
    let valu = null;
    // if (off) {
    //     valu = off;
    // } else {
    //     valu = 1;
    // }
    let tok = localStorage.getItem("accessToken");
    var config = {
      method: "get",
      url: `${API_URL}/auth/users/squad-members?offset=1&&limit=100&queryParam=Active Squad`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
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

  const getChat = async () => {
    let tok = localStorage.getItem("accessToken");
    // page = message!='' ?1 :page; 
    setPage(message!='' ? 1 : page)
    var config = {
      method: "get",
      url: `${API_URL}/chats/group-messages?offset=${page}&limit=10`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        allPages(response?.data?.data?.pages)
        if (firstTime || message!='') {
          console.log('if');
          let rev = reverse([...response?.data?.data?.groupMessages])
          setChat(rev);
          setFirstTime(false)
        }
        else {
        console.log('else');
        let rev = reverse([...response?.data?.data?.groupMessages])
          setChat([...rev, ...chat])
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const GetUserProfiledata = () => {
    // setLoader(true);
    let tok = localStorage.getItem("accessToken");
    // if (account) {
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
    // }
  }

  const GetTaskStatusData = () => {
    // setLoader(true);
    let tok = localStorage.getItem("accessToken");
    // if (account) {
      var config = {
        method: "get",
        url: `${API_URL}/tasks/task-status`,
        headers: {
          authorization: `Bearer ` + tok
        },
      };
      axios(config)
        .then(async (response) => {
          // setLoader(false);
          setStatus(response.data.data[0])
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
    // }
  }
  useEffect(() => {
    // if(datacommander?.memberOfSquad===true){
      getChat()
      SquadUsers()
    // }
}, [page])
  useEffect(() => {
    GetTaskStatusData()
    getNotif()
    GetUserProfiledata()
  }, [account])
  useEffect(() => {
    getData()
  }, [account, expireds])

  useEffect(() => {
    getDataOperation()
  }, [account, expired])
  return (
    <>
      <div className="theme-custom-container">
        <div className="App app-wrapper row m-0">
          <div className="sidebar-column web-sidebar p-0">
            <div className="sidebar-wrapper ">
              <div className="logo-box">
                <Link to={"/soldier"}>
                  <img src={logo} alt="" />
                </Link>
                <div className="sidebar-divider"></div>
              </div>
              <div className="sidebar-wrapper-inner">
                <ul>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(0); }}
                      className={
                        indexwait === 0 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.7 4.68333L10.9 1.325C9.59166 0.408334 7.58332 0.458334 6.32499 1.43333L2.14999 4.69167C1.31666 5.34167 0.658325 6.675 0.658325 7.725V13.475C0.658325 15.6 2.38332 17.3333 4.50832 17.3333H13.4917C15.6167 17.3333 17.3417 15.6083 17.3417 13.4833V7.83334C17.3417 6.70834 16.6167 5.325 15.7 4.68333ZM9.62499 14C9.62499 14.3417 9.34166 14.625 8.99999 14.625C8.65832 14.625 8.37499 14.3417 8.37499 14V11.5C8.37499 11.1583 8.65832 10.875 8.99999 10.875C9.34166 10.875 9.62499 11.1583 9.62499 11.5V14Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(1); }}
                      className={
                        indexwait === 1 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.4916 0.666666H5.50829C2.47496 0.666666 0.666626 2.475 0.666626 5.50833V12.4917C0.666626 15.525 2.47496 17.3333 5.50829 17.3333H12.4916C15.525 17.3333 17.3333 15.525 17.3333 12.4917V5.50833C17.3333 2.475 15.525 0.666666 12.4916 0.666666ZM7.30829 11.4167L5.43329 13.2917C5.30829 13.4167 5.14996 13.475 4.99163 13.475C4.83329 13.475 4.66663 13.4167 4.54996 13.2917L3.92496 12.6667C3.67496 12.425 3.67496 12.025 3.92496 11.7833C4.16663 11.5417 4.55829 11.5417 4.80829 11.7833L4.99163 11.9667L6.42496 10.5333C6.66663 10.2917 7.05829 10.2917 7.30829 10.5333C7.54996 10.775 7.54996 11.175 7.30829 11.4167ZM7.30829 5.58333L5.43329 7.45833C5.30829 7.58333 5.14996 7.64167 4.99163 7.64167C4.83329 7.64167 4.66663 7.58333 4.54996 7.45833L3.92496 6.83333C3.67496 6.59167 3.67496 6.19167 3.92496 5.95C4.16663 5.70833 4.55829 5.70833 4.80829 5.95L4.99163 6.13333L6.42496 4.7C6.66663 4.45833 7.05829 4.45833 7.30829 4.7C7.54996 4.94167 7.54996 5.34167 7.30829 5.58333ZM13.6333 12.85H9.25829C8.91663 12.85 8.63329 12.5667 8.63329 12.225C8.63329 11.8833 8.91663 11.6 9.25829 11.6H13.6333C13.9833 11.6 14.2583 11.8833 14.2583 12.225C14.2583 12.5667 13.9833 12.85 13.6333 12.85ZM13.6333 7.01667H9.25829C8.91663 7.01667 8.63329 6.73333 8.63329 6.39167C8.63329 6.05 8.91663 5.76667 9.25829 5.76667H13.6333C13.9833 5.76667 14.2583 6.05 14.2583 6.39167C14.2583 6.73333 13.9833 7.01667 13.6333 7.01667Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Tasks</span>
                    </a>
                  </li>
                  {data?.memberOfSquad === true &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(2); }}
                        className={
                          indexwait === 2
                            ? "list-item active"
                            : "list-item "
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M13.3334 3.54166C13.3334 4.575 12.4917 5.41666 11.4584 5.41666H8.54169C8.02502 5.41666 7.55835 5.20833 7.21669 4.86666C6.87502 4.525 6.66669 4.05833 6.66669 3.54166C6.66669 2.50833 7.50835 1.66666 8.54169 1.66666H11.4584C11.975 1.66666 12.4417 1.875 12.7834 2.21666C13.125 2.55833 13.3334 3.025 13.3334 3.54166Z"
                            fill="#81828A"
                          />
                          <path
                            d="M15.6916 4.19167C15.5 4.03333 15.2833 3.90833 15.05 3.81667C14.8083 3.725 14.5666 3.91667 14.5166 4.16667C14.2333 5.59167 12.975 6.66667 11.4583 6.66667H8.54165C7.70831 6.66667 6.92498 6.34167 6.33331 5.75C5.89998 5.31667 5.59998 4.76667 5.48331 4.175C5.43331 3.925 5.18331 3.725 4.94165 3.825C3.97498 4.21667 3.33331 5.1 3.33331 6.875V15C3.33331 17.5 4.82498 18.3333 6.66665 18.3333H13.3333C15.175 18.3333 16.6666 17.5 16.6666 15V6.875C16.6666 5.51667 16.2916 4.68333 15.6916 4.19167ZM6.66665 10.2083H9.99998C10.3416 10.2083 10.625 10.4917 10.625 10.8333C10.625 11.175 10.3416 11.4583 9.99998 11.4583H6.66665C6.32498 11.4583 6.04165 11.175 6.04165 10.8333C6.04165 10.4917 6.32498 10.2083 6.66665 10.2083ZM13.3333 14.7917H6.66665C6.32498 14.7917 6.04165 14.5083 6.04165 14.1667C6.04165 13.825 6.32498 13.5417 6.66665 13.5417H13.3333C13.675 13.5417 13.9583 13.825 13.9583 14.1667C13.9583 14.5083 13.675 14.7917 13.3333 14.7917Z"
                            fill="#81828A"
                          />
                        </svg>
                        <span>Operations</span>
                      </a>
                    </li>
                  }
                  {data?.memberOfSquad === true &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(3); }}
                        className={
                          indexwait === 3 ? "list-item active" : "list-item "
                        }

                      >
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
                        <span>Your Squad</span>
                      </a>
                    </li>
                  }
                  {data?.isCommander === true &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(11); }}
                        className={
                          indexwait === 11 ? "list-item active" : "list-item "
                        }

                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.3083 1.94165C17.7083 1.25831 16.8167 0.833313 15.8333 0.833313C14.9 0.833313 14.05 1.21665 13.4417 1.84165C13.0917 2.19998 12.825 2.63331 12.6667 3.11665C12.5583 3.44998 12.5 3.79998 12.5 4.16665C12.5 4.79165 12.675 5.38331 12.9833 5.88331C13.15 6.16665 13.3667 6.42498 13.6167 6.64165C14.2 7.17498 14.975 7.49998 15.8333 7.49998C16.2 7.49998 16.55 7.44165 16.875 7.32498C17.6417 7.08331 18.2833 6.55831 18.6833 5.88331C18.8583 5.59998 18.9917 5.27498 19.0667 4.94165C19.1333 4.69165 19.1667 4.43331 19.1667 4.16665C19.1667 3.31665 18.8417 2.53331 18.3083 1.94165ZM17.075 4.77498H16.4583V5.42498C16.4583 5.76665 16.175 6.04998 15.8333 6.04998C15.4917 6.04998 15.2083 5.76665 15.2083 5.42498V4.77498H14.5917C14.25 4.77498 13.9667 4.49165 13.9667 4.14998C13.9667 3.80831 14.25 3.52498 14.5917 3.52498H15.2083V2.93331C15.2083 2.59165 15.4917 2.30831 15.8333 2.30831C16.175 2.30831 16.4583 2.59165 16.4583 2.93331V3.52498H17.075C17.4167 3.52498 17.7 3.80831 17.7 4.14998C17.7 4.49165 17.425 4.77498 17.075 4.77498Z" fill="#81828A" />
                          <path d="M18.3327 10C18.3327 8.90835 18.1243 7.85835 17.7327 6.90002C17.4743 7.08335 17.1827 7.22502 16.8743 7.32502C16.7827 7.35835 16.691 7.38335 16.591 7.40835C16.9077 8.20835 17.0827 9.08335 17.0827 10C17.0827 11.9334 16.2993 13.6917 15.0327 14.975C14.791 14.6667 14.4827 14.3834 14.116 14.1417C11.8577 12.625 8.15768 12.625 5.88268 14.1417C5.51602 14.3834 5.21602 14.6667 4.96602 14.975C3.69935 13.6917 2.91602 11.9334 2.91602 10C2.91602 6.09169 6.09102 2.91669 9.99935 2.91669C10.9077 2.91669 11.7827 3.09169 12.5827 3.40835C12.6077 3.30835 12.6327 3.21669 12.666 3.11669C12.766 2.80835 12.9077 2.52502 13.0993 2.26669C12.141 1.87502 11.091 1.66669 9.99935 1.66669C5.40768 1.66669 1.66602 5.40835 1.66602 10C1.66602 12.4167 2.70768 14.5917 4.35768 16.1167C4.35768 16.125 4.35768 16.125 4.34935 16.1334C4.43268 16.2167 4.53268 16.2834 4.61602 16.3584C4.66602 16.4 4.70768 16.4417 4.75768 16.475C4.90768 16.6 5.07435 16.7167 5.23268 16.8334C5.29102 16.875 5.34102 16.9084 5.39935 16.95C5.55768 17.0584 5.72435 17.1584 5.89935 17.25C5.95768 17.2834 6.02435 17.325 6.08268 17.3584C6.24935 17.45 6.42435 17.5334 6.60768 17.6084C6.67435 17.6417 6.74102 17.675 6.80768 17.7C6.99102 17.775 7.17435 17.8417 7.35768 17.9C7.42435 17.925 7.49102 17.95 7.55768 17.9667C7.75768 18.025 7.95768 18.075 8.15768 18.125C8.21602 18.1417 8.27435 18.1584 8.34102 18.1667C8.57435 18.2167 8.80768 18.25 9.04935 18.275C9.08268 18.275 9.11601 18.2834 9.14935 18.2917C9.43268 18.3167 9.71602 18.3334 9.99935 18.3334C10.2827 18.3334 10.566 18.3167 10.841 18.2917C10.8743 18.2917 10.9077 18.2834 10.941 18.275C11.1827 18.25 11.416 18.2167 11.6493 18.1667C11.7077 18.1584 11.766 18.1334 11.8327 18.125C12.0327 18.075 12.241 18.0334 12.4327 17.9667C12.4993 17.9417 12.566 17.9167 12.6327 17.9C12.816 17.8334 13.0077 17.775 13.1827 17.7C13.2493 17.675 13.316 17.6417 13.3827 17.6084C13.5577 17.5334 13.7327 17.45 13.9077 17.3584C13.9743 17.325 14.0327 17.2834 14.091 17.25C14.2577 17.15 14.4243 17.0584 14.591 16.95C14.6493 16.9167 14.6993 16.875 14.7577 16.8334C14.9243 16.7167 15.0827 16.6 15.2327 16.475C15.2827 16.4334 15.3243 16.3917 15.3743 16.3584C15.466 16.2834 15.5577 16.2084 15.641 16.1334C15.641 16.125 15.641 16.125 15.6327 16.1167C17.291 14.5917 18.3327 12.4167 18.3327 10Z" fill="#81828A" />
                          <path d="M10 5.77502C8.275 5.77502 6.875 7.17502 6.875 8.90002C6.875 10.5917 8.2 11.9667 9.95833 12.0167C9.98333 12.0167 10.0167 12.0167 10.0333 12.0167C10.05 12.0167 10.075 12.0167 10.0917 12.0167C10.1 12.0167 10.1083 12.0167 10.1083 12.0167C11.7917 11.9584 13.1167 10.5917 13.125 8.90002C13.125 7.17502 11.725 5.77502 10 5.77502Z" fill="#81828A" />
                        </svg>
                        <span>Recruiting Requests</span>
                      </a>
                    </li>}

                  <li>
                    <a
                      onClick={() => { hitfunctionss(4); }}
                      className={
                        indexwait === 4
                          ? "list-item active"
                          : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.1944 3.17375C13.0719 2.7175 12.7288 2.35312 12.28 2.20375C11.8319 2.05437 11.3388 2.14 10.9669 2.4325C8.94316 4.0225 4.87878 7.2175 4.87878 7.2175C4.73128 7.33312 4.6669 7.52625 4.71565 7.7075L5.9619 12.3581C6.01003 12.5394 6.16253 12.6737 6.34815 12.7006C6.34815 12.7006 11.4657 13.435 14.0132 13.8006C14.4807 13.8675 14.9513 13.6956 15.2644 13.3419C15.5782 12.9881 15.6932 12.5012 15.5713 12.0444C14.9725 9.80937 13.7932 5.40875 13.1944 3.17375Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.62123 7.46437C5.55435 7.21437 5.29685 7.06625 5.04685 7.13312C5.04685 7.13312 3.8806 7.44562 2.92935 7.70062C2.48872 7.81875 2.11373 8.10687 1.8856 8.50125C1.65748 8.89625 1.5956 9.36562 1.71373 9.80562C1.8981 10.4937 2.12873 11.3531 2.3131 12.0412C2.4306 12.4819 2.71872 12.8575 3.11372 13.085C3.50872 13.3131 3.97747 13.375 4.4181 13.2569C5.36935 13.0019 6.5356 12.6894 6.5356 12.6894C6.7856 12.6225 6.93435 12.365 6.86747 12.115L5.62123 7.46437Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.25376 11.8831C7.09751 11.8613 6.94126 11.9188 6.83626 12.0363C6.73188 12.1544 6.69376 12.3169 6.73438 12.4688L7.35313 14.7794C7.41626 15.0144 7.64876 15.1619 7.88813 15.1194C7.95001 15.1081 8.01251 15.0944 8.07438 15.0781C9.19126 14.7788 9.87688 13.6694 9.66876 12.5519C9.63188 12.3544 9.47313 12.2019 9.27438 12.1731L7.25376 11.8831ZM8.12876 14.0506L7.82376 12.9125L8.76438 13.0475C8.73313 13.4638 8.49563 13.8431 8.12876 14.0506Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.64002 12.2263C7.59127 12.045 7.4394 11.91 7.25377 11.8831L6.48127 11.7725C6.41815 11.7638 6.3544 11.7675 6.29315 11.7838L4.66127 12.2213C4.5319 12.2556 4.42315 12.3438 4.36315 12.4638C4.30315 12.5831 4.29752 12.7231 4.3469 12.8475C4.3469 12.8475 5.40502 15.5038 5.94377 16.8563C6.2069 17.5169 6.92252 17.8756 7.6094 17.6919C8.38002 17.4856 8.8369 16.6938 8.63065 15.9238L7.64002 12.2263Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.0713 6.29813L16.2582 6.78375C16.0088 6.85063 15.86 7.10813 15.9269 7.35813C15.9938 7.60813 16.2513 7.75625 16.5013 7.68938L18.3138 7.20375C18.5638 7.13688 18.7125 6.87938 18.6457 6.62938C18.5788 6.37938 18.3213 6.23125 18.0713 6.29813Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.25 2.89312L14.7412 4.00937C14.5337 4.16312 14.4893 4.45687 14.6431 4.665C14.7975 4.87312 15.0912 4.91687 15.2987 4.76312L16.8081 3.64687C17.0156 3.49312 17.06 3.19937 16.9056 2.99125C16.7518 2.78312 16.4581 2.73937 16.25 2.89312Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.4956 10.1475L16.6344 9.90625C16.3775 9.87312 16.1425 10.0544 16.1094 10.3106C16.0756 10.5675 16.2575 10.8025 16.5138 10.8362L18.375 11.0775C18.6319 11.1106 18.8669 10.9294 18.9 10.6725C18.9338 10.4162 18.7519 10.1806 18.4956 10.1475Z"
                          fill="#81828A"
                        />
                      </svg>
                      <div className="set-flex-for-value">
                        <span>Announcements </span>
                        {/* <span className="set-value">2</span> */}
                      </div>
                    </a>
                  </li>
                  {data?.memberOfSquad === true  &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(5); }}
                        className={
                          indexwait === 5 ? "list-item active" : "list-item "
                        }

                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04102 12.7308C6.02685 12.7375 6.01352 12.7467 6.00102 12.7567L3.73268 14.6467C3.54685 14.8017 3.28685 14.8358 3.06768 14.7325C2.84768 14.63 2.70768 14.4092 2.70768 14.1667V12.6217C2.33518 12.5158 1.99102 12.3158 1.71185 12.0375C1.28268 11.6075 1.04102 11.0242 1.04102 10.4167V4.16667C1.04102 3.55917 1.28268 2.97583 1.71185 2.54583C2.14185 2.11667 2.72518 1.875 3.33268 1.875H10.8327C11.4402 1.875 12.0235 2.11667 12.4535 2.54583C12.8827 2.97583 13.1243 3.55917 13.1243 4.16667V4.375H9.16602C8.33685 4.375 7.54268 4.70417 6.95602 5.29C6.37018 5.87667 6.04102 6.67083 6.04102 7.5V12.7308Z" fill="#81828A" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 7.49999C6.875 6.89249 7.11667 6.30916 7.54583 5.87916C7.97583 5.44999 8.55917 5.20833 9.16667 5.20833H16.6667C17.2742 5.20833 17.8575 5.44999 18.2875 5.87916C18.7167 6.30916 18.9583 6.89249 18.9583 7.49999V13.75C18.9583 14.3575 18.7167 14.9408 18.2875 15.3708C18.0083 15.6492 17.6642 15.8492 17.2917 15.955V17.5C17.2917 17.7425 17.1517 17.9633 16.9317 18.0658C16.7125 18.1692 16.4525 18.135 16.2667 17.98L13.9983 16.09C13.9608 16.0592 13.9133 16.0417 13.865 16.0417H9.16667C8.55917 16.0417 7.97583 15.8 7.54583 15.3708C7.11667 14.9408 6.875 14.3575 6.875 13.75V7.49999ZM10.8333 9.79166H13.3333C13.6783 9.79166 13.9583 9.51166 13.9583 9.16666C13.9583 8.82166 13.6783 8.54166 13.3333 8.54166H10.8333C10.4883 8.54166 10.2083 8.82166 10.2083 9.16666C10.2083 9.51166 10.4883 9.79166 10.8333 9.79166ZM10.8333 12.2917H15C15.345 12.2917 15.625 12.0117 15.625 11.6667C15.625 11.3217 15.345 11.0417 15 11.0417H10.8333C10.4883 11.0417 10.2083 11.3217 10.2083 11.6667C10.2083 12.0117 10.4883 12.2917 10.8333 12.2917Z" fill="#81828A" />
                        </svg>
                        <div className="set-flex-for-value">
                          <span>Group Chat </span>
                          {/* <span className="set-value">2</span> */}
                        </div>
                      </a>
                    </li>}
                  <div className="mainacc">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="acord-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_260_1836)">
                                <path
                                  d="M5.5268 12.175C5.5268 11.559 5.65203 10.9715 5.87832 10.4369C5.44039 10.1865 4.93414 10.0427 4.39461 10.0427C2.74035 10.0427 1.39453 11.3885 1.39453 13.0427C1.39453 14.009 1.85422 14.8695 2.56594 15.4186C1.05313 16.1136 0 17.6431 0 19.4141V20H3.94598V19.4352C3.94598 18.2102 4.31164 17.0292 5.00344 16.0199C5.36039 15.499 5.79133 15.0416 6.28109 14.6597C5.79578 13.9344 5.5268 13.0732 5.5268 12.175Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M17.4341 15.4185C18.1458 14.8695 18.6055 14.009 18.6055 13.0427C18.6055 11.3884 17.2597 10.0426 15.6055 10.0426C15.0659 10.0426 14.5597 10.1865 14.1217 10.4368C14.348 10.9714 14.4732 11.5589 14.4732 12.175C14.4732 13.0732 14.2042 13.9344 13.7189 14.6596C14.2087 15.0416 14.6396 15.499 14.9966 16.0198C15.6884 17.0292 16.0541 18.2102 16.0541 19.4352V20H20V19.4141C20 17.6431 18.9469 16.1136 17.4341 15.4185Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M11.8414 14.9139C12.7215 14.3203 13.3014 13.3141 13.3014 12.175C13.3014 10.3546 11.8204 8.87363 10 8.87363C8.17962 8.87363 6.69864 10.3546 6.69864 12.175C6.69864 13.3141 7.27856 14.3203 8.15868 14.9139C6.37677 15.6423 5.11786 17.3943 5.11786 19.4352V20H14.8822V19.4352C14.8822 17.3944 13.6233 15.6423 11.8414 14.9139Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M10.0527 0H0.835144V6.65488H4.27253L7.22889 8.24168L7.20694 6.65488H10.0527V0ZM7.3596 3.85379H3.52827V2.68191H7.3596V3.85379Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M11.3872 2.50972V8.18331H13.7222L13.7033 9.55788L16.2642 8.18331H19.1649V2.50972H11.3872ZM16.8489 5.88355H13.7033V4.71167H16.8489V5.88355Z"
                                  fill="#81828A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_260_1836">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>Forum</span>
                          </div>

                        </Accordion.Header>
                        <Accordion.Body>
                          <li>
                            <a
                              onClick={() => { hitfunctionss(12); }}
                              className={
                                indexwait === 12 ? "list-item active" : "list-item"
                              }

                            >
                              <span>My Post</span>
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => { hitfunctionss(13); }}
                              className={
                                indexwait === 13 ? "list-item active" : "list-item"
                              }

                            >
                              <span>Army Forum</span>
                            </a>
                          </li>
                          {/* <li>
                            <a
                              onClick={() => { hitfunctionss(6); }}
                              className={
                                indexwait === 6 ? "list-item active" : "list-item"
                              }

                            >
                              <span>My Posts</span>
                            </a>
                          </li> */}
                        </Accordion.Body>
                      </Accordion.Item>

                    </Accordion>
                  </div>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(7); }}
                      className={
                        indexwait === 7 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_260_1879)">
                          <path
                            d="M1.66669 12.0833H9.37502V20H3.12502C2.32502 20 1.66669 19.3417 1.66669 18.5417V12.0833Z"
                            fill="#81828A"
                          />
                          <path
                            d="M18.3333 12.0833V18.5417C18.3333 19.3417 17.675 20 16.875 20H10.625V12.0833H18.3333Z"
                            fill="#81828A"
                          />
                          <path
                            d="M0 7.29168V9.37501C0 10.175 0.658333 10.8333 1.45833 10.8333H1.66667H9.375V9.58334V5.83334H1.45833C0.658333 5.83334 0 6.49168 0 7.29168Z"
                            fill="#81828A"
                          />
                          <path
                            d="M18.5417 5.83334H10.625V9.58334V10.8333H18.3333H18.5417C19.3417 10.8333 20 10.175 20 9.37501V7.29168C20 6.49168 19.3417 5.83334 18.5417 5.83334Z"
                            fill="#81828A"
                          />
                          <path
                            d="M10 6.70333C9.81835 6.70333 9.64502 6.62416 9.52752 6.48666C9.40835 6.34916 9.35585 6.16666 9.38169 5.98666C9.69002 3.90333 11.3175 -0.0375061 15.2742 -0.0375061C17.5325 -0.0366728 18.3334 1.18333 18.3334 2.22833C18.3334 4.08583 15.7475 6.70333 10 6.70333ZM15.2742 1.21333C12.2892 1.21333 11.1559 4.05083 10.78 5.43499C13.135 5.32499 14.62 4.72916 15.475 4.22166C16.6609 3.51749 17.0834 2.72999 17.0834 2.22749C17.0834 1.47916 16.1492 1.21333 15.2742 1.21333Z"
                            fill="#81828A"
                          />
                          <path
                            d="M10.0008 6.70332C4.25331 6.70332 1.66748 4.08582 1.66748 2.22832C1.66748 1.18332 2.46915 -0.0366821 4.72748 -0.0366821C8.68331 -0.0366821 10.3108 3.90415 10.6191 5.98748C10.645 6.16748 10.5925 6.34998 10.4733 6.48748C10.3558 6.62415 10.1825 6.70332 10.0008 6.70332ZM4.72748 1.21332C3.85248 1.21332 2.91748 1.47998 2.91748 2.22832C2.91748 3.29248 4.77831 5.23165 9.21998 5.43582C8.84498 4.05082 7.71165 1.21332 4.72748 1.21332Z"
                            fill="#81828A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_260_1879">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Claim Rewards</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(8); }}
                      className={
                        indexwait === 8 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_667_14605)">
                          <path d="M18.9025 7.82833L17.3358 7.62917C17.2067 7.23167 17.0475 6.84833 16.8617 6.48417L17.8292 5.23833C18.2208 4.73417 18.175 4.0225 17.7275 3.58917L16.415 2.27667C15.9775 1.825 15.2658 1.78 14.7608 2.17083L13.5167 3.13833C13.1525 2.9525 12.7692 2.79333 12.3708 2.66417L12.1717 1.1C12.0967 0.4725 11.5642 0 10.9333 0H9.06667C8.43583 0 7.90333 0.4725 7.82833 1.0975L7.62917 2.66417C7.23083 2.79333 6.8475 2.95167 6.48333 3.13833L5.23833 2.17083C4.735 1.78 4.02333 1.825 3.58917 2.2725L2.27667 3.58417C1.825 4.0225 1.77917 4.73417 2.17083 5.23917L3.13833 6.48417C2.95167 6.84833 2.79333 7.23167 2.66417 7.62917L1.1 7.82833C0.4725 7.90333 0 8.43583 0 9.06667V10.9333C0 11.5642 0.4725 12.0967 1.0975 12.1717L2.66417 12.3708C2.79333 12.7683 2.9525 13.1517 3.13833 13.5158L2.17083 14.7617C1.77917 15.2658 1.825 15.9775 2.2725 16.4108L3.585 17.7233C4.02333 18.1742 4.73417 18.2192 5.23917 17.8283L6.48417 16.8608C6.84833 17.0475 7.23167 17.2067 7.62917 17.335L7.82833 18.8983C7.90333 19.5275 8.43583 20 9.06667 20H10.9333C11.5642 20 12.0967 19.5275 12.1717 18.9025L12.3708 17.3358C12.7683 17.2067 13.1517 17.0475 13.5158 16.8617L14.7617 17.8292C15.2658 18.2208 15.9775 18.175 16.4108 17.7275L17.7233 16.415C18.175 15.9767 18.2208 15.2658 17.8292 14.7608L16.8617 13.5158C17.0483 13.1517 17.2075 12.7683 17.3358 12.3708L18.8992 12.1717C19.5267 12.0967 19.9992 11.5642 19.9992 10.9333V9.06667C20 8.43583 19.5275 7.90333 18.9025 7.82833ZM10 14.1667C7.7025 14.1667 5.83333 12.2975 5.83333 10C5.83333 7.7025 7.7025 5.83333 10 5.83333C12.2975 5.83333 14.1667 7.7025 14.1667 10C14.1667 12.2975 12.2975 14.1667 10 14.1667Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_667_14605">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(10); }}
                      className={
                        indexwait === 10 ? "list-item active" : "list-item "
                      }
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_667_7379)">
                          <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 15.8333C9.83519 15.8333 9.67407 15.7845 9.53703 15.6929C9.39999 15.6013 9.29318 15.4712 9.2301 15.3189C9.16703 15.1666 9.15053 14.9991 9.18268 14.8374C9.21484 14.6758 9.29421 14.5273 9.41075 14.4107C9.52729 14.2942 9.67578 14.2148 9.83743 14.1827C9.99908 14.1505 10.1666 14.167 10.3189 14.2301C10.4712 14.2932 10.6013 14.4 10.6929 14.537C10.7845 14.6741 10.8333 14.8352 10.8333 15C10.8333 15.221 10.7455 15.433 10.5893 15.5893C10.433 15.7455 10.221 15.8333 10 15.8333ZM11.2725 10.5833C11.136 10.6497 11.0218 10.7544 10.9438 10.8847C10.8658 11.0149 10.8274 11.165 10.8333 11.3167V11.6667C10.8333 11.8877 10.7455 12.0996 10.5893 12.2559C10.433 12.4122 10.221 12.5 10 12.5C9.77899 12.5 9.56703 12.4122 9.41075 12.2559C9.25447 12.0996 9.16667 11.8877 9.16667 11.6667V11.3167C9.15807 10.8342 9.29327 10.3602 9.55507 9.95487C9.81686 9.54957 10.1934 9.23137 10.6367 9.04083C10.9905 8.89432 11.2832 8.6304 11.4653 8.29346C11.6474 7.95653 11.7079 7.56715 11.6367 7.19083C11.5725 6.86107 11.4113 6.55799 11.1737 6.32044C10.9362 6.08289 10.6331 5.92169 10.3033 5.8575C10.0626 5.81293 9.8149 5.82197 9.57801 5.88397C9.34111 5.94597 9.12079 6.05942 8.93271 6.21623C8.74463 6.37304 8.59341 6.56937 8.48982 6.79125C8.38623 7.01314 8.3328 7.25513 8.33334 7.5C8.33334 7.72101 8.24554 7.93298 8.08926 8.08926C7.93298 8.24554 7.72102 8.33333 7.5 8.33333C7.27899 8.33333 7.06703 8.24554 6.91075 8.08926C6.75447 7.93298 6.66667 7.72101 6.66667 7.5C6.66711 6.89633 6.83148 6.30412 7.14223 5.78657C7.45297 5.26903 7.89843 4.84559 8.43104 4.56145C8.96366 4.27731 9.56344 4.14314 10.1664 4.17327C10.7693 4.20339 11.3527 4.39668 11.8543 4.7325C12.356 5.06832 12.757 5.53406 13.0146 6.08C13.2722 6.62594 13.3767 7.23159 13.317 7.83229C13.2572 8.433 13.0355 9.00621 12.6754 9.49072C12.3153 9.97524 11.8305 10.3529 11.2725 10.5833Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_667_7379">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>FAQs</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="twice-btns-sidebar">
                <button className="log-out-btn" onClick={Lougout}>
                  <img src={logoutIcon} alt="logoutIcon" />
                  DISCONNECT WALLET
                </button>
                <a onClick={() => { hitfunctionss(9); }} className="btn-report">Report a Bug</a>
              </div>
            </div>
          </div>
          <div className="content-column">
            <Header handleShow={handleShow} getChat={getChat} indexwait={indexwait} routes={routes} setroute={setroute} show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2} setShow4={setShow4} setShow5={setShow5} notifs={notifs} getNotif={getNotif} getData={getData} getDataOperation={getDataOperation}  />
            {indexwait === 0 ?
              (
                <>
                  <Home show2={show2} setShow2={setShow2} tasks={tasks} setShowtask={setShowtask} settaskdetail={settaskdetail} setShowtask1={setShowtask1} settaskdetail1={settaskdetail1} operations={operations} setOperationId={setOperationId} users={users} squaddetail={squaddetail} statusData={statusData} setindexwait={setindexwait}/>
                </>
              )
              :
              indexwait === 1 ?
                (
                  <>
                    <Tasks setShowtask={setShowtask} settaskdetail={settaskdetail} tasks={tasks} setexpireds={setexpireds} />
                  </>
                )
                :
                indexwait === 2 ?
                  (
                    <>
                      <Operations setroute={setroute} routes={routes} setShowtask1={setShowtask1} settaskdetail1={settaskdetail1} operations={operations} setexpired={setexpired} setOperationId={setOperationId} />
                    </>
                  )
                  :
                  indexwait == 3 ?
                    (
                      <>
                        <Squad show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2}
                          show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5}
                          show6={show6} setShow6={setShow6}
                          setCoLeaderDetail={setCoLeaderDetails}
                        />
                      </>
                    )
                    :
                    indexwait == 4 ?
                      (
                        <>
                          <Announcements />
                        </>
                      )
                      :
                      indexwait == 5 ?
                        (
                          <>
                            <GroupChat setPage={setPage} page={page} setChat={setChat} chat={chat} getChat={getChat} pages={pages} setMessage={setMessage} message={message}/>
                          </>
                        )
                        :
                        indexwait == 6 ?
                          (
                            <>
                              <ArmyForum />
                            </>
                          )
                          :
                          indexwait == 7 ?
                            (
                              <>
                                <ClaimRewards />
                              </>
                            )
                            : indexwait == 8 ?
                              (
                                <>
                                  <Settings />
                                </>
                              ) :
                              indexwait == 9 ?
                                (
                                  <>
                                    <BugReport />
                                  </>
                                ) :
                                indexwait == 10 ?
                                  (
                                    <>
                                      <FAQS />
                                    </>
                                  ) :
                                  indexwait == 11 ?
                                    (
                                      <>
                                        <Recruiting />
                                      </>
                                    ) :
                                    indexwait == 12 ?
                                      (
                                        <>
                                          <ArmyForum />
                                        </>
                                      ) :
                                      indexwait == 13 ?
                                        (
                                          <>
                                            <ArmyForum />
                                          </>
                                        ) :
                                        ""
            }

          </div>

        </div>
      </div>


      <Offcanvas show={show} onHide={handleClose} className="menu-off-canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar-column">
            <div className="sidebar-wrapper ">
              <div className="logo-box">
                <Link to={"/soldier"}>
                  <img src={logo} alt="" />
                </Link>
                <div className="sidebar-divider"></div>
              </div>
              <div className="sidebar-wrapper-inner">
                <ul>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(0); sidebar(); }}
                      className={
                        indexwait === 0 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15.7 4.68333L10.9 1.325C9.59166 0.408334 7.58332 0.458334 6.32499 1.43333L2.14999 4.69167C1.31666 5.34167 0.658325 6.675 0.658325 7.725V13.475C0.658325 15.6 2.38332 17.3333 4.50832 17.3333H13.4917C15.6167 17.3333 17.3417 15.6083 17.3417 13.4833V7.83334C17.3417 6.70834 16.6167 5.325 15.7 4.68333ZM9.62499 14C9.62499 14.3417 9.34166 14.625 8.99999 14.625C8.65832 14.625 8.37499 14.3417 8.37499 14V11.5C8.37499 11.1583 8.65832 10.875 8.99999 10.875C9.34166 10.875 9.62499 11.1583 9.62499 11.5V14Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(1); sidebar(); }}
                      className={
                        indexwait === 1 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.4916 0.666666H5.50829C2.47496 0.666666 0.666626 2.475 0.666626 5.50833V12.4917C0.666626 15.525 2.47496 17.3333 5.50829 17.3333H12.4916C15.525 17.3333 17.3333 15.525 17.3333 12.4917V5.50833C17.3333 2.475 15.525 0.666666 12.4916 0.666666ZM7.30829 11.4167L5.43329 13.2917C5.30829 13.4167 5.14996 13.475 4.99163 13.475C4.83329 13.475 4.66663 13.4167 4.54996 13.2917L3.92496 12.6667C3.67496 12.425 3.67496 12.025 3.92496 11.7833C4.16663 11.5417 4.55829 11.5417 4.80829 11.7833L4.99163 11.9667L6.42496 10.5333C6.66663 10.2917 7.05829 10.2917 7.30829 10.5333C7.54996 10.775 7.54996 11.175 7.30829 11.4167ZM7.30829 5.58333L5.43329 7.45833C5.30829 7.58333 5.14996 7.64167 4.99163 7.64167C4.83329 7.64167 4.66663 7.58333 4.54996 7.45833L3.92496 6.83333C3.67496 6.59167 3.67496 6.19167 3.92496 5.95C4.16663 5.70833 4.55829 5.70833 4.80829 5.95L4.99163 6.13333L6.42496 4.7C6.66663 4.45833 7.05829 4.45833 7.30829 4.7C7.54996 4.94167 7.54996 5.34167 7.30829 5.58333ZM13.6333 12.85H9.25829C8.91663 12.85 8.63329 12.5667 8.63329 12.225C8.63329 11.8833 8.91663 11.6 9.25829 11.6H13.6333C13.9833 11.6 14.2583 11.8833 14.2583 12.225C14.2583 12.5667 13.9833 12.85 13.6333 12.85ZM13.6333 7.01667H9.25829C8.91663 7.01667 8.63329 6.73333 8.63329 6.39167C8.63329 6.05 8.91663 5.76667 9.25829 5.76667H13.6333C13.9833 5.76667 14.2583 6.05 14.2583 6.39167C14.2583 6.73333 13.9833 7.01667 13.6333 7.01667Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Tasks</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(2); sidebar(); }}
                      className={
                        indexwait === 2
                          ? "list-item active"
                          : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.3334 3.54166C13.3334 4.575 12.4917 5.41666 11.4584 5.41666H8.54169C8.02502 5.41666 7.55835 5.20833 7.21669 4.86666C6.87502 4.525 6.66669 4.05833 6.66669 3.54166C6.66669 2.50833 7.50835 1.66666 8.54169 1.66666H11.4584C11.975 1.66666 12.4417 1.875 12.7834 2.21666C13.125 2.55833 13.3334 3.025 13.3334 3.54166Z"
                          fill="#81828A"
                        />
                        <path
                          d="M15.6916 4.19167C15.5 4.03333 15.2833 3.90833 15.05 3.81667C14.8083 3.725 14.5666 3.91667 14.5166 4.16667C14.2333 5.59167 12.975 6.66667 11.4583 6.66667H8.54165C7.70831 6.66667 6.92498 6.34167 6.33331 5.75C5.89998 5.31667 5.59998 4.76667 5.48331 4.175C5.43331 3.925 5.18331 3.725 4.94165 3.825C3.97498 4.21667 3.33331 5.1 3.33331 6.875V15C3.33331 17.5 4.82498 18.3333 6.66665 18.3333H13.3333C15.175 18.3333 16.6666 17.5 16.6666 15V6.875C16.6666 5.51667 16.2916 4.68333 15.6916 4.19167ZM6.66665 10.2083H9.99998C10.3416 10.2083 10.625 10.4917 10.625 10.8333C10.625 11.175 10.3416 11.4583 9.99998 11.4583H6.66665C6.32498 11.4583 6.04165 11.175 6.04165 10.8333C6.04165 10.4917 6.32498 10.2083 6.66665 10.2083ZM13.3333 14.7917H6.66665C6.32498 14.7917 6.04165 14.5083 6.04165 14.1667C6.04165 13.825 6.32498 13.5417 6.66665 13.5417H13.3333C13.675 13.5417 13.9583 13.825 13.9583 14.1667C13.9583 14.5083 13.675 14.7917 13.3333 14.7917Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Operations</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(3); sidebar(); }}
                      className={
                        indexwait === 3 ? "list-item active" : "list-item "
                      }

                    >
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
                      <span>Your Squad</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(4); sidebar(); }}
                      className={
                        indexwait === 4
                          ? "list-item active"
                          : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.1944 3.17375C13.0719 2.7175 12.7288 2.35312 12.28 2.20375C11.8319 2.05437 11.3388 2.14 10.9669 2.4325C8.94316 4.0225 4.87878 7.2175 4.87878 7.2175C4.73128 7.33312 4.6669 7.52625 4.71565 7.7075L5.9619 12.3581C6.01003 12.5394 6.16253 12.6737 6.34815 12.7006C6.34815 12.7006 11.4657 13.435 14.0132 13.8006C14.4807 13.8675 14.9513 13.6956 15.2644 13.3419C15.5782 12.9881 15.6932 12.5012 15.5713 12.0444C14.9725 9.80937 13.7932 5.40875 13.1944 3.17375Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.62123 7.46437C5.55435 7.21437 5.29685 7.06625 5.04685 7.13312C5.04685 7.13312 3.8806 7.44562 2.92935 7.70062C2.48872 7.81875 2.11373 8.10687 1.8856 8.50125C1.65748 8.89625 1.5956 9.36562 1.71373 9.80562C1.8981 10.4937 2.12873 11.3531 2.3131 12.0412C2.4306 12.4819 2.71872 12.8575 3.11372 13.085C3.50872 13.3131 3.97747 13.375 4.4181 13.2569C5.36935 13.0019 6.5356 12.6894 6.5356 12.6894C6.7856 12.6225 6.93435 12.365 6.86747 12.115L5.62123 7.46437Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.25376 11.8831C7.09751 11.8613 6.94126 11.9188 6.83626 12.0363C6.73188 12.1544 6.69376 12.3169 6.73438 12.4688L7.35313 14.7794C7.41626 15.0144 7.64876 15.1619 7.88813 15.1194C7.95001 15.1081 8.01251 15.0944 8.07438 15.0781C9.19126 14.7788 9.87688 13.6694 9.66876 12.5519C9.63188 12.3544 9.47313 12.2019 9.27438 12.1731L7.25376 11.8831ZM8.12876 14.0506L7.82376 12.9125L8.76438 13.0475C8.73313 13.4638 8.49563 13.8431 8.12876 14.0506Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.64002 12.2263C7.59127 12.045 7.4394 11.91 7.25377 11.8831L6.48127 11.7725C6.41815 11.7638 6.3544 11.7675 6.29315 11.7838L4.66127 12.2213C4.5319 12.2556 4.42315 12.3438 4.36315 12.4638C4.30315 12.5831 4.29752 12.7231 4.3469 12.8475C4.3469 12.8475 5.40502 15.5038 5.94377 16.8563C6.2069 17.5169 6.92252 17.8756 7.6094 17.6919C8.38002 17.4856 8.8369 16.6938 8.63065 15.9238L7.64002 12.2263Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.0713 6.29813L16.2582 6.78375C16.0088 6.85063 15.86 7.10813 15.9269 7.35813C15.9938 7.60813 16.2513 7.75625 16.5013 7.68938L18.3138 7.20375C18.5638 7.13688 18.7125 6.87938 18.6457 6.62938C18.5788 6.37938 18.3213 6.23125 18.0713 6.29813Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.25 2.89312L14.7412 4.00937C14.5337 4.16312 14.4893 4.45687 14.6431 4.665C14.7975 4.87312 15.0912 4.91687 15.2987 4.76312L16.8081 3.64687C17.0156 3.49312 17.06 3.19937 16.9056 2.99125C16.7518 2.78312 16.4581 2.73937 16.25 2.89312Z"
                          fill="#81828A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.4956 10.1475L16.6344 9.90625C16.3775 9.87312 16.1425 10.0544 16.1094 10.3106C16.0756 10.5675 16.2575 10.8025 16.5138 10.8362L18.375 11.0775C18.6319 11.1106 18.8669 10.9294 18.9 10.6725C18.9338 10.4162 18.7519 10.1806 18.4956 10.1475Z"
                          fill="#81828A"
                        />
                      </svg>
                      <span>Announcements</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(5); sidebar(); }}
                      className={
                        indexwait === 5 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_260_1836)">
                          <path
                            d="M5.5268 12.175C5.5268 11.559 5.65203 10.9715 5.87832 10.4369C5.44039 10.1865 4.93414 10.0427 4.39461 10.0427C2.74035 10.0427 1.39453 11.3885 1.39453 13.0427C1.39453 14.009 1.85422 14.8695 2.56594 15.4186C1.05313 16.1136 0 17.6431 0 19.4141V20H3.94598V19.4352C3.94598 18.2102 4.31164 17.0292 5.00344 16.0199C5.36039 15.499 5.79133 15.0416 6.28109 14.6597C5.79578 13.9344 5.5268 13.0732 5.5268 12.175Z"
                            fill="#81828A"
                          />
                          <path
                            d="M17.4341 15.4185C18.1458 14.8695 18.6055 14.009 18.6055 13.0427C18.6055 11.3884 17.2597 10.0426 15.6055 10.0426C15.0659 10.0426 14.5597 10.1865 14.1217 10.4368C14.348 10.9714 14.4732 11.5589 14.4732 12.175C14.4732 13.0732 14.2042 13.9344 13.7189 14.6596C14.2087 15.0416 14.6396 15.499 14.9966 16.0198C15.6884 17.0292 16.0541 18.2102 16.0541 19.4352V20H20V19.4141C20 17.6431 18.9469 16.1136 17.4341 15.4185Z"
                            fill="#81828A"
                          />
                          <path
                            d="M11.8414 14.9139C12.7215 14.3203 13.3014 13.3141 13.3014 12.175C13.3014 10.3546 11.8204 8.87363 10 8.87363C8.17962 8.87363 6.69864 10.3546 6.69864 12.175C6.69864 13.3141 7.27856 14.3203 8.15868 14.9139C6.37677 15.6423 5.11786 17.3943 5.11786 19.4352V20H14.8822V19.4352C14.8822 17.3944 13.6233 15.6423 11.8414 14.9139Z"
                            fill="#81828A"
                          />
                          <path
                            d="M10.0527 0H0.835144V6.65488H4.27253L7.22889 8.24168L7.20694 6.65488H10.0527V0ZM7.3596 3.85379H3.52827V2.68191H7.3596V3.85379Z"
                            fill="#81828A"
                          />
                          <path
                            d="M11.3872 2.50972V8.18331H13.7222L13.7033 9.55788L16.2642 8.18331H19.1649V2.50972H11.3872ZM16.8489 5.88355H13.7033V4.71167H16.8489V5.88355Z"
                            fill="#81828A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_260_1836">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Group Chat</span>
                    </a>
                  </li>
                  <div className="mainacc">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="acord-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_260_1836)">
                                <path
                                  d="M5.5268 12.175C5.5268 11.559 5.65203 10.9715 5.87832 10.4369C5.44039 10.1865 4.93414 10.0427 4.39461 10.0427C2.74035 10.0427 1.39453 11.3885 1.39453 13.0427C1.39453 14.009 1.85422 14.8695 2.56594 15.4186C1.05313 16.1136 0 17.6431 0 19.4141V20H3.94598V19.4352C3.94598 18.2102 4.31164 17.0292 5.00344 16.0199C5.36039 15.499 5.79133 15.0416 6.28109 14.6597C5.79578 13.9344 5.5268 13.0732 5.5268 12.175Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M17.4341 15.4185C18.1458 14.8695 18.6055 14.009 18.6055 13.0427C18.6055 11.3884 17.2597 10.0426 15.6055 10.0426C15.0659 10.0426 14.5597 10.1865 14.1217 10.4368C14.348 10.9714 14.4732 11.5589 14.4732 12.175C14.4732 13.0732 14.2042 13.9344 13.7189 14.6596C14.2087 15.0416 14.6396 15.499 14.9966 16.0198C15.6884 17.0292 16.0541 18.2102 16.0541 19.4352V20H20V19.4141C20 17.6431 18.9469 16.1136 17.4341 15.4185Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M11.8414 14.9139C12.7215 14.3203 13.3014 13.3141 13.3014 12.175C13.3014 10.3546 11.8204 8.87363 10 8.87363C8.17962 8.87363 6.69864 10.3546 6.69864 12.175C6.69864 13.3141 7.27856 14.3203 8.15868 14.9139C6.37677 15.6423 5.11786 17.3943 5.11786 19.4352V20H14.8822V19.4352C14.8822 17.3944 13.6233 15.6423 11.8414 14.9139Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M10.0527 0H0.835144V6.65488H4.27253L7.22889 8.24168L7.20694 6.65488H10.0527V0ZM7.3596 3.85379H3.52827V2.68191H7.3596V3.85379Z"
                                  fill="#81828A"
                                />
                                <path
                                  d="M11.3872 2.50972V8.18331H13.7222L13.7033 9.55788L16.2642 8.18331H19.1649V2.50972H11.3872ZM16.8489 5.88355H13.7033V4.71167H16.8489V5.88355Z"
                                  fill="#81828A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_260_1836">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>Forum</span>
                          </div>

                        </Accordion.Header>
                        <Accordion.Body>
                          <li>
                            <a
                              onClick={() => { hitfunctionss(12); sidebar(); }}
                              className={
                                indexwait === 12 ? "list-item active" : "list-item"
                              }

                            >
                              <span>My Post</span>
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => { hitfunctionss(13); sidebar(); }}
                              className={
                                indexwait === 13 ? "list-item active" : "list-item"
                              }

                            >
                              <span>Army Forum</span>
                            </a>
                          </li>
                          {/* <li>
                            <a
                              onClick={() => { hitfunctionss(6); sidebar(); }}
                              className={
                                indexwait === 6 ? "list-item active" : "list-item"
                              }

                            >
                              <span>My Posts</span>
                            </a>
                          </li> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(7); sidebar(); }}
                      className={
                        indexwait === 7 ? "list-item active" : "list-item "
                      }

                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_260_1879)">
                          <path
                            d="M1.66669 12.0833H9.37502V20H3.12502C2.32502 20 1.66669 19.3417 1.66669 18.5417V12.0833Z"
                            fill="#81828A"
                          />
                          <path
                            d="M18.3333 12.0833V18.5417C18.3333 19.3417 17.675 20 16.875 20H10.625V12.0833H18.3333Z"
                            fill="#81828A"
                          />
                          <path
                            d="M0 7.29168V9.37501C0 10.175 0.658333 10.8333 1.45833 10.8333H1.66667H9.375V9.58334V5.83334H1.45833C0.658333 5.83334 0 6.49168 0 7.29168Z"
                            fill="#81828A"
                          />
                          <path
                            d="M18.5417 5.83334H10.625V9.58334V10.8333H18.3333H18.5417C19.3417 10.8333 20 10.175 20 9.37501V7.29168C20 6.49168 19.3417 5.83334 18.5417 5.83334Z"
                            fill="#81828A"
                          />
                          <path
                            d="M10 6.70333C9.81835 6.70333 9.64502 6.62416 9.52752 6.48666C9.40835 6.34916 9.35585 6.16666 9.38169 5.98666C9.69002 3.90333 11.3175 -0.0375061 15.2742 -0.0375061C17.5325 -0.0366728 18.3334 1.18333 18.3334 2.22833C18.3334 4.08583 15.7475 6.70333 10 6.70333ZM15.2742 1.21333C12.2892 1.21333 11.1559 4.05083 10.78 5.43499C13.135 5.32499 14.62 4.72916 15.475 4.22166C16.6609 3.51749 17.0834 2.72999 17.0834 2.22749C17.0834 1.47916 16.1492 1.21333 15.2742 1.21333Z"
                            fill="#81828A"
                          />
                          <path
                            d="M10.0008 6.70332C4.25331 6.70332 1.66748 4.08582 1.66748 2.22832C1.66748 1.18332 2.46915 -0.0366821 4.72748 -0.0366821C8.68331 -0.0366821 10.3108 3.90415 10.6191 5.98748C10.645 6.16748 10.5925 6.34998 10.4733 6.48748C10.3558 6.62415 10.1825 6.70332 10.0008 6.70332ZM4.72748 1.21332C3.85248 1.21332 2.91748 1.47998 2.91748 2.22832C2.91748 3.29248 4.77831 5.23165 9.21998 5.43582C8.84498 4.05082 7.71165 1.21332 4.72748 1.21332Z"
                            fill="#81828A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_260_1879">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Claim Rewards</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(8); sidebar(); }}
                      className={
                        indexwait === 8 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_667_14605)">
                          <path d="M18.9025 7.82833L17.3358 7.62917C17.2067 7.23167 17.0475 6.84833 16.8617 6.48417L17.8292 5.23833C18.2208 4.73417 18.175 4.0225 17.7275 3.58917L16.415 2.27667C15.9775 1.825 15.2658 1.78 14.7608 2.17083L13.5167 3.13833C13.1525 2.9525 12.7692 2.79333 12.3708 2.66417L12.1717 1.1C12.0967 0.4725 11.5642 0 10.9333 0H9.06667C8.43583 0 7.90333 0.4725 7.82833 1.0975L7.62917 2.66417C7.23083 2.79333 6.8475 2.95167 6.48333 3.13833L5.23833 2.17083C4.735 1.78 4.02333 1.825 3.58917 2.2725L2.27667 3.58417C1.825 4.0225 1.77917 4.73417 2.17083 5.23917L3.13833 6.48417C2.95167 6.84833 2.79333 7.23167 2.66417 7.62917L1.1 7.82833C0.4725 7.90333 0 8.43583 0 9.06667V10.9333C0 11.5642 0.4725 12.0967 1.0975 12.1717L2.66417 12.3708C2.79333 12.7683 2.9525 13.1517 3.13833 13.5158L2.17083 14.7617C1.77917 15.2658 1.825 15.9775 2.2725 16.4108L3.585 17.7233C4.02333 18.1742 4.73417 18.2192 5.23917 17.8283L6.48417 16.8608C6.84833 17.0475 7.23167 17.2067 7.62917 17.335L7.82833 18.8983C7.90333 19.5275 8.43583 20 9.06667 20H10.9333C11.5642 20 12.0967 19.5275 12.1717 18.9025L12.3708 17.3358C12.7683 17.2067 13.1517 17.0475 13.5158 16.8617L14.7617 17.8292C15.2658 18.2208 15.9775 18.175 16.4108 17.7275L17.7233 16.415C18.175 15.9767 18.2208 15.2658 17.8292 14.7608L16.8617 13.5158C17.0483 13.1517 17.2075 12.7683 17.3358 12.3708L18.8992 12.1717C19.5267 12.0967 19.9992 11.5642 19.9992 10.9333V9.06667C20 8.43583 19.5275 7.90333 18.9025 7.82833ZM10 14.1667C7.7025 14.1667 5.83333 12.2975 5.83333 10C5.83333 7.7025 7.7025 5.83333 10 5.83333C12.2975 5.83333 14.1667 7.7025 14.1667 10C14.1667 12.2975 12.2975 14.1667 10 14.1667Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_667_14605">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(10); sidebar(); }}
                      className={
                        indexwait === 10 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_667_7379)">
                          <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 15.8333C9.83519 15.8333 9.67407 15.7845 9.53703 15.6929C9.39999 15.6013 9.29318 15.4712 9.2301 15.3189C9.16703 15.1666 9.15053 14.9991 9.18268 14.8374C9.21484 14.6758 9.29421 14.5273 9.41075 14.4107C9.52729 14.2942 9.67578 14.2148 9.83743 14.1827C9.99908 14.1505 10.1666 14.167 10.3189 14.2301C10.4712 14.2932 10.6013 14.4 10.6929 14.537C10.7845 14.6741 10.8333 14.8352 10.8333 15C10.8333 15.221 10.7455 15.433 10.5893 15.5893C10.433 15.7455 10.221 15.8333 10 15.8333ZM11.2725 10.5833C11.136 10.6497 11.0218 10.7544 10.9438 10.8847C10.8658 11.0149 10.8274 11.165 10.8333 11.3167V11.6667C10.8333 11.8877 10.7455 12.0996 10.5893 12.2559C10.433 12.4122 10.221 12.5 10 12.5C9.77899 12.5 9.56703 12.4122 9.41075 12.2559C9.25447 12.0996 9.16667 11.8877 9.16667 11.6667V11.3167C9.15807 10.8342 9.29327 10.3602 9.55507 9.95487C9.81686 9.54957 10.1934 9.23137 10.6367 9.04083C10.9905 8.89432 11.2832 8.6304 11.4653 8.29346C11.6474 7.95653 11.7079 7.56715 11.6367 7.19083C11.5725 6.86107 11.4113 6.55799 11.1737 6.32044C10.9362 6.08289 10.6331 5.92169 10.3033 5.8575C10.0626 5.81293 9.8149 5.82197 9.57801 5.88397C9.34111 5.94597 9.12079 6.05942 8.93271 6.21623C8.74463 6.37304 8.59341 6.56937 8.48982 6.79125C8.38623 7.01314 8.3328 7.25513 8.33334 7.5C8.33334 7.72101 8.24554 7.93298 8.08926 8.08926C7.93298 8.24554 7.72102 8.33333 7.5 8.33333C7.27899 8.33333 7.06703 8.24554 6.91075 8.08926C6.75447 7.93298 6.66667 7.72101 6.66667 7.5C6.66711 6.89633 6.83148 6.30412 7.14223 5.78657C7.45297 5.26903 7.89843 4.84559 8.43104 4.56145C8.96366 4.27731 9.56344 4.14314 10.1664 4.17327C10.7693 4.20339 11.3527 4.39668 11.8543 4.7325C12.356 5.06832 12.757 5.53406 13.0146 6.08C13.2722 6.62594 13.3767 7.23159 13.317 7.83229C13.2572 8.433 13.0355 9.00621 12.6754 9.49072C12.3153 9.97524 11.8305 10.3529 11.2725 10.5833Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_667_7379">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                      <span>FAQs</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="twice-btns-sidebar">
                <button className="log-out-btn">
                  <img src={logoutIcon} alt="logoutIcon" />
                  DISCONNECT WALLET
                </button>
                <a onClick={() => { hitfunctionss(9); sidebar(); }} className="btn-report">Report a Bug</a>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


      <SquadModals show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2} SquadUsers={SquadUsers} GetUserProfiledata={GetUserProfiledata} />
      <LeaderModals show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} item={coLeaderDetails} />
      <AllTaskModals showtask={showtask} setShowtask={setShowtask} settaskdetail={settaskdetail} taskdetail={taskdetail} getData={getData} />
      <AllOperationTaskModal showtask1={showtask1} setShowtask1={setShowtask1} settaskdetail1={settaskdetail1} taskdetail1={taskdetail1} getDataOperation={getDataOperation} operationId={operationId} />
      {/* <ArmyForumModal showForumModal={showForumModal} setShowForumModal={setShowForumModal} setforumkdetail1={setforumkdetail1} forumdetail1={forumdetail1} getDataOperation={getDataOperation} operationId={operationId} /> */}
    </>
  );
};

export default Sidebar;
