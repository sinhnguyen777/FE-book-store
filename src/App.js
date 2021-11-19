
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Admin from './Page/Admin/Admin';
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

      </Router>
    </div>
  );
}

export default App;
