import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Profile = () => {

    const history = useHistory();

    const HandleLogOut = (e) => {
        localStorage.removeItem('token');
        history.push('/Login');
    };

    if(!localStorage.getItem('token')) {
        history.push('/Login');
        return '<div></div>'
    }

    return (
        <div>
            Hello User
            <Button onClick={HandleLogOut}>Log Out</Button>
        </div>
    );
};

export default Profile;