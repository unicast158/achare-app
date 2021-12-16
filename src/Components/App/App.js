import React from "react";
import '../../../src/Styles/Style.css'
import "../../../node_modules/normalize.css/normalize.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";
import Details from "../../pages/Details/Details";
import SearchOutput from "../../pages/SearchOutput/SearchOutput";
import Layout from "../Layout/Layout";

function App() {
    return (
        <ThemeProvider dir="rtl">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact component={Home} path={"/"}/>
                        <Route exact component={Details} path={"/Details/:id"}/>
                        <Route exact component={SearchOutput} path={"/SearchOutput/:city/:q"}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
