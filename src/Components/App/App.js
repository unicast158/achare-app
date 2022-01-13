import React from "react";
import '../../../src/Styles/Style.css'
import "../../../node_modules/normalize.css/normalize.css";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";
import Details from "../../pages/Details/Details2";
import SearchOutput from "../../pages/SearchOutput/SearchOutput";
import Layout from "../Layout/Layout";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/profile/profilepage";
import StorageService from "../../serivce/storage.service";
import "./App.scss"

function App() {
    return (
        <ThemeProvider dir="rtl">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact component={Home} path={"/"}/>
                        <Route component={Details} path={"/Details/:id/:step"}/>
                        <Route component={Details} path={"/Details/:id"}/>
                        <Route exact component={SearchOutput} path={"/SearchOutput/:city/:q"}/>
                        <AuthRoute exact component={Register} path={"/Register"}/>
                        <AuthRoute exact component={Login} path={"/Login"}/>
                        <PrivateRoute exact component={Profile} path={"/profile"}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const PrivateRoute = ({path, component}) => {
    return <Route path={path} render={() => {
        if (StorageService.getToken())
            return React.createElement(component)
        else return <Redirect to="/Login"/>
    }
    }/>
}

const AuthRoute = ({path, component}) => {
    return <Route path={path} render={() => {
        if (StorageService.getToken())
            return <Redirect to="/profile"/>
        else
            return React.createElement(component)
    }
    }/>
}

export default App;
