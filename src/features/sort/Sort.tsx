import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts } from "app/store/slices/productsSlice/productsSlice";
import { setCategories } from "app/store/slices/categoriesSlice/categoriesSlice";

import cn from "classnames";

import "./styles.scss";
import { RootState } from "app/store/store";

const Sort = () => {
    const { category } = useSelector((state: RootState) => state.categories);
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
                {categoriesArray.map((choice, index) => {
                    return (
                        <div
                            key={index}
                            id={choice}
                            onClick={() => {
                                dispatch(setCategories(choice));
                                dispatch(clearProducts());
                                setPopupState(!open);
                            }}
                            className="choice text"
                        >
                            <p className={cn(category === choice ? "choice__text choice__text_active text" : "choice__text text" )} >
                                {choice}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sort;
