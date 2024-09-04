import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FormInput from "../Components/FormInput";
import BtnBox from "../Components/BtnBox";
import BtnBack from "../Components/BtnBack";

function EditProfile() {
    return ( 
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className="EditProfile__page">
                    <BtnBack path={-1}/>
                    <form>
                        <div className="Profile">
                            <img  className="Profile__img" src="./../../public/Image/Profile/Ellipse 34.svg"/>
                                <div className="upLoad__profile">
                                    <label for="file-input">
                                        <div className="camera__icon">
                                            <img src="./../../public/Image/Icon/Ellipse 4.svg"/>
                                            <img src="./../../public/Image/Icon/Vector.svg"/>
                                        </div>
                                    </label>
                                    <input type="file" id="file-input" accept="image"/>
                                </div>
                        </div>
                        <FormInput
                            label = "username"
                            name = "username"
                            type = "text"
                            placeholder = "username"/>
                        <FormInput
                            label = "email"
                            name = "email"
                            type = "text"
                            placeholder = "email"/>
                        <FormInput
                            label = "password"
                            name = "password"
                            type = "password"
                            placeholder = "password"/>
                        <BtnBox
                            name = "Save"
                        />
                    </form>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default EditProfile;