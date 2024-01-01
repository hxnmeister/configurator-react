import { createSlice } from "@reduxjs/toolkit";

const roomTypeSlice = createSlice
(
    {
        name: 'roomType',
        initialState:
        {
            value: ''
        },
        reducers:
        {
            setRoomType: (state, action) => { state.value = action.payload }
        }
    }
);

export const { setRoomType } = roomTypeSlice.actions;
export default roomTypeSlice.reducer;