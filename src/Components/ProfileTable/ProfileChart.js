import React from 'react';
import {Button} from "react-bootstrap";

const ProfileChart = () => {
    return (
        <div className={"d-flex flex-grow-1"}>
            <div className={"w-100px"}>
                <p className={"text-muted"}>نام</p>
            </div>
            <p>علیرضا</p>
            <div className={"me-auto"}>
                <Button>ویرایش</Button>
            </div>
        </div>
    );
};

export default ProfileChart;