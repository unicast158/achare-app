import axios from "axios";

export default class FakeUserService{
    static getFakeUser(){
        return axios.get("http://localhost:3001/userFakeData")
    }
}