
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Side from './Page/Site/Side'

import Admin from './Page/Admin/Adim'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Side></Side>
        </Route>

        <Route exact path="/admin">
          <Admin></Admin>
        </Route>
      </Router>
    </div>
  );
}

export default App;
