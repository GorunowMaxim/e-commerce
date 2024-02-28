import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: { overlayState: boolean } = {
    overlayState: false,
};

export const overlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers: {
        changeOverlayState(state, action: PayloadAction<boolean | undefined>) {
            if (action.payload !== undefined) {
                state.overlayState = action.payload;
            } else {
                state.overlayState = !state.overlayState;
            }
        },
    },
});

export const { changeOverlayState } = overlaySlice.actions;

export default overlaySlice.reducer;
