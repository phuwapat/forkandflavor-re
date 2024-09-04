import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BtnBack({path}) {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };
    return ( 
    <div className="BtnBack">
        <button><Link to={path}><img src="./../../public/Image/Register/Vector.svg"/></Link></button>
    </div> );
}

export default BtnBack;