import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "app/store/store";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import FormAuth from "./formAuth/FormAuth";
import Overlay from "shared/ui/overlay/Overlay";

import user from "/public/images/user.svg";


const Authorization = () => {
    const [autFormState, setAutFormState] = useState(false);
    const { overlayState } = useSelector((state: RootState) => state.overlay);
    const dispatch = useDispatch();
    return (
        <>
            <button
                onClick={() => {
                    dispatch(changeOverlayState());
                    setAutFormState(!autFormState);
                }}
                className="header-icons__button"
            >
                <img src={user} alt="" />
            </button>
            {autFormState && <FormAuth onClick={setAutFormState} />}
            {overlayState && <Overlay />}
        </>
    );
};

export default Authorization;
