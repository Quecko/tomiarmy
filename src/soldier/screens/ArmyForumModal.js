import React, { useState } from 'react'
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const ArmyForumModal = ({ showForumModal, setShowForumModal, setforumkdetail1, forumdetail1, getDataOperation, operationId }) => {

  const handleCloseForum = () => setShowForumModal(false);
  const [loader, setLoader] = useState()
  const [limit, setLimit] = useState(1);
  const [post, setPost] = useState([]);
  const [rankid, setrankid] = useState();
  

  const [allFormData, setAllFormData] = useState({
    title: '',
    description: '',
  })
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
        setLoader(false);
        toast.success("Post Added Successfully");
        GetPosts();
        // window.$(`#exampleModall`).modal("hide");
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

  const GetPosts = () => {
    // setArmy([])
    let tok = localStorage.getItem("accessToken");
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
        if (response?.data?.data?.length === 0) {
          setLimit(limit - 1);
        }
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
  


  return (
    <>
      {/* create new post or forum modal */}
      <Modal className='topic-new-modal' show={showForumModal} onHide={handleCloseForum} centered>
      <Modal.Header closeButton>
                    <Modal.Title>Start a New Topic</Modal.Title>
                </Modal.Header>
        <Modal.Body>
          <p>Title</p>
          <input onChange={handleChange} value={allFormData?.title} name="title"  type="text" placeholder="Enter Title...." />
          <p>Description</p>
          <textarea
            onChange={handleChange} value={allFormData?.description} name="description"
            placeholder="Enter Description Url...."></textarea>
          <div className="twice-btn">
            <button className="btn-cancel" onClick={handleCloseForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
            <button className="btn-topic" onClick={putQuestion}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Start a New Topic</button>
          </div>
        </Modal.Body>
      </Modal>
      {/*  edit post or forum modal */}
      <Modal className='topic-new-modal' onHide={handleCloseForum} centered>
        <Modal.Body>
          <h5>Edit Your Post</h5>
          <p>Title</p>
          <input onChange={handleChange} value={allFormData?.title} name="title" type="text" placeholder="Enter Title...." />
          <p>Description</p>
          <textarea
            onChange={handleChange} value={allFormData?.description} name="description"
            placeholder="Enter Description Url...."></textarea>
          <div className="twice-btn">
            <button className="btn-cancel" onClick={handleCloseForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
            <button className="btn-topic" onClick={putQuestion}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Update</button>
          </div>
        </Modal.Body>
      </Modal>
      {/*  delete post or forum modal */}
      <Modal className='topic-new-modal' onHide={handleCloseForum} centered>
        <Modal.Body>
          <h5>Are you sure you want to <br /> delete?</h5>
          <div className="twice-btn">
            <button className="btn-cancel" onClick={handleCloseForum} aria-label="Close"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
            <button className="btn-topic" onClick={putQuestion}> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Delete</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ArmyForumModal