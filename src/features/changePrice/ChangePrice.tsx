import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Input } from "@mui/material";
import debounce from "lodash.debounce";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { ChangeEvent, useEffect, useRef } from "react";

import { AppDispatch, RootState } from "app/store/store";
import { fetchingProducts } from "app/store/slices/productsSlice/productsSlice";
import {
    changeFilterConfigMinPrice,
    changeFilterConfigMaxPrice,
} from "app/store/slices/productsSlice/productsSlice";

import "./styles.scss";

const minDistance = 10;
function valuetext(value: number) {
    return `$${value}`;
}

interface ChangePriceProps {
    url: string;
    value: number[];
    setValue: (arr: number[]) => void;
}

interface InputsFunctions {
    [index: string]: {
        handleInputChange: (value: number) => void;
        changePrice: (num: number) => { type: string; payload: number };
    };
}

interface InputPriceProps {
    index: number;
    value: number[];
    onChangePrice: {
        handleInputChange: (value: number) => void;
        changePrice: (num: number) => { type: string; payload: number };
    };
    dispatch: AppDispatch;
    url: string;
    category: string;
    currentSearchValue: string;
    handleBlur: () => void;
}

const inputProps = {
    step: 10,
    min: 0,
    max: 1000,
    type: "text",
    sx: {
        textAlign: "center",
        padding: "7px 0px",
    },
    "aria-labelledby": "input-slider",
};

const InputPrice = ({
    index,
    value,
    onChangePrice,
    dispatch,
    url,
    category,
    currentSearchValue,
    handleBlur,
}: InputPriceProps) => {
    const fetchDebounced = debounce((value: number) => {
        dispatch(onChangePrice.changePrice(value));
        dispatch(
            fetchingProducts({
                url,
                category,
                currentSearchValue,
            })
        );
    }, 1000);

    return (
        <Input
            value={`$${value[index]}`}
            className="price-input"
            size="small"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const valueStr = e.target.value.replace("$", "");
                const value = Number(valueStr);
                if (!Number.isNaN(value)) {
                    onChangePrice.handleInputChange(value);
                    fetchDebounced(value);
                }
            }}
            onBlur={handleBlur}
            inputProps={inputProps}
        />
    );
};

const ChangePrice = ({ url, value, setValue }: ChangePriceProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const debouncedDispatch = useRef<(value: number[]) => void>(() => {});
    const location = useLocation();

    const { category } = useSelector((state: RootState) => state.categories);
    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );

    useEffect(() => {
        debouncedDispatch.current = debounce((value: number[]) => {
            const [minPrice, maxPrice] = value;
            dispatch(changeFilterConfigMinPrice(minPrice));
            dispatch(changeFilterConfigMaxPrice(maxPrice));

            const fetchingParam: {
                url: string;
                category: string;
                currentSearchValue?: string;
            } = {
                url,
                category,
            };

            if (location.pathname === "/search-result") {
                fetchingParam.currentSearchValue = currentSearchValue;
            }

            dispatch(fetchingProducts(fetchingParam));
        }, 1500);
    }, []);

    const handleThumbChange = (
        _event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
            debouncedDispatch.current(newValue);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
            debouncedDispatch.current(newValue);
        }
    };

    const handleInputChange1 = (changeValue: number) => {
        setValue([changeValue < 0 ? 0 : changeValue, value[1]]);
    };

    const handleInputChange2 = (changeValue: number) => {
        setValue([value[0], changeValue > 1000 ? 1000 : changeValue]);
    };

    const inputsFunctions: InputsFunctions = {
        firstInput: {
            handleInputChange: handleInputChange1,
            changePrice: changeFilterConfigMinPrice,
        },
        secondInput: {
            handleInputChange: handleInputChange2,
            changePrice: changeFilterConfigMaxPrice,
        },
    };

    const handleBlur = () => {
        if (value[0] < 0) {
            setValue([0, value[1]]);
        } else if (value[1] > 1000) {
            setValue([value[0], 1000]);
        }
    };

    return (
        <Box>
            <div className="input-container">
                {Object.keys(inputsFunctions).map((func, index) => {
                    const onChangePrice = inputsFunctions[func];
                    return (
                        <InputPrice
                            key={index}
                            index={index}
                            value={value}
                            onChangePrice={onChangePrice}
                            dispatch={dispatch}
                            url={url}
                            category={category}
                            currentSearchValue={currentSearchValue}
                            handleBlur={handleBlur}
                        />
                    );
                })}
            </div>
            <Slider
                sx={{ color: "black" }}
                getAriaLabel={() => "Minimum distance"}
                value={value}
                onChange={handleThumbChange}
                valueLabelDisplay="auto"
                valueLabelFormat={valuetext}
                getAriaValueText={valuetext}
                disableSwap
                min={0}
                max={1000}
            />
        </Box>
    );
};

export default ChangePrice;
