import { createSlice } from "@reduxjs/toolkit";

const protectionTypeSlice = createSlice
(
    {
        name: 'protectionType',
        initialState:
        {
            value: []
        },
        reducers:
        {
            setProtectionType: (state, action) => 
            {
                const {newValue, checked} = action.payload;

                if(checked && !state.value.includes(newValue))
                {
                    state.value = [...state.value, newValue];
                }
                else if(!checked && state.value.includes(newValue))
                {
                    state.value = state.value.filter((item) => item !== newValue);
                }
            }
        }
    }
);

export const { setProtectionType } = protectionTypeSlice.actions;
export default protectionTypeSlice.reducer;