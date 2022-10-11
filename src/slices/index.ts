import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { states } from "./states";
const store = configureStore({
    reducer: { reducers, states}
})


export type AppDispatch = typeof store.dispatch