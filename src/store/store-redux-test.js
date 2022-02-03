import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice"

const storeReduxTest = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default storeReduxTest
