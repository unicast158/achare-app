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
    increment: (store, action) => {
        store.counterValue += 1
    },
    decrement: (store, action) => {
        store.counterValue -= 1
    },
    someAction: (store, action) => {
        store.counterValue = store.counterValue + +action.payload
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

export const {setToken, setProfile,logout} = slice.actions

export default slice.reducer
