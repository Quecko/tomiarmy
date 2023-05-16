import React, { useState } from "react";
import "../../style.scss";
import { Link, useLocation } from "react-router-dom";
import notificationIcon from "../../assets/icons/notificationIcon.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import mobileLogo from "../../assets/icons/mobileLogo.svg";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("🚀 ~ file: Header.js:16 ~ Header ~ currentPath:", currentPath);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sidebar = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div
      className={
        currentPath === "/"
          ? "home-headed-username Header-wrapper"
          : "home-headed-username-none Header-wrapper"
      }
    >
      <div className="home-headed-username">
        <div className="mobile-logo">
          <Link to={"/"}>
            <img src={mobileLogo} alt="mobileLogo" />
          </Link>
        </div>
        {currentPath === "/" ? (
          <div className="soldier-name">
            <h4>Welcome BATMAN,</h4>
            <p>LET’S FIGHT FOR THE ARMY</p>
          </div>
        ) : null}
      </div>
      <div className="header-buttons">
        <button className="notification-btn">
          <img src={notificationIcon} alt="notificationIcon" />
        </button>
        <button className="create-squad-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_260_1810)">
              <path
                d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                fill="#81828A"
              />
              <path
                d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                fill="#81828A"
              />
              <path
                d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                fill="#81828A"
              />
            </g>
            <defs>
              <clipPath id="clip0_260_1810">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Create Squad
        </button>
        <Button className="toggle-menu-btn" onClick={handleShow}>
          <img src={menuIcon} alt="menuIcon" />
        </Button>

        <Offcanvas show={show} onHide={handleClose} className="menu-off-canvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="sidebar-column">
              <Sidebar sidebar={sidebar} />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Header;
