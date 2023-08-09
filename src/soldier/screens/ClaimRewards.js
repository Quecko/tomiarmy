import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./claim.scss"
import AvailableReward from './AvailableReward';
import RewardProcess from './RewardProcess';
import ClaimedReward from './ClaimedReward';
import { Modal } from 'react-bootstrap';
import { API_URL } from '../../utils/ApiUrl'
import axios from 'axios';
import Signature from "../../hooks/dataSenders/userSign";
import { toast } from 'react-toastify';
import RedeemToken from "../../hooks/dataSenders/redeemTokens";
import { useWeb3React } from '@web3-react/core';

const ClaimRewards = ({squaddetail,GetUserProfiledata }) => {

  const [showprofile, setShowProfile] = useState(false);
  const [claimToken,setClaimToken]=useState('')
  const handleCloseProfile = () => {
    setClaimToken('')
    setShowProfile(false);
  }
  const {userSign}=Signature()
  const { redeemTokenHook } = RedeemToken();

  const handleShowProfile = () => setShowProfile(true);
  const {account}=useWeb3React()

  const [showprofile1, setShowProfile1] = useState(false);
  const handleCloseProfile1 = () => setShowProfile1(false);
  const handleShowProfile1 = () => setShowProfile1(true);

  let tok = localStorage.getItem("accessToken");

  const [loader, setLoader] = useState(false);
  const [transactionHistory,setTransactionHostory]=useState([])
  const getTransactionHistory = async (off) => {

    // let valu = null;
    // if (off) {
    //   valu = off;
    // } else {
    //   valu = 1;
    // }
    // if (account) {
    var config = {
      method: "get",
      url: `${API_URL}/auth/transactions/transaction-history?offset=1&&limit=100`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        setLoader(false);
        // setCount(response.data.data.count)
          setTransactionHostory(response?.data?.data)
        // let arr = Array.from(Array(parseInt(response.data.data.pages)).keys());
        // setPages(arr);
        // setCurrentPage(valu)
      })
      .catch(function (error) {
        setLoader(false);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("user");
        // window.location.assign("/")
        // window.location.reload();
      });
    // }
  }


  const claimTokens = async () => {
    // let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    // setShow(false);
    if(claimToken!=''){
    if (account) {
      const res0 = await userSign(account);
      if (account && res0) {
        axios.defaults.headers.post[
          "Authorization"
        ] = `Bearer ${tok}`;
          var config = {
            method: "post",
            url: `${API_URL}/auth/claims/claim-tomi`,
            data: {
              withdrawalTomiAmount: claimToken,
              sign: res0
            }
          };
          axios(config)
          .then((res) => {
            //  if(res?.statusCode==201){
               redeemTransaction(res?.data?.data)
            //  }
          })
          .catch((err) => {
           
            
          });
      }
    }
    else {
      toast.error('Wallet Not Connected', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  }
  else{
    toast.error("Please enter claim amount.");
  }
  };


  const redeemTransaction = async (data) => {
    console.log('data',data);
    if (account && claimToken) {
      try {
        // setLoader(true);
        console.log('data inn  sve',data?.duration, data?.amount, data?.v, data?.r, data?.s);
        let res = await redeemTokenHook(data?.duration, data?.amount, data?.v, data?.r, data?.s);
        if (res) {
          console.log("redeem conttract res: ", res);
          // trxAPI(data?.transactionId);
        }
      } catch (e) {
        console.log("error: ", e);
        // setLoader(false);
      }
    }
  };

  const trxAPI = async (id) => {
    let val = localStorage.getItem("accessToken");

    var config = {
      method: "patch",
      url: `${API_URL}/auth/transactions/${id}`,
      data: {
        srcTxId: id,
      },
      headers: {
        Authorization: "Bearer " + val,
      },
    };
    axios(config)
      .then(function (res) {
        console.log("trx api res: ", res?.data);
        const resData = res?.data?.data;
        setLoader(false);
        getTransactionHistory()
        GetUserProfiledata()
        setLoader(false)
        handleCloseProfile();
        toast.success("Your claim token Successfully");
        //   setPurchase(true);
      })
      .catch(function (error) {
        setLoader(false);
      });
  };


  
  return (
    <>
     <div className="formobile-heading d-none display-block-in-mobile">
        <div className="inner-heading">
          <h6>Claim Rewards</h6>
          <p>claim you rewards</p>
        </div>
      </div>
      <section className="claim-section">
        <div className="upper-div">
          {/* <div className="parent">
            <div className="left">
              <div className="imgs">
                <img src="\assets\claim-img1.png" alt="img" className='img-fluid' />
              </div>
              <div className="inner-text">
                <p className='claim-text'>Unclaimed Points</p>
                <h6>50,000 <span>~500 TOMI</span></h6>
                <p className='claim-text1'>1 Point = 0.01 TOMI</p>
              </div>
            </div>
            <div className="right">
              <button onClick={handleShowProfile}>Claim</button>
            </div>
          </div> */}
          <div className="parent">
            <div className="left">
              <div className="imgs">
                <img src="\assets\claim-img1.png" alt="img" className='img-fluid' />
              </div>
              <div className="inner-text">
              <p className='claim-text'>Unclaimed TOMI</p>
                <h6>{squaddetail?.tomiTokens}</h6>
                
              </div>
            </div>
            <div className="right">
              <button  onClick={handleShowProfile}>Claim</button>
            </div>
          </div>
        </div>
        {/* <Tabs
          defaultActiveKey="availablereward"
          id="uncontrolled-tab-example"
          className="opeartions-tab border-grad1"
        >
          <Tab eventKey="availablereward" title="My Tasks Rewards">
            <AvailableReward />
          </Tab>
          <Tab eventKey="claimed" title="Squad tasks Rewards">
            <ClaimedReward />
          </Tab>
        </Tabs> */}
        <AvailableReward/>
      </section>

      <Modal className='detailmodal claimrewad-modal' show={showprofile} onHide={handleCloseProfile} centered>
        <Modal.Header closeButton>
          <Modal.Title>
          Claim Reward
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <h6>How much points you want to claim right now?</h6>
            <div className="option-field">
            <div className="inner-text">
            <p className="left-text">
              Points
              </p>
              <p className="right-text">
              Balance: <span>{squaddetail?.tomiTokens} Points</span>
              </p>
            </div>
              <div className="input-inner">
                <input type="number" value={claimToken} onChange={(e)=>setClaimToken(e.target.value)} placeholder='Enter Number of Points....' />
                <a onClick={()=>setClaimToken(squaddetail?.tomiTokens)}>MAX</a>
              </div>
            </div>
          </div>
          <div className='endbtn'>
            <button className="btn-blackk" onClick={handleCloseProfile}><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
            <button className="btn-pinkk" onClick={() => {
              claimTokens()
            }}
            >
              <img src='\assets\upload-icon.svg' alt='img' className='img-fluid' /> Claim</button>
          </div>
        </Modal.Body>
      </Modal>
      {/* <Modal className='detailmodal claimrewad-modal claimed-reward' show={showprofile1} onHide={handleCloseProfile1} centered>
        <Modal.Header closeButton>
          <Modal.Title>
          Claim Reward
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div className="body-claimed-reward">
            <h4>500 TOMI</h4>
            <p>Claimed successfully. check your wallet to see balance.</p>
          </div>
          <div className='endbtn'>
            
            <button className="btn-pinkk"
            >
               Okay</button>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default ClaimRewards