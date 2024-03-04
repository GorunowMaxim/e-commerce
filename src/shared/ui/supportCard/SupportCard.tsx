import { SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";

import { ReactElement } from "react";

import './styles.scss'


interface SupportCard {
    headline: string;
    text: string;
    icon: ReactElement<SvgIconProps>;
}

const SupportCard = ({ headline, text, icon }: SupportCard) => {
    return (
        <Link to="/about" className="support-card">
            {icon}
            <p className="support-card__headline ">{headline}</p>
            <p className="support-card__subscribe ">{text}</p>
        </Link>
    );
};

export default SupportCard;
