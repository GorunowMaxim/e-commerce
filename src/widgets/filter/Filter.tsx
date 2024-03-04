import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { AppDispatch, RootState } from "app/store/store";

import ContainerFilterCategory from "entities/containerFilterCategory/ContainerFilterCategory";
import RadioButton from "shared/ui/radioButton/RadioButton";
import ChangePrice from "features/changePrice/ChangePrice";
import CloseButton from "shared/ui/closeButton/CloseButton";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import {
    changeFilterConfigBrand,
    changeFilterConfigColor,
    changeFilterConfigSize,
    clearFilterProperties,
    fetchingProducts,
} from "app/store/slices/productsSlice/productsSlice";

import "./styles.scss";

const brands: string[] = [
    "Levis",
    "Isabel Marant",
    "Paco Rabanne",
    "Sporty & Rich",
    "Nanushka Hollie",
    "Daily Paper",
    "OPEN YY",
    "KNWLS",
];

const colors: string[] = [
    "green",
    "black",
    "white",
    "blue",
    "brown",
    "beidge",
    "yellow",
    "grey",
];

const sizes: string[] = ["xs", "s", "m", "l", "xl", "xxl"];

type onClickFunction = (str: string) => { type: string; payload: string };

interface OptionValues {
    [index: string]: {
        data: string[];
        name: string;
        selecteEl: string;
        onChange: (str: string) => void;
        onClick: onClickFunction;
    };
}

interface FilterProps {
    url: string;
    filterState: boolean;
    setFilterState: (bol: boolean) => void;
}

const Filter = ({ url, filterState, setFilterState }: FilterProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );
    const { category } = useSelector((state: RootState) => state.categories);

    const [selectedBrand, setSelectedStateBrand] = useState("");
    const [selectedColor, setSelectedStateColor] = useState("");
    const [selectedSize, setSelectedStateSize] = useState("");
    const [value, setValue] = useState([0, 1000]);

    const handleClickRadioButton = (func: onClickFunction, elem: string) => {
        dispatch(func(elem));
        dispatch(
            fetchingProducts({
                url,
                category,
                currentSearchValue,
            })
        );
    };

    const handleClickClearButton = () => {
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
    };

    const handleClickCloseButton = () => {
        dispatch(changeOverlayState());
        setFilterState(false);
    };

    const optionValues: OptionValues = {
        brands: {
            data: brands,
            name: "Brands",
            selecteEl: selectedBrand,
            onChange: setSelectedStateBrand,
            onClick: changeFilterConfigBrand,
        },
        colors: {
            data: colors,
            name: "Colors",
            selecteEl: selectedColor,
            onChange: setSelectedStateColor,
            onClick: changeFilterConfigColor,
        },
        sizes: {
            data: sizes,
            name: "Sizes",
            selecteEl: selectedSize,
            onChange: setSelectedStateSize,
            onClick: changeFilterConfigSize,
        },
    };

    return (
        <div className={cn(filterState ? "filter filter_open" : "filter")}>
            <div className="close-button-wrapper">
                <CloseButton
                    className="close-button"
                    onClick={handleClickCloseButton}
                />
            </div>
            <div className="filter-wrapper">
                {Object.keys(optionValues).map((key, index) => {
                    const group = optionValues[key];
                    return (
                        <ContainerFilterCategory
                            key={index}
                            nameCategory={group.name}
                        >
                            <div
                                className={cn(
                                    group.name === "Sizes"
                                        ? "filter-form filter-form_grid"
                                        : "filter-form filter-form_flex"
                                )}
                            >
                                {group.data.map((elem, index) => {
                                    return (
                                        <RadioButton
                                            key={index}
                                            variant={
                                                group.name === "Sizes"
                                                    ? "rectangle"
                                                    : "square"
                                            }
                                            value={elem}
                                            currentValue={group.selecteEl}
                                            onChange={() =>
                                                group.onChange(elem)
                                            }
                                            onClick={() =>
                                                handleClickRadioButton(
                                                    group.onClick,
                                                    elem
                                                )
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </ContainerFilterCategory>
                    );
                })}
                <ContainerFilterCategory nameCategory="Price" visible={true}>
                    <ChangePrice url={url} value={value} setValue={setValue} />
                </ContainerFilterCategory>
                <button
                    onClick={handleClickClearButton}
                    className="filter-wrapper__button"
                >
                    Clear all
                </button>
            </div>
        </div>
    );
};

export default Filter;
