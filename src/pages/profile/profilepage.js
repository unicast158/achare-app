import React, {useEffect, useState} from 'react';
import {Button, Container, Image, Tab, Tabs} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {KendoUpdate, logout} from "../../slice/profileSlice";
import "./profilepage.scss";
import { insertItem, getItems, updateItem, deleteItem } from "../../serivce/testforkendo/services";
import { MyCommandCell } from "../../serivce/testforkendo/myCommandCell";
import { Grid, GridColumn as Column, GridToolbar } from "@progress/kendo-react-grid";
import StorageService from "../../serivce/storage.service";
const editField = "inEdit";

const Profile = (props) => {

    console.log(props);
    const dispatch = useDispatch();
    const [data, setData] = React.useState([]);
    const [key, setKey] = useState('home');

    React.useEffect(() => {
        let newItems = getItems();
        setData(newItems);
    }, []); // modify the data in the store, db etc

    const remove = dataItem => {
        const newData = deleteItem(dataItem);
        setData(newData);
    };

    const add = dataItem => {
        dataItem.inEdit = true;
        const newData = insertItem(dataItem);
        setData(newData);
    };

    const update = dataItem => {
        debugger;
        dataItem.inEdit = false;
        const newData = updateItem(dataItem);
        setData(newData);
        dispatch(KendoUpdate(data));
    }; // Local state operations


    const discard = () => {
        const newData = [...data];
        newData.splice(0, 1);
        setData(newData);
    };

    const cancel = dataItem => {
        const originalItem = getItems().find(p => p.key === dataItem.key);
        const newData = data.map(item => item.key === originalItem.key ? originalItem : item);
        setData(newData);
    };

    const enterEdit = dataItem => {
        setData(data.map(item => item.key === dataItem.key ? {
            ...item,
            inEdit: true
        } : item));
    };

    const itemChange = event => {
        const newData = data.map(item => item.key === event.dataItem.key ? {
            ...item,
            [event.field || '']: event.value
        } : item);
        setData(newData);
    };

    const addNew = () => {
        const newDataItem = {
            inEdit: true,
            Discontinued: false
        };
        setData([newDataItem, ...data]);
    };

    const CommandCell = props => <MyCommandCell {...props} edit={enterEdit} remove={remove} add={add} discard={discard}
                                                update={update} cancel={cancel} editField={editField}/>;

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
                                <Grid style={{
                                    height: "420px"
                                }} data={data} onItemChange={itemChange} editField={editField}>
                                    <Column field="key" title="عنوان" width="150px" editable={false} className={"text-muted"} />
                                    <Column field="value" title="مقدار" width="200px" />
                                    {/*<Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" width="150px" />
                                    <Column field="UnitsInStock" title="Units" width="120px" editor="numeric" />
                                    <Column field="Discontinued" title="Discontinued" editor="boolean" />*/}
                                    <Column cell={CommandCell} width="200px" />
                                </Grid>
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
