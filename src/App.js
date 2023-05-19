import "./App.css";
import './style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Tasks from "./screens/Tasks";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Operations from "./screens/Operations";
import Squad from "./screens/Squad";
import Announcements from "./screens/Announcements";
import GroupChat from "./screens/GroupChat";
import ArmyForum from "./screens/ArmyForum";
import ClaimRewards from "./screens/ClaimRewards";
import { useState } from "react";
import Login from "./login/Login";

function App() {
  const [routes, setroute] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="App app-wrapper row m-0">
      <Router>
        <div className="sidebar-column web-sidebar">
          <Sidebar />
        </div>
        <div className="content-column">
          <Header routes={routes} setroute={setroute} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tasks" element={<Tasks />} />
            <Route exact path="/operations" element={<Operations setroute={setroute} routes={routes} />} />
            <Route exact path="/squad" element={<Squad />} />
            <Route exact path="/announcements" element={<Announcements />} />
            <Route exact path="/chat" element={<GroupChat />} />
            <Route exact path="/forum" element={<ArmyForum />} />
            <Route exact path="/claim" element={<ClaimRewards />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
