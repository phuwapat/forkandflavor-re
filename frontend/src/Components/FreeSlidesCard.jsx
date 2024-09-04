
function FreeSlidesCard(props) {
    return ( 
        <div className="FreeSlidesCard">
            <a href="/fooddetail">
            <div className="FreeSlidesCard__info noto-sans-thai-looped-bold">
                <h1>{props.header}</h1>
                <p className="noto-sans-thai-looped-thin">{props.preface}</p>
            <div className="FreeSlidesCard__creator">
                <img src="./../../public/Image/Profile/Ellipse 34.svg" />
                <p> &nbsp;{props.creator} </p>
            </div>
            </div>
            <img id="PostBg" src={props.img} alt={props.header}/>
            </a>
        </div>
    );
}

export default FreeSlidesCard;