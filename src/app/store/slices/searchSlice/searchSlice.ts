import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSuccess, hasError, startLoading } from "../mainSlice/mainSlice";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductData } from "shared/interfaces";

interface SearchState {
    currentSearchValue: string;
    searchData: ProductData[];
    uiState: {
        state: boolean;
    };
}

const initialState: SearchState = {
    currentSearchValue: "",
    searchData: [],
    uiState: {
        state: false,
    },
};

export const fetchingSearchProducts = createAsyncThunk(
    "search/fetchingSearchProducts",
    async ({ url, value }: { url: string; value: string }, thunkAPI) => {
        thunkAPI.dispatch(startLoading());
        try {
            const response = await axios.get(`${url}?search=${value}`);
            thunkAPI.dispatch(getSuccess());
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(hasError());
            return [];
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearchUiState(state) {
            state.uiState.state = !state.uiState.state;
        },
        setSearchData(state, action: PayloadAction<ProductData[]>) {
            state.searchData = [...action.payload];
        },
        setCurrentSearchValue(state, action: PayloadAction<string>) {
            state.currentSearchValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchingSearchProducts.fulfilled,
            (state, action: PayloadAction<ProductData[]>) => {
                state.searchData = action.payload;
            }
        );
    },
});

export const { changeSearchUiState, setSearchData, setCurrentSearchValue } =
    searchSlice.actions;

export default searchSlice.reducer;
