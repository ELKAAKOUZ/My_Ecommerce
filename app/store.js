import { configureStore } from "@reduxjs/toolkit";
import advsReducer from "../slices/advsSlice";
export const store =configureStore({
    reducer:{
        advertisments:advsReducer,
    }
})