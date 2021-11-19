
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Admin from './Page/Admin/Admin';
import Error from "./Page/Site/Layout/404/error";
import Home from "./Page/Site/Page/Home/Home";
import RouterWrapper from './Routers/Routes';

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
        <Route path="/error">
          <Error />
        </Route>
      </Router>
    </div>
  );
}

export default App;
