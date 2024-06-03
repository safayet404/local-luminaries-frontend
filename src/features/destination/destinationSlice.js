import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllDestination = createAsyncThunk("destination/all-destination")