import React from "react";
import Header from "../Header/Header";
import {Container} from "@material-ui/core";

const Layout = (props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            {props.children}
        </>
    )
};

export default Layout;