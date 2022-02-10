import http from "./http";

export default class UserService {
    static getUser(token) {
        return http.get("/api/user", {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }

    static GetFakeUser(){
        return http.get("http://localhost:3001/userFakeData")
    }

    static patchData(body){
        return http.patch("http://localhost:3001/userFakeData",body)
    }
}
