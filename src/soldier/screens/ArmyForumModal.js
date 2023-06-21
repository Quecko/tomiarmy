import React,{useState} from 'react'
import { API_URL } from "../../utils/ApiUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ArmyForumModal = () => {
    const [allFormData, setAllFormData] = useState({
        title: '',
        description: '',
    })

    const handleChange = (event) => {
        allFormData[event.target.name] = event.target.value;
        setAllFormData({ ...allFormData });
    }

    const [loader, setLoader] = useState()
    const putQuestion = () => {
        window.$(`#exampleModall`).modal("hide");
        // setLoader(true);
        // let tok = localStorage.getItem("accessToken");
        // if (allFormData.title !== "" && allFormData.description !== "") {
        //     axios.post(`${API_URL}/forums/posts/`,
        //         {
        //             title: allFormData.title,
        //             description: allFormData.description,
        //             // isForumPost: rankid,
        //         },
        //         {
        //             headers: {
        //                 authorization: `Bearer ` + tok
        //             }
        //         }
        //     ).then((response) => {
        //         // console.log(response)
        //         setLoader(false);
        //         toast.success("Post Added Successfully");
        //         window.$(`#exampleModall`).modal("hide");
        //         // GetPosts("val");
        //         // ClearAlloperation()
        //         // Code
        //     }).catch((error) => {
        //         setLoader(false);       
        //         toast.error(error.response.data.message)
        //     })
        // } else {
        //     toast.error("Please fill all fields")
        // }
    }

    

  return (
    <>
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

export default ArmyForumModal