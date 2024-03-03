import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { RootState } from "app/store/store";
import { setCategories } from "app/store/slices/categoriesSlice/categoriesSlice";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import "./styles.scss";

interface SortProps {
    openSort: boolean;
    setOpenSort: (bol: boolean) => void;
}

const Sort = ({ openSort, setOpenSort }: SortProps) => {
    const dispatch = useDispatch();
    const { category } = useSelector((state: RootState) => state.categories);

    const categoriesArray: string[] = ["default", "asc", "desc"];

    const selectCategory = (choice: string) => () => {
        setOpenSort(false);
        dispatch(setCategories(choice));
        dispatch(changeOverlayState(false));
    };

    return (
        <div className={cn("sort", openSort ? "sort_open" : null)}>
            <div
                onClick={() => setOpenSort(!openSort)}
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
                            onClick={selectCategory(choice)}
                            className="choice text"
                        >
                            <p
                                className={cn(
                                    category === choice
                                        ? "choice__text choice__text_active text"
                                        : "choice__text text"
                                )}
                            >
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
