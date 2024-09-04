import React, {useState} from "react";
import FormInput from "../Components/FormInput";
import BtnBack from "../Components/BtnBack";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Register (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const {signUp} = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signUp(email, password, username);
            navigate("/");
        }catch(err){
            setError(err.message);
            console.log(err)
        }
    }

    return (
        <div className="Register__Page">
            <div className="Register__field">
                <BtnBack path={-1}/>
                <header><h1 className="fredoka">Create an <br/>account</h1></header>
                <form className="Register__form" onSubmit={handleSubmit}>
                    <FormInput
                        label = "username"
                        name = "username"
                        type = "text"
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <FormInput
                        label = "email"
                        name = "email"
                        type = "text"
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        label = "password"
                        name = "password"
                        type = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="Register__btn noto-sans-thai-looped-bold">Join now</button>
                </form>
            </div>
            <div className="Register__bg"></div>
        </div>
    )
}

export default Register