import { useState } from "react"

function FormInput (props){

    const [input,setInput] = useState("")

    function onChange(event){
        setInput(event.target.value);
    }

    return (
    <div className="FormInput">
        <label className="FormInput__label noto-sans-thai-looped-bold" for={props.name}>{props.label}<br/></label>
        <input 
            className="FormInput__box"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </div>
    )
};

export default FormInput