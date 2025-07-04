import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/helper";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { UPDATED_USERICON } from "../Utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    setErrorMessage(
      checkValidData(email.current.value, password.current.value)
    );
    if (errorMessage) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: UPDATED_USERICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      //signin with email  & password
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="login-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" p-12  bg-black text-white w-3/12 my-24 absolute left-0 right-0 mx-auto opacity-85 bg-gradient-to-br from-black rounded-lg "
      >
        <h1 className="text-white font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2 bg-gray-900 w-full rounded-lg "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 m-2 bg-gray-900 w-full rounded-lg border-white "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 m-2 bg-gray-900 0 w-full rounded-lg "
        />
        {errorMessage && (
          <p className="text-red-600 font-bold flex mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="CircleXSmall"
              aria-hidden="true"
              className="default-ltr-cache-13htjwu e1vkmu653 mx-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                fill="currentColor"
              ></path>
            </svg>
            {errorMessage}
          </p>
        )}
        <button
          className="my-6 p-4 bg-red-600  w-full rounded-lg hover:bg-red-400"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="underline cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
