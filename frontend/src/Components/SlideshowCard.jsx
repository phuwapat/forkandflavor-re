import React from "react";
import FilterBadge from "./FilterBadge";
import StarRate from "./StarRate";

function SlideshowCard(props) {
    return (  
        <div className="Card">
            <div className="Card__info">
                <h1 className="noto-sans-thai-looped-bold">{props.name}</h1>
                <div className="Card__container noto-sans-thai-looped-semibold">
                    <div className="Card__filter">
                        <FilterBadge
                            name={props.filter1}
                        />
                        <FilterBadge
                            name={props.filter2}
                        />
                    </div>
                    <StarRate rate={props.rate} rateCount={props.rateCount}/>
                    <div className="Card__CookTime">
                        <img src="./../../public/Image/Icon/FaRegClock.svg" />
                        <p>Cook Time: {props.cookTime}</p>
                    </div>
                    <div className="Card__Yield">
                        <img src="./../../public/Image/Icon/users.svg" />
                        <p>Yield: {props.yield} serves</p>
                    </div>
                    <div className="Card__By">
                        <p>by &nbsp;<img src="./../../public/Image/Profile/Ellipse 34.svg" /> &nbsp;{props.creator} </p>
                    </div>
                </div>
            </div>
            <img className="Card__bg" src={props.img}/>
        </div>
    );
}

export default SlideshowCard;