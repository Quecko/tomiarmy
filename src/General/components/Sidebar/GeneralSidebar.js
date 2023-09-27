import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../style.scss";
import logo from "../../../assets/icons/logo.svg";
import logoutIcon from "../../../assets/icons/logoutIcon.svg";
import GeneralHeader from "../Header/GeneralHeader";
import GeneralHome from "../../Screens/GeneralHome/GeneralHome";
import GeneralTask from "../../Screens/GeneralTask/GeneralTask";
import GeneralOperation from "../../Screens/GeneralOperation/GeneralOperation";
import Proofofwork from "../../Screens/Proofofwork/Proofofwork";
import GeneralAnnouncement from "../../Screens/GeneralAnnouncement/GeneralAnnouncement";
import GeneralArmy from "../../Screens/GeneralArmy/GeneralArmy";
import GeneralForum from "../../Screens/GeneralForum/GeneralForum";
import GeneralReport from "../../Screens/GeneralReport/GeneralReport";
import Generalfaqs from "../../Screens/Generalfaqs/Generalfaqs";
import { Offcanvas } from "react-bootstrap";
import CreateTaskModals from "../../Screens/GeneralHome/CreateTaskModals";
import AnnouncementModals from "../../Screens/GeneralAnnouncement/AnnouncementModals";
import CreateFaqModal from "../../Screens/Generalfaqs/CreateFaqModal";
import EditTaskModals from "../../Screens/GeneralTask/EditTaskModals";
import { useWeb3React } from "@web3-react/core";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import ArmyMembers from "../../Screens/GeneralArmy/ArmyMembers";
import Accordion from 'react-bootstrap/Accordion';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import Signature from "../../../hooks/dataSenders/userSign";
import Chat from "../../Screens/Chat/Chat";
import { reverse } from "lodash";
import FailedClaim from "../../Screens/FailedClaim/FailedClaim";

