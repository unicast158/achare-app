import React, {useEffect, useState} from 'react';
import {Alert, Button, Container, Image, Tab, Table, Tabs} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {KendoUpdate, logout} from "../../slice/profileSlice";
import "./profilepage.scss";
import StorageService from "../../serivce/storage.service";
import EasyEdit from 'react-easy-edit';
import UserService from "../../serivce/user.service";

const editField = "inEdit";

const Profile = (props) => {

    console.log(props);
    const dispatch = useDispatch();
    const [key, setKey] = useState('home');
    const store = useSelector((store => store.profile));
    /*const [Data, setData] = useState();*/
    const [Data, setData] = useState(StorageService.getUser()?.name);

    const save = (value) => {
        UserService.patchData({name: value}).then(res => {
            debugger;
        }).catch(err => console.log(err?.message));
    }

    const HandleLogOut = (e) => {
        dispatch(logout());
    };

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
                                <Alert variant={'info'}>
                                    برای ویرایش هر فیلد روی آن کلیک نمایید
                                </Alert>
                                <div className={"d-flex align-items-center"}>
                                    <Table stripped bordered hover size="sm" className={"w-50"}>
                                        <tbody>
                                        <tr>
                                            <th width="170">نام :</th>
                                            <td>
                                                <EasyEdit
                                                    value={Data}
                                                    key={"name"}
                                                    type="text"
                                                    onSave={save}
                                                    saveButtonLabel="ثبت"
                                                    cancelButtonLabel="انصراف"
                                                    attributes={{name: "name-input", id: 1}}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="170">نام خانوادگی :</th>
                                            <td>
                                                <EasyEdit
                                                    value={StorageService.getUser()?.lastname}
                                                    type="text"
                                                    saveButtonLabel="ثبت"
                                                    cancelButtonLabel="انصراف"
                                                    attributes={{name: "lastname-input", id: 2}}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="170">تاریخ تولد :</th>
                                            <td>
                                                <EasyEdit
                                                    value={StorageService.getUser()?.birthday}
                                                    type="text"
                                                    saveButtonLabel="ثبت"
                                                    cancelButtonLabel="انصراف"
                                                    attributes={{name: "birthday-input", id: 3}}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="170">جنسیت :</th>
                                            <td>
                                                <EasyEdit
                                                    attributes={{class: "ms-2"}}
                                                    type="radio"
                                                    saveButtonLabel="ثبت"
                                                    cancelButtonLabel="انصراف"
                                                    value={StorageService.getUser()?.Gender}
                                                    options={[
                                                        {label: 'مرد', value: true}]}
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="transactions" title="اعتبار و تراکنش ها">
                    </Tab>
                    <Tab eventKey="specialists" title="متخصص های منتخب">
                        <p>salam che2ri</p>
                    </Tab>
                    <Tab eventKey="address" title="مدیریت آدرس ها">
                        <div>
                            {StorageService.getAddress()}
                        </div>
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
