import React, {useEffect, useRef, useState} from 'react';
import {Button} from "react-bootstrap";
import ServiceService from "../../../serivce/service.service";
import UserService from "../../../serivce/user.service";

const ProfileTableTemplateRow = ({children, name}) => {

    const [Update, setUpdate] = useState(false);
    const [InputData, setInputData] = useState(children);

    const HandleUpdate = (e) => {
        setUpdate(true)
    };

    const HandleSubmitUpdate = (e) => {
        debugger;
        e.preventDefault()
        setUpdate(false)
        UserService.patchData({[name]: InputData}).then(
            res => {
                console.log('ali')
            }
        )
    }

    const HandleOnChange = (e) => {
        setInputData(e.target.value)
    }

    const checkUpdate = () => {
        if (Update) {
            return (
                <form onSubmit={HandleSubmitUpdate}>
                    <input onChange={HandleOnChange} value={InputData}/>
                    <Button className={`me-auto`} type={"submit"} variant={"info"}
                            size={"sm"}>ثبت</Button>
                </form>
            )
        } else {
            return (
                <>
                    <p>{children}</p>
                    <Button className={`me-auto`} onClick={HandleUpdate} variant={"info"} size={"sm"}>ویرایش</Button>
                </>
            )
        }
    }

    return (
        <div className={"d-flex"}>
            {checkUpdate()}
        </div>
    );
};

export default ProfileTableTemplateRow;