const GeneralSidebar = () => {
  let tok = localStorage.getItem("accessToken");
  const indexvv = localStorage.getItem("indexvalue");
  const [tasks, settasks] = useState([]);
  const [editFaqs, setEbditFaqs] = useState('');
  const [annou, setannou] = useState([]);
  const { account } = useWeb3React();
  const [faqs, setfaqs] = useState([]);
  let user1 = localStorage.getItem("user");
  let user = JSON.parse(user1);
  // for redirect
  useEffect(() => {
    if (user?.rank?.name == 'general' && user?.isCommander == false && user?.isCoLeader == false) {
      history.push('/general')
    }
    else if (user?.rank?.name == 'major general' && user?.isCommander == false && user?.isCoLeader == false) {
      history.push('/majorgeneral')
    }
    else if (user?.isCommander == false && user?.isCoLeader == true) {
      history.push('/leader')
    }
    else if (user?.isCommander == true) {
      history.push('/leader')
    }
    else if (user?.isCommander == false && user?.isCoLeader == false) {
      history.push('/soldier')
    }
    else {
      window.location.assign('/')
    }
  }, [account])
  const { logout } = useAuth()
  const { userSign } = Signature()
  const history = useHistory();
  const [expired, setexpired] = useState(false);

  useEffect(() => {
    // if (currentPage > 1) {
    //     getData(currentPage);
    // } else {
    getDataannou();
    getData();
    // }
  }, [account, expired])

  const getData = async (off, dsfdsgds) => {
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
      url: `${API_URL}/tasks?offset=1&&limit=100&&expired=${expired}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        // setCount(response.data.data.count)
        settasks(response?.data?.data?.tasks);
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }

  const getDataannou = async (off, dsfdsgds) => {
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
      url: `${API_URL}/notifications/announcements?offset=1&&limit=100`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        // setCount(response.data.data.count)
        setannou(response?.data?.data?.announcements);
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }


  const getDataannou11 = async (off, dsfdsgds) => {
    // let valu = null;
    // if (off) {
    //     valu = off;
    // } else {
    //     valu = 1;
    // }
    let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");

    var config = {
      method: "get",
      url: `${API_URL}/content/faqs/get-faq-list?offset=1&&limit=100`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        // setCount(response.data.data.count)
        setfaqs(response?.data?.data?.faq);
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });

  }

  useEffect(() => {
    getDataannou11();
  }, [])



  const [indexwait, setindexwait] = useState(0);
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
    else if (indexvv == "12") {
      setindexwait(12)
    }
    else if (indexvv == "13") {
      setindexwait(13)
    }
    else if (indexvv == "14") {
      setindexwait(14)
    }
    else if (indexvv == "15") {
      setindexwait(15)
    }
  }, [indexvv])

  const hitfunctionss = (asd) => {
    setindexwait(asd)
    localStorage.setItem("indexvalue", asd);
    if (asd === 2) {
      setroute(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [routes, setroute] = useState(false);
  const [routeshome, setroutehome] = useState(false);
  const [routesarmy, setroutearmy] = useState(false);
  const [showtaskdetail, setShowtaskdetail] = useState(false);
  const [showtaskedit, setShowtaskedit] = useState(false);
  const [detailtask, setdetailtask] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggle, setToggle] = useState(true)
  const [chat, setChat] = useState([]);
  const [page, setPage] = useState(1)
  const [firstTime, setFirstTime] = useState(true);

  const sidebar = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const Lougout = () => {
    const connectorId = window.localStorage.getItem("connectorId")
    logout(connectorId);
    localStorage.setItem("flag", false)
    localStorage.clear()
    window.location.assign('/')
  }
  // pass all states in header or components to show modals..............................

  const [showtask, setShowtask] = useState(false);
  const [showannounce, setShowannounce] = useState(false);
  const [showfaq, setShowfaq] = useState(false);
  const [showfaq1, setShowfaq1] = useState(false);
  const [pages, allPages] = useState(1)
  const [message, setMessage] = useState('');


  const loginUser = async () => {
    // let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    // setShow(false);
    if (account) {
      const res0 = await userSign(account);
      if (res0) {
        await axios
          .post(`${API_URL}/auth/signin`, {
            walletAddress: account,
            sign: res0,
            rememberMe: true
          })
          .then((res) => {
            // toast.success('User Logged in Successfully', {
            //     position: 'top-center',
            //     autoClose: 5000,
            // });
            localStorage.setItem("accessToken", res?.data?.data?.accessToken);
            localStorage.setItem("user", JSON.stringify(res?.data?.data));
            if (res?.data?.data?.rank.name === "general") {
              history.push("/general");
            } else if (res?.data?.data?.rank.name === "major general") {
              history.push("/majorgeneral");
            }
            else if (res?.data?.data?.isCommander === true) {
              history.push("/leader");
            }
            else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name !== '') {
              history.push("/soldier");
            } else if (res?.data?.data?.isCommander === false && res?.data?.data?.squad?.name == '') {
              history.push("/soldier");
            }
            else {
              localStorage.clear()
              window.location.assign('/')
            }
            localStorage.setItem("wallet", account);
            window.location?.reload()
          })
          .catch((err) => {
            if (err?.response?.data?.statusCode === 404) {
              toast.error('No User Found', {
                position: 'top-center',
                autoClose: 5000,
              });
              localStorage.clear()
              window.location.assign('/')
            }
            localStorage.clear()
            window.location.assign('/')
          });
      }
      else {
        localStorage.clear()
        window.location.assign('/')
      }
    }
    else {
      toast.error('Wallet Not Connected', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };
  const getChat = async () => {
    if (message != '') {
      setFirstTime(true)
      setPage(1)
    }
    else {
      setPage(page)
    }

    var config = {
      method: "get",
      url: `${API_URL}/chats/group-messages/general-chat?offset=${page}&limit=10`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        allPages(response?.data?.data?.pages)
        if (firstTime == true) {
          let rev = reverse([...response?.data?.data?.groupMessages])
          setChat(rev);
          setFirstTime(false)
        }
        else if (page == 1) {
          let rev = reverse([...response?.data?.data?.groupMessages])
          setChat(rev)
        }
        else {
          let rev = reverse([...response?.data?.data?.groupMessages])
          setChat([...rev, ...chat])
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    // if(data?.memberOfSquad===true){
    getChat()
    // }
  }, [page, pages])


  useEffect(() => {
    if (account?.toUpperCase() === user?.walletAddress?.toUpperCase()) {
    }
    else if (account) {
      loginUser();
    }
  }, [account])



  return (
    <>
      <div className="theme-custom-container">
        <div className="App app-wrapper row m-0">
          <div className="sidebar-column web-sidebar p-0">
            <div className="sidebar-wrapper ">
              <div className="logo-box">
                {/* <Link to={"/"}> */}
                <img src={logo} alt="" />
                {/* </Link> */}
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
                  <li>
                    <a
                      onClick={() => { hitfunctionss(2); }}
                      className={
                        indexwait === 2 ? "list-item active" : "list-item "
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
                      onClick={() => { hitfunctionss(3); }}
                      className={
                        indexwait === 3 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1157_9719)">
                          <path d="M11.1343 12.9634C10.5672 12.3012 10.5672 11.34 11.1343 10.6778C12.2136 9.41774 13.7837 8.69502 15.4419 8.69502C15.6062 8.69502 15.7695 8.70241 15.9317 8.71643V0.589832C15.9317 0.266177 15.6693 0.00378418 15.3456 0.00378418H5.5347V3.94718C5.5347 4.27083 5.2723 4.53323 4.94865 4.53323H1.00537V19.414C1.00537 19.7376 1.26776 20 1.59142 20H15.3456C15.6693 20 15.9317 19.7376 15.9317 19.414V14.9248C15.7695 14.9388 15.6062 14.9462 15.4419 14.9462C13.7836 14.9462 12.2136 14.2235 11.1343 12.9634ZM12.7736 7.74942H10.869C10.5453 7.74942 10.2829 7.48702 10.2829 7.16337C10.2829 6.83972 10.5453 6.57732 10.869 6.57732H12.7736C13.0972 6.57732 13.3596 6.83972 13.3596 7.16337C13.3596 7.48702 13.0972 7.74942 12.7736 7.74942ZM4.17268 6.58361H8.32014C8.6438 6.58361 8.90619 6.846 8.90619 7.16966C8.90619 7.49331 8.6438 7.75571 8.32014 7.75571H4.17268C3.84903 7.75571 3.58664 7.49331 3.58664 7.16966C3.58664 6.846 3.84903 6.58361 4.17268 6.58361ZM4.17268 8.92389H8.32014C8.6438 8.92389 8.90619 9.18629 8.90619 9.50994C8.90619 9.8336 8.6438 10.096 8.32014 10.096H4.17268C3.84903 10.096 3.58664 9.8336 3.58664 9.50994C3.58664 9.18629 3.84903 8.92389 4.17268 8.92389ZM4.17268 11.2345H8.32014C8.6438 11.2345 8.90619 11.4969 8.90619 11.8206C8.90619 12.1442 8.6438 12.4066 8.32014 12.4066H4.17268C3.84903 12.4066 3.58664 12.1442 3.58664 11.8206C3.58664 11.4969 3.84903 11.2345 4.17268 11.2345ZM4.17268 13.5789H8.32014C8.6438 13.5789 8.90619 13.8413 8.90619 14.1649C8.90619 14.4886 8.6438 14.751 8.32014 14.751H4.17268C3.84903 14.751 3.58664 14.4886 3.58664 14.1649C3.58664 13.8413 3.84903 13.5789 4.17268 13.5789ZM4.17268 15.9064H12.7673C13.0909 15.9064 13.3533 16.1688 13.3533 16.4924C13.3533 16.8161 13.0909 17.0785 12.7673 17.0785H4.17268C3.84903 17.0785 3.58664 16.8161 3.58664 16.4924C3.58664 16.1688 3.84903 15.9064 4.17268 15.9064Z" fill="#81828A" />
                          <path d="M15.4418 9.86707C14.1264 9.86707 12.8808 10.4405 12.0245 11.4402C11.8388 11.657 11.8388 11.9841 12.0245 12.2009C12.8808 13.2006 14.1264 13.774 15.4418 13.774C16.7573 13.774 18.0029 13.2007 18.8592 12.2009C19.0449 11.9841 19.0449 11.657 18.8592 11.4402C18.0029 10.4405 16.7573 9.86707 15.4418 9.86707ZM15.4418 12.4066C15.1133 12.4066 14.87 12.1381 14.8558 11.8206C14.8416 11.5041 15.1353 11.2345 15.4418 11.2345C15.7704 11.2345 16.0137 11.503 16.0279 11.8206C16.0421 12.1371 15.7484 12.4066 15.4418 12.4066Z" fill="#81828A" />
                          <path d="M3.77769 3.36111C4.10091 3.36111 4.36315 3.09942 4.36374 2.7762C4.36553 1.81188 4.36815 -0.00553524 4.36256 1.26727e-05L1.00146 3.36111H3.77769Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1157_9719">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Proof of Work</span>
                    </a>
                  </li>
                  {user?.rank?.name === "general" ? (
                    <li>
                      <a
                        onClick={() => { hitfunctionss(5); }}
                        className={
                          indexwait === 5 ? "list-item active" : "list-item "
                        }

                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_943_10906)">
                            <path d="M15.3825 3.91039L11.6635 3.37L10.0004 0L8.33719 3.37L4.61816 3.91039L7.3093 6.53356L6.67398 10.2375L10.0004 8.48875L13.3267 10.2375L12.6914 6.53356L15.3825 3.91039Z" fill="#81828A" />
                            <path d="M9.9998 12.3132L3.98633 9.90063V13.3274L10.0349 15.7541L16.0133 13.3256V9.90063L9.9998 12.3132Z" fill="#81828A" />
                            <path d="M9.9998 16.5591L3.98633 14.1465V17.5733L10.0349 20L16.0133 17.5715V14.1465L9.9998 16.5591Z" fill="#81828A" />
                          </g>
                          <defs>
                            <clipPath id="clip0_943_10906">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Awaiting Ranks</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <a
                        onClick={() => { hitfunctionss(9); }}
                        className={
                          indexwait === 9 ? "list-item active" : "list-item "
                        }

                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_943_10906)">
                            <path d="M15.3825 3.91039L11.6635 3.37L10.0004 0L8.33719 3.37L4.61816 3.91039L7.3093 6.53356L6.67398 10.2375L10.0004 8.48875L13.3267 10.2375L12.6914 6.53356L15.3825 3.91039Z" fill="#81828A" />
                            <path d="M9.9998 12.3132L3.98633 9.90063V13.3274L10.0349 15.7541L16.0133 13.3256V9.90063L9.9998 12.3132Z" fill="#81828A" />
                            <path d="M9.9998 16.5591L3.98633 14.1465V17.5733L10.0349 20L16.0133 17.5715V14.1465L9.9998 16.5591Z" fill="#81828A" />
                          </g>
                          <defs>
                            <clipPath id="clip0_943_10906">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Army Members</span>
                      </a>
                    </li>
                  )}

                  {/* {data?.memberOfSquad === true && */}
                  <li>
                    <a
                      onClick={() => { hitfunctionss(14); }}
                      className={
                        indexwait === 14 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04102 12.7308C6.02685 12.7375 6.01352 12.7467 6.00102 12.7567L3.73268 14.6467C3.54685 14.8017 3.28685 14.8358 3.06768 14.7325C2.84768 14.63 2.70768 14.4092 2.70768 14.1667V12.6217C2.33518 12.5158 1.99102 12.3158 1.71185 12.0375C1.28268 11.6075 1.04102 11.0242 1.04102 10.4167V4.16667C1.04102 3.55917 1.28268 2.97583 1.71185 2.54583C2.14185 2.11667 2.72518 1.875 3.33268 1.875H10.8327C11.4402 1.875 12.0235 2.11667 12.4535 2.54583C12.8827 2.97583 13.1243 3.55917 13.1243 4.16667V4.375H9.16602C8.33685 4.375 7.54268 4.70417 6.95602 5.29C6.37018 5.87667 6.04102 6.67083 6.04102 7.5V12.7308Z" fill="#81828A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 7.49999C6.875 6.89249 7.11667 6.30916 7.54583 5.87916C7.97583 5.44999 8.55917 5.20833 9.16667 5.20833H16.6667C17.2742 5.20833 17.8575 5.44999 18.2875 5.87916C18.7167 6.30916 18.9583 6.89249 18.9583 7.49999V13.75C18.9583 14.3575 18.7167 14.9408 18.2875 15.3708C18.0083 15.6492 17.6642 15.8492 17.2917 15.955V17.5C17.2917 17.7425 17.1517 17.9633 16.9317 18.0658C16.7125 18.1692 16.4525 18.135 16.2667 17.98L13.9983 16.09C13.9608 16.0592 13.9133 16.0417 13.865 16.0417H9.16667C8.55917 16.0417 7.97583 15.8 7.54583 15.3708C7.11667 14.9408 6.875 14.3575 6.875 13.75V7.49999ZM10.8333 9.79166H13.3333C13.6783 9.79166 13.9583 9.51166 13.9583 9.16666C13.9583 8.82166 13.6783 8.54166 13.3333 8.54166H10.8333C10.4883 8.54166 10.2083 8.82166 10.2083 9.16666C10.2083 9.51166 10.4883 9.79166 10.8333 9.79166ZM10.8333 12.2917H15C15.345 12.2917 15.625 12.0117 15.625 11.6667C15.625 11.3217 15.345 11.0417 15 11.0417H10.8333C10.4883 11.0417 10.2083 11.3217 10.2083 11.6667C10.2083 12.0117 10.4883 12.2917 10.8333 12.2917Z" fill="#81828A" />
                      </svg>
                      <div className="set-flex-for-value">
                        <span>Chat </span>
                        {/* <span className="set-value">2</span> */}
                      </div>
                    </a>
                  </li>
                  {/* } */}

                  {user?.rank?.name === "general" &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(4); }}
                        className={
                          indexwait === 4 ? "list-item active" : "list-item "
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
                  {/* <li>
                    <a
                      onClick={() => { hitfunctionss(6); }}
                      className={
                        indexwait === 6 ? "list-item active" : "list-item "
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

                      <span>Army Forum</span>
                    </a>
                  </li> */}
                  <li>
                    <a
                      onClick={() => { hitfunctionss(7); }}
                      className={
                        indexwait === 7 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.01367 20H16.308L9.9852 9.42322L4.01367 20ZM10.5854 18.2031H9.41355V17.0313H10.5854V18.2031ZM10.5854 15.8594H9.41355V13.5156H10.5854V15.8594Z" fill="#81828A" />
                        <path d="M16.2216 5.89844L17.3934 3.55469H18.7891V2.38281H16.6691L15.4972 4.72656C15.3175 4.72656 12.6715 4.72656 12.8704 4.72656C12.724 4.00801 12.3079 3.39168 11.7398 2.96875H11.7578C11.7578 1.99945 12.5463 1.17188 13.5156 1.17188H15.2734V0H13.5156C12.0754 0 10.8811 1.08598 10.6377 2.45742C10.4317 2.41141 10.2196 2.38281 10 2.38281C9.78043 2.38281 9.56828 2.41141 9.36234 2.45742C9.11895 1.08598 7.92461 0 6.48438 0H4.72656V1.17188H6.48438C7.45367 1.17188 8.24219 1.99945 8.24219 2.96875H8.26027C7.69215 3.39168 7.27602 4.00801 7.12961 4.72656C6.95215 4.72656 4.34656 4.72656 4.50285 4.72656L3.33098 2.38281H1.21094V3.55469H2.60656L3.77844 5.89844H5.89844V7.07031H3.77844L2.60656 9.41406H1.21094V10.5859H3.33094L4.50281 8.24219H5.89844V9.75738L3.55469 12.1011V14.1016H2.38281V15.2734H4.72656V12.5864L6.0982 11.2147C6.25801 11.7199 6.50332 12.193 6.83793 12.6009L9.41406 8.05449V7.07031H10.5859V8.14621L13.2205 12.537C13.5293 12.146 13.7568 11.6984 13.9066 11.2196L15.2734 12.5864V15.2734H17.6172V14.1016H16.4453V12.1011L14.1016 9.75738V8.24219H15.4972L16.6691 10.5859H18.7891V9.41406H17.3934L16.2216 7.07031H14.1016V5.89844H16.2216Z" fill="#81828A" />
                      </svg>

                      <span>Bugs Report</span>
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
                  {user?.rank?.name === "general" &&
                    <li>
                      <a
                        onClick={() => { hitfunctionss(15); }}
                        className={
                          indexwait === 15 ? "list-item active" : "list-item "
                        }

                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M19.375 7.49994C19.3755 7.5822 19.3597 7.66374 19.3286 7.73988C19.2975 7.81603 19.2517 7.88529 19.1938 7.94369L15.4438 11.6937C15.3854 11.7516 15.3161 11.7974 15.24 11.8286C15.1638 11.8597 15.0823 11.8754 15 11.8749C14.9188 11.8759 14.8381 11.8611 14.7625 11.8312C14.6474 11.7839 14.549 11.7033 14.48 11.5998C14.4109 11.4962 14.3744 11.3744 14.375 11.2499V9.37494H8.75001C8.58425 9.37494 8.42528 9.3091 8.30807 9.19188C8.19086 9.07467 8.12501 8.9157 8.12501 8.74994V6.24994C8.12501 6.08418 8.19086 5.92521 8.30807 5.808C8.42528 5.69079 8.58425 5.62494 8.75001 5.62494H14.375V3.74994C14.3755 3.62634 14.4127 3.50566 14.4818 3.40317C14.5509 3.30068 14.6488 3.22098 14.7632 3.17415C14.8776 3.12732 15.0033 3.11547 15.1245 3.14008C15.2456 3.1647 15.3567 3.22468 15.4438 3.31244L19.1938 7.06244C19.3092 7.17886 19.3743 7.33598 19.375 7.49994ZM11.25 10.6249H5.62501V8.74994C5.62439 8.62655 5.58727 8.5061 5.51831 8.40378C5.44935 8.30145 5.35165 8.22183 5.23751 8.17494C5.12369 8.12708 4.99825 8.114 4.877 8.13736C4.75576 8.16072 4.64415 8.21947 4.55626 8.30619L0.80626 12.0562C0.748335 12.1146 0.702506 12.1839 0.671403 12.26C0.640301 12.3361 0.624535 12.4177 0.62501 12.4999C0.624535 12.5822 0.640301 12.6637 0.671403 12.7399C0.702506 12.816 0.748335 12.8853 0.80626 12.9437L4.55626 16.6937C4.61466 16.7516 4.68392 16.7974 4.76007 16.8286C4.83622 16.8597 4.91776 16.8754 5.00001 16.8749C5.082 16.8771 5.16334 16.8599 5.23751 16.8249C5.35165 16.7781 5.44935 16.6984 5.51831 16.5961C5.58727 16.4938 5.62439 16.3733 5.62501 16.2499V14.3749H11.25C11.4158 14.3749 11.5747 14.3091 11.692 14.1919C11.8092 14.0747 11.875 13.9157 11.875 13.7499V11.2499C11.875 11.0842 11.8092 10.9252 11.692 10.808C11.5747 10.6908 11.4158 10.6249 11.25 10.6249Z" fill="#81828A" />
                        </svg>

                        <span>Failed Claims</span>
                      </a>
                    </li>
                  }
                </ul>
              </div>
              <div className="twice-btns-sidebar">
                <button className="log-out-btn" onClick={Lougout}>
                  <img src={logoutIcon} alt="logoutIcon" />
                  DISCONNECT WALLET
                </button>
                {/* <a onClick={() => { hitfunctionss(9); }} className="btn-report">Report a Bug</a> */}
              </div>
            </div>
          </div>
          <div className="content-column">
            <GeneralHeader handleShow={handleShow} indexwait={indexwait} routes={routes} setroute={setroute} routeshome={routeshome} setroutehome={setroutehome} routesarmy={routesarmy} setroutearmy={setroutearmy} showtask={showtask} setShowtask={setShowtask} showannounce={showannounce} setShowannounce={setShowannounce} showfaq={showfaq} setShowfaq={setShowfaq} getChat={getChat} />
            {indexwait == 0 ?
              (
                <>
                  <GeneralHome setShowtask={setShowtask} routeshome={routeshome} setroutehome={setroutehome} />
                </>
              )
              :
              indexwait == 1 ?
                (
                  <>
                    <GeneralTask setShowtask={setShowtask} setexpired={setexpired} tasks={tasks} getData={getData} setShowtaskdetail={setShowtaskdetail} setdetailtask={setdetailtask} setShowtaskedit={setShowtaskedit} />
                  </>
                )
                :
                indexwait == 2 ?
                  (
                    <>
                      <GeneralOperation routeshome={routeshome} setroutehome={setroutehome} routes={routes} setroute={setroute} />
                    </>
                  )
                  :
                  indexwait == 3 ?
                    (
                      <>
                        <Proofofwork />
                      </>
                    )
                    :
                    indexwait == 4 ?
                      (
                        <>
                          <GeneralAnnouncement getDataannou={getDataannou} annou={annou} setShowannounce={setShowannounce} />
                        </>
                      )
                      :
                      indexwait == 5 ?
                        (
                          <>
                            <GeneralArmy routesarmy={routesarmy} setroutearmy={setroutearmy} />
                          </>
                        )
                        :
                        indexwait == 6 ?
                          (
                            <>
                              <GeneralForum />
                            </>
                          )
                          :
                          indexwait == 7 ?
                            (
                              <>
                                <GeneralReport />
                              </>
                            )
                            :
                            indexwait == 8 ?
                              (
                                <>
                                  <Generalfaqs setShowfaq={setShowfaq} setShowfaq1={setShowfaq1} getDataannou11={getDataannou11} faqs={faqs} setEbditFaqs={setEbditFaqs} />
                                </>
                              )
                              :
                              indexwait == 9 ?
                                (
                                  <>
                                    <ArmyMembers routesarmy={routesarmy} setroutearmy={setroutearmy} />
                                  </>
                                )
                                :
                                indexwait == 12 ?
                                  (
                                    <>
                                      <GeneralForum />
                                    </>
                                  ) :
                                  indexwait == 13 ?
                                    (
                                      <>
                                        <GeneralForum />
                                      </>
                                    ) :
                                    indexwait == 14 ?
                                      (
                                        <>
                                          <Chat setPage={setPage} page={page} setChat={setChat} chat={chat} getChat={getChat} pages={pages} setMessage={setMessage} message={message} />
                                        </>
                                      ) :
                                      indexwait == 15 ?
                                        (
                                          <>
                                            <FailedClaim />
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
                        indexwait === 2 ? "list-item active" : "list-item "
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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1157_9719)">
                          <path d="M11.1343 12.9634C10.5672 12.3012 10.5672 11.34 11.1343 10.6778C12.2136 9.41774 13.7837 8.69502 15.4419 8.69502C15.6062 8.69502 15.7695 8.70241 15.9317 8.71643V0.589832C15.9317 0.266177 15.6693 0.00378418 15.3456 0.00378418H5.5347V3.94718C5.5347 4.27083 5.2723 4.53323 4.94865 4.53323H1.00537V19.414C1.00537 19.7376 1.26776 20 1.59142 20H15.3456C15.6693 20 15.9317 19.7376 15.9317 19.414V14.9248C15.7695 14.9388 15.6062 14.9462 15.4419 14.9462C13.7836 14.9462 12.2136 14.2235 11.1343 12.9634ZM12.7736 7.74942H10.869C10.5453 7.74942 10.2829 7.48702 10.2829 7.16337C10.2829 6.83972 10.5453 6.57732 10.869 6.57732H12.7736C13.0972 6.57732 13.3596 6.83972 13.3596 7.16337C13.3596 7.48702 13.0972 7.74942 12.7736 7.74942ZM4.17268 6.58361H8.32014C8.6438 6.58361 8.90619 6.846 8.90619 7.16966C8.90619 7.49331 8.6438 7.75571 8.32014 7.75571H4.17268C3.84903 7.75571 3.58664 7.49331 3.58664 7.16966C3.58664 6.846 3.84903 6.58361 4.17268 6.58361ZM4.17268 8.92389H8.32014C8.6438 8.92389 8.90619 9.18629 8.90619 9.50994C8.90619 9.8336 8.6438 10.096 8.32014 10.096H4.17268C3.84903 10.096 3.58664 9.8336 3.58664 9.50994C3.58664 9.18629 3.84903 8.92389 4.17268 8.92389ZM4.17268 11.2345H8.32014C8.6438 11.2345 8.90619 11.4969 8.90619 11.8206C8.90619 12.1442 8.6438 12.4066 8.32014 12.4066H4.17268C3.84903 12.4066 3.58664 12.1442 3.58664 11.8206C3.58664 11.4969 3.84903 11.2345 4.17268 11.2345ZM4.17268 13.5789H8.32014C8.6438 13.5789 8.90619 13.8413 8.90619 14.1649C8.90619 14.4886 8.6438 14.751 8.32014 14.751H4.17268C3.84903 14.751 3.58664 14.4886 3.58664 14.1649C3.58664 13.8413 3.84903 13.5789 4.17268 13.5789ZM4.17268 15.9064H12.7673C13.0909 15.9064 13.3533 16.1688 13.3533 16.4924C13.3533 16.8161 13.0909 17.0785 12.7673 17.0785H4.17268C3.84903 17.0785 3.58664 16.8161 3.58664 16.4924C3.58664 16.1688 3.84903 15.9064 4.17268 15.9064Z" fill="#81828A" />
                          <path d="M15.4418 9.86707C14.1264 9.86707 12.8808 10.4405 12.0245 11.4402C11.8388 11.657 11.8388 11.9841 12.0245 12.2009C12.8808 13.2006 14.1264 13.774 15.4418 13.774C16.7573 13.774 18.0029 13.2007 18.8592 12.2009C19.0449 11.9841 19.0449 11.657 18.8592 11.4402C18.0029 10.4405 16.7573 9.86707 15.4418 9.86707ZM15.4418 12.4066C15.1133 12.4066 14.87 12.1381 14.8558 11.8206C14.8416 11.5041 15.1353 11.2345 15.4418 11.2345C15.7704 11.2345 16.0137 11.503 16.0279 11.8206C16.0421 12.1371 15.7484 12.4066 15.4418 12.4066Z" fill="#81828A" />
                          <path d="M3.77769 3.36111C4.10091 3.36111 4.36315 3.09942 4.36374 2.7762C4.36553 1.81188 4.36815 -0.00553524 4.36256 1.26727e-05L1.00146 3.36111H3.77769Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1157_9719">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                      <span>Proof of Work</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(5); sidebar(); }}
                      className={
                        indexwait === 5 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_943_10906)">
                          <path d="M15.3825 3.91039L11.6635 3.37L10.0004 0L8.33719 3.37L4.61816 3.91039L7.3093 6.53356L6.67398 10.2375L10.0004 8.48875L13.3267 10.2375L12.6914 6.53356L15.3825 3.91039Z" fill="#81828A" />
                          <path d="M9.9998 12.3132L3.98633 9.90063V13.3274L10.0349 15.7541L16.0133 13.3256V9.90063L9.9998 12.3132Z" fill="#81828A" />
                          <path d="M9.9998 16.5591L3.98633 14.1465V17.5733L10.0349 20L16.0133 17.5715V14.1465L9.9998 16.5591Z" fill="#81828A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_943_10906">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Army</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(4); sidebar(); }}
                      className={
                        indexwait === 4 ? "list-item active" : "list-item "
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
                      onClick={() => { hitfunctionss(6); sidebar(); }}
                      className={
                        indexwait === 6 ? "list-item active" : "list-item "
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

                      <span>Army Forum</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => { hitfunctionss(7); sidebar(); }}
                      className={
                        indexwait === 7 ? "list-item active" : "list-item "
                      }

                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.01367 20H16.308L9.9852 9.42322L4.01367 20ZM10.5854 18.2031H9.41355V17.0313H10.5854V18.2031ZM10.5854 15.8594H9.41355V13.5156H10.5854V15.8594Z" fill="#81828A" />
                        <path d="M16.2216 5.89844L17.3934 3.55469H18.7891V2.38281H16.6691L15.4972 4.72656C15.3175 4.72656 12.6715 4.72656 12.8704 4.72656C12.724 4.00801 12.3079 3.39168 11.7398 2.96875H11.7578C11.7578 1.99945 12.5463 1.17188 13.5156 1.17188H15.2734V0H13.5156C12.0754 0 10.8811 1.08598 10.6377 2.45742C10.4317 2.41141 10.2196 2.38281 10 2.38281C9.78043 2.38281 9.56828 2.41141 9.36234 2.45742C9.11895 1.08598 7.92461 0 6.48438 0H4.72656V1.17188H6.48438C7.45367 1.17188 8.24219 1.99945 8.24219 2.96875H8.26027C7.69215 3.39168 7.27602 4.00801 7.12961 4.72656C6.95215 4.72656 4.34656 4.72656 4.50285 4.72656L3.33098 2.38281H1.21094V3.55469H2.60656L3.77844 5.89844H5.89844V7.07031H3.77844L2.60656 9.41406H1.21094V10.5859H3.33094L4.50281 8.24219H5.89844V9.75738L3.55469 12.1011V14.1016H2.38281V15.2734H4.72656V12.5864L6.0982 11.2147C6.25801 11.7199 6.50332 12.193 6.83793 12.6009L9.41406 8.05449V7.07031H10.5859V8.14621L13.2205 12.537C13.5293 12.146 13.7568 11.6984 13.9066 11.2196L15.2734 12.5864V15.2734H17.6172V14.1016H16.4453V12.1011L14.1016 9.75738V8.24219H15.4972L16.6691 10.5859H18.7891V9.41406H17.3934L16.2216 7.07031H14.1016V5.89844H16.2216Z" fill="#81828A" />
                      </svg>

                      <span>Bugs Report</span>
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
                  <li>
                    <a
                      onClick={() => { hitfunctionss(15); sidebar(); }}
                      className={
                        indexwait === 15 ? "list-item active" : "list-item "
                      }

                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.375 7.49994C19.3755 7.5822 19.3597 7.66374 19.3286 7.73988C19.2975 7.81603 19.2517 7.88529 19.1938 7.94369L15.4438 11.6937C15.3854 11.7516 15.3161 11.7974 15.24 11.8286C15.1638 11.8597 15.0823 11.8754 15 11.8749C14.9188 11.8759 14.8381 11.8611 14.7625 11.8312C14.6474 11.7839 14.549 11.7033 14.48 11.5998C14.4109 11.4962 14.3744 11.3744 14.375 11.2499V9.37494H8.75001C8.58425 9.37494 8.42528 9.3091 8.30807 9.19188C8.19086 9.07467 8.12501 8.9157 8.12501 8.74994V6.24994C8.12501 6.08418 8.19086 5.92521 8.30807 5.808C8.42528 5.69079 8.58425 5.62494 8.75001 5.62494H14.375V3.74994C14.3755 3.62634 14.4127 3.50566 14.4818 3.40317C14.5509 3.30068 14.6488 3.22098 14.7632 3.17415C14.8776 3.12732 15.0033 3.11547 15.1245 3.14008C15.2456 3.1647 15.3567 3.22468 15.4438 3.31244L19.1938 7.06244C19.3092 7.17886 19.3743 7.33598 19.375 7.49994ZM11.25 10.6249H5.62501V8.74994C5.62439 8.62655 5.58727 8.5061 5.51831 8.40378C5.44935 8.30145 5.35165 8.22183 5.23751 8.17494C5.12369 8.12708 4.99825 8.114 4.877 8.13736C4.75576 8.16072 4.64415 8.21947 4.55626 8.30619L0.80626 12.0562C0.748335 12.1146 0.702506 12.1839 0.671403 12.26C0.640301 12.3361 0.624535 12.4177 0.62501 12.4999C0.624535 12.5822 0.640301 12.6637 0.671403 12.7399C0.702506 12.816 0.748335 12.8853 0.80626 12.9437L4.55626 16.6937C4.61466 16.7516 4.68392 16.7974 4.76007 16.8286C4.83622 16.8597 4.91776 16.8754 5.00001 16.8749C5.082 16.8771 5.16334 16.8599 5.23751 16.8249C5.35165 16.7781 5.44935 16.6984 5.51831 16.5961C5.58727 16.4938 5.62439 16.3733 5.62501 16.2499V14.3749H11.25C11.4158 14.3749 11.5747 14.3091 11.692 14.1919C11.8092 14.0747 11.875 13.9157 11.875 13.7499V11.2499C11.875 11.0842 11.8092 10.9252 11.692 10.808C11.5747 10.6908 11.4158 10.6249 11.25 10.6249Z" fill="#81828A" />
                      </svg>

                      <span>Failed Claims</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="twice-btns-sidebar">
                <button className="log-out-btn">
                  <img src={logoutIcon} alt="logoutIcon" />
                  DISCONNECT WALLET
                </button>
                {/* <a onClick={() => { hitfunctionss(9); sidebar(); }} className="btn-report">Report a Bug</a> */}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <CreateTaskModals showtask={showtask} getData={getData} setShowtask={setShowtask} />
      <AnnouncementModals getDataannou={getDataannou} showannounce={showannounce} setShowannounce={setShowannounce} />
      <CreateFaqModal showfaq={showfaq} setShowfaq={setShowfaq} showfaq1={showfaq1} setShowfaq1={setShowfaq1} getDataannou11={getDataannou11} editFaqs={editFaqs} setEbditFaqs={setEbditFaqs} />
      <EditTaskModals showtaskdetail={showtaskdetail} setdetailtask={setdetailtask} getData={getData} taskdetail={detailtask} setShowtaskdetail={setShowtaskdetail} showtaskedit={showtaskedit} setShowtaskedit={setShowtaskedit} />
    </>
  );
};

export default GeneralSidebar;
