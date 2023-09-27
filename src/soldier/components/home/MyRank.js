import { React, useState, useEffect } from "react";
import { API_URL } from "../../../utils/ApiUrl"
import ProgressBar from "react-bootstrap/ProgressBar";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";

const MyRank = ({ props, setShowTopSquadModal }) => {
  let tok = localStorage.getItem("accessToken");
  const { account } = useWeb3React()
  const handleShow = () => setShowTopSquadModal(true);
  const [army, setArmy] = useState([]);
  const GetNextRank = () => {
    if (props) {
      let dumObj = null;
      // if (props?.rank?.name == 'colonel') {
      // dumObj = army.findIndex((i) => { return i.name === props?.rank?.name })
      // dumObj = army[dumObj];

      // }
      // else {
      dumObj = army.findIndex((i) => { return i.name === props?.rank?.name })
      dumObj = army[dumObj + 1];

      // }

      return <>
        {props?.rank?.name == 'colonel' ?
          <>
            <p>you have Reached top Rank</p>
          </>
          : <div className="private-rank sergeant">
            <img src={dumObj?.icon} alt="earned" style={{ width: "60px", height: "60px" }} />
            <h4>{dumObj?.name}</h4>
          </div>}
      </>
    } else {
      return <> <img
        src="\static-icons\private-rank.png"
        alt="img"
        className="img-fluid"
      />
        <p className="lefttext">Loading</p>
        <div className="private-rank sergeant">
          <img src="\static-icons\private-rank.png" alt="earned" style={{ width: "60px", height: "60px" }} />
          <h4>"...Loading</h4>
        </div>
      </>
    }
  }

  const GetArmy = () => {
    var config = {
      method: "get",
      url: `${API_URL}/tasks/army-ranks`,
      headers: {
        authorization: `Bearer ` + tok
      },
    };
    axios(config)
      .then(function (response) {
        // setLoader(false);
        setArmy(response?.data?.data);
      })
      .catch(function (error) {
        // setLoader(false);
        // window.location.reload();
      });
  }

  useEffect(() => {
    GetArmy();
  }, [account])
  return (
    <>
      <div className="data-box border-grad1">
        <h4>my rank</h4>
        <div className="rank-squad-row row">
          <div className="col-lg-6 ransk-name-left padd-sm">
            <div className="ransk-name-heading-row inner-data-box border-grad">
              <img src={props?.rank?.icon} alt="privateRank" />
              <div className="ransk-name-heading">
                <p>My Rank</p>
                <h4>{props?.rank?.name}</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ransk-name-right">
            {props?.squad?.symbol && props?.squad?.name ?
              <div className="ransk-name-heading-row inner-data-box border-grad">
                <img src={props?.squad?.symbol} alt="Squad" style={{ width: "50px", height: "50px", borderRadius: '10px' }} />
                <div className="ransk-name-heading">
                  <p>My Squad</p>
                  {/* <h4>{props?.props?.memberOfSquad === false ? '-' : ""}</h4> */}
                  <h4>{props?.squad?.name}</h4>
                </div>
              </div>
              :
              <div className="ansk-name-heading-row inner-data-box border-grad  dfdfb">
                <div className="join_squad">
                  <img src="\assets\join_join.png" alt="img" className='img-fluid' />
                  <button onClick={handleShow}>Join Squad</button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="col-lg-12">
          <div className="inner-data-box border-grad">
            <div className="private-sergant">
              <div className="private-rank-row">
                <div className="private-rank dc-squad">
                  <img src={props?.rank?.icon} alt="earned" style={{ width: "60px", height: "60px" }} />
                  <h4>{props?.rank?.name}</h4>
                </div>
                {GetNextRank()}
                {/* <div className="private-rank sergeant">
              <img src="\static-icons\sergeant.png" alt="earned" style={{width: "60px", height: "60px"}} />
                <h4>Sergeant</h4>
              </div> */}
              </div>
              <div className="squad-points">
                {props?.rank?.name === "private" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>0 POINTS</p>
                    </div>
                    <div className="private-rank sergeant">
                      <p>100 POINTS</p>
                    </div>
                  </div>
                }
                {props?.rank?.name === "sergeant" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>100 POINTS</p>
                    </div>
                    <div className="private-rank sergeant">
                      <p>250 POINTS</p>
                    </div>
                  </div>
                }
                {props?.rank?.name === "lieutenant" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>250 POINTS</p>
                    </div>
                    <div className="private-rank sergeant">
                      <p>500 POINTS</p>
                    </div>
                  </div>
                }
                {props?.rank?.name === "captain" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>500 POINTS</p>
                    </div>
                    <div className="private-rank sergeant">
                      <p>1000 POINTS</p>
                    </div>
                  </div>
                }
                {props?.rank?.name === "major" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>1000 POINTS</p>
                    </div>
                    <div className="private-rank sergeant">
                      <p>1500 POINTS</p>
                    </div>
                  </div>
                }
                {props?.rank?.name === "colonel" &&
                  <div className="private-rank-row">
                    <div className="private-rank dc-squad">
                      <p>1500 POINTS</p>
                    </div>
                    {/* <div className="private-rank sergeant">
                      <p>{props?.points} POINTS</p>
                    </div> */}
                    <div className="private-rank sergeant">
                      <p>Completed</p>
                    </div>
                  </div>
                }

                {props?.rank?.name === "private" &&
                  <ProgressBar min={0} max={100} now={props?.points} />
                }
                {props?.rank?.name === "sergeant" &&
                  <ProgressBar min={100} max={250} now={props?.points} />
                }
                {props?.rank?.name === "lieutenant" &&
                  <ProgressBar min={250} max={500} now={props?.points} />
                }
                {props?.rank?.name === "captain" &&
                  <ProgressBar min={500} max={1000} now={props?.points} />
                }
                {props?.rank?.name === "major" &&
                  <ProgressBar min={1000} max={1500} now={props?.points} />
                }
                {props?.rank?.name === "colonel" &&
                  <ProgressBar min={1500} max={3000} now={props?.points} />
                }
                {/* {props?.rank?.name === "major general" &&
                <ProgressBar min={3000} max={3000} now={props?.points} />
              } */}
                {/* <img src={pointsBar} className="img-fluid" alt="img" style={{ marginLeft: "-15px", width: "100%" }} /> */}
                <img src="\Framedots.svg" alt="img" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRank;
