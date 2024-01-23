import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contactForm',
    initialState:{value:[],filter:''},
    reducers:{
        update(state,action){
        state.value.push(action.payload)
        },
        remove(state,action){
        state.value = state.value.filter(({id})=>id!==action.payload);
        },
        filterSearch(state,action){
        state.filter=action.payload.toLowerCase();
        }
    }
})
export const {update}= contactSlice.actions;
export const {filterSearch}= contactSlice.actions;
export const {remove}= contactSlice.actions;