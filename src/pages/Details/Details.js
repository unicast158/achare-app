import React from 'react';
import LandingLayout from "../../Components/Layout/LandingLayout";

const Details = (props) => {
    console.log(props.match.params.id)
    return (
        <LandingLayout>
            <p>details</p>
        </LandingLayout>
    );
};

export default Details;