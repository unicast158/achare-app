import axios from "axios"
import StorageService from "./storage.service";


const instance = axios.create({
    headers: {
        authorization: 'Bearer ' + StorageService.getToken()
    }
})

const instanceSecond = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instanceSecond.patch,
}
