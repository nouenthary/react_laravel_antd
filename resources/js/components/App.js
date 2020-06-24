import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import HomePage from "./Home";
import { withRouter } from "react-router-dom";
import Book from "../backend/Book";

function App() {
    return (
        <BrowserRouter>
            <HashRouter>
                <Route exact path={"/"} component={HomePage} />
                <Route path={"/admin"} component={Book} />
            </HashRouter>
        </BrowserRouter>
    );
}

export default withRouter(App);

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
