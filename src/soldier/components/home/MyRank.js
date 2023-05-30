import React from "react";
import privateRank from "../../../assets/icons/privateRank.svg";
import dcSquad from "../../../assets/icons/dcSquad.svg";
import Sergeant from "../../../assets/icons/Sergeant.svg";
import pointsBar from "../../../assets/icons/pointsBar.svg";

const MyRank = (props) => {
  // console.log("profileee",)
  return (
    <div className="data-box border-grad1">
      <h4>my rank</h4>
      <div className="rank-squad-row row">
        <div className="col-lg-6 ransk-name-left padd-sm">
          <div className="ransk-name-heading-row inner-data-box border-grad">
            <img src={props?.props?.rank?.icon} alt="privateRank" />
            <div className="ransk-name-heading">
              <p>My Rank</p>
              <h4>{props?.props?.rank?.name}</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ransk-name-right">
          <div className="ransk-name-heading-row inner-data-box border-grad">
            <img src="\static-icons\dc-squad.png" alt="dcSquad" style={{width: "50px", height: "50px"}} />
            <div className="ransk-name-heading">
              <p>My Squad</p>
              <h4>{props?.props?.memberOfSquad === false ? '-':""}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="inner-data-box border-grad">
          <div className="private-sergant">
            <div className="private-rank-row">
              <div className="private-rank dc-squad">
              <img src={props?.props?.rank?.icon} alt="earned" style={{width: "60px", height: "60px"}} />
                <h4>{props?.props?.rank?.name}</h4>
              </div>
              <div className="private-rank sergeant">
              <img src="\static-icons\sergeant.png" alt="earned" style={{width: "60px", height: "60px"}} />
                <h4>Sergeant</h4>
              </div>
            </div>
            <div className="squad-points">
              <div className="private-rank-row">
                <div className="private-rank dc-squad">
                  <p>1,500 POINTS</p>
                </div>
                <div className="private-rank sergeant">
                  <p>5,000 POINTS</p>
                </div>
              </div>
              <img src={pointsBar} className="img-fluid" alt="img" style={{marginLeft: "-15px", width: "100%"}} />
              <img src="\Framedots.svg" alt="img"className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRank;
