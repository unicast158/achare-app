import React, {useEffect, useState} from 'react';
import ServiceAuthentication from "../../serivce/service.authentication";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";

const Register = () => {

    const [formData, setformData] = useState({
        name: "",
        password: "",
        email: ""
    });

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/v1/register", {
            name: formData.name,
            password: formData.password,
            email: formData.email
        }).then(
            (res) => {
                console.log('res');
            }
        )
        /*ServiceAuthentication.postData(formData.email, formData.password, formData.name).then(
            (res) => {
                console.log('res');
            }
        )*/
    }

    const OnChange = (e) => {
        const newForm = {...formData};
        newForm[e.target.name] = e.target.value;
        setformData(newForm);
    }

    return (
        <Form onSubmit={HandleSubmit}>
            <Container className={'py-5 bg-light mt-5'}>
                <h5 className={'me-5'}>اطلاعات خود را تکمیل کنید</h5>

                <Row className="mb-3 justify-content-center pt-5 mt-5">
                    <Col xs={6}>
                        <Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control value={formData.email} type="email" name={'email'}
                                              onChange={OnChange}
                                              placeholder="ایمیل خود را وارد نمایید"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control value={formData.password} type="password" name={'password'}
                                              onChange={OnChange}
                                              placeholder="رمز عبور را وارد نمایید"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>نام کاربری</Form.Label>
                                <Form.Control value={formData.name} type="text" name={'name'} onChange={OnChange}
                                              placeholder="نام کاربری خود را وارد نمایید"/>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit" className={'mt-4'}>
                            ارسال
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default Register;