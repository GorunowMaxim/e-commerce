import { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { Outlet } from "react-router-dom";
import cn from "classnames";
import Footer from "widgets/footer/Footer";
import Header from "widgets/header";

const MainLayout = () => {
    const { overlayState } = useSelector((state: RootState) => state.overlay);
    return (
        <div
            className={cn(overlayState ? "wrapper wrapper_hidden" : "wrapper")}
        >
            <Header />
            <Suspense>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
};

export default MainLayout;
