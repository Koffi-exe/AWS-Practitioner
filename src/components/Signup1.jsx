import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useSignupStore from "../stores/signupStore";
// import * as Amplify from 'aws-amplify';

const Signup1 = () => {
  const { email, setEmail, password, setPassword } = useSignupStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/signupOTP"); // Pass email to the next page

  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-signup bg-cover pt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 rounded-lg shadow-md w-full max-w-md min-h-screen"
      >
        <div className="mb-16">
          <h2 className="font-black text-5xl">
            Let's get you
            <br />
            Settled in!
          </h2>
          <p className="text-lg">Give us a little info about you</p>
        </div>

        {/* Email Input */}
        <div className="mb-4 w-full">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg border-solid-black bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 w-full">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg border-solid-black bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-2/3 h-14 text-xl font-black text-white_text py-2 px-4 mt-5 rounded-full bg-login_unfocus hover:bg-login_focus transition-colors mx-auto"
        >
          Continue
        </button>

        {/* Link to Login Page */}
        <p className="font-bold text-center mt-24">
          Already have an account?{" "}
          <Link to="/" className="text-white_text font-bold text-lg underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup1;
