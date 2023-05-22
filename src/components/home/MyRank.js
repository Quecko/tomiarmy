import React from "react";
import privateRank from "../../assets/icons/privateRank.svg";
import dcSquad from "../../assets/icons/dcSquad.svg";
import Sergeant from "../../assets/icons/Sergeant.svg";
import pointsBar from "../../assets/icons/pointsBar.svg";

const MyRank = () => {
  return (
    <div className="data-box border-grad1">
      <h4>my rank</h4>
      <div className="rank-squad-row row">
        <div className="col-lg-6 ransk-name-left padd-sm">
          <div className="ransk-name-heading-row inner-data-box border-grad">
            <img src={privateRank} alt="privateRank" />
            <div className="ransk-name-heading">
              <p>My Rank</p>
              <h4>Private</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ransk-name-right">
          <div className="ransk-name-heading-row inner-data-box border-grad">
            <img src={dcSquad} alt="dcSquad" />
            <div className="ransk-name-heading">
              <p>My Squad</p>
              <h4>DC Squad</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="inner-data-box border-grad">
          <div className="private-sergant">
            <div className="private-rank-row">
              <div className="private-rank dc-squad">
                <img src={privateRank} alt="privateRank" />
                <h4>Private</h4>
              </div>
              <div className="private-rank sergeant">
                <img src={Sergeant} alt="Sergeant" />
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
              <img src={pointsBar} className="pointsBarimg" alt="" />
              <img src="\Framedots.svg" alt="img"className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRank;
