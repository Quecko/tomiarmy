import React from "react";
import "../../style.scss";
import AttachedFile from "../../assets/icons/file-text.svg";
import checkIcon from "../../assets/icons/checkIcon.svg";
import refusedIcon from "../../assets/icons/refusedIcon.svg";
import SummaryModal from "./SummaryModal";

const EscrowOngoing = () => {
  return (
    <div className="escrow-on-going-wrapper">
      <div className="heading-line-wrapper">
        <div className="heading-line-dost"></div>
        <div className="heading-line"></div>
        <div className="heading-line-bottom-dost"></div>
      </div>
      <div className="escrow-on-going-content">
        <h2>Escrow Ongoing</h2>

        <div class="timeline">
          <div class="outer">
            <div class="card">
              <div class="info">
                <div className="escrow-on-going-item">
                  <div className="item-line-point"></div>
                  <div className="mileston-detail">
                    <div className="mileston-timeline-detail title">
                      <div className="mileston-date">
                        <h5>OCT</h5>
                        <h5>05</h5>
                        <h5>2022</h5>
                      </div>
                      <div className="divider-line"></div>
                      <div className="mileston-name">
                        <h5>Milestone 2</h5>
                        <p>Seller delivered the first milestone</p>
                      </div>
                    </div>
                    <div className="mileston-actions-details-button">
                      <div className="mileston-attached-file-buttons">
                        <button className="attach-file-btn">
                          <img src={AttachedFile} alt="AttachedFile" />
                          Attached File
                        </button>
                        <button className="attach-file-btn mb-0">
                          <img src={AttachedFile} alt="AttachedFile" />
                          Attached File
                        </button>
                      </div>
                      <div className="mileston-attached-action-buttons">
                        <SummaryModal />
                        <button className="refused-btn">
                          <img src={refusedIcon} alt="refusedIcon" />
                          Buyer Refused
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="milestone-payment-detail">
                    <p>1st milestone payout is released</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <div className="escrow-on-going-item">
                  <div className="item-line-point"></div>
                  <div className="mileston-detail">
                    <div className="mileston-timeline-detail title">
                      <div className="mileston-date">
                        <h5>OCT</h5>
                        <h5>05</h5>
                        <h5>2022</h5>
                      </div>
                      <div className="divider-line"></div>
                      <div className="mileston-name">
                        <h5>Milestone 2</h5>
                        <p>Seller delivered the first milestone</p>
                      </div>
                    </div>
                    <div className="mileston-actions-details-button">
                      <div className="mileston-attached-file-buttons">
                        <button className="attach-file-btn">
                          <img src={AttachedFile} alt="AttachedFile" />
                          Attached File
                        </button>
                        <button className="attach-file-btn mb-0">
                          <img src={refusedIcon} alt="refusedIcon" />
                          Attached File
                        </button>
                      </div>
                      <div className="mileston-attached-action-buttons">
                        <SummaryModal />
                        <button className="refused-btn">
                          <img src={refusedIcon} alt="refusedIcon" />
                          Buyer Refused
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="milestone-payment-detail">
                    <p>1st milestone payout is released</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <div className="escrow-on-going-item">
                  <div className="item-line-point"></div>
                  <div className="mileston-detail">
                    <div className="mileston-timeline-detail title">
                      <div className="mileston-date">
                        <h5>OCT</h5>
                        <h5>05</h5>
                        <h5>2022</h5>
                      </div>
                      <div className="divider-line"></div>
                      <div className="mileston-name">
                        <h5>Milestone 2</h5>
                        <p>Seller delivered the first milestone</p>
                      </div>
                    </div>
                    <div className="mileston-actions-details-button">
                      <div className="mileston-attached-file-buttons">
                        <button className="attach-file-btn">
                          <img src={AttachedFile} alt="AttachedFile" />
                          Attached File
                        </button>
                        <button className="attach-file-btn mb-0">
                          <img src={AttachedFile} alt="AttachedFile" />
                          Attached File
                        </button>
                      </div>
                      <div className="mileston-attached-action-buttons">
                        <SummaryModal />
                        <button className="refused-btn">
                          <img src={refusedIcon} alt="refusedIcon" />
                          Buyer Refused
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="milestone-payment-detail">
                    <p>1st milestone payout is released</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscrowOngoing;
