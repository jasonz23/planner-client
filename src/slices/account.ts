import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: "",
    lastName: "",
    

}

const slice = createSlice({
    name: "accountDetails",
    initialState,
    reducers:{}

})

export const account = slice.reducer;