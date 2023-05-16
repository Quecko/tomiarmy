import React from 'react'
import "./homeoperations.scss"

const HomeOperations = () => {
  return (
    <>
      <section className="home-operations">
        <div className="upper-item">
          <div className='left'>
            <h6>operation : ELON MUSK <span>ENDS IN: 23:34:12</span></h6>
            <p>make elon musk tweet about tomi</p>
          </div>
          <a href="#">View All Operation Tasks <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
        </div>
        <div className="bottom-cards">
          <div className="card-item">
            <img src="\assets\points.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>Points</p>
              <h6>150,000</h6>
            </div>
          </div>
          <div className="card-item">
            <img src="\assets\tomitokens.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>TOMI Tokens</p>
              <h6>100,000</h6>
            </div>
          </div>
          <div className="card-item">
            <img src="\assets\totaltasks.svg" alt="img" className='img-fluid' />
            <div className="inner-content">
              <p>Total Tasks</p>
              <h6>55</h6>
            </div>
          </div>
          <div className="card-item unique-item">
            <div className='inner-set'>
              <img src="\assets\rewardnft.svg" alt="img" className='img-fluid' />
              <div className="inner-content">
                <p>Reward NFT</p>
                <h6>ELN MSK #41234</h6>
              </div>
            </div>
            <div className="nft-img">
              <img src="\assets\nft.svg" alt="img" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeOperations
