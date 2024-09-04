import React from 'react'
import '../public/style/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import ProtectedRoute from './auth/ProtectedRoute';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home';
import MyProfile from './Pages/MyProfile';
import EditProfile from './Pages/EditProfile';
import Createpost from './Pages/Createpost';
import FoodDetail from './Pages/FoodDetail';
import { MessageProvider } from './Components/MessageContext';

function App() {
    return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/myprofile" element={<ProtectedRoute><MyProfile/></ProtectedRoute>} />
                    <Route path="/editprofile" element={<ProtectedRoute><EditProfile/></ProtectedRoute>} />
                    <Route path="/createpost" element={<ProtectedRoute><MessageProvider><Createpost/></MessageProvider></ProtectedRoute>} />
                    <Route path="/fooddetail" element={<ProtectedRoute><FoodDetail/></ProtectedRoute>} />
                </Routes>
            </Router>
    )
}

export default App
