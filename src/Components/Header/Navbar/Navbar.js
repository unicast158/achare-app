import React, {useState} from 'react';
import {Button, Col, Container, Form, Image, Nav, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Navbar_react = () => {

    const [CitySelect, setCitySelect] = useState();

    const SelectCityChange = (e) => {
        setCitySelect(e.target.value);
    }

    return (
        <Container fluid>
            <Row className="justify-content-lg-center">
                <Col lg={11}>
                    <Navbar collapseOnSelect expand="lg" className={'pt-0'}>
                        <Navbar.Brand className={"d-flex"}>
                            <Link to={'/'}><Image src="https://achareh.ir/images/achareh-type-logo-new.png" fluid width={130}/></Link>
                            <Form.Select onChange={SelectCityChange} value={CitySelect}
                                         aria-label="Default select example" className={'me-3'}>
                                <option defaultValue value="tehran">تهران</option>
                                <option value="karaj">کرج</option>
                                <option value="isfahan">اصفهان</option>
                            </Form.Select>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className={'text-black-50'} href="#features">کسب درآمد</Nav.Link>
                                <Nav.Link className={'text-black-50'} href="#pricing">مجله آچاره</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><Button variant="outline-success">
                                    <span className={'ms-2'}>1471</span>
                                    <FontAwesomeIcon rotation={90}
                                                     icon={faPhone}/>
                                </Button>{' '}
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="outline-success">ثبت نام | ورود</Button>{' '}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col></Row></Container>
    );
};

export default Navbar_react;