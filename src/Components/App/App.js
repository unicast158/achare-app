import React from "react";
import "../../../node_modules/normalize.css/normalize.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Layout>
        <BrowserRouter>
            <Switch>
                <Route component={Home} path={"/"} />
            </Switch>
        </BrowserRouter>
    </Layout>
  );
}

export default App;
