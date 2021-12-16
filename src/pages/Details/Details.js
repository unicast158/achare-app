import React, {useEffect, useState} from 'react';
import LandingLayout from "../../Components/Layout/LandingLayout";
import {useParams} from "react-router-dom";

const Details = (props) => {
    const {id: pageId} = useParams()

    useEffect(() => {

    }, [pageId]);

    const generateContent = () => {
        if (pageId === 'cooking') {
            console.log(pageId);
            return (<p>
                salam
            </p>)
        } else return <></>
    }

    return generateContent()
};

export default Details;
