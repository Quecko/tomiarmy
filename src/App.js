import "./App.css";
import './style.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App app-wrapper row m-0">
      <Router>
        <div className="sidebar-column">
          <Sidebar />
        </div>
        <div className="content-column">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/operations" component={Operations} />
            <Route exact path="/squad" component={Squad} />
            <Route exact path="/announcements" component={Announcements} />
            <Route exact path="/chat" component={GroupChat} />
            <Route exact path="/forum" component={ArmyForum} />
            <Route exact path="/claim" component={ClaimRewards} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
