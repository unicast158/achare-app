import {createSlice} from "@reduxjs/toolkit";

const slice1 = createSlice({
    name: "counter",
    initialState: {
        counterValue: 0,
        pageTitle: "second page title"
    },
    reducers: {
        increment: (store, action) => {
            store.counterValue += 1
        },
        decrement: (store, action) => {
            store.counterValue -= 1
        },
        someAction: (store, action) => {
            store.counterValue = store.counterValue + +action.payload
        }
    }
})

export const {decrement, increment,someAction} = slice1.actions

export default slice1.reducer
