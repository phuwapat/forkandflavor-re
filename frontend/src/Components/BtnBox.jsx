
function BtnBox(props){
    return (
        <button onClick={props.onClick} className="BtnBox noto-sans-thai-looped-bold">{props.name}</button>
    )
}

export default BtnBox