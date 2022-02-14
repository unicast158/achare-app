import React from "react";
import '../../../src/Styles/Style.css'
import "../../../node_modules/normalize.css/normalize.css";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";
import Details from "../../pages/Details/DetailsWithRoute";
import SearchOutput from "../../pages/SearchOutput/SearchOutput";
import Layout from "../Layout/Layout";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import ProfileTs from "../../pages/profile/profilePagets";
import "./App.scss"
import {useSelector} from "react-redux";

function App() {

    const isAuthenticated = useSelector(store => !!store.profile.token)

    return (
        <ThemeProvider dir="rtl">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact component={Home} path={"/"}/>
                        <Route component={Details} path={"/Details/:id/:step"}/>
                        <Route component={Details} path={"/Details/:id"}/>
                        <Route exact component={SearchOutput} path={"/SearchOutput/:city/:q"}/>
                        <AuthRoute isAuthenticated={isAuthenticated} exact component={Register} path={"/Register"}/>
                        <AuthRoute isAuthenticated={isAuthenticated} exact component={Login} path={"/Login"}/>
                        <PrivateRoute isAuthenticated={isAuthenticated} exact component={ProfileTs} path={"/profile"}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const PrivateRoute = ({isAuthenticated, path, component}) => {
    return <Route path={path} render={(props) => {
        if (isAuthenticated)
            return React.createElement(component, props)
        else return <Redirect to="/Login"/>
    }}/>
}

const AuthRoute = ({isAuthenticated, path, component}) => {
    return <Route path={path} render={() => {
        if (isAuthenticated)
            return <Redirect to="/profile"/>
        else
            return React.createElement(component)
    }
    }/>
}

export default App;
