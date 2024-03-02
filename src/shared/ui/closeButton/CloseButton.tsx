import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
    className?: string;
    onClick?: () => void;
}

const CloseButton = ({ className, onClick }: CloseButtonProps) => {
    return (
        <button
            onClick={() => onClick && onClick()}
            className={className}
        >
            <CloseIcon />
        </button>
    );
};

export default CloseButton;
