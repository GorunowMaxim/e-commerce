import { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { Outlet } from "react-router-dom";

import cn from "classnames";

import TheFooter from "widgets/theFooter/TheFooter";
import TheHeader from "widgets/theHeader/TheHeader";

const MainLayout = () => {
    const { overlayState } = useSelector((state: RootState) => state.overlay);
    return (
        <div
            className={cn(overlayState ? "wrapper wrapper_hidden" : "wrapper")}
        >
            <TheHeader />
            <Suspense>
                <Outlet />
            </Suspense>
            <TheFooter />
        </div>
    );
};

export default MainLayout;
