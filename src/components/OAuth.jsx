import { FcGoogle } from 'react-icons/fc';

const OAuth = () => {
    return (
            
            <button className="flex px-7 py-3 rounded text-white text-sm font-medium w-full items-center justify-center shadow-md hover:shadow-lg bg-red-700 hover:bg-red-800 active:bg-red-900 transition duration-200 ease-in-out uppercase"><div className="mr-1 bg-white p-[1px] rounded-full"><FcGoogle fontSize={18} className="" /></div>Continue with Google</button>
      
    );
};

export default OAuth;