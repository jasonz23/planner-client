import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers:{}

})

export const tasks = slice.reducer;