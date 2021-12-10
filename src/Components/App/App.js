import React from "react";
import '../../../src/Styles/Style.css'
import "../../../node_modules/normalize.css/normalize.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Layout from "../Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";

function App() {
    return (
        <ThemeProvider dir="rtl">
            <Layout>
                <BrowserRouter>
                    <Switch>
                        <Route component={Home} path={"/"}/>
                    </Switch>
                </BrowserRouter>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
