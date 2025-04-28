import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For password visibility toggle
import { useNavigate } from "react-router-dom"; // To move after password creation
import useSignupStore from "../stores/signupStore"; // Import the signup store

const SignupCreatePassword = () => {
  
  const {password, setPassword } = useSignupStore(); // Access signup store
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError(
        "Dude seriously, your password is too short. It should be at least 6 characters long."
      );
      clearError();
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "It's not rocket science bro, your passwords don't match. Please try again."
      );
      clearError();
      return;
    }

    setIsLoading(true);

    // Simulate backend API call for creating password
    setTimeout(() => {
      console.log("Password Created:", password);

      // After success, redirect user (example to login page or dashboard)
      navigate("/profile");
      setIsLoading(false);
    }, 2000);
  };

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-signup_password bg-cover pt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 rounded-lg shadow-md w-full max-w-md min-h-screen"
      >
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-black text-5xl">
            Create your
            <br />
            Password
          </h2>
          <p className="text-lg">Secure your account</p>
        </div>

        {/* Password input */}
        <div className="mb-4 w-full relative">
          <input
            placeholder="New Password"
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
          <div
            className="absolute right-5 top-4 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        {/* Confirm Password input */}
        <div className="mb-6 w-full">
          <input
            placeholder="Confirm Password"
            type={passwordVisible ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
        </div>

        {/* Show error message */}
        {error && (
          <div className="text-white_text font-bold text-center mb-4">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-2/3 h-14 text-xl font-black text-white_text py-2 px-4 mt-5 rounded-full ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-login_unfocus hover:bg-login_focus transition-colors"
          } mx-auto`}
        >
          {isLoading ? "Creating..." : "Create Password"}
        </button>
      </form>
    </div>
  );
};

export default SignupCreatePassword;
