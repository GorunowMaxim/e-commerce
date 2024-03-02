import {
    useForm,
    SubmitHandler,
    UseFormRegister,
    FieldErrors,
} from "react-hook-form";
import { useDispatch } from "react-redux";

import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import CloseButton from "shared/ui/closeButton/CloseButton";

import "./styles.scss";

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

type FormInputValue = {
    email: string;
    password: string;
};

type FieldData = {
    name: "email" | "password";
    value: RegExp;
    message: string;
};

interface InputFieldProps {
    register: UseFormRegister<FormInputValue>;
    fieldData: FieldData;
    errors: FieldErrors<FormInputValue>;
}

const InputField = ({ register, fieldData, errors }: InputFieldProps) => {
    return (
        <label className="aut-form__label">
            <p className="aut-form__label-text">{fieldData.name}</p>
            <input
                {...register(fieldData.name, {
                    required: "This is a required field",
                    pattern: {
                        value: fieldData.value,
                        message: fieldData.message,
                    },
                })}
                placeholder={`enter your ${fieldData.name}`}
                type={fieldData.name}
                className="aut-form__input"
            />
            {errors[fieldData.name] && (
                <p className="aut-form__fail">
                    {errors[fieldData.name]?.message}
                </p>
            )}
        </label>
    );
};

const FormAuth = ({ onClick }: FormAuthProps) => {
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<FormInputValue>({ mode: "onBlur" });
    const onSubmit: SubmitHandler<FormInputValue> = (data) => console.log(data);

    const handleClickCloseButton = () => {
        onClick(false);
        dispatch(changeOverlayState());
    };

    return (
        <div className="aut-form">
            <div className="aut-form__wrapper">
                <CloseButton
                    className={"aut-form__button-close"}
                    onClick={handleClickCloseButton}
                />
                <div className="aut-form__content">
                    <h4>log in or register</h4>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="aut-form__body"
                    >
                        {Object.keys(formConfigData).map((el, index) => {
                            const fieldData = formConfigData[el];
                            return (
                                <InputField
                                    key={index}
                                    fieldData={fieldData}
                                    register={register}
                                    errors={errors}
                                />
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
