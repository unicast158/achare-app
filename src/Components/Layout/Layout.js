import React from "react";
import Header from "../Header/Header";
import "./layout.scss"

const Layout = (props) => {
    return (
        <div id={"main"}>
            <Header/>
            {props.children}
        </div>
    )
};

export default Layout;