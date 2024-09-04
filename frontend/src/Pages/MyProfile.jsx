import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BtnBox from "../Components/BtnBox";
import BtnLetter from "../Components/BtnLetter";
import foodInfo from "../Data/FoodInfo";
import { createFreeSlides } from "../Components/FreeSlides";
import { useProfileView } from '../Components/ProfileAction';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
function MyProfile() {
    const location = useLocation();
    const { view, Bookmark, Post, setView } = useProfileView();

    useEffect(() => {
        if (location.state.view) {
            setView(location.state.view);
        }
    }, [location.state, setView]);

    const renderContent = () => {
        if (view === 'posts') {
            return (
                <div className="Posts__grid">
                    {foodInfo.slice(0, 12).map(createFreeSlides)}
                </div>
            );
        } else if (view === 'bookmark') {
            return (
                <div className="Posts__grid">
                    {foodInfo.slice(13, 16).map(createFreeSlides)}
                </div>
            );
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="MyProfile">
                    <div className="MyProfile__info ">
                        <div>
                            <img src="./../../public/Image/Profile/Ellipse 34.svg" alt="Profile" />
                            <div className="noto-sans-thai-looped-bold">
                                <p>Phuwapat</p>
                                <div className="noto-sans-thai-looped-regular">
                                    <p>
                                        <span className="noto-sans-thai-looped-bold">69</span> followers
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="noto-sans-thai-looped-bold">69</span> following
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/editprofile"><BtnBox name="edit profile" link="/editprofile" /></Link>
                    </div>
                    <hr />
                    <div className="MyProfile__category">
                        <div className="MyProfile__btnletter">
                            <div>
                                <BtnLetter name="Posts" onClick={Post} id={view === 'posts' ? "btn__active" : "btn__none"} />
                            </div>
                            <div>
                                <BtnLetter name="Bookmark" onClick={Bookmark} id={view === 'bookmark' ? "btn__active" : "btn__none"} />
                            </div>
                        </div>
                    </div>
                    {renderContent()}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default MyProfile;