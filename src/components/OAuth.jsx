import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

const OAuth = () => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            const user = response.user;
            
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                });
            }
            navigate('/');

        } catch(err) {
            toast.error(err.message);
        }
    };

    return (
            
            <button type="button" onClick={handleClick} className="flex px-7 py-3 rounded text-white text-sm font-medium w-full items-center justify-center shadow-md hover:shadow-lg bg-red-700 hover:bg-red-800 active:bg-red-900 transition duration-200 ease-in-out uppercase"><div className="mr-1 bg-white p-[1px] rounded-full"><FcGoogle fontSize={18} className="" /></div>Continue with Google</button>
      
    );
};

export default OAuth;