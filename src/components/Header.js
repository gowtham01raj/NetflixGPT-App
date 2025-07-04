import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { removeUser, addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_USERICON, NETFLIX_LOGO } from "../Utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="absolute px-8 w-full py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {userDetails && (
        <div className="flex p-2">
          {userDetails.photoURL ? (
            <img
              className="h-12 w-12 rounded-lg"
              alt="usericon"
              src={userDetails.photoURL}
            />
          ) : (
            <img
              className="h-12 w-12 rounded-lg"
              alt="usericon"
              src={DEFAULT_USERICON}
            />
          )}
          <button
            onClick={handleSignOut}
            className="py-2 cursor-pointer text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
