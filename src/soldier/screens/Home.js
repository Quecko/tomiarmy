import {React,useState,useEffect} from "react";
import taskCompleted from "../../assets/icons/task-completed.svg";
// import earned from "../../assets/icons/earned.svg";
import points from "../../assets/icons/points.svg";
import squadToken from "../../assets/icons/squadToken.svg";
import { Dropdown } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import MyRank from "../components/home/MyRank";
import GeneralTasks from "../components/home/GeneralTasks";
import HomeOperations from "../components/home/HomeOperations/HomeOperations";
import {API_URL} from "../../utils/ApiUrl"
import axios from "axios";


const Home = ({setShow2}) => {
  const datacommander = localStorage.getItem('user')
  const [squaddetail, setsquaddetail] = useState()
  const { account } = useWeb3React();
  const commander = JSON.parse(datacommander)
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

  useEffect(() => {
    GetUserProfiledata()
  }, [account]);
  return (
    <>
      <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Welcome BATMAN, </h6>
          <p>LET’S FIGHT FOR THE ARMY</p>
        </div>
        <button onClick={() => setShow2(true)} className="create-btn" >
          <img src="\assets\create-btn-icon.svg" alt="img" className="img-fluid me-2" />
          Create Squad
        </button>
      </div>
      <div className="home-wrapper">
        <div className="row">
          <div className="col-lg-8 stats-box data-box border-grad1">
            <div className="task-status-box-header">
              <h4>MY STATS</h4>
              <Dropdown className="stats-dropdown">
                <Dropdown.Toggle id="dropdown-basic">All Time <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Dropdown.Toggle>
                <Dropdown.Menu className="stats-dropdown-menu">
                  <div className="stats-dropdown-bg">
                    <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="border-bottom-0 item-active"
                    >
                      All Time
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="stats-data-boxes">
              <div className="inner-data-box border-grad">
                <div className="stats-item-box">
                  <img src="\static-icons\earned.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <p>TOMI Tokens Earned </p>
                    <h4>{squaddetail?.tomiTokens}</h4>
                  </div>
                </div>
              </div>
              <div className="inner-data-box border-grad">
                <div className="stats-item-box">
                  <img src="\static-icons\points.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <p>Points</p>
                    <h4>{squaddetail?.points}</h4>
                  </div>
                </div>
              </div>
              <div className="inner-data-box border-grad">
                <div className="stats-item-box">
                  <img src="\static-icons\squad-tokens.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <p>Total Squad Tokens </p>
                    <h4>500 TOMI</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 task-status pe-0">
            <div className="data-box border-grad1">
              <div className="task-status-box-header">
                <h4>My Tasks Status</h4>
                <Dropdown className="tasks-status-dropdown">
                  <Dropdown.Toggle id="dropdown-basic">All Time <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                    <div className="stats-dropdown-bg">
                      <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="border-bottom-0 item-active"
                      >
                        All Time
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="row m-0 tasks-box-row inner-data-box border-grad padd">
                <div className="col-6 task-completed-graph">
                  <img src="\static-icons\taskstatus.png" alt="taskCompleteds" style={{width: "140px", height: "140px"}} />
                </div>
                <div className="col-6">
                  <div className="tasks-list-items">
                    <div className="tasks-items">
                      <p>Total Tasks</p>
                      <h4>295</h4>
                    </div>
                    <div className="tasks-items">
                      <p>Completed Tasks</p>
                      <h4>265</h4>
                    </div>
                    <div className="tasks-items">
                      <p>Remaining Tasks</p>
                      <h4>30</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ranks-general-task-row">
          <div className="col-lg-5 my-ranks-box">
            <MyRank  props={squaddetail ? squaddetail : ''}/>
          </div>
          <div className="col-lg-7 general-task-box">
            <GeneralTasks />
          </div>
        </div>
      </div>
      <HomeOperations />
    </>
  );
};

export default Home;
