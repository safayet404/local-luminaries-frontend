import {configureStore} from "@reduxjs/toolkit"
import customizeReducer from "../features/customize/customizeSlice"


export const store = configureStore({
    reducer : {
        customize : customizeReducer
    }
})