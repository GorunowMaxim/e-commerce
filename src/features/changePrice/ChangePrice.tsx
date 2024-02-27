import { ChangeEvent, useState } from "react";

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

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 10;

const ChangePrice = ({ url }: { url: string }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { category } = useSelector((state: RootState) => state.categories);
    const { minPrice, maxPrice } = useSelector(
        (state: RootState) => state.products.filterConfig
    );
    console.log(minPrice, maxPrice)

    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );
    const [value, setValue] = useState<number[]>([0, 1000]);
    console.log('value', value)
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
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

    const handleBlur = () => {
        if (value[0] < 0) {
            setValue([0, value[1]]);
        } else if (value[1] > 1000) {
            setValue([value[0], 1000]);
        }
    };

    return (
        <Box sx={{ width: 300 }}>
            <Input
                value={value[0]}
                size="small"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleInputChange1(e);
                    const fetchDebounced = debounce(() => {
                        dispatch(changeFilterConfigMinPrice(Number(e.target.value)));
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
                    "aria-labelledby": "input-slider",
                }}
            />
            <Input
                value={value[1]}
                size="small"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleInputChange2(e);
                    const fetchDebounced = debounce(() => {
                        dispatch(changeFilterConfigMaxPrice(Number(e.target.value)));
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
                    "aria-labelledby": "input-slider",
                }}
            />
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
