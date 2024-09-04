import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BtnBox from "../Components/BtnBox";
import Slideshow from "../Components/Slideshow";
import FreeSlides, { createFreeSlides } from "../Components/FreeSlides";
import foodInfo from "../Data/FoodInfo";
import {createRecommendPost} from "../Components/RecommendPost";
import { Link } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

function Home({isLogin}){

    const {user} = useUserAuth();

    return(
        <div>
            <Navbar/>
            <div className="Home__Page">
                { user ?
                <header className="Home__first fredoka">
                    <h1>Welcome Back<br/>our little chef &lt;3</h1>
                    <p>How are you doing ? let's cook !</p>
                </header>
                :
                <header className="Home__first fredoka">
                    <h1>Can you cook?<br/>Yes, you can.</h1>
                    <p>with our community you absolutely can!!</p>
                    <Link to="/login"><BtnBox name = "Log in"/></Link>
                </header>
                }
                <Slideshow/>
                {user ?
                <div className="Home__recommend">
                    <h2 className="noto-sans-thai-looped-semibold">เมนูใหม่ล่าสุดจากเพื่อนของคุณ</h2>
                    <p className="noto-sans-thai-looped-regular">recipes from your followings</p>
                    <div className="RecommendPost__grid"> 
                        {foodInfo.slice(0,6).map(createRecommendPost)}
                    </div>
                </div>
                : 
                    null
                }
                <div className="Home__second">
                    <h2 className="noto-sans-thai-looped-semibold">ทำอะไรกินดีจ้า</h2>
                    <p className="noto-sans-thai-looped-regular">ลองดูไอเดียใหม่ๆ ได้ที่นี่</p>
                    <FreeSlides/>
                </div>
                <div className="Home__second">
                    <h2 className="noto-sans-thai-looped-semibold">เมนูใหม่ล่าสุด สดๆจากเตา</h2>
                    <p className="noto-sans-thai-looped-regular">สูตรอาหารใหม่ล่าสุด</p>
                    <FreeSlides/>
                </div>
                <div className="Home__third">
                    <h2 className="fredoka" id="header__third">Popular recipes of the week !</h2>
                    <p className="noto-sans-thai-looped-regular" id="header__third">สูตรอาหารยอดฮิตไฟแรง</p>
                    <div className="PostGrid">
                        {foodInfo.slice(0, 16).map(createFreeSlides)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home