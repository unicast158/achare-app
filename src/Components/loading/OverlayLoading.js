import React from 'react';
import ReactLoading from "react-loading";
import './OverlayLoading.scss'

const OverlayLoading = ({show}) => {
    if (!show)
        return <></>
    return (
        <div className="loading-container">
            <ReactLoading type="cylon" color="cyan"/>
        </div>
    );
};

export default OverlayLoading;
