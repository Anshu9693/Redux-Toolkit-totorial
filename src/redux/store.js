import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counteSlice"

export const store = configureStore({
    reducer:{
        counter:countReducer
    }
})