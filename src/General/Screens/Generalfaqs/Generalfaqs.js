import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../../../utils/ApiUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../hooks/loader';
import { useWeb3React } from "@web3-react/core";


const Generalfaqs = ({ setShowfaq,setShowfaq1 ,getDataannou11,faqs,setEbditFaqs}) => {
    const { account } = useWeb3React();
    let tok = localStorage.getItem("accessToken");
 
    const deletefaq = (elem) => {
        var config = {
            method: "delete",
            url: `${API_URL}/content/faqs/${elem?._id}`,
            headers: {
                authorization: `Bearer ` + tok
            },
        };
        axios(config)
            .then(function (response) {
                getDataannou11();
                // setLoader(false);
                toast.success('Faq Deleted Successfully', {
                    position: "top-right",
                    autoClose: 2000,
                });
            })
            .catch(function (error) {
                // setLoader(false);
            });
    }

    const EditFaq = (elem) => {
        setEbditFaqs(elem)
        setShowfaq1(true)
    }

    return (
        <>
            <div className="formobile-heading d-none display-block-in-mobile">
                <div className="inner-heading">
                    <h6>faqs</h6>
                    <p>Create faqs for your army</p>
                </div>
                <button onClick={setShowfaq} className="create-btn" >
                    <img src="\assets\add-task.svg" alt="img" className="img-fluid me-2" />
                    Create FAQ
                </button>
            </div>
            <section className='main-task general-army'>
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
                                                        <p className='headtable'>Title</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Description</p>
                                                    </th>
                                                    <th>
                                                        <p className='headtable'>Actions</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {faqs && faqs?.map((elem, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <p className='paratable'>{elem?.title}</p>
                                                            </td>
                                                            <td>
                                                                <p className='paratable'>{elem?.description}</p>
                                                            </td>
                                                            <td>
                                                                <div className='dropbtn global-dropdown-style'>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#/action-1">
                                                                                <p onClick={() => EditFaq(elem)}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                                                                <p onClick={() => deletefaq(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                                        <p>Title</p>
                                    </div>
                                    <Accordion>
                                        {faqs && faqs?.map((elem, index) => {
                                            return (
                                                <Accordion.Item eventKey={index}>
                                                    <Accordion.Header>{elem?.title}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="inner-fields">
                                                            <div className="inner-item">
                                                                <h6>Description</h6>
                                                                <p style={{ maxWidth: "142px", textAlign: "start" }}>{elem?.description}</p>
                                                            </div>
                                                            <div className="inner-item">
                                                                <h6>Actions</h6>
                                                                <div className='dropbtn global-dropdown-style'>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#/action-1">
                                                                                <p onClick={() => EditFaq(elem)}><img src='\generalassets\icons\edit.svg' alt='img' className='img-fluid' />Edit</p>
                                                                                <p onClick={() => deletefaq(elem)}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Delete</p>
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
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Generalfaqs
