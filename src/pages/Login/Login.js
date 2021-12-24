import React, {useState} from 'react';
import axios from "axios";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import AuthService from "../../serivce/Auth";

const Login = () => {
    const [formData, setformData] = useState({
        name: "",
        password: "",
    });

    const history = useHistory();

    const HandleSubmit = (e) => {
        e.preventDefault();
        AuthService.login(formData.name, formData.password).then(
            (res) => {
                localStorage.setItem('token',res.data.access_token);
                alert("با موفقیت وارد شدید")
                history.push('/profile');
            }
        ).catch(err=>alert(err.message))
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
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>نام کاربری</Form.Label>
                                <Form.Control value={formData.name} type="text" name={'name'} onChange={OnChange}
                                              placeholder="نام کاربری خود را وارد نمایید"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control value={formData.password} type="password" name={'password'}
                                              onChange={OnChange}
                                              placeholder="رمز عبور را وارد نمایید"/>
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

export default Login;