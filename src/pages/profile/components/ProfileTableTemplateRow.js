import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import UserService from "../../../serivce/user.service";
import StorageService from "../../../serivce/storage.service";
import {useDispatch} from "react-redux";
import {setProfile} from "../../../slice/profileSlice";

const ProfileTableTemplateRow = ({children, name}) => {

    const [Update, setUpdate] = useState(false);
    const [InputData, setInputData] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setInputData(children)
    }, [children])

    const HandleUpdate = (e) => {
        setUpdate(true)
    };

    const CancelUpdate = () => {
        setUpdate(false)
    }

    const HandleSubmitUpdate = (e) => {
        if(InputData.length){
            setUpdate(false)
            UserService.patchData({[name]: InputData}).then(
                res => {
                    StorageService.setProfile(res.data)
                    dispatch(setProfile(res.data))
                }
            ).catch(
                err => {
                    console.log(err?.message)
                }
            )
        } else {
            alert("Enter Somethings")
        }
    }

    const HandleOnChange = (e) => {
        setInputData(e.target.value)
    }

    const checkUpdate = () => {
        if (Update) {
            return (
                <>
                    <input onChange={HandleOnChange} value={InputData}/>
                    <Button className={`me-auto`} onClick={HandleSubmitUpdate} variant={"info"}
                            size={"sm"}>ثبت</Button>
                    <Button className={`me-auto`} onClick={CancelUpdate} variant={"secondary"}
                            size={"sm"}>انصراف</Button>
                </>
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