import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import moment from 'moment'
import axios from 'axios';
import { API_URL } from '../../utils/ApiUrl';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';

const AllOperationTaskModal = ({ showtask1, setShowtask1, settaskdetail1, taskdetail1, getDataOperation, operationId }) => {

    const handleClosetask = () => setShowtask1(false);
    const [loader, setLoader] = useState(false);
    const { account } = useWeb3React()

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [profilePicture, setProfilePicture] = useState(null);
    const setProfilePic = (evt) => {
        setProfilePicture(evt.target.files[0]);
    }

    const [powUrl, setPowUrl] = useState("");
    const [opTask, SetOpTask] = useState(null);


    // const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // const handleInputChange = (e, index) => {
    //   const { name, value } = e.target;
    //   const list = [...inputList];
    //   list[index][name] = value;
    //   setInputList(list);
    // };
    // const handleRemoveClick = index => {
    //   const list = [...inputList];
    //   list.splice(index, 1);
    //   setInputList(list);
    // };
    // const handleAddClick = () => {
    //   setInputList([...inputList, { firstName: "", lastName: "" }]);
    // };


    const [inputs, setInputs] = useState({})

    const SubmitWork = async () => {
        setLoader(true);
        let dumObj = {};
        let tok = localStorage.getItem("accessToken");
        let dumArr = []
        if (multiplemages[0]?.multorimg != '' || powUrl !== "") {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            var t = powUrl;
            var m = '';
            if (t === undefined) {
            }
            else if (t.match(regex)) {
                m = powUrl;
            }
            else {
                var t = powUrl;
                m = 'https://' + t
            }
            let dumarr = []
            if (multiplemages[0]?.multorimg != '')
                for (let i = 0; i < multiplemages.length; i++) {
                    if (multiplemages[i]?.multorimg != '') {
                        dumarr.push(multiplemages[i]?.multorimg)
                    }
                }
            dumObj.image = dumarr;
            dumObj.name = taskdetail1?.name;
            dumObj.description = taskdetail1?.description

            dumObj.url = m;
            dumArr = [dumObj];
        }
        var data = ({
            taskProofs: dumArr,
        });
        var config = {
            method: "post",
            url: `${API_URL}/tasks/operations/${operationId?._id}/work-proof`,
            headers: {
                "Authorization": `Bearer ` + tok
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // setLoader(false);
                // handleClosepow();
                // setOperations([]);
                // GetOpts();
                // setShowdetail0(false)
                // setShowdetail(false);
                getDataOperation()
                setShow1(false)
                setShow2(true)
                setPowUrl('')
                // toast.success("Operation task submitted successfully")
                setmultiplemages([
                    {
                        multorimg: ""
                    }
                ])
            })
            .catch(function (error) {
                setLoader(false);
                toast.error(error.response.data.message);
            });
        setLoader(false);
        // setRend(!rend);
    }

    const [multiplemages, setmultiplemages] = useState
        ([
            {
                multorimg: ""
            }
        ]);

    //  Task Here Start
    const handleInputChange = async (e, index) => {
        const file = e.target.files[0];
        if (file.size >= 2872139) {
            toast.error("File cannot be greater than 3mbs")
        } else {
            let tok = localStorage.getItem("accessToken");
            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${tok}`;
            var data = new FormData();
            data.append("image", file);
            if (file) {
                const responses = await axios.post(
                    `${API_URL}/tasks/metadata/upload-image`,
                    data
                );
                const list = [...multiplemages];
                list[index].multorimg = responses?.data?.url;
                setmultiplemages(list);
                e.target.value = null;
            }
        }
    };

    const handleRemoveClick = index => {
        const list = [...multiplemages];
        list.splice(index, 1)
        setmultiplemages(list);
        console.log(list)
    };
    const handleAddClick = () => {
        setmultiplemages([...multiplemages,
        {
            multorimg: ""
        }
        ]);
    };

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    var result = taskdetail1?.attachment?.split("_")?.pop();

    return (
        <>
            <Modal className='detailmodal' show={showtask1} onHide={handleClosetask} centered>
                <Modal.Header closeButton>
                    <Modal.Title>task details opeartions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innercard'>
                        <p className='head'>Task Title</p>
                        <h6 className='head1'>{taskdetail1?.name}</h6>
                        <h3 className='discription'>Task Description</h3>
                        <h6 className='head1'>{taskdetail1?.description}</h6>
                        {/* <div className='parent mt-3'>
              <div className='left'>
                <p className='link'>Start Date</p>
                <h6 className='point'>{moment(taskdetail1?.createdate).format("DD-MM-YYYY")}</h6>
              </div>
              {taskdetail1?.expirationDate &&
                <div className='right'>
                  <p className='link'>End Date</p>
                  <h6 className='point'>{moment(taskdetail1?.expirationDate).format("DD-MM-YYYY")}</h6>
                </div>
              }
            </div> */}
                    </div>

                    <div className='endbtn'>
                        <button className='btn-blackk' onClick={() => handleClosetask()}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                        <button className={`btn-pinkk ${taskdetail1?.taskSubmitted || taskdetail1?.taskApproval ? "sadascav" : ""}`} onClick={() => {
                            handleShow1();
                            handleClosetask();
                        }}>Submit proof of work</button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='heading'>
                            <h4>Proof of work Operation</h4>
                            <p>upload at least one of the below items</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='maininput'>
                        <p>POW Url</p>
                        <input type='text' onChange={(e) => setPowUrl(e.target.value)} placeholder='Enter POW Url....' />
                    </div>
                    {/* <div className="upload-parent">
            <p className='uehyuj'>Upload Proof of Work Image</p>
            <div className="upload">
              {
                profilePicture ? <label htmlFor="upload">
                  {" "}
                  <img
                    src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                    alt="img"
                    className="img-fluid"
                  />
                </label> : <label htmlFor="upload">
                  {" "}
                  <img
                    src="\uploadimage.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <p className='dropimage'>Drop your image here, or<span>browse</span> </p>
                  <p className='support'>Supports: JPG, JPEG, PNG</p>
                </label>
              }
              <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />
            </div>
            <div className="others-upload">
              {multiplemages?.map((x, i) => {
                return (
                  <>
                    <div className="upload">
                      <label htmlFor="upload">+</label>
                      {inputList.length !== 1 && <button
                        className="btn-remove"
                        onClick={() => handleRemoveClick(i)}>x</button>}
                    </div>
                    {inputList.length - 1 === i && inputList.length < 4 ? 
                      <button onClick={handleAddClick} className='btn-addmore'>Add More</button> : ""}
                  </>
                );
              })}
            </div>
            </div> */}
                    <div className="sfdsfadsfdfdsf">
                        {multiplemages?.map((x, i) => {
                            return (
                                <div key={i} className={i > 0 ? "sdfdsfdsf" : " sdfdsfdsfdfdf"}>
                                    <div className="upload-parent">
                                        <div className={i > 0 ? "upload dfhsdfhdshdsfh" : "upload  dfhsdfhdshdsfhdfdf"}>
                                            {
                                                x?.multorimg ? <label htmlFor={i} className="labelimagess">
                                                    {" "}
                                                    <img
                                                        src={x?.multorimg ? x?.multorimg : ""}
                                                        alt="img"
                                                        className="img-fluid"
                                                    />
                                                </label> : <label htmlFor={i}>
                                                    {" "}
                                                    <img
                                                        src="\generalassets\icons\upload-icon.svg"
                                                        alt="img"
                                                        className="img-fluid"
                                                    />
                                                    {i > 0 ? "" : <h6><label htmlFor="upload">browse</label></h6>}
                                                    {i > 0 ? "" : <p className="text">Supports: JPG, JPEG, PNG</p>}
                                                </label>
                                            }
                                            <input type="file"
                                                accept=".png, .jpeg, .jpg"
                                                className="d-none" id={i} onChange={e => handleInputChange(e, i)} />
                                        </div>
                                        <div className="ergergkmvurvldscm">
                                            {multiplemages.length !== 1 && <button
                                                className="jsdbfsdbfdsbfh btn-remove"
                                                onClick={() => handleRemoveClick(i)}>x</button>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {multiplemages?.map((x, i) => {
                        return (
                            <div>
                                {multiplemages?.length >= 5 ?
                                    ""
                                    :
                                    <div className="btn-box">
                                        {multiplemages.length - 1 === i && <button className="btn-addmore" onClick={handleAddClick}>
                                            <p className="mb-0 dsfdshbfdshsdgsdkzcjxvk">{i > 0 ? 'Add More Images' : 'Add More Images'}</p>
                                        </button>}
                                    </div>
                                }
                            </div>
                        );
                    })}

                    <div className='endbtn'>
                        <button className='btn-blackk'><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                        <button className='btn-pinkk'
                            onClick={SubmitWork}
                        ><img src='\send-square.svg' alt='img' className='img-fluid' />Submit proof of work</button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        submit proof of work
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <div className='arrowimg'>
                        <img src='\arrowmodal.svg' alt='img' className='img-fluid' />
                        <p>proof of work successfully submitted</p>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default AllOperationTaskModal
