import React from "react";
import "./generalhome.scss"
import { Dropdown, Table } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import dosts from "../../../assets/icons/dots.svg";
import submitIcon from "../../../assets/icons/submitIcon.svg";
import { Calendar } from "react-multi-date-picker"
import CreateOperation from "../GeneralOperation/CreateOperation";



const GeneralHome = ({ setShowtask, setroutehome, routeshome }) => {
    return (
        <>
        {!routeshome ? <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Welcome general, </h6>
                    <p>your army awaits your orders</p>
                </div>
                <div className="twice-btn">
                    <button onClick={() => { setroutehome(!routeshome); }} className="create-op-btn" >
                        <img src="\generalassets\icons\createoperation.svg" alt="img" className="img-fluid me-2" />
                        Create Operation
                    </button>
                    <button onClick={setShowtask} className="create-btn" >
                        <img src="\generalassets\icons\create-task.svg" alt="img" className="img-fluid me-2" />
                        Create Task
                    </button>
                </div>
            </div> :  <>
                        <button onClick={() => setroutehome(!routeshome)} className="btn-goback goback-btn-mbl-block d-none"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" /><span>Go Back</span></button>
                        <button className="savechange-btn savechange-btn-mbl disabled w-100 justify-content-center mb-4 mt-2 d-none" >
                            <img src="\generalassets\icons\save-change.svg" alt="img" className="img-fluid me-1" />
                            <span> Save Changes</span>
                        </button>
                    </>}
            
            {routeshome ? <CreateOperation /> :
                <>
                    <section className="general-home">
                        <div className="row">
                            <div className="col-xl-8 col-12 p-0">
                                <div className="tomystats">
                                    <div className="upper-heading">
                                        <h6>Tomi Army Stats</h6>
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
                                                <img src="\generalassets\icons\newrecruittoday.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                    <p>New Recruits Today</p>
                                                    <h4>432,012</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\totalsoldiers.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                    <p>Total Soldiers</p>
                                                    <h4>1,235,123</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\totalsquads.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                    <p>Total Squads</p>
                                                    <h4>112</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\taskscompleted.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                    <p>Tasks Completed</p>
                                                    <h4>295</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\tomirewarded.png" alt="earned" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                    <p>Tomi Rewarded</p>
                                                    <h4>112</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 task-status pe-0">
                                <div className="data-box border-grad1">
                                    <div className="task-status-box-header">
                                        <h4>Tasks Status</h4>
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
                                            <img src="\static-icons\taskstatus.png" alt="taskCompleteds" style={{ width: "140px", height: "140px" }} />
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
                        <div className="rank-armygrowth">
                            <div className="row">
                                <div className="col-xl-5 col-12 p-0 padd-sm">
                                    <div className='maincard-global border-grad1'>
                                        <div className="table-heading">
                                            <h6>Ranks</h6>
                                        </div>
                                        <div className="maintable">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <p className='headtable'>Rank</p>
                                                        </th>
                                                        <th>
                                                            <p className='headtable'>Total Soldiers</p>
                                                        </th>
                                                        <th>
                                                            <p className='headtable'>Action</p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\private-rank.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\sergeant.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Sergeant</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\lieutenant.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Lieutenant</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\captain.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Captain</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\generalassets\icons\major.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Major</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\generalassets\icons\colonel.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Colonel</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\generalassets\icons\majorgeneral.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>Major General</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>


                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\generalassets\icons\general.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>General</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>1,523,645</p>
                                                        </td>
                                                        <td>
                                                            <div className='dropbtn'>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#/action-1">
                                                                            <p><img src='\Vector.svg' alt='img' className='img-fluid' />recruit</p>
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
                                </div>
                                <div className="col-xl-7 col-12 pe-0 padd-sm">
                                    <div className="graph-section border-grad1">
                                        <div className="upper-heading">
                                            <h6>army growth</h6>
                                            <Dropdown className="calendar-drop stats-dropdwon-mobile">
                                                <Dropdown.Toggle id="dropdown-basic"><img src="\assets\calendar.svg" alt="img" className="img-fluid me-2" /><span>09/05/2023 - 10/05/2023</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg></Dropdown.Toggle>
                                                <Dropdown.Menu className="">
                                                    <Calendar
                                                        numberOfMonths={2}
                                                        disableMonthPicker
                                                        disableYearPicker
                                                    />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="inner-grap mt-5">
                                            <img src="\assets\dummy-graph-img.png" alt="img" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pending-recruit">
                            <div className="row">
                                <div className="col-xl-6 col-12 p-0 padd-sm">
                                    <div className='maincard-global border-grad1'>
                                        <div className="table-heading">
                                            <h6>top squads</h6>
                                        </div>
                                        <div className="maintable">
                                            <table class="table table-striped">
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
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\dc-squad.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>DC Squad</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>25</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\dc-squad.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>DC Squad</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>25</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\dc-squad.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>DC Squad</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>25</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\dc-squad.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>DC Squad</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>25</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\static-icons\dc-squad.png" alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                <p className='paratable'>DC Squad</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>25</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12 pe-0 padd-sm">
                                    <div className='maincard-global set-custom-padd-table border-grad1 set-custom-mbl-top-margin set-custom-height'>
                                        <div className="table-heading">
                                            <h6>top soldiers</h6>
                                        </div>
                                        <div className="maintable">
                                            <table class="table table-striped display-none-in-mobile">
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
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>Sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\assets\private-new.png" alt="img" className='img-fluid' />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>0x2F78....aB0C</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>@sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>Sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\assets\private-new.png" alt="img" className='img-fluid' />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>0x2F78....aB0C</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>@sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>Sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\assets\private-new.png" alt="img" className='img-fluid' />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>0x2F78....aB0C</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>@sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>Sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\assets\private-new.png" alt="img" className='img-fluid' />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>0x2F78....aB0C</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>@sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>Sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <div className="set-custom">
                                                                <img src="\assets\private-new.png" alt="img" className='img-fluid' />
                                                                <p className='paratable'>Private</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>0x2F78....aB0C</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>@sharjeel</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>500 TOMI</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                                                    <p>Private</p>
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
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pending-recruit">
                            <div className="row">
                                <div className="col-xl-6 col-12 p-0 padd-sm">
                                    <div className="data-box general-tasks-wrappergeneral border-grad1">
                                        <div className="d-flex justify-content-between align-item-center">
                                        <h4 className="heading-gen">pending Recruiting  Requests</h4>
                                            <a href="#" className="btn-view">View All <img src="\generalassets\icons\arrow-right.svg" alt="img" className="img-fluid" /></a>
                                        </div>
                                        <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Wallet Address</th>
                                                    <th>User Name</th>
                                                    <th>Tomi Tokens</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0x0F4D...B5D8</td>
                                                    <td>@sharjeel</td>
                                                    <td>1,000,000</td>
                                                    <td>
                                                        <div className="tbl-dropdown">
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                    <img src={dosts} alt="dosts" />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                                    <div className="stats-dropdown-bg">
                                                                        <Dropdown.Item>
                                                                            <img src={submitIcon} alt="submitIcon" />
                                                                            Submit Proof
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                                            <div className="heading-mobile">
                                                <p>Wallet Address</p>
                                            </div>
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>0x0F4D...B5D8</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="inner-fields">
                                                            <div className="inner-item">
                                                                <h6>User Name</h6>
                                                                <p>@sharjeel</p>
                                                            </div>
                                                            <div className="inner-item">
                                                                <h6>Tomi Tokens</h6>
                                                                <p>1,000,000</p>
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
                                <div className="col-xl-6 col-12 pe-0 padd-sm">
                                    <div className="data-box general-tasks-wrappergeneral border-grad1 set-custom-mbl-top-margin">
                                    <div className="d-flex justify-content-between align-item-center">
                                    <h4 className="heading-gen">pending proof of work approvals</h4>
                                            <a href="#" className="btn-view">View All <img src="\generalassets\icons\arrow-right.svg" alt="img" className="img-fluid" /></a>
                                        </div>
                                       
                                        <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                            <thead>
                                                <tr>
                                                    <th>User</th>
                                                    <th>Tasks</th>
                                                    <th>Status</th>
                                                    <th>Points</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>sharjeel</td>
                                                    <td>Like our facebook..</td>
                                                    <td>
                                                        <div className="completed">Completed</div>
                                                    </td>
                                                    <td>1,000,000</td>
                                                    <td>
                                                        <div className="tbl-dropdown">
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                    <img src={dosts} alt="dosts" />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                                    <div className="stats-dropdown-bg">
                                                                        <Dropdown.Item>
                                                                            <img src={submitIcon} alt="submitIcon" />
                                                                            Submit Proof
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>sharjeel</td>
                                                    <td>Like our facebook..</td>
                                                    <td>
                                                        <div className="pending">Pending</div>
                                                    </td>
                                                    <td>1,000,000</td>
                                                    <td>
                                                        <div className="tbl-dropdown">
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                    <img src={dosts} alt="dosts" />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                                    <div className="stats-dropdown-bg">
                                                                        <Dropdown.Item>
                                                                            <img src={submitIcon} alt="submitIcon" />
                                                                            Submit Proof
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>sharjeel</td>
                                                    <td>Like our facebook..</td>
                                                    <td>
                                                        <div className="completed">Completed</div>
                                                    </td>
                                                    <td>1,000,000</td>
                                                    <td>
                                                        <div className="tbl-dropdown">
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                    <img src={dosts} alt="dosts" />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                                    <div className="stats-dropdown-bg">
                                                                        <Dropdown.Item>
                                                                            <img src={submitIcon} alt="submitIcon" />
                                                                            Submit Proof
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>sharjeel</td>
                                                    <td>Like our facebook..</td>
                                                    <td>
                                                        <div className="completed">Completed</div>
                                                    </td>
                                                    <td>1,000,000</td>
                                                    <td>
                                                        <div className="tbl-dropdown">
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                    <img src={dosts} alt="dosts" />
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu className="stats-dropdown-menu">
                                                                    <div className="stats-dropdown-bg">
                                                                        <Dropdown.Item>
                                                                            <img src={submitIcon} alt="submitIcon" />
                                                                            Submit Proof
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                                            <div className="heading-mobile">
                                                <p>User</p>
                                            </div>
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>sharjeel</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="inner-fields">
                                                            <div className="inner-item">
                                                                <h6>Tasks</h6>
                                                                <p>Like our facebook..</p>
                                                            </div>
                                                            <div className="inner-item">
                                                                <h6>Points</h6>
                                                                <p>1,000,000</p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    );
};

export default GeneralHome;
