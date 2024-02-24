import { createSlice } from "@reduxjs/toolkit";

interface MainAppState {
    configState: {
        appStatus: 'loading' | 'success' | 'error',
    },
}

const initialState: MainAppState = {
    configState: {
        appStatus: 'loading'
    }
}

export const mainSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startLoading(state) {
            state.configState.appStatus = 'loading';
        },
        hasError(state) {
            state.configState.appStatus = 'error';
        },
        getSuccess(state) {
            state.configState.appStatus = 'success';
        }
    },
});

export const { startLoading, hasError, getSuccess } = mainSlice.actions;

export default mainSlice.reducer;