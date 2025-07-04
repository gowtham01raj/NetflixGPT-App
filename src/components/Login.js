import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
            type="text"
            placeholder="Name"
            className="p-4 m-2 bg-gray-900 w-full rounded-lg "
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 m-2 bg-gray-900 w-full rounded-lg border-white "
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 m-2 bg-gray-900 0 w-full rounded-lg "
        />
        <button className="my-6 p-4 bg-red-600  w-full rounded-lg hover:bg-red-400">
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
