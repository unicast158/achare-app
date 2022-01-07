import React, {useEffect, useState} from 'react';
import {Button, Container, Tab, Tabs} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";
import UserService from "../../serivce/user.service";
import StorageService from "../../serivce/storage.service";

const Profile = () => {

    const history = useHistory();
    const [user, setuser] = useState({});
    const [key, setKey] = useState('home');

    const HandleLogOut = (e) => {
        StorageService.removeToken();
        history.push('/Login');
    };

    useEffect(() => {
        UserService.getUser().then((res) => {
            setuser(res.data);
        })
    }, [])

    return (
        <div>
            <Container className={'pt-5'}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-around"
                >
                    <Tab eventKey="profile" title="پروفایل">
                        <p>salam</p>
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
