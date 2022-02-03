import React, {useEffect, useState} from 'react';
import {Button, Container, Image, Tab, Tabs} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";
import UserService from "../../serivce/user.service";
import StorageService from "../../serivce/storage.service";
import {useDispatch} from "react-redux";
import {logout} from "../../slice/profileSlice";
import "./profilepage.scss"
import ProfileChart from "../../Components/ProfileTable/ProfileChart";

const Profile = (props) => {

    console.log(props);
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setuser] = useState({});
    const [key, setKey] = useState('home');

    const HandleLogOut = (e) => {
        dispatch(logout());
    };

    // useEffect(() => {
    //     UserService.getUser().then((res) => {
    //         setuser(res.data);
    //     })
    // }, [])

    return (
        <div className={"flex-grow-1 d-flex flex-column"}>
            <Container className={'pt-5 flex-grow-1 d-flex flex-column'}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-around"
                >
                    <Tab eventKey="profile" title="پروفایل">
                        <div className={"d-flex"}>
                            <div className={"border d-flex flex-column"}>
                                <div className={"flex-grow-1"}>
                                    <Image
                                        width={"104"}
                                        height={"104"}
                                        src={"https://cdn.achareh.ir/production.achareh.ir/mediaset/mediacontents/5197286f-3f82-49d1-80ad-20e5787f8173/mediaset.png"}
                                        className={"img-fluid"}
                                    />
                                    <p className={"text-muted"}>شماره کاربری</p>
                                    <p>09107675178</p>
                                </div>
                            </div>
                            <div className={"flex-grow-1 d-flex flex-column pe-5"}>
                                <ProfileChart></ProfileChart>
                                <ProfileChart></ProfileChart>
                                <ProfileChart></ProfileChart>
                                <ProfileChart></ProfileChart>
                                <ProfileChart></ProfileChart>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="transactions" title="اعتبار و تراکنش ها">
                        <p>salam khoobi</p>
                    </Tab>
                    <Tab eventKey="specialists" title="متخصص های منتخب">
                        <p>salam che2ri</p>
                    </Tab>
                    <Tab eventKey="address" title="مدیریت آدرس ها">
                        <p>salam che2ri</p>
                    </Tab>
                    <Tab eventKey="friends" title="معرفی به دوستان">
                        <p>salam che2ri</p>
                    </Tab>
                </Tabs>
            </Container>
            <Button onClick={HandleLogOut}>Log Out</Button>
        </div>
    );
};

export default Profile;
