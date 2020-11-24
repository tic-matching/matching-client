import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "./Welcome";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Welcome}></Route>
    </Router>
  );
}

export default App;
