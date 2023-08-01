import React from "react"
// import loader from './loader.json'
// import loader from '../assets/loader/150x150.gif'
import loader from '../assets/loader/Eclipse-1s-200px.svg'

function Loader({ text }) {
  return (
    <>
      <div className="">
        <div
          className="position-fixed w-100"
          style={{
            zIndex: 999999,
            marginTop: -100,
            Left: 0,
            position: 'fixed',
            top: 0,
            height: "122%",
            marginLeft: 0,
            background: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img
                width={150}
                // style={{
                //   filter:
                //     "invert(99%) sepia(1%) saturate(2%) hue-rotate(168deg) brightness(120%) contrast(100%)",
                // }}
                src={loader}
                // src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
                alt="loader"
              />
              <h2 className="text-white w-100 text-center mt-5">{text}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;