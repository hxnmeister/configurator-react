import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/roomCounterSlice';
import roomTypeReducer from '../slices/roomTypeSlice';
import protectionTypeReducer from '../slices/protectionTypeSlice';

export const store = configureStore
(
    {
        reducer: 
        {
            counter: counterReducer,
            roomType: roomTypeReducer,
            protectionType: protectionTypeReducer
        }
    }
);