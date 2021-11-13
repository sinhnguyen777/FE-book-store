import { BrowserRouter as Router, Route } from "react-router-dom";

import RouterWrapper from './Routers/Routes'

const Side = () => {

    return (
        <Router>
            <Route path="/" component={RouterWrapper} />
        </Router>
    )
}

export default Side