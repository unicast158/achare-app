import {createSlice} from "@reduxjs/toolkit";
import StorageService from "../serivce/storage.service";

let reducers = {
    setToken: (store, action) => {
        store.token = action.payload
        StorageService.setToken(action.payload);
    },
    setProfile: (store, action) => {
        store.username = action.payload.name;
        store.email = action.payload.email
        StorageService.setProfile(action.payload)
    },
    logout: (store) => {
        store.token = "";
        store.username = "";
        store.email = "";
        StorageService.removeToken()
    },
    KendoUpdate: (store, action) => {
        let obj = {};
        action.payload.map(({filed, value}) => {
            return obj[filed] = value;
        })
        store.UserObj = obj;
        StorageService.setProfile(obj)
    }
};
const slice = createSlice({
    name: "profile",
    initialState: {
        username: StorageService.getUser()?.name,
        token: StorageService.getToken(),
        email: StorageService.getUser()?.email,
        pageTitle: "profile information"
    },
    reducers: reducers
})

export const {setToken, setProfile, logout, KendoUpdate} = slice.actions

export default slice.reducer
