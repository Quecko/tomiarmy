import "./App.css";
import './style.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./soldier/screens/Home";
import Tasks from "./soldier/screens/Tasks";
import Sidebar from "./soldier/components/sidebar/Sidebar";
import Header from "./soldier/components/header/Header";
import Operations from "./soldier/screens/Operations";
import Squad from "./soldier/screens/Squad";
import Announcements from "./soldier/screens/Announcements";
import GroupChat from "./soldier/screens/GroupChat";
import ArmyForum from "./soldier/screens/ArmyForum";
import ClaimRewards from "./soldier/screens/ClaimRewards";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import Requestinvitation from "./login/Requestinvitation";
import Dcsquad from "./login/Dcsquad";

function App() {
  const [routes, setroute] = useState(false);
  return (
    <>
      <div className="App app-wrapper row m-0">
        <Router>
          <Sidebar />
          <div className="content-column">
            <Header routes={routes} setroute={setroute} />

            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/tasks" component={Tasks} />
              <Route exact path="/operations" component={() => (<Operations routes={routes} setroute={setroute} />)}  />
              <Route exact path="/squad" component={Squad} />
              <Route exact path="/announcements" component={Announcements} />
              <Route exact path="/chat" component={GroupChat} />
              <Route exact path="/forum" component={ArmyForum} />
              <Route exact path="/claim" component={ClaimRewards} />
              <Route exact path="/requestinvitation" component={Requestinvitation} />
              <Route exact path="/dcsquad" component={Dcsquad} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
