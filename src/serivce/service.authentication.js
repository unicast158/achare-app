import React from 'react';
import axios from "axios";

export default class ServiceAuthentication {
    static postData(email, password, name) {
        return axios.post("/api/v1/register", {
            params: {
                name: name,
                password: password,
                email: email
            }
        }).then((res) => {
            console.log(res);
        })

    }
}