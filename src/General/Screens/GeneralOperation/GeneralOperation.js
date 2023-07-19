import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generaloperation.scss"
import CreateOperation from './CreateOperation';
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';
import { useWeb3React } from "@web3-react/core";
import GeneralActive from './GeneralActive';
import moment from "moment";

const GeneralOperation = ({ setroute, routes, setroutehome, routeshome, setsvaebutton, svaebutton }) => {
    const [expired, setexpired] = useState(false);
    const [call, setcall] = useState(false);
    const [operationdata, setoperationdata] = useState('');
    const { account } = useWeb3React();
    const [tasks, settasks] = useState([]);

    const settabss = (event) => {
        if (event === 'home') {
            // settasks()
            setexpired(false)
        }
        else if (event === 'profile') {
            // settasks()
            setexpired(true)
        }
    }
 
    const getData = async (off, dsfdsgds) => {
        // let valu = null;
        // if (off) {
        //     valu = off;
        // } else {
        //     valu = 1;
        // }
        let tok = localStorage.getItem("accessToken");
        settasks([]);
        // let wall = localStorage.getItem("wallet");
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

                    // setLoader(false);
                    // setCount(response.data.data.count)
                    settasks(response?.data?.data?.operation);
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

    useEffect(() => {
        // if (currentPage > 1) {
        //     getData(currentPage);
        // } else {
        getData();
        // }
    }, [account, expired])

    const Getlength = (task) => {
        const result = task?.length
        return result
    }

    const operationedit = (elem) => {
        console.log("sdfsdfdsfdsfsdf")
        setcall(false)
        setoperationdata(elem)
        setroute(!routes)
    }
    const createoperationpage = () => {
        setoperationdata('')
        setroute(!routes)
    }

    const deleteoperation = (elem) => {

        let tok = localStorage.getItem("accessToken");
        // setOpens(true);
        axios
            .delete(
                API_URL + "/tasks/operations/" +
                elem?._id,
                { headers: { authorization: `Bearer ${tok}` } }
            )
            .then((response) => {
                getData();
                // setOpens(false);
                // setCall(!call);
                toast
                    .success("Successfully Delete Operation", {
                        position: "top-right",
                        autoClose: 3000,
                    })
                    // window.$('#exampleModal2').modal('hide')
                    .catch((err) => {
                        // setOpens(false);
                        toast.warning(
                            "Error",
                            {
                                position: "top-right",
                                autoClose: 3000,
                            }
                        );
                        return false;
                    });
            });
    }

    return (
        <>
            {
                !routes && <div className="formobile-heading d-none display-block-in-mobile">
                    <div className="inner-heading">
                        <h6>Operations</h6>
                        <p>VIEW AND CREATE operations FOR YOUR ARMY</p>
                    </div>
                    <button onClick={() => createoperationpage()} className="create-btn" >
                        <img src="\assets\add-task.svg" alt="img" className="img-fluid me-2" />
                        Create Operation
                    </button>
                </div>
            }
            {
                routes ? <><CreateOperation setroutehome={setroutehome} routeshome={routeshome} tasks={tasks} call={call} getData={getData} setexpired={setexpired} operationdata={operationdata} setoperationdata={setoperationdata} setroute={setroute} routes={routes} /></> :
                    <section className='main-task'>
                        <div className='container-fluid padd-sm p-0'>
                            <div className='row'>
                                <div className='col-sm-12 padd-sm p-0'>
                                    <div className='my-tabs'>
                                        <Tabs
                                            defaultActiveKey="home"
                                            transition={false}
                                            id="noanim-tab-example"
                                            className="mb-3"
                                            onSelect={settabss}
                                        >
                                            <Tab eventKey="home" title="Active Operations">
                                                {/* <div className='maincard'>
                                                    <div className='display-none-in-mobile'>
                                                        <div className="maintable">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <p className='headtable'>Operation Name</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Date Created</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Expiration Date</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Points</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Tomi Tokens</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Total Tasks</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Actions</p>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className='paratable'>Ilong MAA</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className='paratable'>01/01/22</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className='paratable'>01/01/22</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className='paratable'>+5 Points</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className='paratable'>100 TOMI</p>
                                                                        </td>
                                                                        <td>
                                                                            <p className='paratable'>25</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className='dropbtn global-dropdown-style'>
                                                                                <Dropdown>
                                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                        <img src='\Vectordots.svg' alt='img' className='img-fluid ' />
                                                                                    </Dropdown.Toggle>
                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item href="#/action-1">
                                                                                            <p><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                            <p><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                                                                            <p><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
                                                                                        </Dropdown.Item>
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
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
                                                            <p>Operation Name</p>
                                                        </div>
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>Ilong MAA</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="inner-fields">
                                                                        <div className="inner-item">
                                                                            <h6>Date Created</h6>
                                                                            <p>01/01/22</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Expiration Date</h6>
                                                                            <p>01/01/22</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Points</h6>
                                                                            <p>+5 Points</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Tomi Tokens</h6>
                                                                            <p>100 TOMI</p>
                                                                        </div>
                                                                        <div className="inner-item">
                                                                            <h6>Total Tasks</h6>
                                                                            <p>25</p>
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
                                                </div> */}
                                                <GeneralActive setcall={setcall} call={call} setoperationdata={setoperationdata} setroute={setroute} routes={routes} tasks={tasks} />
                                            </Tab>
                                            <Tab eventKey="profile" title="Expired Operations">
                                                <div className='maincard'>
                                                    <div className='display-none-in-mobile'>
                                                        <div className="maintable">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <p className='headtable'>Operation Name</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Date Created</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Expiration Date</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Points</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Tomi Tokens</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Total Tasks</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className='headtable'>Actions</p>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {tasks?.map((elem, index) => {
                                                                        const ExpireDate = moment(elem?.expirationDate).format("DD-MM-YYYY");
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    <p className='paratable'>{elem?.name}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className='paratable'>01/01/22</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className='paratable'>{ExpireDate}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className='paratable'>{elem?.reward} Points</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className='paratable'>{elem?.tomiToken} TOMI</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className='paratable'>{Getlength(elem?.tasksList)}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <div className='dropbtn global-dropdown-style'>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                <img src='\Vectordots.svg' alt='img' className='img-fluid' />
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item href="#">
                                                                                                    {/* <p><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p> */}
                                                                                                    <p onClick={() => operationedit(elem)}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                                                                                    <p onClick={() => deleteoperation(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                                                            <p>Operation Name</p>
                                                        </div>
                                                        <Accordion>
                                                            {tasks?.map((elem, index) => {
                                                                const ExpireDate = moment(elem?.expirationDate).format("DD-MM-YYYY");
                                                                return (
                                                                    <Accordion.Item eventKey={index}>
                                                                        <Accordion.Header>{elem?.name}</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <div className="inner-fields">
                                                                                <div className="inner-item">
                                                                                    <h6>Date Created</h6>
                                                                                    <p>01/01/22</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Expiration Date</h6>
                                                                                    <p>{ExpireDate}</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Points</h6>
                                                                                    <p>+{elem?.reward} Points</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Tomi Tokens</h6>
                                                                                    <p>{elem?.tomiToken} TOMI</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Total Tasks</h6>
                                                                                    <p>{Getlength(elem?.tasksList)}</p>
                                                                                </div>
                                                                                <div className="inner-item">
                                                                                    <h6>Actions</h6>
                                                                                    <div className='dropbtn global-dropdown-style'>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                                <img src='\Vectordots.svg' alt='img' className='img-fluid' />
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item href="#">
                                                                                                    {/* <p><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p> */}
                                                                                                    <p onClick={() => operationedit(elem)}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                                                                                    <p onClick={() => deleteoperation(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }

        </>
    )
}

export default GeneralOperation