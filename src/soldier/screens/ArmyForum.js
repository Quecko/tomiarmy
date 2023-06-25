import React, { useEffect, useState } from "react";
import "./armyforum.scss"
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import axios from 'axios';

const ArmyForum = () => {
  const [army, setArmy] = useState([]);
  const [topuser, settopuser] = useState([]);
  const [ListComment, setListComment] = useState([]);
  const [post, setPost] = useState([]);
  const [commentid, setcommentid] = useState();
  const [limit, setLimit] = useState(1);
  const [limit0, setLimit0] = useState(5);
  const [rend, setRend] = useState(false);
  const [comment, setcomment] = useState()
  const [rankid, setrankid] = useState();
  const [loader, setLoader] = useState()
  const [showSide, setShowSide] = useState();
  const [current, setCurrent] = useState(-1);
  const [deleteid, setdeleteid] = useState()
  const [detailsingle, setdetailsingle] = useState()
  const [detail, setdetail] = useState()

  let indexvalue = localStorage.getItem("indexvalue");

  const [allFormData, setAllFormData] = useState({
    title: '',
    description: '',
  })
  const [selecttab, setselecttab] = useState('Active Squad')
  const handleChange = (event) => {
    allFormData[event.target.name] = event.target.value;
    setAllFormData({ ...allFormData });
  }
  //  create new forum
  const putQuestion = () => {
    setLoader(true);
    let tok = localStorage.getItem("accessToken");
    if (allFormData.title !== "" && allFormData.description !== "") {
      axios.post(`${API_URL}/forums/posts/`,
        {
          title: allFormData.title,
          description: allFormData.description,
          isForumPost: rankid,
        },
        {
          headers: {
            authorization: `Bearer ` + tok
          }
        }
      ).then((response) => {
        // console.log(response)
        setLoader(false);
        toast.success("Post Added Successfully");
        window.$(`#exampleModall`).modal("hide");
        // GetPosts("val");
        // ClearAlloperation()
        // Code
      }).catch((error) => {
        setLoader(false);
        toast.error(error.response.data.message)
      })
    } else {
      toast.error("Please fill all fields")
    }
  }

  // get top user or member
  const gettopusers = async () => {
    let tok = localStorage.getItem("accessToken");
    var config = {
      method: "get",
      url: `${API_URL}/forums/top-user?limit=100000&&isForumPost=${rankid}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        settopuser(response?.data?.data?.topUsers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //  get myPost
  const getMyPosts = () => {
    let tok = localStorage.getItem("accessToken");
    var config = {
      method: "get",
      url: `${API_URL}/forums/posts/my-posts?offset=1&&limit=100000&&forumPost=${rankid}`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setPost(response?.data?.data?.post)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const commentnull = () => {
    setcomment('')
    setRend(!rend)
}
  const createComment = (id) => {
    // setcountss(0)
    setLoader(true);
    let tok = localStorage.getItem("accessToken");
    axios.post(`${API_URL}/forums/posts/${id}/comments`,
        {
            content: comment
        },
        {
            headers: {
                authorization: `Bearer ` + tok
            }
        }
    ).then((response) => {
        setLoader(false);
        toast.success("Comment Created Successfully");
        mainid(commentid, "add");
        commentnull();
        setcomment('');
    }).catch((error) => {
        setLoader(false);
        toast.error(error.response.data.message)
    })
}

const GetPosts = (val) => {
    let tok = localStorage.getItem("accessToken");
    var config = {
        method: "get",
        url: `${API_URL}/forums/posts?offset=${limit}&&limit=10&&forumPost=${rankid}`,
        headers: {
            authorization: `Bearer ` + tok
        },
    };
    axios(config)
        .then(function (response) {
            getMyPosts()
            // setArmy(response?.data?.data);
            if (response?.data?.data?.length === 0) {
                setLimit(limit - 1);
            }
            if (val) {
                setArmy(response?.data?.data?.post);
            } else {
                setArmy([
                    ...army,
                    ...response?.data?.data?.post,
                ]);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


useEffect(() => {
  if (limit > 1) {
      GetPosts();
  }
}, [limit])

const mainid = (id, val) => {
  let ido = null;
  let dumArr = [];
  if (id) {
      ido = id;
      dumArr = [];
      setcommentid(ido);
  } else {
      ido = commentid;
  }
  // console.log("main id commebnts",id)
  let tok = localStorage.getItem("accessToken");
  var config = {
      method: "get",
      url: `${API_URL}/forums/posts/${ido}/comments?offset=1&&limit=100000`,
      headers: {
          authorization: `Bearer ` + tok
      },
  };
  axios(config)
      .then(function (response) {
          if (val) {
              setListComment(response?.data?.data?.comments);

          } else {
              setListComment([...dumArr, ...response?.data?.data?.comments]);
          }
      })
      .catch(function (error) {
      });
}

useEffect(() => {
  if (limit0 > 1) {
      mainid();
  }
}, [limit0])

const UpdateCurrent = (index) => {
  if (index === current) {
      setCurrent(-1);
  } else {
      setCurrent(index);
  }
}

  useEffect(() => {
    gettopusers()
  }, [])

  useEffect(() => {
    if (selecttab === 'activesquad') {
      setrankid(true)
    }
    else if (selecttab === 'freesoldier') {
      setrankid(false)
    }
    else {

    }
  }, [selecttab]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    if (rankid != undefined) {
      GetPosts()
      gettopusers()
      getMyPosts()
    }
  }, [rankid])




  const deletemodalopen = (iddd) => {
    setdeleteid(iddd)
    window.$('#exampleModal2').modal('show')
}

const deletetask = () => {
    // console.log("============= we get",id)
    let tok = localStorage.getItem("accessToken");
    // setOpens(true);
    axios
        .delete(
            API_URL + "/forums/posts/" +
            deleteid,
            { headers: { authorization: `Bearer ${tok}` } }
        )
        .then((response) => {
            getMyPosts()
            toast
                .success("Successfully Delete Post", {
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

const detailmodalopen = (iddd) => {
    // console.log("we get id value here is", iddd)
    setdetail(iddd)
    getSingleDetail(iddd)
    window.$('#exampleModal1').modal('show')
}

const getSingleDetail = async (detailid) => {
    // console.log("abdullah======================")
    let tok = localStorage.getItem("accessToken");
    axios
        .get(
            API_URL + "/forums/posts/" +
            detailid,
            { headers: { authorization: `Bearer ${tok}` } }
        )
        .then((response) => {
            setdetailsingle(response.data.data)
        });
}

const UpdateDescription = (val) => {
    let dumObj = detailsingle;
    dumObj.description = val;
    setdetailsingle(dumObj);
    setRend(!rend);
}

const UpdateName = (val) => {
    let dumObj = detailsingle;
    dumObj.title = val;
    setdetailsingle(dumObj);
    setRend(!rend);
}

const UpdateTask = (objj) => {
    let tok = localStorage.getItem("accessToken");
    axios.patch(`${API_URL}/forums/posts/${objj._id}`,
        {
            title: detailsingle.title,
            description: detailsingle.description
        },
        {
            headers: {
                authorization: `Bearer ` + tok
            }
        }
    ).then((response) => {
        getMyPosts()
        toast.success(" Updated Successfully");
        window.$(`#exampleModal1`).modal("hide");
        // Code
    }).catch((error) => {
        // Code
        toast.error(error.response.data.message)
    })
}

     
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
                  {/* <div className="arrows">
                    <img src="\assets\arrow-up.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                    <p className="serial">56</p>
                    <img src="\assets\arrow-down.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                  </div> */}
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
                      {/* {topuser?.map((elem, index) => {
                        return (
                          <div className="inner-item">
                            <h6>Sharjeel</h6>
                            <h6><img src="\assets\memberrank.svg" alt="img" className="img-fluid me-2" />Private</h6>
                          </div>
                        )
                      })} */}
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


      <div className="topicmodal">
        <div class="modal fade" id="exampleModall" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5>Start a New Topic</h5>
                <p>Title</p>
                <input onChange={handleChange} value={allFormData?.title} name="title" type="text" placeholder="Enter Title...." />
                <p>Description</p>
                <textarea
                  onChange={handleChange} value={allFormData?.description} name="description"
                  placeholder="Enter Description Url...."></textarea>
                <div className="twice-btn">
                  <button className="btn-cancel" data-bs-dismiss="modal" aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
                  <button className="btn-topic" onClick={putQuestion}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Start a New Topic</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default ArmyForum