import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons from react-icons
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // To toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  useEffect(() => {
    // Disable vertical scrolling on the body when the component mounts
    document.body.style.overflowY = "hidden";

    // Cleanup on unmount to restore scrolling
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen max-h-screen w-full bg-login bg-cover pt-40">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 rounded-lg shadow-md w-full max-w-md min-h-screen"
      >
        <div className="mb-24">
          <h2 className="font-black text-5xl">
            Welcome
            <br />back!
          </h2>
        </div>

        <div className="mb-4 my-4 w-full">
          <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg border-solid-black bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-blck-200"
          />
        </div>

        <div className="mb-6 w-full relative">
          <input
            placeholder="Password"
            type={passwordVisible ? "text" : "password"} // Toggle between text and password type
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-14 px-4 py-2 text-white_text font-bold text-lg border-solid-black bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
          {/* Eye Icon for showing/hiding password */}
          <div
            className="absolute right-5 top-4 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
          >
            {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        {/* Center the login button without changing its width */}
        <button
          type="submit"
          className="w-2/3 h-14 text-xl font-black text-white_text py-2 px-4 mt-5 rounded-full bg-login_unfocus hover:bg-login_focus transition-colors mx-auto" // Use mx-auto to center the button
        >
          Login
        </button>

        <a href="/forgot_password" className="text-login_unfocus font-bold text-lg underline text-center mt-14 hover:underline">
          Forgot password?
        </a>

        <p className="font-bold text-center mt-28">
          Don't have an account?{" "}
          <Link to="/signup1" className="text-white_text font-bold text-lg underline ">
            Sign up!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
