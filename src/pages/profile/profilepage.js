import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Profile = () => {

    const history = useHistory();
    const [user, setuser] = useState({});

    const HandleLogOut = (e) => {
        localStorage.removeItem('token');
        history.push('/Login');
    };

    useEffect(() => {
        axios.get("/api/user", {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => {
            setuser(res.data);
        })
    }, [])

    return (
        <div>
            <h3 className={'text-center'}>{user.name}</h3>
            Hello User
            <Button onClick={HandleLogOut}>Log Out</Button>
        </div>
    );
};

export default Profile;