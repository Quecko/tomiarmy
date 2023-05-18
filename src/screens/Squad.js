import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
const Squad = () => {
  return (
    <>
      <section className='main-squad'>
        <div className='container-fluid padd-sm p-0'>
          <div className='row'>
            <div className='col-sm-12 padd-sm p-0'>
              <div className='maincardsquad'>
                <div className='squadparent'>
                  <div className='innercard1'>
                    <div className='parent'>
                    <div className='left'>
                      <img src='\Grouppic.svg'alt='img'className='img-fluid'/>
                    </div>
                    <div className='right'>
                      <p>My Squad</p>
                      <h6>DC Squad</h6>
                    </div>
                    </div>                
                  </div>
                  <div className='innercard2'>
                  <div className='parent'>
                    <div className='left'>
                      <img src='\Frameownwe.svg'alt='img'className='img-fluid'/>
                    </div>
                    <div className='right'>
                      <p>Squad Owner</p>
                      <h6>X2JZ</h6>
                    </div>
                    </div> 
                  </div>
                  <div className='innercard2'>
                  <div className='parent'>
                    <div className='left'>
                      <img src='\Frametokens.svg'alt='img'className='img-fluid'/>
                    </div>
                    <div className='right'>
                      <p>Total Squad Tokens</p>
                      <h6>500 TOMI</h6>
                    </div>
                    </div> 
                  </div>
                  <div className='innercard2'>
                  <div className='parent'>
                    <div className='left'>
                      <img src='\Framemember.svg'alt='img'className='img-fluid'/>
                    </div>
                    <div className='right'>
                      <p>Total Squad Members</p>
                      <h6>1,531</h6>
                    </div>
                    </div> 
                  </div>
                </div>
              </div>
              <div className='maincard'>
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
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>Private</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'>Sergeant</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@Umar_x2jz</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>Private</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className='paratable'>Sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>Private</p>
                              </td>
                              <td>
                              <p className='paratable'>  0x2F78aB0Cd05c...6j88</p>                           
                              </td>
                              <td>
                                <p className='paratable'>@sharjeel</p>
                              </td>
                              <td>
                                <p className='paratable'>@500 TOMI</p>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Squad