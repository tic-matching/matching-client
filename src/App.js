import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

import Welcome from "./Welcome";
import Registration from "./Registration";

function App() {
  return (
      <Router>
          <Route exact path="/" component={Welcome}></Route>
          <Route path="/Registration" component={Registration}></Route>
      </Router>
  );
}

export default App;
