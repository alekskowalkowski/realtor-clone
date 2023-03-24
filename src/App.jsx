import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ForgotPassword, SignIn, SignUp, Offers, Profile } from "./pages";
import { Header } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default App;