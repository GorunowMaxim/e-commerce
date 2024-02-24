import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { AppDispatch, RootState } from "app/store/store";
import {
    changeSearchUiState,
    fetchingSearchProducts,
    setCurrentSearchValue,
} from "app/store/slices/searchSlice/searchSlice";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import { useNavigate } from "react-router-dom";

import cn from "classnames";
import debounce from "lodash.debounce";


import "./styles.scss";
import searchIcon from "/public/images/search.svg";
import Close from "@mui/icons-material/Close";
import SearchItem from "entities/searchItem/SearchItem";
import CircleLoading from "shared/ui/circleLoading/CircleLoading";
import { fetchingProducts } from "app/store/slices/productsSlice/productsSlice";

interface SearchProps {
    setOverlayState: (boolean: boolean) => void;
}

const Search = ({ setOverlayState }: SearchProps) => {
    const { state } = useSelector((state: RootState) => state.search.uiState);
    const { searchData } = useSelector((state: RootState) => state.search);
    const { appStatus } = useSelector(
        (state: RootState) => state.app.configState
    );
    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );
    const url = "https://65c52bc7dae2304e92e4009d.mockapi.io/items";
    const inputRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();

    const { category } = useSelector((state: RootState) => state.categories);
    const debouncedDispatch = debounce(
        (value: string) => dispatch(fetchingSearchProducts({ url, value })),
        550
    );

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    });

    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            <div className={cn(state ? "search" : "search search_hidden")}>
                <div className="search-header">
                    <div className="container">
                        <div className="search-header__wrapper">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="search-header__form"
                            >
                                <div className="search-icon">
                                    <img src={searchIcon} alt="" />
                                </div>
                                <label
                                    htmlFor=""
                                    className="search-header__label"
                                >
                                    <input
                                        ref={inputRef}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(changeSearchUiState());
                                                dispatch(changeOverlayState());
                                                setOverlayState(false);
                                                dispatch(fetchingProducts({ url, category, currentSearchValue }));
                                                navigate("/search-result");
                                            }
                                        }}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            debouncedDispatch(value);
                                            dispatch(setCurrentSearchValue(value));
                                        }}
                                        type="text"
                                        className="search-header__input"
                                        placeholder="search"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            dispatch(changeSearchUiState());
                                            dispatch(changeOverlayState());
                                            setOverlayState(false);
                                        }}
                                        className="search-header__button"
                                    >
                                        <Close />
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="search-body">
                    <div className="container">
                        <div className="search-body__wrapper">
                            {appStatus === "success" &&
                                searchData
                                    .filter((_el, index) => index < 6)
                                    .map((item, index) => {
                                        return (
                                            <SearchItem
                                                key={index}
                                                searchItem={item}
                                                setOverlayState={
                                                    setOverlayState
                                                }
                                            />
                                        );
                                    })}
                            {appStatus === "loading" && (
                                <div className="circle-container">
                                    <CircleLoading />
                                </div>
                            )}
                            {
                                appStatus === 'error' && (
                                    <h3 className="error-message">sorry, we have some technical problems, <br /> pls reload page or try later</h3>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
