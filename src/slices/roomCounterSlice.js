import { createSlice } from "@reduxjs/toolkit";

const maxValue = 99;
const minValue = 1;

const roomCounterSlice = createSlice
(
    {
        name: 'counter',
        initialState:
        {
            value: 1
        },
        reducers:
        {
            increment: (state) => { state.value < maxValue ? state.value += 1 : alert(`You reached max value: ${maxValue}!`) },
            decrement: (state) => { state.value > 1 ? state.value -= 1 : alert(`Value cannot be less than ${minValue}`)}
        }
    }
);

export const { increment, decrement } = roomCounterSlice.actions;
export default roomCounterSlice.reducer;