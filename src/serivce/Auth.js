import axios from "axios";

export default class AuthService {
    static login(username, password) {
        return (
            axios.post("/oauth/token", {
                username,
                password,
                grant_type: 'password'
            })
        )
    }

    static Register(email, name, password) {
        return (
            axios.post("/api/v1/register", {
                name,
                password,
                email
            })
        )
    }
}