import { createSlice } from "@reduxjs/toolkit";

const initialState: { overlayState: boolean } = {
    overlayState: false,
};

export const overlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers: {
        changeOverlayState(state) {
            state.overlayState = !state.overlayState;
        },
    },
});

export const { changeOverlayState } = overlaySlice.actions;

export default overlaySlice.reducer;
