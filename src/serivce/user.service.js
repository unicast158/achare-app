import http from "./http";

export default class UserService {
    static getUser(token) {
        return http.get("/api/user", {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
    }
}
