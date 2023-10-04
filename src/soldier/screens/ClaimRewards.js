import React, { useEffect, useState } from 'react'
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
import Loader from '../../hooks/loader';


const ClaimRewards = ({ squaddetail, GetUserProfiledata }) => {

  const [showprofile, setShowProfile] = useState(false);
  const [claimToken, setClaimToken] = useState('')
  const handleCloseProfile = () => {
    setClaimToken('')
    setShowProfile(false);
  }
  const { userSign } = Signature()
  const { redeemTokenHook } = RedeemToken();

  const handleShowProfile = () => setShowProfile(true);
  const { account } = useWeb3React()

  const [signModalOpen, setSignModalOpen] = useState(false)
  const handleCloseSignModal = () => setSignModalOpen(false)

  const [showProgressModal, setShowProgressModal] = useState(false);
  const handleCloseProgressModal = () => setShowProgressModal(false)

  // const [showProgressModal1, setShowProgressModal1] = useState(false);
  // const handleCloseProgressModal1 = () => setShowProgressModal1(false)

  const [showSuccessModal, setShowSuccessdModl] = useState(false);
  const handleClosSuccessModal = () => setShowSuccessdModl(false)

  const [showRejectedModal, setShowRejectedModl] = useState(false);
  const handleCloseRejectedModal = () => {
    setShowRejectedModl(false)
    // window.location.reload();
    GetUserProfiledata()
  }

  let tok = localStorage.getItem("accessToken");

  const [loader, setLoader] = useState(false);
  const [transactionHistory, setTransactionHostory] = useState([])

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

      });
    // }
  }

  useEffect(() => {
    getTransactionHistory()
  }, [])



  const claimTokens = async () => {
    // let tok = localStorage.getItem("accessToken");
    // let wall = localStorage.getItem("wallet");
    // setShow(false);
    if (claimToken != '') {
      if (account) {
        // setLoader(true)
        handleCloseProfile()
        setSignModalOpen(true)
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
            .then(async (res) => {
              //  if(res?.statusCode==201){
              setLoader(true)
              setSignModalOpen(false)
              setShowProgressModal(true)
              redeemTransaction(res?.data?.data)
              //  }
            })
            .catch((err) => {
              setLoader(false)
              setShowProgressModal(false)
              setShowRejectedModl(true)

            });
        }
        else {
          setSignModalOpen(false)
          setShowProgressModal(false)
        }
      }
      else {
        toast.error('Wallet Not Connected', {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    }
    else {
      toast.error("Please enter claim amount.");
    }
  };


  const redeemTransaction = async (data) => {
    if (account && claimToken) {
      try {
        let res = await redeemTokenHook(data?.duration, data?.amount, data?.v, data?.r, data?.s)
        // setShowProgressModal(false)
        // setShowProgressModal1(true)
        if (res) {
          trxAPI(data?.transactionId, res?.transactionHash);
        }
      } catch (e) {
        console.log("error: ", e);
        setLoader(false);
        setShowProgressModal(false)
        setShowRejectedModl(true)
        handleCloseProfile()
        getTransactionHistory()
      }
    }
  };

  const trxAPI = async (transactionId, srcTxId) => {
    let val = localStorage.getItem("accessToken");
    var config = {
      method: "patch",
      url: `${API_URL}/auth/transactions/${transactionId}`,
      data: {
        srcTxId: srcTxId,
      },
      headers: {
        Authorization: "Bearer " + val,
      },
    };
    axios(config)
      .then(function (res) {
        const resData = res?.data?.data;
        setLoader(false);
        getTransactionHistory()
        GetUserProfiledata()
        handleCloseProfile();
        handleCloseProgressModal()
        handleCloseRejectedModal()
        // setShowProgressModal1(false)
        setShowSuccessdModl(true)
        // toast.success("Your claim token Successfully");
        //   setPurchase(true);
      })
      .catch(function (error) {
        setLoader(false);
        handleCloseProfile();
        toast.error("Your token not claimed");
      });
  };



  return (
    <>
      {/* {loader && <Loader />} */}
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
            <div className="right kjfashdfviuahgewugfqewufgufi">
              {squaddetail?.tomiTokens >= 5 ?
                (
                  ""
                )
                :
                (
                  <h5>Claimed amount must be greater or equal to 5 tomi </h5>
                )
              }
              <button className={squaddetail?.tomiTokens >= 5 ? "" : "asdfasdasjxhasjcbvewgyuewiuzbxasiucb"} onClick={handleShowProfile}>Claim</button>
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
        <AvailableReward transactionHistory={transactionHistory} />
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
                <input type="number" value={claimToken} onChange={(e) => setClaimToken(e.target.value)} placeholder='Enter Number of Points....' />
                <a onClick={() => setClaimToken(squaddetail?.tomiTokens)}>MAX</a>
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

      {/* modal for transaction in progress for sign step 1 */}

      <Modal className='detailmodal claimrewad-modal vergdsgew' show={signModalOpen} onHide={handleCloseSignModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Transaction in progress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <div className='ascs'>
              <img src='/clockinprogress.png' />
            </div>
            <div className='devervs'>
              <h6 className=''><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>STEP 1: SIGN THE TRANSACTION FROM YOUR WALLET</span></h6>
              <h6 className='axasaas'><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>STEP 2: COMFIRM THE TRANSACTION FROM YOUR WALLE</span></h6>
              <h6 className='axasaas'><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>SUCCESS! YOUR FUNDS HAVE BEEN SENT TO YOUR WALLET</span></h6>
            </div>
            <div className='sacwscew'>
              <div >
                <img src='/warning123.png' />
              </div>
              <h6>please don't reject the transaction and do not refresh the page.  otherwise you will lose TOMI TOKENS</h6>
              <div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal for transaction in progress for transaction step 2 */}

      <Modal className='detailmodal claimrewad-modal vergdsgew' show={showProgressModal} onHide={handleCloseProgressModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Transaction in progress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <div className='ascs'>
              <img src='/clockinprogress.png' />
            </div>
            <div className='devervs'>
              <h6 className=''><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/uparrow_bsuevm.png' /> <span>STEP 1: SIGN THE TRANSACTION FROM YOUR WALLET</span></h6>
              <h6 className='' style={{ marginTop: '5px' }}><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>STEP 2: COMFIRM THE TRANSACTION FROM YOUR WALLE</span></h6>
              <h6 className='axasaas'><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>SUCCESS! YOUR FUNDS HAVE BEEN SENT TO YOUR WALLET</span></h6>
            </div>
            <div className='sacwscew'>
              <div >
                <img src='/warning123.png' />
              </div>
              <h6>please don't reject the transaction and do not refresh the page.  otherwise you will lose TOMI TOKENS</h6>
              <div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal for transaction in progress for transaction in proceess  step 3 */}
      {/* 
        <Modal className='detailmodal claimrewad-modal vergdsgew' show={showProgressModal1} onHide={handleCloseProgressModal1} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Transaction in progress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <div className='ascs'>
              <img src='/clockinprogress.png' />
            </div>
            <div className='devervs'>
              <h6 className=''><img src='/uparrow.png' /> <span>STEP 1: SIGN THE TRANSACTION FROM YOUR WALLET</span></h6>
              <h6 className='' style={{marginTop:'5px'}}><img src='/uparrow.png' /> <span>STEP 2: COMFIRM THE TRANSACTION FROM YOUR WALLE</span></h6>
              <h6 className='axasaas'><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/dimarrow_mfa3ps.svg' /> <span>SUCCESS! YOUR FUNDS HAVE BEEN SENT TO YOUR WALLET</span></h6>
            </div>
            <div className='sacwscew'>
              <div >
                <img src='/warning123.png' />
              </div>
              <h6>please don't reject the transaction and do not refresh the page.  otherwise you will lose TOMI TOKENS</h6>
              <div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}

      {/* modal for transaction in progress for success step 4 */}

      <Modal className='detailmodal claimrewad-modal vergdsgew' show={showSuccessModal} onHide={handleClosSuccessModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Transaction in progress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <div className='ascs'>
              <img src='/Groupsquad.svg' />
            </div>
            <div className='devervs'>
              <h6 className=''><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/uparrow_bsuevm.png' /> <span>STEP 1: SIGN THE TRANSACTION FROM YOUR WALLET</span></h6>
              <h6 className='' style={{ marginTop: '5px' }}><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/uparrow_bsuevm.png' /> <span>STEP 2: COMFIRM THE TRANSACTION FROM YOUR WALLE</span></h6>
              <h6 className='' style={{ marginTop: '5px' }}><img src='https://res.cloudinary.com/drt6vurtt/image/upload/v1696331738/uparrow_bsuevm.png' /> <span>SUCCESS! YOUR FUNDS HAVE BEEN SENT TO YOUR WALLET</span></h6>
            </div>
            <div className='ascw_btn_btn'>
              <button onClick={() => handleClosSuccessModal()}>Close</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal for reject transaction */}

      <Modal className='detailmodal claimrewad-modal vergdsgew' show={showRejectedModal} onHide={handleCloseRejectedModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Transaction rejected
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-claim">
            <div className='ascs'>
              <img src='/weeping.png' />
            </div>
            <h6 style={{ textAlign: 'center' }}>You have rejected your transaction and you have lost your tomi funds now this issue only admin can handle</h6>
          </div>
        </Modal.Body>
      </Modal>


      {/* <Modal className='detailmodal claimrewad-modal claimed-reward' show={showSuccessModal} onHide={setShowSuccessdModl} centered>
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