import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./operation.scss"
import ActiveOperation from './ActiveOperation';
import ExpiredOperation from './ExpiredOperation';
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';


const Operations = ({ setroute, routes, setShowtask, detailmodaloperations, deletemodaloperation, call }) => {

  const { account } = useWeb3React()
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [rend, setRend] = useState(false);
  const [tasks, settasks] = useState([])
  const getData = async (off) => {
    // let valu = null;
    // if (off) {
    //   valu = off;
    // } else {
    //   valu = 1;
    // }
    let tok = localStorage.getItem("accessToken");
    let wall = localStorage.getItem("wallet");
    if (account) {
      var config = {
        method: "get",
        url: `${API_URL}/tasks/operations?offset=1&&limit=5`,
        headers: {
          authorization: `Bearer ` + tok
        },
      };
      axios(config)
        .then(function (response) {
          setLoader(false);
          // setCount(response.data.data.count)
          settasks(response?.data?.data?.operation[0]);
          // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
          // setPages(arr);
          // setCurrentPage(valu)
        })
        .catch(function (error) {
          setLoader(false);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          window.location.assign("/")
          // window.location.reload();
        });
    }
  }

  const getNextData = (off) => {
    let offset = parseInt(off) + 1;
    if (off <= tasks.length) {
      let val = localStorage.getItem("accessToken");
      var config = null;
      config = {
        method: "get",
        url: `${API_URL}/operations?offset=${offset}&&limit=5`,
        headers: {
          Authorization: "Bearer " + val,
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then(function (response) {
          let arr = Array.from(
            Array(parseInt(response.data.data.pages)).keys()
          );
          setPages(arr);
          settasks(response?.data?.data?.operation);
          if (off <= tasks.length) {
            setCurrentPage(offset);
          }
          setRend(!rend);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const getPrevData = (off) => {
    let offset = parseInt(off) - 1;
    if (offset > 0) {
      setLoader(true);
      let val = localStorage.getItem("accessToken");
      var config = null;
      config = {
        method: "get",
        url: `${API_URL}/operations?offset=${offset}&&limit=5`,
        headers: {
          Authorization: "Bearer " + val,
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then(function (response) {
          let arr = Array.from(
            Array(parseInt(response.data.data.pages)).keys()
          );
          setPages(arr);
          settasks(response?.data?.data?.operation);
          if (currentPage - 1 >= 0) {
            setCurrentPage(currentPage - 1);
          }
          setRend(!rend);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoader(false);
    }
  };

  console.log('taskkkkk',tasks);

  useEffect(() => {
    if (currentPage > 1) {
      getData(currentPage);
    } else {
      getData();
    }
  }, [account, call])


  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Operations</h6>
          <p>VIEW AND complete operations</p>
        </div>
      </div>
      <section className="operations">
        <Tabs
          defaultActiveKey="activeop"
          id="uncontrolled-tab-example"
          className={routes ? "opeartions-tab d-none" : "opeartions-tab"}
        >
          <Tab eventKey="activeop" title="Active Operation">
            <ActiveOperation setShowtask={setShowtask}  tasks={tasks}/>
          </Tab>
          <Tab eventKey="expiredop" title="Expired Operations">
            <ExpiredOperation setroute={setroute} routes={routes} />
          </Tab>
        </Tabs>
      </section>
    </>
  )
}

export default Operations