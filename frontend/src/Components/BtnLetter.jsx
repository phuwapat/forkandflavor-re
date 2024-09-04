
function BtnLetter(props){
    return (
        <button onClick={props.onClick} className="BtnLetter noto-sans-thai-looped-bold" id={props.id}>{props.name}</button>
    )
}

export default BtnLetter