import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";

const LandingLayout = (props) => {
    return (
        <>
            <LandingHeader/>
            {props.children}
        </>
    )
};

export default LandingLayout;