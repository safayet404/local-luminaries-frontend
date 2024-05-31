import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customizeService from "./customizeService"

export const createCustomizeTour = createAsyncThunk("customize/create-customize-tour",async(tourData,thunkAPI)=>{
    try{
        return await customizeService.createCustomizeTour(tourData)
    }catch(error)
    {
        thunkAPI.rejectWithValue(error)
    }
})


export const resetState = createAction("Reset_all");

const initialState = {
    customizes : [],
    singleCustomize : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message :""

}

export const customizeSlice = createSlice({
    name : "Customize",
    initialState,
    reducers : {},
    extraReducers :(builder) => [
        builder
        .addCase(createCustomizeTour.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(createCustomizeTour.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.customizes = action.payload
        })
        .addCase(createCustomizeTour.rejected ,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.error
        })
    ]
})

export default customizeSlice.reducer