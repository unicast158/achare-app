import http from "./http";

export default class UserService {
    static getUser() {
        return http.get("/api/user")
    }
}
