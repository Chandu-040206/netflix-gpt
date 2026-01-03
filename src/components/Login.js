import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [isSignIn,setIsSignIn] = useState(true);

    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn)
    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_large.jpg"
                    alt="bgimage" />
            </div>
            <form className="bg-black bg-opacity-80 w-[450px] mx-auto absolute my-28 left-0 right-0 text-white p-14 rounded">
                <h1 className="text-3xl font-bold mb-8">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 mb-4 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />}

                <input
                    type="text"
                    placeholder="Email or mobile number"
                    className="w-full p-4 mb-4 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 mb-6 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <button className="w-full bg-red-600 hover:bg-red-700 p-4 rounded font-semibold">
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