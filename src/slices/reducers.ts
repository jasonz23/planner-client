import { combineReducers } from '@reduxjs/toolkit'
import react from 'react'

import { tasks } from './tasks'

export const reducers = combineReducers({tasks})

export type RootState = ReturnType<typeof reducers>;