import React from 'react';
import Navbar_react from "./Navbar/Navbar";
import Nav_Menu from "./Nav/Nav";
import {Route, Switch} from "react-router-dom";


const Header = () => {
    return (
        <div id={"navbar-header"}>
            <Navbar_react/>
            <Switch>
                <Route path={"/Details"}>

                </Route>
                <Route>
                    <Nav_Menu/>
                </Route>
            </Switch>
        </div>
    );
};

export default Header;
