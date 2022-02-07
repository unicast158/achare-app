import {sampleProducts} from "./sample-products";
import StorageService from "../storage.service";

let data = [...sampleProducts];

const generateId = data => data.reduce((acc, current) => Math.max(acc, current.key), 0) + 1;

export const insertItem = item => {
    item.key = generateId(data);
    item.inEdit = false;
    data.unshift(item);
    return data;
};
export const getItems = () => {
    debugger;
    if (StorageService.getUserForKendo())
        return StorageService.getUserForKendo();
    else return data;
};
export const updateItem = item => {
    debugger;
    let myvar = getItems();
    let index = myvar.findIndex(record => record.key === item.key);
    myvar[index] = item;
    debugger;
    StorageService.setUserInfo(myvar);
    return myvar;
};
export const deleteItem = item => {
    let index = data.findIndex(record => record.key === item.key);
    data.splice(index, 1);
    return data;
};