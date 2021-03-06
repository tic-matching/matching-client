import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

import Welcome from "./Welcome";
import Registration from "./Registration";
import Login from "./Login";
import Chat from "./Chat";
import Timeline from "./Timeline";
import Usermatch from "./Usermatch";
import modalwindows from "./modalwindows";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Welcome}></Route>
            <Route path="/Registration" component={Registration}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Chat" component={Chat}></Route>
            <Route path="/Timeline" component={Timeline}></Route>
            <Route path="/Usermatch" component={Usermatch}></Route>
            <Route path="/modal" component={modalwindows}></Route>
        </Router>
    )
}
export default App;
