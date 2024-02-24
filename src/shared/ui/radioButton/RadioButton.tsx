import cn from "classnames";
import "./styles.scss";

type ShapeTypes = "square" | "rectangle";

interface RadioButtonProps {
    variant: ShapeTypes;
    value: string;
    currentValue: string;
    onChange: (str: string) => void;
    onClick?: () => void;
}

const RadioButton = ({
    variant,
    value,
    currentValue,
    onChange,
    onClick,
}: RadioButtonProps) => {
    const isChecked = value === currentValue;
    const wrapperClass = cn(
        "radio-wrapper",
        variant === "rectangle"
            ? "radio-wrapper_rectangle"
            : "radio-wrapper_square"
    );

    return (
        <label
            onClick={() => onClick && onClick()}
            className={cn(
                isChecked ? "radio-label radio-label_checked" : "radio-label"
            )}
        >
            <input
                value={value}
                className="radio-button"
                type="radio"
                checked={isChecked}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className={wrapperClass}>
                {variant === "square" && (
                    <span className="radio-wrapper__decorate-item"></span>
                )}
                <span className="radio-span">{value}</span>
            </div>
        </label>
    );
};

export default RadioButton;
