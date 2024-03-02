import { ChangeEvent, useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Input } from "@mui/material";
import { fetchingProducts } from "app/store/slices/productsSlice/productsSlice";
import {
    changeFilterConfigMinPrice,
    changeFilterConfigMaxPrice,
} from "app/store/slices/productsSlice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/store/store";
import debounce from "lodash.debounce";
import "./styles.scss";
import { useLocation } from "react-router-dom";

function valuetext(value: number) {
    return `$${value}`;
}

const minDistance = 10;

interface ChangePriceProps {
    url: string;
    value: number[];
    setValue: (arr: number[]) => void;
}

const ChangePrice = ({ url, value, setValue }: ChangePriceProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { category } = useSelector((state: RootState) => state.categories);

    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );

    const debouncedDispatch = useRef<(value: number[]) => void>(() => {});
    const location = useLocation();

    useEffect(() => {
        debouncedDispatch.current = debounce((value: number[]) => {
            dispatch(changeFilterConfigMinPrice(value[0]));
            dispatch(changeFilterConfigMaxPrice(value[1]));
            if (location.pathname === "/search-result") {
                dispatch(
                    fetchingProducts({
                        url,
                        category,
                        currentSearchValue,
                    })
                );
            } else {
                dispatch(
                    fetchingProducts({
                        url,
                        category,
                    })
                );
            }
        }, 1000);
    }, []);

    const handleChange = (
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

    const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setValue([
            event.target.value === "" ? 0 : Number(event.target.value),
            value[1],
        ]);
    };

    const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setValue([
            value[0],
            event.target.value === "" ? 0 : Number(event.target.value),
        ]);
    };

    interface InputsFunctions {
        [index: string]: {
            handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
            changePrice: (num: number) => { type: string; payload: number };
        };
    }

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
                    return (
                        <Input
                            key={index}
                            value={value[index]}
                            className="price-input"
                            size="small"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                const rdFunc =
                                    inputsFunctions[func].changePrice;
                                inputsFunctions[func].handleInputChange(e);
                                const fetchDebounced = debounce(() => {
                                    dispatch(rdFunc(Number(e.target.value)));
                                    dispatch(
                                        fetchingProducts({
                                            url,
                                            category,
                                            currentSearchValue,
                                        })
                                    );
                                }, 1000);
                                fetchDebounced();
                            }}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 1000,
                                type: "text",
                                style: {
                                    textAlign: "center",
                                    padding: "7px 0px",
                                },
                                "aria-labelledby": "input-slider",
                            }}
                        />
                    );
                })}
            </div>
            <Slider
                sx={{ color: "black" }}
                getAriaLabel={() => "Minimum distance"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={0}
                max={1000}
            />
        </Box>
    );
};

export default ChangePrice;
