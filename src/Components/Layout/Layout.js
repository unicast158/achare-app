import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import "./layout.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import CarouselTemplate from "../carousel template/CarouselTemplate";
import Footer from "../Footer/footer-page";

const Layout = (props) => {

    const [newest, setNewest] = useState([]);
    const [decoracion, setdecoracion] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:3001/newest", {}).then(res => {
            setNewest(res.data);
        });
        axios.get("http://localhost:3001/decoracion", {}).then(res => {
            setdecoracion(res.data);
        });
    }, [])

    return (
        <div id={"main"}>
            <Header/>
            {props.children}
            <Switch>
                <Route exact path={"/"}>
                    <div id={"body"} className={"pt-4"}>
                        <CarouselTemplate title={"جدیدترین خدمات"} data={newest}/>
                        <CarouselTemplate title={"دکوراسیون و بازسازی"} data={decoracion}/>
                    </div>
                    <Footer/>
                </Route>
            </Switch>
        </div>
    )
};

export default Layout;
