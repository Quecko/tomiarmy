import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
const Announcements = () => {
  return (
    <>
      <section className='main-announcement'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='main-head'>
                <h2>announcements</h2>
                <p>view your announcements</p>
              </div>
              <div className='my-tabs'>
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Read Announcements">
                    {/* <Sonnet /> */}
                    <div className='maincard'>
                      <div className="maintable">

                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                <p className='headtable'>Announcement</p>
                              </th>
                              <th>
                                <p className='headtable'>Date Received</p>
                              </th>
                              <th>
                                <p className='headtable'>Actions</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className='paratable'>Like our facebook page</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button>Completed</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>


                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Like our facebook page</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className='orange'>Pending</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow our twitter acc...</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className='orange'>Pending</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow our twitter acc...</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className='red'>Rejected</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                              <td>
                                <div className='dropbtn'>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
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
                  </Tab>
                  <Tab eventKey="profile" title="Unread Announcements">
                    {/* <Sonnet /> */}
                    <div className='maincard'>
                      <div className="maintable">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                <p className='headtable'>Task</p>
                              </th>
                              <th>
                                <p className='headtable'>Points</p>
                              </th>
                              <th>
                                <p className='headtable'>Status</p>
                              </th>
                              <th>
                                <p className='headtable'>Expiry</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className='paratable'>Like our facebook page</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button>Completed</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Like our facebook page</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className='red'>Rejected</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow our twitter acc...</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button>comleted</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Follow our twitter acc...</p>
                              </td>
                              <td>
                                <p className='paratable'>+5</p>
                              </td>
                              <td>
                                <div className='completebtn'>
                                  <button className='red'>Rejected</button>
                                </div>
                              </td>
                              <td>
                                <p className='paratable'>12:34 12/12/23</p>
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
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Announcements