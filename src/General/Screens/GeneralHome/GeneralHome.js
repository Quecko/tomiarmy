import React, { useState, useEffect } from "react";
import "./generalhome.scss"
import { Dropdown, Table } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import dosts from "../../../assets/icons/dots.svg";
import submitIcon from "../../../assets/icons/submitIcon.svg";
import { Calendar } from "react-multi-date-picker"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateOperation from "../GeneralOperation/CreateOperation";
import DateRangePicker from 'rsuite/DateRangePicker';
import { Modal } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from 'axios';
import Web3 from 'web3';
import ArmyGrowthGraph from "./ArmyGrowthGraph";
import moment from "moment";


const GeneralHome = ({ setShowtask, setroutehome, routeshome }) => {

    const [showmajor, setShowmajor] = useState(false);
    const handleClosemajor = () => setShowmajor(false);
    const handleShowmajor = () => setShowmajor(true);
    let tok = localStorage.getItem("accessToken");
    const [rend, setRend] = useState(false);
    const [rendss, setRendss] = useState('totalsol');
    const [army, setArmy] = useState([]);
    const [tasks, settasks] = useState([]);
    const [taskss, settaskss] = useState([]);
    const [tasksss, settasksss] = useState(null);
    const [topsoli, settopsoli] = useState([]);
    const [Users, setUsers] = useState([]);
    const [data2, setData2] = useState([]);
    const [Armydataa, setArmydataa] = useState(null);
    const [DropDownAll, setDropDownAll] = useState('All Time');
    let user1 = localStorage.getItem("user");
    user1 = JSON.parse(user1);
    const { account } = useWeb3React();

    const [value, setValue] = useState([])
    const [minted, setMinted] = useState([])
    const [datee, setDatee] = useState([])
    const [format, setFormat] = useState('')

    const [datamajoradd, setdatamajoradd] = useState({
        name: '',
        walletaddres: ''
    })

    const handleChangemajoradd = (event) => {
        datamajoradd[event.target.name] = event.target.value;
        setdatamajoradd({ ...datamajoradd });
    }

    const ClearAllMajordata = () => {
        setdatamajoradd({
            name: '',
            walletaddres: ''
        })
        setRend(!rend)
    }


    const settabss = (event) => {
        if (event === 'totalsol') {
            setDatee([])
            setMinted([])
            setRendss("totalsol")
        }
        else if (event === 'totaltask') {
            setDatee([])
            setMinted([])
            setRendss("totaltask")
        }
    }

    const GetArmy = () => {
        let tok = localStorage.getItem("accessToken");
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
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
    }

    const AddMajorButton = async () => {
        var result = Web3.utils.isAddress(datamajoradd.walletaddres);
        let tok = localStorage.getItem("accessToken");
        var data = ({
            nickName: datamajoradd.name,
            walletAddress: datamajoradd.walletaddres,
        });
        if (datamajoradd.name === '') {
            toast.error('Please write major name', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        else if (datamajoradd.walletaddres === '') {
            toast.error('Please write major walletaddress', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        else if (result === false) {
            toast.error('Enter valid wallet address', {
                position: "top-right",
                autoClose: 2000,
            });
        }
        else {
            var config = {
                method: "post",
                url: `${API_URL}/auth/users/major-general`,
                headers: {
                    authorization: `Bearer ` + tok
                },
                data: data,
            };
            axios(config)
                .then(function (response) {
                    handleClosemajor();
                    // setLoader(false);
                    toast.success('Major Added Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    // window.$('#majorgeneraladd').modal('hide')
                    // setCall(!call);
                    ClearAllMajordata();
                    GetArmy();
                    // getDataTaskss();
                    // ClearAll();
                })
                .catch(function (error) {
                    // setLoader(false);
                    if (error.response.data.statusCode == 403) {
                        toast.error('Forbidden. Only general can add major general', {
                            position: 'top-right',
                            autoClose: 5000,
                        });
                    } else if (error.response.data.statusCode == 500) {
                        toast.error('Something went wrong', {
                            position: 'top-right',
                            autoClose: 5000,
                        });
                    }
                    else if (error.response.data.statusCode == 400) {
                        toast.error('Validation Failed', {
                            position: 'top-right',
                            autoClose: 5000,
                        });
                    }
                    else if (error.response.data.statusCode == 401) {
                        toast.error('Jwt expired/invalid', {
                            position: 'top-right',
                            autoClose: 5000,
                        });
                    }
                    else if (error.response.data.statusCode == 409) {
                        toast.error('User with this walletAddress already exist', {
                            position: 'top-right',
                            autoClose: 5000,
                        });
                    }
                    // else {
                    //     localStorage.removeItem("accessToken");
                    //     localStorage.removeItem("user");
                    // }
                    // window.location.reload();
                });
        }
    }
    const GetArmydata = () => {
        let tok = localStorage.getItem("accessToken");
        var config = {
            method: "get",
            url: `${API_URL}/tasks/stats/squads?queryBy=${DropDownAll}`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                setArmydataa(response?.data?.data);
            })
            .catch(function (error) {
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
    }
    const topsolider = () => {
        let tok = localStorage.getItem("accessToken");
        var config = {
            method: "get",
            url: `${API_URL}/auth/users/all-users?offset=1&&limit=5&&topSoldier=true`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                settopsoli(response?.data?.data?.users);
            })
            .catch(function (error) {
                // setLoader(false);
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("user");
                // window.location.assign("/")
                // window.location.reload();
            });
    }

    const SquadUsers = async (off) => {
        let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let wall = localStorage.getItem("wallet");
        var config = {
            method: "get",
            url: `${API_URL}/tasks/squads?offset=1&&limit=5`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                // setLoader(false);
                // setCommander(response?.data?.data?.commanderWalletAddress)
                // console.log("data11", response)
                setUsers(response?.data?.data?.squad);
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

    const GeneralApproval = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        let wall = localStorage.getItem("wallet");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/tasks/pending-ranks-update?offset=1&&limit=5`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    // console.log("response for awaiting approval", response)
                    // setLoader(false);
                    // setCount2(response.data.data.count)
                    setData2(response?.data?.data?.pendingRanksUpdate);
                    // console.log("opopopop", response.data.data.pages)
                    // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
                    // // console.log("opopopop", arr)
                    // setPages2(arr);
                    // setCurrentPage2(valu)
                })
                .catch(function (error) {
                    // setLoader(false);
                    // localStorage.removeItem("accessToken");
                    // localStorage.removeItem("user");
                    // window.location.assign("/")
                    // window.location.reload();
                });
        }
    }

    const getData = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        let wall = localStorage.getItem("wallet");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/tasks/work-proofs?offset=1&&limit=10`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    // setLoader(false);
                    // setCount(response.data.data.count)
                    settasks(response?.data?.data?.workProof);
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
    }

    const graphchat = async (off) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        let wall = localStorage.getItem("wallet");
        if (account) {
            var config = {
                method: "get",
                url: `${API_URL}/tasks/work-proofs?offset=1&&limit=10`,
                headers: {
                    authorization: `Bearer ` + tok
                },
            };
            axios(config)
                .then(function (response) {
                    // setLoader(false);
                    // setCount(response.data.data.count)
                    settasks(response?.data?.data?.workProof);
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
    }

    useEffect(() => {
        GetArmy();
        topsolider();
        SquadUsers();
        getData();
        GeneralApproval();
        // graphchat();
    }, []);

    useEffect(() => {
        GetArmydata();
    }, [DropDownAll]);


    const aToken = localStorage.getItem("accessToken");
    const getMintedDomains = () => {
        let date = null;
        let date1 = null;
        if (value[0]) {
            date = moment(value[0]).utc().format('Y-MM-DDT00:00:00')
            date1 = moment(value[1]).utc().format('Y-MM-DDT23:59:59')
        }
        else {
            var date12 = new Date();
            // var datesnd = (date12.getDate() - 7)
            var dateOffset = (24 * 60 * 60 * 1000) * 7; //7 days
            var myDate = new Date();
            myDate.setTime(myDate.getTime() - dateOffset);
            // console.log("dsdssdfsdfsdf",myDate,date12)
            //     let a = new Date(datesnd)
            date = moment(myDate).utc().format('Y-MM-DDT00:00:00')
            date1 = moment(date12).utc().format('Y-MM-DDT23:59:59')
            // console.log("dateeeee",date12,datesnd, a)

        }
        // console.log("dateeeee",date,date1)

        axios.get(`${API_URL}/tasks/stats/army-growth?startDate=${date}&endDate=${date1}`, { headers: { "Authorization": `Bearer ${aToken}` } })
            .then((response) => {
                setDatee([])
                setMinted([])
                console.log("asdfsfssd", response)
                let dumArry = [];
                if (rendss === 'totalsol') {
                    var data = response?.data?.data?.totalSoldiers?.data;
                }
                else {
                    var data = response?.data?.data?.tasksCompleted?.data;
                }
                // console.log("sdfdsfsdfdsfs",data)
                let data1 = [];
                data.map((val, i) => {
                    const sta1 = moment(val.createdAt).format("DD/MM/YYYY")
                    const sta2 = val?._id?.hour
                    console.log("resss1", val)
                    if (dumArry !== sta1 && val?._id?.day) {
                        console.log("sta1", sta1)
                        setFormat('day')
                        dumArry.push(sta1)
                    } else if (val?._id?.hour) {
                        setFormat('hour')
                        dumArry.push(sta2)
                    }
                    data1.push(val.count)
                })
                setDatee(dumArry)
                setMinted(data1)
                console.log("asdasdas", data1)
            })
            .catch((err) => {
                // setOpen1(false)
                // toast.error(err.response?.data.msg, {
                //     position: "top-center",
                //     autoClose: 2000,
                // });
            })
    }

    console.log("sdfsdfsdfdsfdsf", datee)

    useEffect(() => {
        if (value != null) {
            getMintedDomains()
        }
    }, [value, rendss])

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
            </div> : <>
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
                            <div className="col-xl-12 col-12 p-0">
                                <div className="tomystats">
                                    <div className="upper-heading">
                                        <h6>Tomi Army Stats</h6>
                                        <Dropdown className="stats-dropdown">
                                            <Dropdown.Toggle id="dropdown-basic">{DropDownAll} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#81828A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg></Dropdown.Toggle>
                                            <Dropdown.Menu className="stats-dropdown-menu">
                                                <div className="stats-dropdown-bg">
                                                    <Dropdown.Item onClick={() => setDropDownAll('today')}>Today</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setDropDownAll('week')}>This Week</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setDropDownAll('month')}>This Month</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setDropDownAll('all time')}>All Time</Dropdown.Item>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="stats-data-boxes">
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\newrecruittoday.png" alt="earned" style={{ width: "70px", height: "70px" }} />
                                                <div>
                                                    <p>New Recruits Today</p>
                                                    <h4>{Armydataa?.todayUsers}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\totalsoldiers.png" alt="earned" style={{ width: "70px", height: "70px" }} />
                                                <div>
                                                    <p>Total Soldiers</p>
                                                    <h4>{Armydataa?.totalUsers}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\totalsquads.png" alt="earned" style={{ width: "70px", height: "70px" }} />
                                                <div>
                                                    <p>Total Squads</p>
                                                    <h4>{Armydataa?.totalSquads}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\taskscompleted.png" alt="earned" style={{ width: "70px", height: "70px" }} />
                                                <div>
                                                    <p>Tasks Completed</p>
                                                    <h4>{Armydataa?.todayTasks}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-data-box border-grad">
                                            <div className="stats-item-box">
                                                <img src="\generalassets\icons\tomirewarded.png" alt="earned" style={{ width: "70px", height: "70px" }} />
                                                <div>
                                                    <p>Tomi Rewarded</p>
                                                    <h4>112</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 task-status pe-0">
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
                            </div> */}
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
                                                    {army?.map((elem, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="set-custom">
                                                                        <img src={elem?.icon} alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                        <p className='paratable'>{elem?.name}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>{elem?.membersCount}</p>
                                                                </td>
                                                                <td>
                                                                    <div className='dropbtn'>
                                                                        <Dropdown>
                                                                            {elem?.name == 'major general' && user1?.rank?.name === 'general' ? (
                                                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                    <img src='\Vectordots.svg' alt='img' classNa me='img-fluid ' />
                                                                                </Dropdown.Toggle>
                                                                            )
                                                                                :
                                                                                (
                                                                                    ""
                                                                                )
                                                                            }
                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#/action-1">
                                                                                    <p onClick={handleShowmajor}><img src='\Vector.svg' alt='img' className='img-fluid' />Add</p>
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-12 pe-0 padd-sm">
                                    <div className="graph-section border-grad1">
                                        <div className="upper-heading">
                                            <h6>army growth</h6>
                                            <div className="custom-daterangepicker">
                                                <DateRangePicker placement='bottomEnd' appearance="This week" placeholder="This week" onChange={(newValue) => setValue(newValue)} />
                                            </div>
                                        </div>
                                        <div className="inner-grap mt-5">
                                            {/* <img src="\assets\dummy-graph-img.png" alt="img" className="img-fluid w-100" /> */}
                                            <Tabs
                                                defaultActiveKey="totalsol"
                                                id="uncontrolled-tab-example"
                                                className="opeartions-tab tab-styling"
                                                onSelect={settabss}
                                            >
                                                <Tab eventKey="totalsol" title="Total soldiers">
                                                    <ArmyGrowthGraph date={datee} rendss={rendss} minte={minted} format={format} />
                                                </Tab>
                                                <Tab eventKey="totaltask" title="Tasks">
                                                    <ArmyGrowthGraph date={datee} rendss={rendss} minte={minted} format={format} />
                                                </Tab>
                                            </Tabs>
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
                                                            <p className='headtable'>Tomi Tokens</p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Users?.map((elem, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="set-custom">
                                                                        <img src={elem?.symbol} alt="img" className='img-fluid' style={{ width: "40px", height: "40px" }} />
                                                                        <p className='paratable'>{elem?.name}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>{elem?.membersCount}</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>{elem?.totalTokens}</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
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
                                                            <p className='headtable'>TOMI Points</p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {topsoli?.map((elem, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <p className='paratable'>{elem?.nickName}</p>
                                                                </td>
                                                                <td>
                                                                    <div className="set-custom">
                                                                        <img src={elem?.rank?.icon} alt="img" className='img-fluid' />
                                                                        <p className='paratable'>{elem?.rank?.name}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>{elem?.walletAddress?.slice(0, 12) + "..."}</p>
                                                                </td>
                                                                <td>
                                                                    <p className='paratable'>{elem?.points} Points</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    )
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                <div className="heading-mobile">
                                                    <p>Nickname</p>
                                                </div>
                                                <Accordion defaultActiveKey="0">
                                                    {topsoli?.map((elem, index) => {
                                                        return (
                                                            <Accordion.Item eventKey={index}>
                                                                <Accordion.Header>{elem?.nickName}</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="inner-fields">
                                                                        <div className="inner-item">
                                                                            <h6>Rank</h6>
                                                                            <p><img style={{ width: "30px", height: "30px" }} src={elem?.rank?.icon} alt="img" className="img-fluid me-2" />{elem?.rank?.name}</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Wallet Address</h6>
                                                                            <p>{elem?.walletAddress?.slice(0, 12) + "..."}</p>
                                                                        </div>
                                                                        {/* <div className="inner-item">
                                                                        <h6>Username</h6>
                                                                        <p>@sharjeel</p>
                                                                    </div> */}
                                                                        <div className="inner-item">
                                                                            <h6>TOMI Token</h6>
                                                                            <p>{elem?.points} TOMI</p>
                                                                        </div>
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        )
                                                    })}

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
                                    <div className="data-box general-tasks-wrappergeneral border-grad1 set-custom-mbl-top-margin">
                                        <div className="d-flex justify-content-between align-item-center">
                                            <h4 className="heading-gen">tasks pending proof of work approvals</h4>
                                            <a href="#" className="btn-view">View All <img src="\generalassets\icons\arrow-right.svg" alt="img" className="img-fluid" /></a>
                                        </div>

                                        <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                            <thead>
                                                <tr>
                                                    <th>User</th>
                                                    <th>Tasks</th>
                                                    <th>Status</th>
                                                    <th>Points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tasks?.map((elem, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{elem?.user?.nickName}</td>
                                                            <td>{elem?.task?.name?.slice(0, 40) + "..."}</td>
                                                            <td>
                                                                <div style={{ maxWidth: '83px', width: '100%' }} className="completed">Pending</div>
                                                            </td>
                                                            <td>{elem?.task?.reward}</td>
                                                            {/* <td>
                                                                            <div className='completebtn text-end'>
                                                                                {
                                                                                    elem?.taskSubmitted ?
                                                                                        <button style={{ background: '#FEC600' }}>In Process</button>
                                                                                        : elem?.taskApproval ?
                                                                                            <button style={{ background: '#04C453' }}>Completed</button>
                                                                                            :
                                                                                            <button style={{ background: '#FF8936' }}>Pending</button>
                                                                                }
                                                                            </div>
                                                                        </td> */}

                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                                            <div className="heading-mobile">
                                                <p>User</p>
                                            </div>
                                            <Accordion>
                                                {tasks?.map((elem, index) => {
                                                    return (
                                                        <Accordion.Item eventKey={index}>
                                                            <Accordion.Header>{elem?.user?.nickName}</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="inner-fields">
                                                                    <div className="inner-item">
                                                                        <h6>Tasks</h6>
                                                                        <p>{elem?.task?.name?.slice(0, 40) + "..."}</p>
                                                                    </div>
                                                                    <div className="inner-item">
                                                                        <h6>Points</h6>
                                                                        <p>{elem?.task?.reward}</p>
                                                                    </div>
                                                                    <div className="inner-item">
                                                                        <h6>Status</h6>
                                                                        <button className="btn-green">Pending</button>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )
                                                })}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12 pe-0 padd-sm">
                                    <div className="data-box general-tasks-wrappergeneral border-grad1 set-custom-mbl-top-margin">
                                        <div className="d-flex justify-content-between align-item-center">
                                            <h4 className="heading-gen">Pending rank approvals</h4>
                                            <a href="#" className="btn-view">View All <img src="\generalassets\icons\arrow-right.svg" alt="img" className="img-fluid" /></a>
                                        </div>

                                        <Table striped bordered hover responsive className="general-tasks-table display-none-in-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Wallet</th>
                                                    <th>Nickname</th>
                                                    <th>From</th>
                                                    <th>To</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data2?.map((elem, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{elem?.walletAddress?.slice(0, 14) + "..."}</td>
                                                            <td>{elem?.nickName}</td>
                                                            <td>{elem?.from}</td>
                                                            <td>{elem?.to}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                                            <div className="heading-mobile">
                                                <p>Wallet Address</p>
                                            </div>
                                            <Accordion>
                                                {data2?.map((elem, index) => {
                                                    return (
                                                        <Accordion.Item eventKey={index}>
                                                            <Accordion.Header>{elem?.walletAddress?.slice(0, 14) + "..."}</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="inner-fields">
                                                                    <div className="inner-item">
                                                                        <h6>NickName</h6>
                                                                        <p>{elem?.nickName}</p>
                                                                    </div>
                                                                    <div className="inner-item">
                                                                        <h6>From</h6>
                                                                        <p>{elem?.from}</p>
                                                                    </div>
                                                                    <div className="inner-item">
                                                                        <h6>To</h6>
                                                                        <p>{elem?.to}</p>
                                                                    </div>
                                                                    {/* <div className="inner-item">
                                                                        <h6>Status</h6>
                                                                        <button className="btn-green">Completed</button>
                                                                    </div> */}
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )
                                                })}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* add major general modal here ........................ */}

                    <Modal className='createbasic-modal global-modal-style createtask-modal' show={showmajor} onHide={handleClosemajor} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Major General</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="inner-content">
                                <div className="option-field">
                                    <label>Name</label>
                                    <input onChange={handleChangemajoradd} name="name" value={datamajoradd?.name} type="text" placeholder="Enter Name" />
                                </div>
                                <div className="option-field">
                                    <label>Wallet Address</label>
                                    <input onChange={handleChangemajoradd} name="walletaddres" value={datamajoradd?.walletaddres} type="text" placeholder="Enter Wallet Address...." />
                                </div>
                            </div>
                            <div className="twice-btns">
                                <button onClick={handleClosemajor} className="btn-blackk"><img src="\generalassets\icons\cancel-icon.svg" alt="img" className='img-fluid' />Cancel</button>
                                <button onClick={AddMajorButton} className="btn-pinkk"><img src="\generalassets\icons\add.svg" alt="img" className='img-fluid' />Add Major General</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            }
        </>
    );
};

export default GeneralHome;
