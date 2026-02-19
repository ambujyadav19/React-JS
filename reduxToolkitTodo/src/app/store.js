//every app ha only store which is known as single source of truth
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({
    reducer:todoReducer
})
//any updation in store is done by reducer only