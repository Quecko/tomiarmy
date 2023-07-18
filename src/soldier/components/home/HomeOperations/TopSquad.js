import { React, useState, useEffect } from "react";
import "./homeoperations.scss"
import Accordion from 'react-bootstrap/Accordion';
import { API_URL } from "../../../../utils/ApiUrl"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopSquad = ({topSquad, GetUserTopSquad}) => {
  let tok = localStorage.getItem("accessToken");
  const SendInvite = async (id) => {
    // e.preventDefault();
    // setLoader(true);
    await axios
      .post(`${API_URL}/tasks/squad-invitation-requests`, {
        squadId: id.toString(),
      }, {
        headers: {
          authorization: `Bearer ` + tok
        }
      })
      .then((res) => {
        // window.$("#examplemodalinvite").modal("hide");
        GetUserTopSquad()
        toast.success("Invite Sent Successfully");
        // setLoader(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data.message, {
          position: "top-right",
          autoClose: 2000,
        });
        // setLoader(false);
      });
  }


  return (
    <>
      <section className="home-operations topsquad-table border-grad1">
        <div className='maincard '>
          <div className="upper-head">
            <h6>top squads</h6>
          </div>
          <div className="option-field">
            <input type="text" placeholder='Search' />
            <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' />
          </div>
          <div className="maintable table-responsive display-none-in-mobile">
            <table class="table table-striped ">
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
                  <th>
                    <p className='headtable'>Action</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {topSquad?.map((elem) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <div className="parent">
                            <div className="profile">
                              <img src={elem?.symbol} alt="img" className='img-fluid' />
                            </div>
                            <p className='paratable'>{elem?.name}</p>
                          </div>
                        </td>
                        <td>
                          <p className='paratable'>{elem?.membersCount}</p>
                        </td>
                        <td>
                          <p className='paratable'>{elem?.totalTokens} TOMI</p>
                        </td>
                        <td>
                          <button className={elem?.squad_invitation_requests ? 'btn-requested' : 'btn-requestjoin'} onClick={() => SendInvite(elem?._id)}>{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                        </td>
                      </tr>
                    </>
                  )
                })}


              </tbody>
            </table>
          </div>
          <div className="mobile-responsive-table d-none display-block-in-mobile">
            <div className="heading-mobile">
              <p>Squads</p>
            </div>
            
            <Accordion defaultActiveKey="">
            {topSquad?.map((elem, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                    <Accordion.Header> <img src="\assets\squad-profile.png" alt="img" className='img-fluid me-2' /> {elem?.name}</Accordion.Header>
                    <Accordion.Body>
                      <div className="inner-fields">
                        <div className="inner-item">
                          <h6>TOMI Balance</h6>
                          <p>{elem?.totalTokens} Tomi</p>
                        </div>
                        <div className="inner-item">
                          <h6>Total Members</h6>
                          <p>{elem?.membersCount}</p>
                        </div>
                        <div className="inner-item">
                          <h6>Actions</h6>
                          <button className={elem?.squad_invitation_requests ? 'btn-requested' : 'btn-requestjoin'} onClick={() => SendInvite(elem?._id)}>{elem?.squad_invitation_requests ? 'Requested' : 'Request to join'}</button>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  )})}
            </Accordion>
          </div>
        </div>
      </section>

    </>
  )
}

export default TopSquad
