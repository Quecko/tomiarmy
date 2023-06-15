import React, { useEffect, useState } from "react";
import "../../../soldier/screens/armyforum.scss"


const GeneralForum = () => {

  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
                    <div className="inner-heading">
                        <h6>Army Forum</h6>
                        <p>Engage with your army</p>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModall" className="create-btn" >
                        <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                        Start a new topic
                    </button>
                </div>
      <div className="topicwrapper">
        <section className="topics">
          <div className="containersss p-0">
            <div className="row fordirection">
              <div className="col-xl-9 col-12 p-0">
                <section className="maincmntsection border-grad1">
                  <div className="arrows">
                    <img src="\assets\arrow-up.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                    <p className="serial">56</p>
                    <img src="\assets\arrow-down.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                  </div>
                  <section className="first">
                    <div className="saying">
                      <div className="texts">
                        <h4>What does the general say?</h4>
                        <p className="upperpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                      </div>
                      <div className="lowercontent">
                        <div className="ranked">
                          <h4>Posted by</h4>
                          <div className="inner-parent">
                            <div className="inner-side">
                            <h6><img src="\assets\profile-icon.svg" alt="img" className="rankimg me-2" />John_Doe_04 </h6>
                            </div>
                            <div className="inner-side">
                            <h6><img src="\assets\private.svg" alt="img" className="rankimg" /> Private </h6>
                            <span>15:21</span>
                            </div>
                          </div>
                        </div>
                        <div className="comments">
                          <img src="\assets\comment.svg" alt="img" className="cmnt" data-bs-toggle="collapse" href="#tab1" role="button" aria-expanded="false" aria-controls="collapseExample" />
                          <p>50+</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="comments collapse set-bg-color" id="tab1">
                    <div className="maincomment">
                      <h1 className="headcmnt">Comments</h1>
                      <div className="innermain">
                        <div className="innerprofile">
                          <div className="imageset">
                            <img src="\assets\profileimg.png" alt="img" className="profileimg" />
                          </div>
                          <div className="textprofile">
                            <h6>Elias Doyle</h6>
                            <p>September 29, 2022 at 2:48 am</p>
                          </div>
                        </div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                      </div>
                      <div className="innermain">
                        <div className="innerprofile">
                          <div className="imageset">
                            <img src="\assets\profileimg.png" alt="img" className="profileimg" />
                          </div>
                          <div className="textprofile">
                            <h6>Elias Doyle</h6>
                            <p>September 29, 2022 at 2:48 am</p>
                          </div>
                        </div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                      </div>
                    </div>
                    <div className="forcmnt">
                      <h5>Leave a comment</h5>
                      <p>Comment</p>
                      <textarea placeholder="Write comment"></textarea>
                      <button>Post Comment</button>
                    </div>
                  </section>
                </section>
              </div>
              <div className='col-xl-3 col-12 pe-0 padd-sm'>
                <div className='members-section border-grad1 display-none-in-mobile'>
                  <div className="tophead">
                    <h6>Members <span>(192)</span></h6>
                  </div>
                  <div className="option-field">
                    <img src="\assets\search-icon.svg" alt="img" className="img-fluid search-icon" />
                    <input type="search" placeholder="Search members" />
                  </div>
                <div className="bottom-table">
                  <div className="upper-heading">
                    <p>Nickname</p>
                    <p>Rank</p>
                  </div>
                  <div className="bottom-fields">
                    <div className="inner-item">
                      <h6>Sharjeel</h6>
                      <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                    </div>
                    <div className="inner-item">
                      <h6>Sharjeel</h6>
                      <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                    </div>
                    <div className="inner-item">
                      <h6>Sharjeel</h6>
                      <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                    </div>
                    <div className="inner-item">
                      <h6>Sharjeel</h6>
                      <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                    </div>
                    <div className="inner-item">
                      <h6>Sharjeel</h6>
                      <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
     
    </>
  )
}

export default GeneralForum