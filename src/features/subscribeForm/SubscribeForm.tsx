import { useForm, SubmitHandler } from "react-hook-form";

import "./styles.scss";

type Inputs = {
    email: string;
};

const SubscribeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ mode: "onBlur" });
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="footer-subscribe__form"
        >
            <label className="footer-subscribe__form-label">
                <p className="footer-subscribe__form-text">email address</p>
                <div className="footer-subscribe__form-wrapper">
                    <div className="footer-subscribe__input-wrapper">
                        <input
                            {...register("email", {
                                required: "This is a required field",
                                pattern: {
                                    value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                                    message: "your email is invalid",
                                },
                            })}
                            type="email"
                            className="footer-subscribe__form-input"
                        />
                        {errors && (
                            <p className="fail-message">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="footer-subscribe__form-button"
                    >
                        subscribe
                    </button>
                </div>
            </label>
        </form>
    );
};

export default SubscribeForm;
