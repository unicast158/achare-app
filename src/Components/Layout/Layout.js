import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import Header from "../Header/Header";
import "./layout.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import {Container, Image} from "react-bootstrap";
import SlickItems from "../slick items/slickItems";
import axios, {Axios} from "axios";
import CarouselTemplate from "../carousel template/CarouselTemplate";

const Layout = (props) => {

    const [newest, setNewest] = useState([]);
    const [decoracion, setdecoracion] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:3002/newest", {}).then(res => {
            setNewest(res.data);
        });
        axios.get("http://localhost:3002/decoracion", {}).then(res => {
            setdecoracion(res.data);
        });
    }, [])

    return (
        <div id={"main"}>
            <Header/>
            {props.children}
            <div id={"body"} className={"pt-4"}>
                <CarouselTemplate title={"جدیدترین خدمات"} data={newest}></CarouselTemplate>
                <CarouselTemplate title={"دکوراسیون و بازسازی"} data={decoracion}></CarouselTemplate>
            </div>
        </div>
    )
};

export default Layout;