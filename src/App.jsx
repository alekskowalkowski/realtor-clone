import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ForgotPassword, SignIn, SignUp, Offers, Profile } from "./pages";
import { Header } from "./components";


const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/profile" element={<Profile />} /> 
                    <Route path="/sign-in" element={<SignIn />} /> 
                    <Route path="/sign-up" element={<SignUp />} /> 
                    <Route path="/forgot-password" element={<ForgotPassword />} /> 
                    <Route path="/offers" element={<Offers />} /> 
                </Routes>
            </Router>
        </>
    );
};

export default App;