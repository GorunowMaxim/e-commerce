import cn from "classnames";

import { ReactNode, useState } from "react";

import arrow from "/public/images/arrow-up.svg";

import "./styles.scss";

interface ContainerFilterCategoryProps {
    nameCategory?: string;
    visible?: boolean;
    children: ReactNode;
}

const ContainerFilterCategory = ({
    children,
    nameCategory,
    visible,
}: ContainerFilterCategoryProps) => {
    const [state, setState] = useState(false);
    return (
        <div className={cn("category", state ? "category_open" : null)}>
            <div className="category-wrapper">
                <div
                    className="category-header"
                    onClick={() => setState(!state)}
                >
                    <p className="category-header__text">{nameCategory}</p>
                    <img
                        className="category-header__img"
                        src={arrow}
                        alt="arrow-sign"
                    />
                </div>
                <div
                    className={cn(
                        visible
                            ? "category-body category-body_visible"
                            : "category-body"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContainerFilterCategory;
