import Header from "./Header";
import { useRef, useState } from "react";
import checkvalidData from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {DEFAULT_PROFILE,BACKGROUND_IMAGE} from "../utils/constant"

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
        setErrorMessage(null);
    };


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButton = () => {
        const message = checkvalidData(
            name.current?.value || "",
            email.current.value,
            password.current.value,
            isSignIn
        );

        setErrorMessage(message);
        if (message) return;

        if (!isSignIn) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current?.value, 
                        photoURL: DEFAULT_PROFILE
                    }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(
                            addUser(
                                {uid:uid,email:email,displayName:displayName,photoURL:photoURL})
                            );
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
        else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };


    return (
        <div >
            <Header />
            <div className="absolute">
                <img src={BACKGROUND_IMAGE}
                    alt="bgimage" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-80 w-[450px] mx-auto absolute my-28 left-0 right-0 text-white p-14 rounded">
                <h1 className="text-3xl font-bold mb-8">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && <input
                    ref={name}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 mb-4 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email or mobile number"
                    className="w-full p-4 mb-4 rounded bg-[#333] text-white placeholder-gray-400 "
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 mb-6 rounded bg-[#333] text-white placeholder-gray-400"
                />
                <p className="text-red-700 font-bold text-lg pb-2">{errorMessage}</p>
                <button className="w-full bg-red-600 hover:bg-red-700 p-4 rounded font-semibold"
                    onClick={handleButton}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <h1 className="mt-6 text-gray-400" onClick={toggleSignIn}>
                    {isSignIn ? "New to Netflix?" : "Already an user?"}{" "}
                    <span className="text-white hover:underline cursor-pointer">
                        {isSignIn ? "Sign up now." : "SignIn now."}
                    </span>
                </h1>
            </form>

        </div>
    )
}

export default Login;