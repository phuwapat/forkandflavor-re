import foodInfo from "../Data/FoodInfo";
import FilterBadge from "./FilterBadge";
import StarRate from "./StarRate";

function createRecommendPost(foodInfo){
    return(
        <RecommendPost
            name={foodInfo.name}
            img={foodInfo.img}
            filter1={foodInfo.filter1}
            filter2={foodInfo.filter2}
            rate={foodInfo.rate}
            cookTime={foodInfo.cookTime}
            yield={foodInfo.yield}
            creator={foodInfo.creator}
            rateCount={foodInfo.rateCount}
        />
    )
}


function RecommendPost(props) {
    return (  
        <div className="RecommendPost">
            <img src={props.img}/>
            <div className="RecommendPost__info">
                <h1 className="noto-sans-thai-looped-bold">{props.name}</h1>
                <div className="RecommendPost__filter">
                    <FilterBadge
                    name={props.filter1}
                    />
                    <FilterBadge
                    name={props.filter2}
                    />
                </div>
                <div className="noto-sans-thai-looped-semibold">
                    <StarRate
                    rate={props.rate}
                    rateCount={props.rateCount}
                    />
                </div>
                <div className="noto-sans-thai-looped-bold">
                    <p>Cook Time: {props.cookTime}</p>
                    <p>Yield: {props.yield}</p>
                    <img src="./../../public/Image/Profile/Ellipse 34.svg"/><p id="rp-pf"> &nbsp;{props.creator}</p>
                </div>
            </div>
        </div>
    );
}

export {createRecommendPost};
export default RecommendPost;