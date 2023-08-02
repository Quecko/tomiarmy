import React, { useEffect, useState } from "react";
import "./armyforum.scss"
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from "moment";
import { Modal } from 'react-bootstrap';
import { TokenExpiredOrNot } from "../../utils/TokenExpiredOrNot";
const ArmyForum = () => {
  let tok = localStorage.getItem("accessToken");
  const [topuser, settopuser] = useState([]);
  const [ListComment, setListComment] = useState([]);
  const [post, setPost] = useState([]);
  const [commentid, setcommentid] = useState();
  const [limit, setLimit] = useState(1);
  const [limit0, setLimit0] = useState(5);
  const [rend, setRend] = useState(false);
  const [comment, setcomment] = useState('')
  const [rankid, setrankid] = useState();
  const [loader, setLoader] = useState()
  const [current, setCurrent] = useState(-1);
  const [deleteid, setdeleteid] = useState()
  const [detailsingle, setdetailsingle] = useState()
  const [detail, setdetail] = useState()
  const [showForumModal, setShowForumModal] = useState(false);
  const handleCloseForum = () => setShowForumModal(false);
  const [showForumDeleteModal, setShowForumDeleteModal] = useState(false);
  const handleCloseDeleteForum = () => setShowForumDeleteModal(false);
  const [showForumEditModal, setShowForumEditModal] = useState(false);
  const handleCloseEditForum = () => setShowForumEditModal(false);
  const [loading, setLoading] = useState(false);
  let indexvalue = localStorage.getItem("indexvalue");
  const [allFormData, setAllFormData] = useState({
    title: '',
    description: '',
  })
  const ClearAll = () => {
    setAllFormData({
      title: '',
      description: '',
    })
  }
  const [selecttab, setselecttab] = useState('Active Squad')
  const handleChange = (event) => {
    allFormData[event.target.name] = event.target.value;
    setAllFormData({ ...allFormData });
  }
  //  create new forum
  const putQuestion = () => {
    setLoader(true);
    // let t=TokenExpiredOrNot()
    // console.log('t',t)
    // if(t){
    if (allFormData.title !== "" && allFormData.description !== "") {
      if (!loading) {
        setLoading(true)
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
          method: "post",
          url: `${API_URL}/forums/posts/`,
          data: {
            title: allFormData.title,
            description: allFormData.description,
            isForumPost: rankid,
          },
        };
        axios(config)
          .then(async (response) => {
            setLoader(false);
            toast.success("Post Added Successfully");
            getMyPosts()
            handleCloseForum()
            ClearAll()
            // window.$(`#exampleModall`).modal("hide");
            // ClearAlloperation()
            // Code
          }).catch((error) => {
            setLoader(false);
            toast.error(error.response.data.message)
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      toast.error("Please fill all fields")
    }
    // }
    // else{
    //   localStorage.clear()
    //   window.location.assign('/')
    // }
  }
  // get top user or member
  const gettopusers = async () => {

    var config = {
      method: "get",
      url: `${API_URL}/forums/top-user?offset=1&&limit=25`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        settopuser(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //  get myPost
  const getMyPosts = () => {
    var config = {
      method: "get",
      url: `${API_URL}/forums/posts/my-posts?offset=1&&limit=100&&forumPost=false`,
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
  const createComment = (item) => {
    // setcountss(0)
    // setLoader(true);
    if (comment != '') {
      if (!loading) {
        setLoading(true);
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
        var config = {
          method: "post",
          url: `${API_URL}/forums/posts/${item?._id}/comments`,
          data: {
            content: comment
          },
        }
        axios(config)
          .then(async (response) => {
            let dumArr = post;
            let dumObj = item;
            dumObj.noOfComments = dumObj.noOfComments + 1;
            let findIndex = dumArr.findIndex((ip) => {
              return ip._id === dumObj._id;
            })
            dumArr[findIndex] = dumObj;
            setPost(dumArr);
            setLoader(false);
            toast.success("Comment Created Successfully");
            mainid(commentid, "add");
            commentnull();
            setcomment('');
          }).catch((error) => {
            setLoader(false);
            toast.error(error.response.data.message)
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  }

  const GetPosts = () => {
    // setArmy([])
    var config = {
      method: "get",
      url: `${API_URL}/forums/posts?offset=${limit}&&limit=10&&forumPost=false`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // getMyPosts()
        // setArmy(response?.data?.data);
        // if (response?.data?.data?.length === 0) {
        //   setLimit(limit - 1);
        // }
        // if (val) {
        // setArmy(response?.data?.data?.post);
        setPost(response?.data?.data?.post);
        // } else {
        //   setArmy([
        //     ...army,
        //     ...response?.data?.data?.post,
        //   ]);
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  // useEffect(() => {
  //   if (limit > 1) {
  //     GetPosts();
  //   }
  // }, [limit,indexvalue])

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
  }, [rankid])

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
      // GetPosts()
      gettopusers()
      // getMyPosts()
    }
  }, [rankid])


  const deletemodalopen = (iddd) => {
    setdeleteid(iddd)
    setShowForumDeleteModal(true)
  }

  const deletetask = () => {
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
        handleCloseDeleteForum()
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

  const UpdateTask = (objj) => {
    if (!loading) {
      setLoading(true)
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
        toast.success("Updated successfully");
        setShowForumEditModal(false)

        // Code
      }).catch((error) => {
        // Code
        toast.error(error.response.data.message)
      })
        .finally(() => {
          setLoading(false);
        });
    }
  }


  const detailmodalopen = (iddd) => {
    setdetail(iddd)
    getSingleDetail(iddd)
    setShowForumEditModal(true)
  }

  const getSingleDetail = async (detailid) => {
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

  const handleChange1 = (event) => {
    setcomment(event.target.value);
  }


  useEffect(() => {
    if (indexvalue === '13') {
      GetPosts()
      setrankid('false')
    }
    else {
      getMyPosts()
      setrankid('true')
    }
  }, [indexvalue])

  return (
    <>
      <div className="formobile-heading shsvhsvhsdhsd  display-block-in-mobile">
        <div className="inner-heading soldier-name">
          <h6>{indexvalue == 12 ? 'My Post' : 'Army Forum'} </h6>
          <p>Engage with your {indexvalue == 12 ? 'post' : 'army'}</p>
        </div>
        <button onClick={() => setShowForumModal(true)} className="create-squad-btn gsvvscvtycsvc" >
          <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
          Start a new topic
        </button>
      </div>
      {/* {indexvalue==12 ? */}
      <div className="topicwrapper">
        <section className="topics">
          <div className="containersss p-0">
            <div className="row fordirection">
              <div className="col-xl-9 col-12 p-0">
                {/* <div className="arrows">
                    <img src="\assets\arrow-up.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                    <p className="serial">56</p>
                    <img src="\assets\arrow-down.png" alt="img" className="arrow" style={{width: "25px" , height: "25px"}} />
                  </div> */}
                {post?.map((elem, index) => {
                  return (
                    <section className="maincmntsection border-grad1">
                      <section className="first">
                        <div className="saying">
                          <div className="texts">
                            <h4>{elem?.title}</h4>
                            <p className="upperpara">
                              {elem?.description}</p>
                          </div>
                          <div className="lowercontent">
                            <div className="ranked">
                              <h4>Posted by</h4>
                              <div className="inner-parent">
                                <div className="inner-side">
                                  <h6><img src="\assets\profile-icon.svg" alt="img" className="rankimg me-2" />{elem?.author?.name} </h6>
                                </div>
                                <div className="inner-side">
                                  <h6><img src="\assets\private.svg" alt="img" className="rankimg" />
                                    {/* Private */}
                                  </h6>
                                  <span>{moment(elem?.createdAt).fromNow()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="twice-elements">
                              {indexvalue == 12 &&
                                <>
                                  <button className="comments"
                                    onClick={() => detailmodalopen(elem?._id)}
                                  >
                                    <p>Edit</p>
                                  </button>
                                  <button className="comments"
                                    onClick={() => deletemodalopen(elem?._id)}
                                  >
                                    <p>Delete</p>
                                  </button>
                                </>
                              }
                              <div className="comments"  >
                                <img src="\assets\comment.svg" alt="img" onClick={() => { mainid(elem?._id); UpdateCurrent(index) }} className="cmnt" data-toggle="collapse" href={`#${index}`} role="button" aria-expanded="false" aria-controls="collapseExample" />
                                <p>{elem?.noOfComments}+</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {current == index &&
                        <section className="comments">
                          <div className="maincomment">
                            <h1 className="headcmnt">Comments</h1>
                            {ListComment?.slice(0, limit0)?.map((elem, index) => {
                              return (
                                <div key={index} className="innermain">
                                  <div className="innerprofile">
                                    <div className="imageset">
                                      <img src={elem?.author?.profileImage} alt="img" className="profileimg" />
                                    </div>
                                    <div className="textprofile">
                                      <h6>{elem?.author?.name}</h6>
                                      <p>{moment(elem?.createdAt)?.fromNow()}</p>
                                    </div>
                                  </div>
                                  <p>{elem?.content} </p>
                                </div>
                                // <div key={index} className="innermain">
                                //     <div className="innerprofile">
                                //         <div className="imageset">
                                //             <img src={elem?.author?.profileImage} style={{ borderRadius: "500px", height: 45, width: 45 }} alt="img" className="profileimg" />
                                //         </div>
                                //         <div className="textprofile">
                                //             <h6>{elem?.author?.name}</h6>
                                //             <p>{moment(elem?.createdAt).fromNow()}</p>
                                //         </div>
                                //     </div>
                                //     <p>{elem?.content}</p>
                                // </div>
                              )
                            })}
                          </div>
                          <div className="forcmnt">
                            <h5>Leave a comment</h5>
                            <p>Comment</p>
                            <textarea onChange={handleChange1} value={comment} placeholder="Write comment"></textarea>
                            <button onClick={() => createComment(elem)} disabled={loading}>{loading ? 'Post Comment...' : 'Post Comment'}</button>
                          </div>
                        </section>
                      }
                    </section>
                  )
                })}
                {/* </section> */}
              </div>
              <div className='col-xl-3 col-12 pe-0 padd-sm'>
                <div className='members-section border-grad1 display-none-in-mobile'>
                  <div className="tophead">
                    <h6>Members <span>({topuser?.length})</span></h6>
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
                      {topuser?.map((elem) => {
                        return (
                          <div className="inner-item">
                            <h6>{elem?.nickName}</h6>
                            <h6>
                              <img src={elem?.rank?.icon} alt="img" className="img-fluid me-2" style={{ width: "34px", height: "34px" }} />
                              {elem?.rank?.name}
                            </h6>
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* :''} */}



      {/* create new post or forum modal */}
      {/* <div className="topicmodal">
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
                  placeholder="Enter Your Description...."></textarea>
                <div className="twice-btn">
                  <button className="btn-cancel" data-bs-dismiss="modal" aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
                  <button className="btn-topic" onClick={putQuestion}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Start a New Topic</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* delete post */}
      {/* <div className="topicmodal">
        <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5>Are you sure you want to <br /> delete?</h5>
                <div className="twice-btn">
                  <button className="btn-cancel" data-bs-dismiss="modal" aria-label="Close">
                    <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" />
                    Cancel
                  </button>
                  <button className="btn-topic" onClick={deletetask}>
                    <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                    Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <>
        {/* create new post or forum modal */}
        <Modal className='topic-new-modal' show={showForumModal} onHide={handleCloseForum} centered>
          <Modal.Header closeButton>
            <Modal.Title>Start a New Topic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Title</p>
            <input onChange={handleChange} value={allFormData?.title} name="title" type="text" placeholder="Enter Title...." />
            <p>Description</p>
            <textarea
              onChange={handleChange} value={allFormData?.description} name="description"
              placeholder="Enter Your Description...."></textarea>
            <div className="twice-btn">
              <button className="btn-cancel" onClick={handleCloseForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
              <button className="btn-topic" onClick={putQuestion} disabled={loading}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />{loading ? 'Start a New Topic...' : 'Start a New Topic'}</button>
            </div>
          </Modal.Body>
        </Modal>
        {/*  edit post or forum modal */}
        <Modal className='topic-new-modal' show={showForumEditModal} onHide={handleCloseEditForum} centered>
          <Modal.Body>
            <h5>Edit Your Post</h5>
            <p>Title</p>
            <input
              onChange={(e) => UpdateName(e.target.value)} value={detailsingle?.title} name="title"
              type="text" placeholder="Enter Title...." />
            <p>Description</p>
            <textarea
              onChange={(e) => UpdateDescription(e.target.value)} value={detailsingle?.description} name="description"
              placeholder="Enter Your Description...."></textarea>
            <div className="twice-btn">
              <button className="btn-cancel" onClick={handleCloseEditForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
              <button className="btn-topic" onClick={() => UpdateTask(detailsingle)} disabled={loading}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> {loading ? 'Updating' : 'Update'}</button>
            </div>
          </Modal.Body>
        </Modal>
        {/*  delete post or forum modal */}
        <Modal className='topic-new-modal' show={showForumDeleteModal} onHide={handleCloseDeleteForum} centered>
          <Modal.Body>
            <h5>Are you sure you want to <br /> delete?</h5>
            <div className="twice-btn">
              <button className="btn-cancel" onClick={handleCloseDeleteForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
              <button className="btn-topic" onClick={deletetask}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Delete</button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </>
  )
}

export default ArmyForum