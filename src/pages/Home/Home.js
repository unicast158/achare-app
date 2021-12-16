import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import {Button, Carousel, Col, Row} from "react-bootstrap";
import {Form} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = (props) => {
    const [CitySelectSearch, setCitySelectSearch] = useState(333);
    const [textSearch, settextSearch] = useState('');
    const [getsearch, setgetsearch] = useState([]);

    const SelectCityChangeSearch = (e) => {
        setCitySelectSearch(e.target.value);
    }
    const boxSearch = (e) => {
        settextSearch(e.target.value);
    }

    const HandleSearch = (e) => {
        // let arraysearch = getsearch.map(item => {
        //     return item.services;
        // }).flat()
        // arraysearch = arraysearch.filter(item => {
        //     return item.title.includes(textSearch);
        // })
        props.history.push(`/SearchOutput/${CitySelectSearch}/${textSearch}`);
    }

    return (
        <Row>
            <Col>
                <Row className="align-items-center">
                    <Col xs={12}>
                        <h1 className={'me-lg-5 mt-lg-5 mb-5'}>
                            چاره‌ی کار ... آچـــــاره
                        </h1>
                        <p className={'me-lg-5 mb-5'}>
                            برنده جایزه بهترین وبسایت و اپلیکیشن جشنواره وب و‌ موبایل در حوزه سرویس‌های خدمات شخصی و
                            منزل،‌
                            ‌سال‌های ۹۹-۹۸-۱۳۹۷
                        </p>
                        <p className={'mt-5 me-lg-5'}>شهر خود را انتخاب و سرویس موردنظرتان را جستجو کنید.</p>
                    </Col>
                    <Col xs={12} className={'me-lg-5'}>
                        <Row>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                    Name
                                </Form.Label>
                                <Form.Select onChange={SelectCityChangeSearch} value={CitySelectSearch}
                                             aria-label="Default select example" className={'me-3'}>
                                    <option>انتخاب کنید</option>
                                    <option defaultValue value={333}>تهران</option>
                                    <option value={235}>کرج</option>
                                    <option value={217}>اصفهان</option>
                                </Form.Select>
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Username
                                </Form.Label>
                                <Form.Control value={textSearch} onChange={boxSearch} type="type"
                                              placeholder="چه سرویس هایی را نیاز دارید ؟"/>
                            </Col>
                            <Col xs="auto">
                                <Button onClick={HandleSearch} className="mb-2 btn-success">
                                    جستجو
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 float-start"
                            src="https://achareh.ir/images/landing/landing/landing-pic-2.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 float-start"
                            src="https://achareh.ir/images/landing/landing/landing-pic-4.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 float-start"
                            src="https://achareh.ir/images/landing/landing/landing-pic-5.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    );
};

export default Home;
