import React from 'react';
import Searchbar from "./Searchbar";
import BtnLetter from "./BtnLetter";
import BtnBox from "./BtnBox";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function Navbar() {

    const {logOut, user} = useUserAuth();

    const navigate = useNavigate();

    const navigateToProfile = (view) => {
        navigate('/MyProfile', { state: { view } });
    };

    const handleLogout = async () => {
        try{
            await logOut();
            navigate("/")
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <div className="Navbar">
            <div className="Navbar__Logo">
                <Link to="/"><img src="../../public/Image/Logo/Logo.svg" alt="logo_ForkAndFlavor" /></Link>
            </div>
            <div className="Navbar__Searchbar"><Searchbar /></div>
            {
                user ?
                    <div className="Navbar__routeLogin">
                        <Link to="/createpost"><img id="Icon__createPost" src="./../../public/Image/Icon/create post.svg" alt="Create Post" /></Link>
                        <img id="Icon__bookmark" src="./../../public/Image/Icon/bookmark.svg" alt="Bookmark" onClick={() => navigateToProfile('bookmark')} />
                        <BtnLetter
                            name="Profile"
                            onClick={() => navigateToProfile('posts')}
                        />
                        <BtnLetter
                            name="Log out"
                            onClick={handleLogout}
                        />
                    </div>
                    :
                    <div className="Navbar__route">
                        <Link to="/login"><BtnLetter name="Log in"/></Link>
                        <Link to="/register"><BtnBox name="Sign up"/></Link>
                    </div>
            }
        </div>
    );
}

export default Navbar;