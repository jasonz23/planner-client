import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasksList: [],
    tasksListLength: 0,
    tasksFilteredByDate: [],

}

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers:{}

})

export const tasks = slice.reducer;