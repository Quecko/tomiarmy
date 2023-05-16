import React from "react";
import { Table } from "react-bootstrap";
import dosts from "../../assets/icons/dots.svg";

const GeneralTasks = () => {
  return (
    <div className="data-box general-tasks-wrapper">
      <h4>recent tasks from general</h4>
      <Table striped bordered hover className="general-tasks-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Points</th>
            <th>Status</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="">
                <img src={dosts} alt="dosts" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="">
                <img src={dosts} alt="dosts" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Like our facebook page</td>
            <td>+5</td>
            <td>
              <div className="completed">Completed</div>
            </td>
            <td>12:34 12/12/23</td>
            <td>
              <div className="">
                <img src={dosts} alt="dosts" />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GeneralTasks;
