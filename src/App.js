
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Side from './Page/Site/Side'

import Admin from './Page/Admin/Admin'

function App() {
  return (
    <div>
      <Router>
        <Route  path="/">
          <Side></Side>
        </Route>

        <Route  path="/admin">
          <Admin></Admin>
        </Route>
      </Router>
    </div>
  );
}

export default App;
