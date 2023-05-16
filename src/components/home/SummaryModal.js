import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import checkIcon from "../../assets/icons/checkIcon.svg";
import "../../style.scss";

const SummaryModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="approved-btn" onClick={handleShow}>
        <img src={checkIcon} alt="checkIcon" />
        Buyer Approved
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="summary-modal"
      >
        <Modal.Header closeButton className="modal-header-close">
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body className="summary-modal-body">
          <div className="summary-body-row">
            <div className="summary-body-dropdown">
              <select>
                <option>Seller</option>
              </select>
            </div>
            <div className="summary-body-dropdown">
              <select>
                <option>USD</option>
              </select>
            </div>
          </div>
          <div className="transaction-details">
            <h3 className="transaction-details-header">Transaction Details</h3>
            <div className="transaction-details-box">
              <div className="transaction-details-row">
                <h3>Title:</h3>
                <p>Graphic Poster and a Flayer</p>
                <h2>Milestone subtotal:$4652</h2>
              </div>
              <div className="transaction-details-row category-row">
                <h3>Category:</h3>
                <p>Design Services</p>
                <div className="w-50"></div>
              </div>
              <div className="item-description">
                <h3>Item Description:</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="milestones-names">
                <h3>Milestones:</h3>
                <p>Milestone Detail here...</p>
              </div>
              <div className="transaction-details-row category-row milestones-duration">
                <h3>Duration:</h3>
                <p>2 Days</p>
                <div className="w-50"></div>
              </div>
            </div>
          </div>
          <div className="transaction-summary-footer">
            <div className="transaction-summary-footer-row">
              <h3>Transaction Summary</h3>
              <p>How the totals are calculated?</p>
            </div>
            <h4 className="subtotal-heading">subtotal:</h4>
            <div className="escrow-box">
              <h3>Escrow fee paid by:</h3>
              <p>Buyer</p>
            </div>
            <p className="saller-details-heading">Seller Details</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="summary-modal-footer">
          <Button className="email-btn" onClick={handleClose}>
            numanzafar994@gmail.com
          </Button>
          <Button className="phone-btn" onClick={handleClose}>
            121*212*3231
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SummaryModal;
