import { useDispatch } from "react-redux";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import { useForm, SubmitHandler } from "react-hook-form";

import CloseIcon from "@mui/icons-material/Close";

import "./styles.scss";

interface FormInputValue {
    email: string;
    password: string;
}

interface FormAuthProps {
    onClick: (boolean: boolean) => void;
}

interface FormConfigData {
    [index: string]: {
        name: "email" | "password";
        value: RegExp;
        message: string;
    };
}

const formConfigData: FormConfigData = {
    email: {
        name: "email",
        value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
        message: "your email is invalid",
    },
    password: {
        name: "password",
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
        message:
            "the password must consist of numbers and upper and lower case latin letters",
    },
};

const FormAuth = ({ onClick }: FormAuthProps) => {
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<FormInputValue>({ mode: "onBlur" });
    const onSubmit: SubmitHandler<FormInputValue> = (data) => console.log(data);

    return (
        <div className="aut-form">
            <div className="aut-form__wrapper">
                <button
                    className="aut-form__button-close"
                    onClick={() => {
                        onClick(false);
                        dispatch(changeOverlayState());
                    }}
                >
                    <CloseIcon />
                </button>
                <div className="aut-form__content">
                    <h4>log in or register</h4>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="aut-form__body"
                    >
                        {Object.keys(formConfigData).map((el, index) => {
                            return (
                                <label key={index} className="aut-form__label">
                                    <p className="aut-form__label-text">
                                        {formConfigData[el].name}
                                    </p>
                                    <input
                                        {...register(formConfigData[el].name, {
                                            required:
                                                "This is a required field",
                                            pattern: {
                                                value: formConfigData[el].value,
                                                message:
                                                    formConfigData[el].message,
                                            },
                                        })}
                                        placeholder={`enter your ${formConfigData[el].name}`}
                                        type={formConfigData[el].name}
                                        className="aut-form__input"
                                    />
                                    {errors[formConfigData[el].name] && (
                                        <p className="aut-form__fail">
                                            {
                                                errors[formConfigData[el].name]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                                </label>
                            );
                        })}
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="aut-form__button"
                        >
                            continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormAuth;
