import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) return true;
        return false;
    }

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img 
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
                        alt="logo" 
                        className="h-5 cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li 
                            className={`py-3 text-sm font-semibold   cursor-pointer ${pathMatchRoute('/') ? "text-black border-b-red-500 border-b-[3px]" : "text-gray-400"}`}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </li>
                        <li 
                            className={`py-3 text-sm font-semibold cursor-pointer ${pathMatchRoute('/offers') ? "border-b-[3px] text-black border-b-red-500" : "text-gray-400"}`}
                            onClick={() => navigate('/offers')}
                        >
                            Offers
                        </li>
                        <li 
                            className={`py-3 text-sm font-semibold cursor-pointer ${pathMatchRoute('/sign-in') ? "text-black border-b-red-500 border-b-[3px]" : "text-gray-400"}`}
                            onClick={() => navigate('/sign-in')}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;