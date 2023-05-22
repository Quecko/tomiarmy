import React from 'react'
import "./homeoperations.scss"

const TopSquad = () => {
  return (
    <> 
      <section className="home-operations topsquad-table border-grad1">
        <div className='maincard'>
          <div className="upper-head">
            <h6>top squads</h6>
          </div>
          <div className="option-field">
            <input type="search" placeholder='Search' />
            <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' />
          </div>
          <div className="maintable table-responsive">
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
                <tr>
                  <td>
                    <div className="parent">
                        <div className="profile">
                            <img src="\assets\squad-profile.png" alt="img" className='img-fluid' />
                        </div>
                        <p className='paratable'>DC Squad</p>
                    </div>
                  </td>
                  <td>
                    <p className='paratable'>25</p>
                  </td>
                  <td>
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                  <button className='btn-requestjoin'>Request to join</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="parent">
                        <div className="profile">
                            <img src="\assets\squad-profile.png" alt="img" className='img-fluid' />
                        </div>
                        <p className='paratable'>DC Squad</p>
                    </div>
                  </td>
                  <td>
                    <p className='paratable'>25</p>
                  </td>
                  <td>
                    <p className='paratable'>500 TOMI</p>
                  </td>
                  <td>
                  <button className='btn-requested'>Requested</button>
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

export default TopSquad
