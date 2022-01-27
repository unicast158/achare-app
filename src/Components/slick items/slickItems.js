import React from 'react';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

const SlickItems = (props) => {
    return (
        <div className={"position-relative mx-1 overflow-hidden"}>
            <a href={props.link}>
                <Image className={"img-gallery"} src={props.image}></Image>
                <div className={"overlay-img position-absolute"}>
                    {props.children}
                </div>
            </a>
        </div>
    );
};

export default SlickItems;