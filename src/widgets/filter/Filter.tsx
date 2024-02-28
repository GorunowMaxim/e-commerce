import FilterContainer from "entities/filterContainer/FilterCategory";

import "./styles.scss";
import {
    changeFilterConfigBrand,
    changeFilterConfigColor,
    changeFilterConfigSize,
    clearFilterProperties,
    fetchingProducts,
} from "app/store/slices/productsSlice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/store/store";
import cn from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import RadioButton from "shared/ui/radioButton/RadioButton";
import ChangePrice from "features/changePrice/ChangePrice";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

const optionValues: { [index: string]: string[] } = {
    brands: [
        "Levis",
        "Isabel Marant",
        "Paco Rabanne",
        "Sporty & Rich",
        "Nanushka Hollie",
        "Daily Paper",
        "OPEN YY",
        "KNWLS",
    ],
    colors: [
        "green",
        "black",
        "white",
        "blue",
        "brown",
        "beidge",
        "yellow",
        "grey",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
};

interface FilterProps {
    url: string;
    filterState: boolean;
    setFilterState: (bol: boolean) => void;
}

const Filter = ({ url, filterState, setFilterState }: FilterProps) => {
    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );
    const [selectedBrand, setSelectedStateBrand] = useState("");
    const [selectedColor, setSelectedStateColor] = useState("");
    const [selectedSize, setSelectedStateSize] = useState("");
    const [value, setValue] = useState<number[]>([0, 1000]);
    const dispatch = useDispatch<AppDispatch>();

    const { category } = useSelector((state: RootState) => state.categories);
    return (
        <div className={cn(filterState ? "filter filter_open" : "filter")}>
            <div className="close-button-wrapper">
                <button
                    onClick={() => {
                        dispatch(changeOverlayState());
                        setFilterState(false);
                    }}
                    className="close-button"
                >
                    <CloseIcon />
                </button>
            </div>
            <div className="filter-wrapper">
                <FilterContainer nameCategory="Brands">
                    <div className="filter-form filter-form_flex">
                        {optionValues.brands.map((brand, index) => {
                            return (
                                <RadioButton
                                    key={index}
                                    variant="square"
                                    value={brand}
                                    currentValue={selectedBrand}
                                    onChange={setSelectedStateBrand}
                                    onClick={() => {
                                        dispatch(
                                            changeFilterConfigBrand(brand)
                                        );
                                        dispatch(
                                            fetchingProducts({
                                                url,
                                                category,
                                                currentSearchValue,
                                            })
                                        );
                                    }}
                                />
                            );
                        })}
                    </div>
                </FilterContainer>
                <FilterContainer nameCategory="Colors">
                    <div className="filter-form filter-form_flex">
                        {optionValues.colors.map((color, index) => {
                            return (
                                <RadioButton
                                    key={index}
                                    variant="square"
                                    value={color}
                                    currentValue={selectedColor}
                                    onChange={setSelectedStateColor}
                                    onClick={() => {
                                        dispatch(
                                            changeFilterConfigColor(color)
                                        );
                                        dispatch(
                                            fetchingProducts({
                                                url,
                                                category,
                                                currentSearchValue,
                                            })
                                        );
                                    }}
                                />
                            );
                        })}
                    </div>
                </FilterContainer>
                <FilterContainer nameCategory="sizes">
                    <div className="filter-form filter-form_grid">
                        {optionValues.sizes.map((size, index) => {
                            return (
                                <RadioButton
                                    key={index}
                                    variant="rectangle"
                                    value={size}
                                    currentValue={selectedSize}
                                    onChange={setSelectedStateSize}
                                    onClick={() => {
                                        dispatch(changeFilterConfigSize(size));
                                        dispatch(
                                            fetchingProducts({
                                                url,
                                                category,
                                                currentSearchValue,
                                            })
                                        );
                                    }}
                                />
                            );
                        })}
                    </div>
                </FilterContainer>
                <FilterContainer nameCategory="Price" visible={true}>
                    <ChangePrice url={url} value={value} setValue={setValue} />
                </FilterContainer>
                <button
                    onClick={() => {
                        setSelectedStateColor("");
                        setSelectedStateSize("");
                        setSelectedStateBrand("");
                        setValue([0, 1000]);
                        dispatch(clearFilterProperties());
                        dispatch(
                            fetchingProducts({
                                url,
                                category,
                                currentSearchValue,
                            })
                        );
                    }}
                    className="filter-wrapper__button"
                >
                    Clear all
                </button>
            </div>
        </div>
    );
};

export default Filter;
