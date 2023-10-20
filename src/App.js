import "./App.css";
import './style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./soldier/screens/Home";
import Tasks from "./soldier/screens/Tasks";
import Operations from "./soldier/screens/Operations";
import Squad from "./soldier/screens/Squad";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Announcements from "./soldier/screens/Announcements";
import GroupChat from "./soldier/screens/GroupChat";
import ArmyForum from "./soldier/screens/ArmyForum";
import ClaimRewards from "./soldier/screens/ClaimRewards";
// import Login from "./login/Login";
import Login2 from "./login/Login2";
import Requestinvitation from "./login/Requestinvitation";
import Dcsquad from "./login/Dcsquad";
import Sidebar from "./soldier/components/sidebar/Sidebar";
import Settings from "./soldier/screens/Settings";
import GeneralSidebar from "./General/components/Sidebar/GeneralSidebar";
import useEagerConnect from './hooks/useEagerConnect';
import SquadModals from "./soldier/components/home/HomeOperations/SquadModals";
import Loader from "./hooks/loader";
import RequestInvitationmodal from "./RequestInvitationModal/RequestInvitationmodal";
import Terms from "./TermsandConditions/Terms";


function App() {
  useEagerConnect();

  return (
    <>
      <ToastContainer autoClose={5000} style={{ fontSize: 12, fontWeight: 300 }} theme="dark" position="top-center" />
      {/* <Loader/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login2} />
          <Route exact path="/requestinvitation" component={Requestinvitation} />
          <Route exact path="/tomitoken" component={Requestinvitation} />

          <Route exact path="/dcsquad" component={Dcsquad} />
          {/* soldier + leader all routes here........................... */}
          <Route exact path="/soldier" component={Sidebar} />
          <Route exact path="/squadmodal" component={SquadModals} />
          <Route exact path="/leader" component={Sidebar} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/operations" component={Operations} />
          <Route exact path="/squad" component={Squad} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/chat" component={GroupChat} />
          <Route exact path="/forum" component={ArmyForum} />
          <Route exact path="/claim" component={ClaimRewards} />
          <Route exact path="/setting" component={Settings} />
          <Route exact path="/terms" component={Terms} />
          {/* General + Major all routes here......................... */}
          <Route exact path="/general" component={GeneralSidebar} />
          <Route exact path="/majorgeneral" component={GeneralSidebar} />
          <Route component={Login2} />


          {/* <Route exact path="/requestinviemodal" component={RequestInvitationmodal} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
