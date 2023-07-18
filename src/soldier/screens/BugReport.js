import React, { useEffect, useState } from 'react'
import "./bugreport.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';

const BugReport = () => {
    const [reportBug, setReportedBug] = useState([]);
    const [allFormData, setAllFormData] = useState({
        issue: '',
        description: '',
    })
    const [imageUrl, setImageUrl] = useState(null)

    const handleChange = (event) => {
        allFormData[event.target.name] = event.target.value;
        setAllFormData({ ...allFormData });
    }

    const ClearAll = () => {
        setAllFormData({
            issue: '',
            description: '',
        })
    }
    const [loader, setLoader] = useState()
    const createBug = () => {
        setLoader(true);
        let tok = localStorage.getItem("accessToken");
        var data = ({
            issue: allFormData.issue,
            description: allFormData.description,
            imageUrl: imageUrl
        });
        if (allFormData.issue !== "" && allFormData.description !== "" && imageUrl !== "") {
            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${tok}`;
            var config = {
                method: "post",
                url: `${API_URL}/content/bug-reports/add-bugs-report`,
                data: data
            };

            axios(config)
                .then(async (response) => {
                    setLoader(false);
                    toast.success("Bug report Successfully");
                    ClearAll();
                    setImageUrl()
                    getListing()
                })
                .catch(function (error) {
                    setLoader(false);
                });

        } else {
            toast.error("Please fill all fields")
        }
    }

    const handleInputChange = async (e) => {
        const file = e.target.files[0]
        if (file.size >= 2872139) {
            toast.error("File cannot be greater than 3mbs")
        } else {
            let tok = localStorage.getItem("accessToken");
            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${tok}`;
            var data = new FormData();
            data.append("image", file);
            if (file) {
                const responses = await axios.post(
                    `${API_URL}/tasks/metadata/upload-image`,
                    data
                );
                setImageUrl(responses?.data?.url);
                e.target.value = null;
            }
        }
    };

    const getListing = async () => {
        let tok = localStorage.getItem("accessToken");
        var config = {
            method: "get",
            url: `${API_URL}/content/bug-reports/get-bugs-report-list?offset=1&limit=100`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                setReportedBug(response?.data?.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        getListing()
    }, [])


    var result = imageUrl?.split("_")?.pop();


    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>Report a Bug</h6>
                    <p>report a bug to get resolved</p>
                </div>
            </div>
            <section className="bug-report">
                <Tabs
                    defaultActiveKey="activeop"
                    id="uncontrolled-tab-example"
                    className="opeartions-tab border-grad1"
                >
                    <Tab eventKey="activeop" title="Report a Bug">
                        <div className="reportabug border-grad1">
                            <div style={{ maxWidth: "542px", width: "100%" }}>
                                <div className="option-field">
                                    <label>Issue</label>
                                    <input onChange={handleChange} value={allFormData?.issue} name="issue" type="text" placeholder='Write your issue...' />
                                </div>
                                <div className="option-field">
                                    <label>Additional Note</label>
                                    <textarea
                                        onChange={handleChange} value={allFormData?.description} name="description"
                                        placeholder='Describe your issue' />
                                    <span className='words-count'>0/500</span>
                                </div>
                                <div className="option-field">
                                    <label>Add Attachment</label>
                                    <div className="upload-file">
                                        <label htmlFor="upload">Choose</label>
                                        {!imageUrl ?
                                            <p>No file Selected</p> :
                                            <p>{result}</p>
                                        }
                                        <input type="file"
                                            accept="image/png, image/jpeg, image/jpg"

                                            onChange={(e) => handleInputChange(e)} className='d-none' id='upload' />
                                    </div>
                                </div>
                                <button className='btn-save' onClick={createBug}>Save</button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="expiredop"
                        title="Reported Bugs">
                        <div className='maincard border-grad1'>
                            <div className="display-none-in-mobile">
                                <div className="maintable table-responsive">
                                    <table class="table table-striped " >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p className='headtable'>Date Submitted</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Issues</p>
                                                </th>
                                                <th>
                                                    <p className='headtable'>Status</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reportBug?.bugReports?.map((elem, index) => {
                                                let createdate = new Date(elem?.createdAt);
                                                const createDate = moment(createdate).format("DD-MM-YYYY");
                                                return (
                                                    <tr>
                                                        <td>
                                                            <p className='paratable'>{createDate}</p>
                                                        </td>
                                                        <td>
                                                            <p className='paratable'>{elem?.issue}</p>
                                                        </td>
                                                        <td>
                                                            <div className='completebtn'>
                                                                <button className=''>{elem?.status}</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }

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
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Item >...</Pagination.Item>
                                            <Pagination.Item>{6}</Pagination.Item>
                                        </Pagination>
                                        <p>Next</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="mobile-responsive-table d-none display-block-in-mobile">
                                <div className="heading-mobile">
                                    <p>Date Submitted</p>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>23/05/2023 01:58</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="inner-fields">
                                                <div className="inner-item">
                                                    <h6>Issues</h6>
                                                    <p>Button Is Not Working</p>
                                                </div>
                                                <div className="inner-item">
                                                    <h6>Status</h6>
                                                    <button className="btn-green">Resolved</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}

export default BugReport
