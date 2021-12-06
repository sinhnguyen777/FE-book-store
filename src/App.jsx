
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Admin from './Page/Admin/Admin';
import Error from "./Page/Site/Layout/404/error";
import RouterWrapper from './Routers/Routes';
import LoginAd from './Page/Admin/Page/Login/Login'
import AccessToken from "./Page/Admin/Page/resetPass";

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

        <Route exact path="/admins/reset/:token">
          <AccessToken />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
      </Router>
    </div>
  );
}

export default App;
