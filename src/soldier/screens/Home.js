import { React, useState, useEffect } from "react";
import taskCompleted from "../../assets/icons/task-completed.svg";
// import earned from "../../assets/icons/earned.svg";
import points from "../../assets/icons/points.svg";
import squadToken from "../../assets/icons/squadToken.svg";
import { Dropdown } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import MyRank from "../components/home/MyRank";
import GeneralTasks from "../components/home/GeneralTasks";
import HomeOperations from "../components/home/HomeOperations/HomeOperations";
import { API_URL } from "../../utils/ApiUrl"
import ReactApexChart from 'react-apexcharts';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Home = ({ setShow2, tasks, setShowtask, settaskdetail, setShowtask1, settaskdetail1, operations, setOperationId, users, squaddetail, statusData, setindexwait }) => {

  let total = (statusData?.ApprovedTasks / statusData?.totalTasks) * 100
  const state = {
    series: [total > 0 ? total.toFixed(2) : '0'],
    options: {
      chart: {
        height: 200,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 230,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#1A1C29',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              background: '#1A1C29',
              color: '#1A1C29',
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.5
            }
          },
          track: {
            background: '#FF8936',
            strokeWidth: '100%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 1
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#81828A',
              fontSize: '12px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#fff',
              fontSize: '24px',
              show: true,
            }
          }
        },
      },
      colors: ['#04C453'],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Completed'],
    },
  }
  const datacommander = localStorage.getItem('user')
  const data = JSON.parse(datacommander)
  // const user = localStorage.getItem('user')
  // const { account } = useWeb3React();
  // const commander = JSON.parse(datacommander)
  // const [DropDownAll, setDropDownAll] = useState('all time');
  // const [DropDownAll1, setDropDownAll1] = useState('all time');

  const [copy, setCopy] = useState(false);
  const textCopiedFun2 = () => {
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000)
  }
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
              {/* <Dropdown className="stats-dropdown">
                <Dropdown.Toggle id="dropdown-basic">{DropDownAll} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Dropdown.Toggle>
                <Dropdown.Menu className="stats-dropdown-menu">
                  <div className="stats-dropdown-bg">
                    <Dropdown.Item onClick={() => setDropDownAll('today')} 
                    className={DropDownAll==='today' ? "border-bottom-0 item-active " : " " }>Today</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll('week')} 
                    className={DropDownAll==='week' ? "border-bottom-0 item-active " : " " }>This Week</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll('month')}
                    className={DropDownAll==='month' ? "border-bottom-0 item-active " : " " }>This Month</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll('all time')} 
                    className={DropDownAll==='all time' ? "border-bottom-0 item-active " : " " }>
                      All Time
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
            <div className="stats-data-boxes sycvcsvyvcvsycvtcsv">
               {data?.isCommander === true &&
                <div className="inner-data-box border-grad">
                <div className="stats-item-box">
                  <img src="\assets\refercode.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <p>Squad Invite Code</p>
                    {copy ?
                      <h4 className="adadasdasdasdasdasdsad"> {squaddetail?.squad?.inviteCode} Copied! </h4>
                      :
                      <>
                        {squaddetail?.squad?.inviteCode &&
                          <CopyToClipboard text={squaddetail?.squad?.inviteCode} onCopy={textCopiedFun2}>
                            <h4 className="adadasdasdasdasdasdsad">
                              {squaddetail?.squad?.inviteCode}
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="">
                                <path d="M13 10.5V13.5C13 16 12 17 9.5 17H6.5C4 17 3 16 3 13.5V10.5C3 8 4 7 6.5 7H9.5C12 7 13 8 13 10.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 6.5V9.5C17 12 16 13 13.5 13H12.7143V10.7857C12.7143 8.28571 11.7143 7.28571 9.21429 7.28571H7V6.5C7 4 8 3 10.5 3H13.5C16 3 17 4 17 6.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </h4>
                          </CopyToClipboard>
                        }
                      </>
}
                  </div>
                </div>
              </div>}
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
                    <h4>{squaddetail?.squad?.totalTokens ? squaddetail?.squad?.totalTokens : '0'} TOMI</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 task-status pe-0">
            <div className="data-box border-grad1">
              <div className="task-status-box-header">
                <h4>My Tasks Status</h4>
                {/* <Dropdown className="tasks-status-dropdown">
                  <Dropdown.Toggle id="dropdown-basic">{DropDownAll1} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></Dropdown.Toggle>

                  <Dropdown.Menu className="stats-dropdown-menu">
                  <div className="stats-dropdown-bg">
                    <Dropdown.Item onClick={() => setDropDownAll1('today')} 
                    className={DropDownAll==='today' ? "border-bottom-0 item-active " : " " }>Today</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll1('week')} 
                    className={DropDownAll==='week' ? "border-bottom-0 item-active " : " " }>This Week</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll1('month')}
                    className={DropDownAll==='month' ? "border-bottom-0 item-active " : " " }>This Month</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropDownAll1('all time')} 
                    className={DropDownAll==='all time' ? "border-bottom-0 item-active " : " " }>
                      All Time
                    </Dropdown.Item>
                  </div>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
              <div className="row m-0 tasks-box-row inner-data-box border-grad padd">
                <div className="col-6 task-completed-graph padd-sm p-0">
                  <div id="chart" className="set-custom-chart-style border-grad">
                    <ReactApexChart options={state.options} series={state.series} type="radialBar" height={180} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="tasks-list-items">
                    <div className="tasks-items">
                      <p>Total Tasks</p>
                      <h4>{statusData?.totalTasks ? statusData?.totalTasks : '0'}</h4>
                    </div>
                    <div className="tasks-items">
                      <p>Completed Tasks</p>
                      <h4>{statusData?.ApprovedTasks ? statusData?.ApprovedTasks : '0'}</h4>
                    </div>
                    <div className="tasks-items">
                      <p>Remaining Tasks</p>
                      <h4>{statusData?.totalTasks > 0 ? statusData?.totalTasks - statusData?.ApprovedTasks : '0'}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ranks-general-task-row">
          <div className="col-lg-5 my-ranks-box">
            <MyRank props={squaddetail ? squaddetail : ''} />
          </div>
          <div className="col-lg-7 general-task-box">
            <GeneralTasks tasks={tasks} setShowtask={setShowtask} settaskdetail={settaskdetail} />
          </div>
        </div>
      </div>
      <HomeOperations setShowtask1={setShowtask1} settaskdetail1={settaskdetail1} operations={operations} setOperationId={setOperationId} users={users} setindexwait={setindexwait} />
    </>
  );
};

export default Home;
