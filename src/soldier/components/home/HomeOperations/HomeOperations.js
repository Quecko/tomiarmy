import { React, useState, useEffect } from "react";
import "./homeoperations.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import TopSquad from './TopSquad';
import Accordion from 'react-bootstrap/Accordion';
import { API_URL } from "../../../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useWeb3React } from "@web3-react/core";
import Countdown from "react-countdown";
import Loader from "../../../../hooks/loader";


const HomeOperations = ({ setShowtask1, settaskdetail1, operations, setOperationId, users, setindexwait,setShowTopSquadModal }) => {

  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  let tok = localStorage.getItem("accessToken");
  const [topSquad, setTopSquad] = useState([]);
  const handleShow = () => setShowTopSquadModal(true);
  const [loader, setLoader] = useState(false)
  const { account } = useWeb3React()
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState([]);
  const [rend, setRend] = useState(false);
  const [limit, setLimit] = useState(1)
  const [search, setSearch] = useState('');

  const GetUserTopSquad = async (off) => {
    let valu = null;
    if (off) {
      valu = off;
    } else {
      valu = 1;
    }
    // if (account) {
      var config = ''
      if (search !== '') {
          config = {
              method: "get",
              url: `${API_URL}/tasks/squads?offset=${valu}&&limit=5&&name=${search}`,
              headers: {
                  authorization: `Bearer ` + tok
              },
          };
      }

      else {
          config = {
              method: "get",
              url: `${API_URL}/tasks/squads?offset=${valu}&&limit=5`,
              headers: {
                  authorization: `Bearer ` + tok
              },
          };
      }

      axios(config)
        .then(function (response) {
          setLoader(false);
          setCount(response.data.data.count)
          setTopSquad(response.data.data.squad)
          let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
          setPages(arr);
          setCurrentPage(valu)
          // setSearch('')
          if (off <= response.data.data.squad.length) {
            if ((off - 1) == 0) {
              setLimit(1)
            }
            else {
              setLimit((off - 1) * 5)
            }
          }
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
    // }
  }

  const getPrevData = (off) => {
    let offset = parseInt(off) - 1;
    if (offset > 0) {
      setLoader(true);
      var config = null;
      config = {
        method: "get",
        url: `${API_URL}/tasks/squads?offset=${offset}&&limit=5`,
        headers: {
          Authorization: "Bearer " + tok,
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then(function (response) {
          let arr = Array.from(
            Array(parseInt(response.data.data.pages)).keys()
          );
          setPages(arr);
          setTopSquad(response.data.data.squad)
          if (currentPage - 1 >= 0) {
            setCurrentPage(currentPage - 1);

          }
          if (off >= 0) {
            if ((offset - 1) == 0) {
              setLimit(1)
            }
            else {
              setLimit((offset - 1) * 5)
            }
          }
          // else{
          //   setLimit(off)
          // }
          setRend(!rend);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoader(false);
    }
  };

  const getNextData = (off) => {
    let offset = parseInt(off) + 1;
    if (pages.length > off) {
      if (off < topSquad.length) {
        var config = null;
        config = {
          method: "get",
          url: `${API_URL}/tasks/squads?offset=${offset}&&limit=5`,
          headers: {
            Authorization: "Bearer " + tok,
            "Content-Type": "application/json",
          },
        };

        axios(config)
          .then(function (response) {
            console.log(response.data.data);
            let arr = Array.from(
              Array(parseInt(response.data.data.pages)).keys()
            );
            setPages(arr);
            setTopSquad(response.data.data.squad)
            if (off <= topSquad.length) {
              setCurrentPage(offset);
              setLimit(off * 5)
            }
            setRend(!rend);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const getSearchData = async (off) => {
    let valu = null;
    if (off) {
      valu = off;
    } else {
      valu = 1;
    }
    // if (account && jcommander === true) {
    var config = {
      method: "get",
      url: `${API_URL}/tasks/squads?offset=${valu}&&limit=10&&name=${search}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(false);
        setCount(response.data.data.count)
        setTopSquad(response?.data?.data?.squad);
        let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        setPages(arr);
        setCurrentPage(valu)
      })
      .catch(function (error) {
        console.log(error);
        setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }

  useEffect(() => {
    GetUserTopSquad()
  }, []);

  const GetTime = (time) => {
    let endtime = new Date(time)
    return endtime;
  }

  const SubmitProofOfWork = (elem) => {
    setOperationId(operations)
    setShowtask1(true)
    settaskdetail1(elem)
  }


  const hitfunctionss = (asd) => {
    setindexwait(asd)
    localStorage.setItem("indexvalue", asd);
    window.scrollTo(0, 0)
  }

  return (
    <>
    {loader&& <Loader/>}
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
          {operations?.tasksList?.length > 0 ?
            (
              <>
                <div className="upper-item">
                  <div className='left'>
                    <h6>operation :  {operations?.name} <span>ENDS IN:<Countdown date={GetTime(operations?.expirationDate)} /></span></h6>
                    <p>{operations?.description}</p>
                  </div>
                  <a onClick={() => { hitfunctionss(2); }}>View <span style={{marginLeft:'5px'}}> All Operation Tasks</span> <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
                </div>
                <div className="bottom-cards">
                  <div className="card-item border-grad">
                    <img src="\static-icons\points.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                    <div className="inner-content">
                      <p>Points</p>
                      <h6>{operations?.reward}</h6>
                    </div>
                  </div>
                  <div className="card-item border-grad">
                    <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                    <div className="inner-content">
                      <p>TOMI Tokens</p>
                      <h6>{operations?.tomiToken}</h6>
                    </div>
                  </div>
                  <div className="card-item border-grad">
                    <img src="\static-icons\tomitasks.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                    <div className="inner-content">
                      <p>Total Tasks</p>
                      <h6>{operations?.tasksList?.length}</h6>
                    </div>
                  </div>
                  <div className="card-item border-grad unique-item">
                    <div className='inner-set'>
                      <img src="\static-icons\rewardnft.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                      <div className="inner-content">
                        <p>Reward NFT</p>
                        {/* <h6>ELN MSK</h6> */}
                      </div>
                    </div>
                    <div className="nft-img">
                      <img src={operations?.imageUrl} alt="img" className='img-fluid' />
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
                            <p className='headtable'>Description</p>
                          </th>
                          {/* <th>
                      <p className='headtable'>Points</p>
                    </th> */}
                          {/* <th>
                      <p className='headtable'>TOMI Tokens</p>
                    </th> */}
                          {/* <th>
                            <p className='headtable'>Progress</p>
                          </th> */}
                          <th>
                            <p className='headtable'>Status</p>
                          </th>
                          <th>
                            <p className='headtable'>Action</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
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
                  </tr>  */}

                        {operations?.tasksList?.map((elem, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <p className='paratable'>{elem?.name}</p>
                              </td>
                              <td>
                                <p className='paratable'>{elem?.description}</p>
                              </td>
                              {/* <td>
                                <div className="twice">
                                  <img src="\assets\greenline.svg" alt="img" className='img-fluid' />
                                  <p className='paratable'>100 of 100</p>
                                </div>
                              </td> */}
                              <td>
                                <div className='completebtn'>
                                  {
                                    elem?._id && !elem?.isApproved ?
                                      <button style={{ background: '#FEC600' }}>In Process</button>
                                      : elem?.isApproved === true && elem?._id ?
                                        <button style={{ background: '#04C453' }}>Completed</button>
                                        :
                                        <button style={{ background: '#FF8936' }}>Pending</button>
                                  }
                                </div>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown className="text-end">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={() => SubmitProofOfWork(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mobile-responsive-table d-none display-block-in-mobile">
                  <div className="heading-mobile">
                    <p>Task</p>
                  </div>
                  <Accordion defaultActiveKey="">
                    {operations?.tasksList?.map((elem, index) => {
                      return (
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>{elem?.name}</Accordion.Header>
                          <Accordion.Body>
                            <div className="inner-fields">
                              <div className="inner-item">
                                <h6>Description</h6>
                                <p>{elem?.description}</p>
                              </div>
                              {/* <div className="inner-item">
                                <h6>Progress</h6>
                                <p><img src="\assets\greenline.svg" alt="img" className='img-fluid me-2' />100 of 100</p>
                              </div> */}
                              <div className="inner-item">
                                <h6>Status</h6>
                                {
                                  elem?._id && !elem?.isApproved ?
                                    <button className="btn-green">In Process</button>
                                    : elem?.isApproved === true && elem?._id ?
                                      <button className="btn-green">Completed</button>
                                      :
                                      <button className="btn-green">Pending</button>
                                }
                              </div>
                              <div className="inner-item">
                                <h6>Actions</h6>
                                <div className='dropbtn'>
                                  <Dropdown className="text-end">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p onClick={() => SubmitProofOfWork(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                                {/* <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a> */}
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      )
                    })}
                  </Accordion>
                </div>
              </>
            )
            :
            (
              <div className="ifoperationnotexist">
                <img src="\assets\jahaz.svg" alt="img" className="img-fluid" />
                <h2>Operation is currently not live</h2>
                <p>Check back later to perform tasks In Operation</p>
              </div>
            )
          }

        </section>
      </div>
      {data?.isCommander === false && data?.memberOfSquad === false
        ?
        <TopSquad topSquad={topSquad} GetUserTopSquad={GetUserTopSquad} getPrevData={getPrevData} getNextData={getNextData} pages={pages} currentPage={currentPage} count={count} limit={limit} search={search} setSearch={setSearch} getSearchData={getSearchData} />
        :
        <>
          <section className="home-operations border-grad1">
            <div className='maincard display-none-in-mobile'>
              <div className="upper-head">
                <h6>Your Squad</h6>
                <a onClick={() => { hitfunctionss(3); }}>View All <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
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
                      {/* <th>
                        <p className='headtable'>Username</p>
                      </th> */}
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
                            {/* <td>
                              <p className='paratable'>-</p>
                            </td> */}
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
              <Accordion>
                {users?.map((elem, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>{elem?.nickName}</Accordion.Header>
                      <Accordion.Body>
                        <div className="inner-fields">
                          <div className="inner-item">
                            <h6>Rank</h6>
                            <p><img src={elem?.rank?.icon} style={{ width: "22px", height: "22px" }} alt="img" className='img-fluid me-2' />{elem?.rank?.name}</p>
                          </div>
                          <div className="inner-item">
                            <h6>Wallet Address</h6>
                            <p>{elem?.walletAddress}</p>
                          </div>
                          <div className="inner-item">
                            <h6>TOMI Balance</h6>
                            <p>{elem?.tomiTokens} TOMI</p>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
            </div>
          </section>
        </>
      }
    </>
  )
}

export default HomeOperations
