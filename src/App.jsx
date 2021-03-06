
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Admin from './Page/Admin/Admin';
import Error from "./Page/Site/Layout/404/error";
import RouterWrapper from './Routers/Routes';
import LoginAd from './Page/Admin/Page/Login/Login'
import AccessToken from "./Page/Admin/Page/resetPass";
import ChangePass from "./Page/Admin/Page/ChangePass/ChangePass";
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <RouterWrapper />
        </Route>

        <Route path="/side">
          <RouterWrapper />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route exact path="/admins/login">
          <LoginAd />
        </Route>
        <Route exact path="/admins/changepass">
          <ChangePass />
        </Route>
        <Route exact path="/admins/reset/:token">
          <AccessToken />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
      </Router>
      {/* open deployed */}
      {/* <MessengerCustomerChat pageId={process.env.PAGEID} appId={process.env.APPID}
      /> */}
    </div>
  );
}

export default App;
