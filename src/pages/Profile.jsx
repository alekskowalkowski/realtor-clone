import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });

    const [changeDetail, setChangeDetail] = useState(false);

    const handleLogOut = () => {
        auth.signOut();
        navigate('/');
    };

    const handleEdit = () => {
        changeDetail && handleSubmit();
        setChangeDetail(prev => !prev);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value}));
    }

    const handleSubmit = async () => {
        try {
            if(auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                })
            }
            const docRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(docRef, {
                name: name,
            });
            toast.success('Profile updated');
        } catch(err) {
            toast.error(err.message);
        }
    }
 
    const { name, email } = formData;

    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center font-bold mt-6">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form>
                        <input onChange={handleChange} type="text" id="name" value={name} disabled={!changeDetail} className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out mb-6 ${changeDetail ? 'bg-red-200' : ''}`} />
                        <input onChange={handleChange} type="email" id="email" value={email} disabled={!changeDetail} className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out mb-6" />
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                            <p className="flex items-center">
                                Do you want to change your name?
                                <span onClick={handleEdit} className="text-red-600 hover:text-red-700 cursor-pointer transition duration-200 ease-in-out ml-1">
                                    {changeDetail ? "Apply Change" : "Edit"}
                                </span>
                            </p>
                            <p onClick={handleLogOut} className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
                                Sign out
                            </p>
                        </div>
                    </form>
                </div>
            </section>    
        </>
    );
};

export default Profile;