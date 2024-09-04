
import React, {useState} from "react";
import FormInput from "../Components/FormInput";
import BtnBack from "../Components/BtnBack";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {logIn} = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email, password);
            navigate("/");
        }catch(err){
            setError(err.message);
            console.log(err)
        }
    }

    return (
        <div className="Login__Page">
            <div className="Login__bg"></div>
            <div className="Login__field">
                <BtnBack path={-1}/>
                <header><img className="Login__Logo" src="../../public/Image/Logo/Logo.svg" alt="logo_ForkAndFlavor"/></header>
                <form className="Login__form" onSubmit={handleSubmit}>
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
                    <button type="submit" className="Login__btn noto-sans-thai-looped-bold">Log In</button>
                </form>
                <p className="noto-sans-thai-looped-bold">don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    )
};

export default Login