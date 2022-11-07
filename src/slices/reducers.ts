import { combineReducers } from '@reduxjs/toolkit';
import { tasks } from './tasks';
import { states } from './states';
export const reducers = combineReducers({tasks,states});

export type RootState = ReturnType<typeof reducers>;