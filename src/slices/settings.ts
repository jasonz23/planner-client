import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    start: "",
    end: "",
    

}

const slice = createSlice({
    name: "settings",
    initialState,
    reducers:{}

})

export const settings = slice.reducer;