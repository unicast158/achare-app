import React, {useRef, useState} from 'react';
import axios from "axios";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import AuthService from "../../serivce/Auth";
import UserService from "../../serivce/user.service";
import StorageService from "../../serivce/storage.service";
import LoadingBar from 'react-top-loading-bar'
import "./Login.scss"
import {useDispatch} from "react-redux";
import {setProfile, setToken} from "../../slice/profileSlice";

const Login = () => {
    const [Dataform, setDataform] = useState({
        name: "",
        password: "",
    });
    const dispatch = useDispatch();
    const ref = useRef(null)
    const history = useHistory();

    const HandleSubmit = (e) => {
        e.preventDefault();
        ref.current.staticStart()
        AuthService.login(Dataform.name, Dataform.password).then(res => {
            dispatch(setToken(res.data.access_token))
            return UserService.getUser(res.data.access_token)
        }).then(res => {
            dispatch(setProfile(res.data))
        }).catch(err => alert(err.message)).then(res => {
            /*ref.current.complete()*/
        })
    }

    const OnChange = (e) => {
        const newForm = {...Dataform};
        newForm[e.target.name] = e.target.value;
        setDataform(newForm);
    }

    return (
        <Form onSubmit={HandleSubmit}>
            <LoadingBar color='green' ref={ref} className="loadingTop"/>
            <Container className={'py-5 bg-light mt-5'}>
                <h5 className={'me-5'}>اطلاعات خود را تکمیل کنید</h5>

                <Row className="mb-3 justify-content-center pt-5 mt-5">
                    <Col xs={6}>
                        <Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>نام کاربری</Form.Label>
                                <Form.Control value={Dataform.name} type="text" name={'name'} onChange={OnChange}
                                              placeholder="نام کاربری خود را وارد نمایید"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control value={Dataform.password} type="password" name={'password'}
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
