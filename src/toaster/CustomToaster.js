import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

const CustomToaster = ({ message, duration = 3000,toggle }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [message, duration]);


  console.log('toggle',toggle);

  return (
    <>
    <ToastContainer className="position-absolute">
      {toggle &&
    <Toast className="green">
      <Toast.Body>
        <img src="\assets\cross.png" alt="maincrossimg" className="maincrossimg" />
        <div className="maintoast">
          <img src="\assets\success.png" alt="maintoastimg" className="maintoastimg" />
          <div className="maintoasttexts">
            <h6 className="maintoasthead">Success</h6>
            <p className="maintoastpara">Vote Submited Successfully</p>
          </div>
        </div>
      </Toast.Body>
    </Toast>
}
    {/* <Toast className="red">
      <Toast.Body>
        <img src="\assets\cross.png" alt="maincrossimg" className="maincrossimg" />
      <div className="maintoast">
          <img src="\assets\error.png" alt="maintoastimg" className="maintoastimg" />
          <div className="maintoasttexts">
            <h6 className="maintoasthead">Error</h6>
            <p className="maintoastpara">Vote Submited Failed</p>
          </div>
        </div>
      </Toast.Body>
    </Toast>
    <Toast className="orange">
      <Toast.Body>
        <img src="\assets\cross.png" alt="maincrossimg" className="maincrossimg" />
      <div className="maintoast">
          <img src="\assets\warning.png" alt="maintoastimg" className="maintoastimg" />
          <div className="maintoasttexts">
            <h6 className="maintoasthead">Warning</h6>
            <p className="maintoastpara">Vote Submited Warning</p>
          </div>
        </div>
      </Toast.Body>
    </Toast> */}
    </ToastContainer>
  </>
  );
};

export default CustomToaster;

