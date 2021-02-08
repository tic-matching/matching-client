import React from "react";
import { 
	BrowserRouter as Router, 
	Route 
} from "react-router-dom";



import Welcome from "./Welcome";
import Registration from "./Registration";
import Chat from "./Chat";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Welcome}></Route>
        <Route path="/Registration" component={Registration}></Route>
        <Route path="/Chat" component={Chat}></Route>
    </Router>
  );
}

export default App;
