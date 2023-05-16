import React from 'react'
import "./homeoperations.scss"
import Dropdown from 'react-bootstrap/Dropdown';

const HomeOperations = () => {
  return (
    <>
      <section className="home-operations">
        <div className="upper-item">
          <div className='left'>
            <h6>operation : ELON MUSK <span>ENDS IN: 23:34:12</span></h6>
            <p>make elon musk tweet about tomi</p>
          </div>
          <a href="#">View All Operation Tasks <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
        </div>
        <div className="bottom-cards">
          <div className="card-item">
            <img src="\assets\points.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>Points</p>
              <h6>150,000</h6>
            </div>
          </div>
          <div className="card-item">
            <img src="\assets\tomitokens.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>TOMI Tokens</p>
              <h6>100,000</h6>
            </div>
          </div>
          <div className="card-item">
            <img src="\assets\totaltasks.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>Total Tasks</p>
              <h6>55</h6>
            </div>
          </div>
          <div className="card-item unique-item">
            <div className='inner-set'>
              <img src="\assets\rewardnft.svg" alt="img" className='img-fluid' />
              <div className="inner-content">
                <p>Reward NFT</p>
                <h6>ELN MSK #41234</h6>
              </div>
            </div>
            <div className="nft-img">
              <img src="\assets\nft.svg" alt="img" className='img-fluid' />
            </div>
          </div>
        </div>
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
                    <p className='headtable'>TOMI Tokens</p>
                  </th>
                  <th>
                    <p className='headtable'>Progress</p>
                  </th>
                  <th>
                    <p className='headtable'>Status</p>
                  </th>
                  <th>
                    <p className='headtable'>Action</p>
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
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                    <div className="twice">
                      <img src="\assets\greenline.svg" alt="img" className='img-fluid' />
                      <p className='paratable'>100 of 100</p>
                    </div>
                  </td>
                  <td>
                    <div className='completebtn'>
                      <button className=''>Completed</button>
                    </div>
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
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                    <div className="twice">
                      <img src="\assets\orangeline.svg" alt="img" className='img-fluid' />
                      <p className='paratable'>67 of 100</p>
                    </div>
                  </td>
                  <td>
                    <div className='completebtn'>
                      <button className='orange'>In Progress</button>
                    </div>
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
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                    <div className="twice">
                      <img src="\assets\blankline.svg" alt="img" className='img-fluid' />
                      <p className='paratable'>0 of 100</p>
                    </div>
                  </td>
                  <td>
                    <div className='completebtn'>
                      <button className='orange'>In Progress</button>
                    </div>
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
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                    <div className="twice">
                      <img src="\assets\redline.svg" alt="img" className='img-fluid' />
                      <p className='paratable'>5 of 100</p>
                    </div>
                  </td>
                  <td>
                    <div className='completebtn'>
                      <button className='red'>Not Started</button>
                    </div>
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
        </div>
      </section>
      <section className="home-operations">
        <div className='maincard'>
          <div className="upper-head">
            <h6>Your Squad</h6>
            <a href="#">View All <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
          </div>
          <div className="maintable">
            <table class="table table-striped">
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
                    <p className='paratable'>Umar_x2jz</p>
                  </td>
                  <td>
                    <p className='paratable'><img src="\assets\private.svg" alt="img" className='img-fluid me-2' />Private</p>
                  </td>
                  <td>
                    <p className='paratable'>0x2F78aB0Cd05c...6j88</p>
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
                    <p className='paratable'><img src="\assets\sergeant.svg" alt="img" className='img-fluid me-2' />Sergeant</p>
                  </td>
                  <td>
                    <p className='paratable'>0x2F78aB0Cd05c...6j88</p>
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
                    <p className='paratable'>Umar_x2jz</p>
                  </td>
                  <td>
                    <p className='paratable'><img src="\assets\lieutenant.svg" alt="img" className='img-fluid me-2' />Lieutenant</p>
                  </td>
                  <td>
                    <p className='paratable'>0x2F78aB0Cd05c...6j88</p>
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
                    <p className='paratable'><img src="\assets\captain.svg" alt="img" className='img-fluid me-2' />Captain</p>
                  </td>
                  <td>
                    <p className='paratable'>0x2F78aB0Cd05c...6j88</p>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeOperations
