import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generalannouncement.scss"
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core";
import axios from 'axios';
import moment from "moment";
const GeneralAnnouncement = ({ setShowannounce, annou, getDataannou }) => {

    const deleteannouncement = (elem) => {
        let tok = localStorage.getItem("accessToken");
        // setOpens(true);
        axios
            .delete(
                API_URL + "/notifications/announcements/" +
                elem?._id,
                { headers: { authorization: `Bearer ${tok}` } }
            )
            .then((response) => {
              getDataannou();
                // setOpens(false);
                // setCall(!call);
                toast
                    .success("Successfully Delete Announcement", {
                        position: "top-right",
                        autoClose: 3000,
                    })
                window.$('#exampleModal2').modal('hide')
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
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>ANNOUNCEMENTS</h6>
                    <p>VIEW AND CREATE ANNOUNCEMENTS FOR YOUR ARMY</p>
                </div>
                <button onClick={() => setShowannounce(true)} className="create-btn" >
                    <img src="\generalassets\icons\announcement.svg" alt="img" className="img-fluid me-2" />
                    Create Announcement
                </button>
            </div>
            <section className='main-task'>
                <div className='container-fluid padd-sm p-0'>
                    <div className='row'>
                        <div className='col-sm-12 padd-sm p-0'>
                            <div className='maincard'>
                                <div className='display-none-in-mobile'>
                                    <div className="maintable">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <p className='headtable'>Announcement</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>To</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Date Sent</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Actions</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {annou && annou?.map((elem, index) => {
                                                       let createdate = new Date(elem?.createdAt);
                                                       const createDate = moment(createdate).format("DD-MM-YYYY");
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <p className='paratable'>{elem?.message}</p>
                                                            </td>
                                                            <td>
                                                                <p className='paratable'>{elem?.recipients}</p>
                                                            </td>
                                                            <td>
                                                                <p className='paratable'>{createDate}</p>
                                                            </td>
                                                            <td>
                                                                <a href="#"><img onClick={() =>deleteannouncement(elem)} src="\generalassets\icons\btn-delete.svg" alt="img" className='img-fluid' /></a>
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
                                        <p>Announcement</p>
                                    </div>
                                    <Accordion defaultActiveKey="0">
                                    {annou && annou?.map((elem, index) => {
                                                       let createdate = new Date(elem?.createdAt);
                                                       const createDate = moment(createdate).format("DD-MM-YYYY");
                                                    return (
                                                        <Accordion.Item eventKey={index}>
                                                        <Accordion.Header>{elem?.recipients}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="inner-fields">
                                                                <div className="inner-item">
                                                                    <h6>Message</h6>
                                                                    <p>{elem?.message}</p>
                                                                </div>
                                                                <div className="inner-item">
                                                                    <h6>Created At</h6>
                                                                    <p>{createDate}</p>
                                                                </div>
                                                                <div className="inner-item">
                                                                    <h6>Actions</h6>
                                                                    <a href="#" onClick={() =>deleteannouncement(elem)}><img src="\generalassets\icons\btn-delete.svg" alt="img" className="img-fluid" /></a>
                                                                </div>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    )})}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeneralAnnouncement