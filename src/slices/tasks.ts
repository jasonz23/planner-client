import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
    tasksList: any;
}

const initialState = {
    tasksList: [],

} as TasksState

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        addSingleTask: (state, {payload}: PayloadAction<object>)=> {
            state.tasksList.push(payload);
        }
    }
})

export const {addSingleTask} = slice.actions;

export const tasks = slice.reducer;