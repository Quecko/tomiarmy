import React from "react";
import searchIcon from "../../assets/icons/searchIcon.svg";
import "../../style.scss";

const FlashTransections = () => {
  return (
    <div className="flash-transections">
      <h2>Flash Transections</h2>
      <div className="flash-transection-wrapper">
        <div className="flash-transection-row">
          <div className="flash-transection-search">
            <img src={searchIcon} alt="searchIcon" />
            <input placeholder="Search Transaction Via ID" />
          </div>
          <p className="pages-count">Viewed 2 out of 2</p>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Transaction Title</th>
                <th scope="col">Date Created</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A0B1C007</td>
                <td>Transfer</td>
                <td>December 29, 2012</td>
                <td>
                  <div className="status-done">Completed</div>
                </td>
              </tr>
              <tr>
                <td>A0B1C007</td>
                <td>Transfer</td>
                <td>December 29, 2012</td>
                <td>
                  <div className="status-rejected">Rejected</div>
                </td>
              </tr>
              <tr>
                <td>A0B1C007</td>
                <td>Transfer</td>
                <td>December 29, 2012</td>
                <td>
                  <div className="status-done">Completed</div>
                </td>
              </tr>
              <tr>
                <td>A0B1C007</td>
                <td>Transfer</td>
                <td>December 29, 2012</td>
                <td>
                  <div className="status-rejected">Rejected</div>
                </td>
              </tr>
              <tr>
                <td>A0B1C007</td>
                <td>Transfer</td>
                <td>December 29, 2012</td>
                <td>
                  <div className="status-rejected">Rejected</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlashTransections;
