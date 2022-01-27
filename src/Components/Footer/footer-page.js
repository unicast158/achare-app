import React from 'react';
import {Col, Container, Image, InputGroup, Row} from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
    return (
        <div className={"footer-template"}>
            <Container>
                <Image src={"https://achareh.co/images/achareh-type-logo-new.png"} width={68}
                       className={"img-fluid mb-5"}></Image>
                <Row>
                    <Col xs={3}>
                        <p className={"text-justify p-footer-color p-footer-line-height"}>
                            آچــاره ایـن امـکان را به کـاربران خود می‌دهد تا هـر خـدمتی که مورد نیازشان است، اعم از
                            نظافت، نظافت منزل، قالیشویی و خشکشویی، تعمیرات لوله کشی یا تعویض روغن ماشین، کارواش و غیره
                            را از طریق وبسایت و اپلیکیشن به سهولت و در هـر سـاعتی از شبانه‌روز سـفارش دهند. نـیروهــای
                            خــدماتی و کارگرهای نظافت دارای گـواهی عــدم سـوء پـیشینه و عــدم اعــتیاد بوده و از دیگر
                            فیلترهای تأیید صلاحیت آچاره عبور کرده‌اند تا شـما بتوانید به آنها اعتماد کنید.
                        </p>
                    </Col>
                    <Col xs={4}>
                        <b>شعبه 1 (دفتر مرکزی)</b>
                        <p>سعادت آباد، انتهای بلوار دریا، بلوار نورانی، خیابان فخارمقدم، نرسیده به بوستان دوم، پلاک ۲۴،
                            طبقه ۱</p>
                        <b>شعبه 2 (ویژه ثبت نام متخصصین)</b>
                        <p>بزرگراه شهید نواب صفوی (جنوب به شمال) داخل لاین کندرو، بالاتر از بریانک شرقی، نبش کوچه قطب،
                            مرکز تسهیل و توسعه کسب و کار و کارآفرینی اجتماعی (آچاره)</p>
                        <b>تلفن: ۱۴۷۱</b>
                        <p>info@achareh.ir</p>
                    </Col>
                    <Col xs={2} className={"link-footer"}>
                        <p>ثبت‌نام متخصص</p>
                        <p>نمایندگی‌های آچاره در شهرهای دیگر</p>
                        <p>سوالات متداول</p>
                        <p>درباره ما</p>
                        <p>شرایط استفاده</p>
                        <p>پیشنهادات و انتقادات</p>
                        <p>مجله آچاره</p>
                    </Col>
                    <Col xs={3}>
                        <p className={"text-justify p-footer-color p-footer-line-height"}>
                            در خــبرنـامه آچـــاره عـضـــو شـوید و زودتـــر از هــمه از تخفیف‌های ویـژه ما باخــبر شوید.
                            قطعا ما هم مثـل شما از اسپم بیزاریم!
                        </p>
                        <InputGroup className={"mb-5"}>
                            <input className={"form-control"} placeholder={"ایمیل خود را وارد نمایید..."}/>
                            <button className={"btn btn-success"}>عضویت</button>
                        </InputGroup>
                        <Image src={"https://achareh.co/images/landing/cafebazaar-1x.png"} width={136}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;