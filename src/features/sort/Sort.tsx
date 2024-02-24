import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearProducts } from "app/store/slices/productsSlice/productsSlice";
import { setCategories } from "app/store/slices/categoriesSlice/categoriesSlice";

import cn from "classnames";

import "./styles.scss";

const Sort = () => {
    const [open, setPopupState] = useState(false);
    const dispatch = useDispatch();

    const categoriesArray: string[] = ["default", "asc", "desc"];

    return (
        <div className={cn("sort", open ? "sort_open" : null)}>
            <div
                onClick={() => setPopupState(!open)}
                className="sort-header text"
            >
                <p>sort by</p>
            </div>
            <div className="sort-body">
                {categoriesArray.map((category, index) => {
                    return (
                        <div
                            key={index}
                            id={category}
                            onClick={() => {
                                dispatch(setCategories(category));
                                dispatch(clearProducts());
                                setPopupState(!open);
                            }}
                            className="choice text"
                        >
                            <p className="choice__text choice__text_active text">
                                {category}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sort;
