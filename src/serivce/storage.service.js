const PROFILE_KEY = "profile";
const TOKEN_KEY = "token";

export default class StorageService {

    static getUser() {
        const profile = localStorage.getItem(PROFILE_KEY)
        if (profile) {
            return JSON.parse(profile)
        }
    }

    static getAddress() {
        const profile = localStorage.getItem(PROFILE_KEY)
        if (profile) {
            return (JSON.parse(profile)).address
        }
    }

    static setProfile(profile) {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
    }

    static setUserInfo(profile) {
        localStorage.setItem("KendoInformation", JSON.stringify(profile))
    }

    static setToken(token) {
        localStorage.setItem(TOKEN_KEY, token)
    }

    static getToken() {
        return localStorage.getItem(TOKEN_KEY)
    }

    static getUserForKendo() {
        return JSON.parse(localStorage.getItem("KendoInformation"));
    }

    static removeToken() {
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(PROFILE_KEY)
    }
}
