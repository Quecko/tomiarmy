import React, { useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { API_URL } from "../../utils/ApiUrl"
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';

const Squad = ({ show1, setShow1, show2, setShow2, setShow4, setShow5, setShow6, setCoLeaderDetail }) => {
  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  console.log('data',data?.isCommander);
  let tok = localStorage.getItem("accessToken");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { account } = useWeb3React()
  const [loader, setLoader] = useState()

  // const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  // const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);


  const [selecttab, setselecttab] = useState('Active Squad')
  const [profilePicture, setProfilePicture] = useState(null);
  const setProfilePic = (evt) => {
    setProfilePicture(evt.target.files[0]);
  }

  const SquadUsers = async (off, value) => {
    let valu = null;
    // if (off) {
    //     valu = off;
    // } else {
    //     valu = 1;
    // }
    let wall = localStorage.getItem("wallet");
    var config = {
      method: "get",
      url: `${API_URL}/auth/users/squad-members?offset=1&&limit=100&queryParam=${selecttab}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        // setCommander(response?.data?.data?.commanderWalletAddress)

        setUsers(response?.data?.data);
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        console.log(error);
        // setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.reload();
      });
  }

  useEffect(() => {
    if (selecttab === 'activesquad') {
      setUsers([])
      SquadUsers()
    }
    else if (selecttab === 'freesoldier') {
      setUsers([])
      SquadUsers()
    }
    else {
      setUsers([])
      SquadUsers()
    }
  }, [selecttab]);

  const selecttabs = (event) => {
    setselecttab(event)
  }


  const addCoLeader = (elem) => {
    setCoLeaderDetail(elem)
    setShow6(true)
  }

  const recruitJoin = async (elem) => {
    var config = {
      method: "post",
      url: `${API_URL}/tasks/recruite-invites`,
      headers: {
        authorization: `Bearer ` + tok
      },
      data: {
        userId: elem?._id
      },
    };
    axios(config)
      .then(function (response) {
        setLoader(false);
        toast.success('User Recruited Successfully', {
          position: "top-right",
          autoClose: 2000,
        });
        SquadUsers()
      })
      .catch(function (error) {
        console.log(error);
        setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.reload();
      });
  }

  const kickoutFromSquad = (item) => {
    // setShow2(true)
    let tok = localStorage.getItem("accessToken");
    // if (account) {
        // window.$("#exampleModalLabel11").modal("hide");
        var config = {
            method: "patch",
            url: `${API_URL}/auth/users/${item?._id}/kickout`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };

        axios(config)
            .then(async (response) => {
                toast.success("Remove From squad successfully")
                handleClose3();
                SquadUsers()
            })
            .catch(function (error) {
                // console.log(error);
                // window.location.reload()
                // window.$("#exampleModalLabel11").modal("hide");
                // setLoader(false);
                // window.$("#exampleModalLabel11").modal("hide");
                // if (error.response.data.statusCode == 409) {
                //     toast.error("Squad for User already exists")
                // }
                // setLoader(false);
            });
    // }

}


const deleteCoLeader = (item) => {
  // setShow2(true)
  let tok = localStorage.getItem("accessToken");
  // if (account) {
      // window.$("#exampleModalLabel11").modal("hide");
      var config = {
          method: "delete",
          url: `${API_URL}/tasks/squad-co-leaders/${item?._id}`,
          headers: {
              authorization: `Bearer ` + tok
          },
      };

      axios(config)
          .then(async (response) => {
              toast.success("Remove From co-leader successfully")
              handleClose3();
              SquadUsers()
          })
          .catch(function (error) {
              // console.log(error);
              // window.location.reload()
              // window.$("#exampleModalLabel11").modal("hide");
              // setLoader(false);
              // window.$("#exampleModalLabel11").modal("hide");
              // if (error.response.data.statusCode == 409) {
              //     toast.error("Squad for User already exists")
              // }
              // setLoader(false);
          });
  // }

}




  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Your Squad </h6>
          <p>VIEW Your Squad</p>
        </div>
        {data?.isCoLeader === false && data?.isCommander === true ?
          (
            <div className="twice-btn">
              {/* <button className="btn-leave" onClick={() => setShow4(true)}>
                <img src="\assets\leave-btn.svg" alt="img" className="img-fluid me-2" />
                Invite Squad Member
              </button> */}
              <button className="create-btn" onClick={() => setShow5(true)}>
                <img src="\assets\create-btn-icon.svg" alt="img" className="img-fluid me-2" />
                Add Co Leader
              </button>
            </div>
          )
          :
          (
            <div className="twice-btn">
              <button className="btn-leave" onClick={() => setShow1(true)} >
                <img src="\assets\leave-btn.svg" alt="img" className="img-fluid me-2" />
                Leave Squad
              </button>
              <button className="create-btn" onClick={() => setShow2(true)}>
                <img src="\assets\create-btn-icon.svg" alt="img" className="img-fluid me-2" />
                Create Squad
              </button>
            </div>
          )
        }

      </div>
      {data?.isCoLeader === true || data?.isCommander === true ?
        (
          <section className='main-task'>
            <div className='container-fluid padd-sm p-0'>
              <div className='row'>
                <div className='col-sm-12 padd-sm p-0'>
                  <div className='my-tabs'>
                    <Tabs
                      defaultActiveKey="Active Squad"
                      transition={false}
                      id="noanim-tab-example"
                      className="mb-3"
                      onSelect={selecttabs}
                    >
                      <Tab eventKey="Active Squad" title="Active Squad">
                        <div className='maincardsquad border-grad1'>
                          <div className='squadparent'>
                            <div className='innercard1 border-grad'>
                              <div className='parent' onClick={handleShow}>
                                <div className='left'>
                                  <img src={users?.squadData?.data?.symbol} alt='img' className='img-fluid jwebferwjgfnerw' />
                                </div>
                                <div className='right'>
                                  <p>My Squad</p>
                                  <h6>{users?.squadData?.data?.name}</h6>
                                </div>
                              </div>
                            </div>
                            <div className='innercard2 border-grad'>
                              <div className='parent'>
                                <div className='left'>
                                  <img src="\static-icons\squadowner.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className='right'>
                                  <p>Squad Owner</p>
                                  <h6>{users?.commander?.nickName}</h6>
                                </div>
                              </div>
                            </div>
                            <div className='innercard2 border-grad'>
                              <div className='parent'>
                                <div className='left'>
                                  <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className='right'>
                                  <p>Total Squad Token</p>
                                  <h6>{users?.squadData?.data?.totalTokens ? users?.squadData?.data?.totalTokens : '0'} Tomi</h6>
                                </div>
                              </div>
                            </div>
                            <div className='innercard2 border-grad'>
                              <div className='parent'>
                                <div className='left'>
                                  <img src="\static-icons\squad-members.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className='right'>
                                  <p>Total Squad Members</p>
                                  <h6>{users?.squadData?.data?.membersCount ? users?.squadData?.data?.membersCount : '0'}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='maincard'>
                          <div className='display-none-in-mobile'>
                            <div className="maintable">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>
                                      <p className='headtable'>Nick Name</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Rank</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Wallet Address</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>TOMI Balance</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Total Points</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Action</p>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users?.users?.map((elem, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>
                                          <p className='paratable'>{elem?.nickName ? elem?.nickName : "------"}</p>
                                        </td>
                                        <td>
                                          <div className="set-custom">
                                            <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                            <p className='paratable'>{elem?.rank?.name}</p>
                                          </div>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.tomiTokens} TOMI</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>+{elem?.points} POINTS</p>
                                        </td>
                                        <td>
                                          {data?.isCommander!==true ? 
                                          '' : 
                                          data?.memberOfSquad==true ?
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => addCoLeader(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Promote to Co leader</p>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => kickoutFromSquad(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Dismiss</p>
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                         :'' } 
                                        </td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                              </table>
                            </div>
                            {/* <div className="pagi">
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
                            </div> */}
                          </div>
                          <div className="mobile-responsive-table d-none display-block-in-mobile">
                            <div className="heading-mobile">
                              <p>Task</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                              {users?.users?.map((elem, index) => {
                                return (
                                  <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{elem?.nickName ? elem?.nickName : "------"}</Accordion.Header>
                                    <Accordion.Body>
                                      <div className="inner-fields">
                                        <div className="inner-item">
                                          <h6>Rank</h6>
                                          <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                          <p className='paratable'>{elem?.rank?.name}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Wallet Address</h6>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>TOMI Balance</h6>
                                          <p>{elem?.tomiTokens}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Total Points</h6>
                                          <p>{elem?.points}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Actions</h6>
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => addCoLeader(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Promote to Co leader</p>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={handleShow3}><img src='\Vector.svg' alt='img' className='img-fluid' />Dismiss</p>
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )
                              })}
                            </Accordion>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Free Soldiers" title="Free Soldier">
                        <div className='maincard'>
                          <div className='display-none-in-mobile'>
                            <div className="maintable">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>
                                      <p className='headtable'>Nick Name</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Rank</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Wallet Address</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>TOMI Balance</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Total Points</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Action</p>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users?.users?.map((elem, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>
                                          <p className='paratable'>{elem?.nickName ? elem?.nickName : "------"}</p>
                                        </td>
                                        <td>
                                          <div className="set-custom">
                                            <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                            <p className='paratable'>{elem?.rank?.name}</p>
                                          </div>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.tomiTokens} TOMI</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>+{elem?.points} POINTS</p>
                                        </td>
                                        <td>
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => recruitJoin(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
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
                            {/* <div className="pagi">
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
                            </div> */}
                          </div>
                          <div className="mobile-responsive-table d-none display-block-in-mobile">
                            <div className="heading-mobile">
                              <p>Task</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                              {users?.users?.map((elem, index) => {
                                return (
                                  <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{elem?.nickName ? elem?.nickName : "------"}</Accordion.Header>
                                    <Accordion.Body>
                                      <div className="inner-fields">
                                        <div className="inner-item">
                                          <h6>Rank</h6>
                                          <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                          <p className='paratable'>{elem?.rank?.name}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Wallet Address</h6>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>TOMI Balance</h6>
                                          <p>{elem?.tomiTokens}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Total Points</h6>
                                          <p>{elem?.points}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Actions</h6>
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => addCoLeader(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Promote to Co leader</p>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={handleShow3}><img src='\Vector.svg' alt='img' className='img-fluid' />Dismiss</p>
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )
                              })}
                            </Accordion>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Co Leaders" title="Co leaders">
                        <div className='maincard'>
                          <div className='display-none-in-mobile'>
                            <div className="maintable">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                  <th>
                                      <p className='headtable'>Nick Name</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Rank</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Wallet Address</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>TOMI Balance</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Total Points</p>
                                    </th>
                                    <th>
                                      <p className='headtable'>Action</p>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users?.users?.map((elem, index) => {
                                    // console("console", elem)
                                    return (
                                      <tr>
                                        <td>
                                          <p className='paratable'>{elem?.nickName ? elem?.nickName : "------"}</p>
                                        </td>
                                        <td>
                                          <div className="set-custom">
                                            <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                            <p className='paratable'>{elem?.rank?.name}</p>
                                          </div>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>{elem?.tomiTokens} TOMI</p>
                                        </td>
                                        <td>
                                          <p className='paratable'>+{elem?.points} POINTS</p>
                                        </td>
                                        <td>
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                              </Dropdown.Toggle>

                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={()=>deleteCoLeader(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
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
                            {/* <div className="pagi">
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
                            </div> */}
                          </div>
                          <div className="mobile-responsive-table d-none display-block-in-mobile">
                            <div className="heading-mobile">
                              <p>Task</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                            {users?.users?.map((elem, index) => {
                                return (
                                  <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{elem?.nickName ? elem?.nickName : "------"}</Accordion.Header>
                                    <Accordion.Body>
                                      <div className="inner-fields">
                                        <div className="inner-item">
                                          <h6>Rank</h6>
                                          <img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                          <p className='paratable'>{elem?.rank?.name}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Wallet Address</h6>
                                          <p className='paratable'>{elem?.walletAddress}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>TOMI Balance</h6>
                                          <p>{elem?.tomiTokens}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Total Points</h6>
                                          <p>{elem?.points}</p>
                                        </div>
                                        <div className="inner-item">
                                          <h6>Actions</h6>
                                          <div className='dropbtn'>
                                            <Dropdown>
                                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={() => addCoLeader(elem)}><img src='\Vector.svg' alt='img' className='img-fluid' />Promote to Co leader</p>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">
                                                  <p onClick={handleShow3}><img src='\Vector.svg' alt='img' className='img-fluid' />Dismiss</p>
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )
                              })}
                            </Accordion>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            <Modal className='detailmodal' show={show} onHide={handleClose} centered>
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
                  <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                  <button onClick={() => {
                    handleShow1();
                    handleClose();
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
                </div>
                <div className='endbtn'>
                  <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                  <button onClick={() => {
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
          </section>
        )
        :
        (
          <section className='main-squad'>
            <div className='container-fluid padd-sm p-0'>
              <div className='row'>
                <div className='col-sm-12 padd-sm p-0'>
                  <div className='maincardsquad border-grad1'>
                    <div className='squadparent'>
                      <div className='innercard1 border-grad'>
                        <div className='parent' onClick={handleShow}>
                          <div className='left'>
                            <img src={users?.squadData?.data?.symbol} alt='img' className='img-fluid jwebferwjgfnerw' />
                          </div>
                          <div className='right'>
                            <p>My Squad</p>
                            <h6>{users?.squadData?.data?.name}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='innercard2 border-grad'>
                        <div className='parent'>
                          <div className='left'>
                            <img src="\static-icons\squadowner.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                          </div>
                          <div className='right'>
                            <p>Squad Owner</p>
                            <h6>{users?.commander?.nickName}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='innercard2 border-grad'>
                        <div className='parent'>
                          <div className='left'>
                            <img src="\static-icons\tomi-icon.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                          </div>
                          <div className='right'>
                            <p>Total Squad Tokens</p>
                            <h6>{users?.squadData?.data?.totalTokens ? users?.squadData?.data?.totalTokens : '0'}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='innercard2 border-grad'>
                        <div className='parent'>
                          <div className='left'>
                            <img src="\static-icons\squad-members.png" alt="img" className='img-fluid' style={{ width: "50px", height: "50px" }} />
                          </div>
                          <div className='right'>
                            <p>Total Squad Members</p>
                            <h6>{users?.squadData?.data?.membersCount ? users?.squadData?.data?.membersCount : '0'}</h6>
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
                              {/* <th>
                                <p className='headtable'>Username</p>
                              </th> */}
                              <th>
                                <p className='headtable lefts'>TOMI Balance</p>
                              </th>
                            </tr>
                          </thead>
                          {/* sufyan */}
                          <tbody>
                            {users?.users?.map((elem, index) => {
                              const walletAddressLength = elem?.walletAddress?.length;
                              return (
                                <tr>
                                  <td>
                                    <p className='paratable'>{elem?.nickName ? elem?.nickName : "------"}</p>
                                  </td>
                                  <td>
                                    <p className='paratable'><img style={{ width: '40px', height: '40px' }} src={elem?.rank?.icon} alt='img' className='img-fluid' /> {elem?.rank?.name}</p>
                                  </td>
                                  <td>
                                    <p className='paratable'>
                                      {`${elem?.walletAddress.slice(0, 8)}...${elem?.walletAddress.slice(
                                        walletAddressLength - 8
                                      )}`}
                                    </p>
                                  </td>
                                  {/* <td>
                                    <p className='paratable'>@sharjeel</p>
                                  </td> */}
                                  <td>
                                    <p className='paratable lefts'>{elem?.tomiTokens} TOMI</p>
                                  </td>
                                </tr>
                              )
                            })}
                            {/* <tr>
                              <td>
                                <p className='paratable'>Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'><img src='\static-icons\sergeant.png' alt='img' className='img-fluid' style={{ width: "50px", height: "50px" }} /> Sergeant</p>
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
                                <p className='paratable'><img src='\static-icons\lieutenant.png' alt='img' className='img-fluid' style={{ width: "50px", height: "50px" }} />Lieutenant</p>
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
                                <p className='paratable'><img src='\static-icons\captain.png' alt='img' className='img-fluid' style={{ width: "50px", height: "50px" }} />Captain</p>
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
                            </tr> */}
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

        )
      }

      <Modal className='detailmodal' show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title>dismiss user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='imagesmodal'>
            <img src='\assets\recruitingadd.svg' alt='img' className='img-fluid' />
            <p>Are you sure you want to recruit this user?</p>
            {/* <p>Are you sure you want to leave this squad?</p> */}
          </div>
          <div className='endbtn'>
            <button className='btn-blackk'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button className='btn-pinkk'><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
          </div>
        </Modal.Body>
      </Modal>
      {/* <button onClick={handleShow4}>search member</button>
                <button onClick={handleShow5}>invite member</button> */}

    </>
  )
}

export default Squad