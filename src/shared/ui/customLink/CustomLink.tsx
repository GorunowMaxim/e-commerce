import { Link } from "react-router-dom";

import './styles.scss'

const CustomLink = ({text}:{text: string}) => {
    return ( 
        <Link to='#' className="custom-link">
            {text}
        </Link>
    );
}

export default CustomLink;