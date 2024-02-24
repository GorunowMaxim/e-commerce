import { Link } from "react-router-dom";

import './styles.scss'

const CustomLink = ({text, path}:{text: string, path: string}) => {
    return ( 
        <Link to={`/${path}`} className="custom-link">
            {text}
        </Link>
    );
}

export default CustomLink;