

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    menuSelectedOption: 0,
    isSignedIn: false,

}

const slice = createSlice({
    name: "states",
    initialState,
    reducers:{}

})

export const states = slice.reducer;