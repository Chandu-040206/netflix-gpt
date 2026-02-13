import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => dispatch(removeUser()))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView());
  };

  const handleLanguage = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="
      fixed top-0 left-0 w-full
      flex items-center justify-between
      px-8 py-4
      z-50
      bg-gradient-to-b from-black via-black/70 to-transparent
    ">
      <img className="w-36" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center">
          {
            showGptSearch && <select className="font-serif rounded-lg px-2 py-1 mr-16 bg-gray-900
           text-white border border-solid border-white" onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
          }
          <button 
          onClick={handleGptSearch}
          className="bg-purple-400 px-3 py-1 mr-20 rounded font-serif ">
            {showGptSearch?"Home":"Search"} 
          </button>
          <img
            className="w-8 h-8 "
            src={user.photoURL}
            alt="profile"
          />
          <button
            onClick={handleSignout}
            className="
              text-white text-m
              bg-red-600 px-3 py-1 rounded
              hover:bg-red-700
              font-serif
            "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
