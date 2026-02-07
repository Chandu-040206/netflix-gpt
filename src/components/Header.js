import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/");
            dispatch(removeUser());
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className="z-10 fixed top-0 left-0 px-8 py-4 bg-gradient-to-b from-black w-full flex items-center justify-between">
            <img
                className="w-32"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
            />

            {user && <div className="flex ">
                <img 
                // src={user.photoURL}
                src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    alt="logout" />
                <button onClick={handleSignout} className="border-solid border-black bg-blue-300 px-1">
                    SignOut
                </button>
            </div>}
        </div>
    )
}

export default Header;