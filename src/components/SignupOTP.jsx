import React, { useState } from "react";
import  useSignupStore  from "../stores/signupStore.jsx"; // Import the signup store
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

const SignupOTP = () => {
  const { setOtp,otp } = useSignupStore(); // Access signup store
  const navigate = useNavigate(); // Initialize the navigate function

  const [isLoading, setIsLoading] = useState(false); // To manage loading state (for API call later)
  const [error, setError] = useState(""); // To display any error (like invalid OTP)

  // Handle OTP change input
  const handleOtpChange = (e) => {
    const input = e.target.value;

    if (input.length <= 6) {
      setOtp(input);
    }
  };

  const handleErrorCleaning = () => {
    setTimeout(() => {
      setError(""); // Clear error after 3 seconds
    }, 3000);
  };

  // Handle OTP verification when the user clicks the verify button
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    // Check if OTP is entered
    if (otp.length !== 6) {
      setError(
        "Easy there cowboy, take a deep breath and try again. Invalid OTP"
      ); // Set error message
      handleErrorCleaning(); // Call error cleaning function
      return;
    }

    // Show loading while making API call (simulate it)
    setIsLoading(true);

    // Example: You will replace the logic here with an API call to your server
    setTimeout(() => {
      if (otp === "123456") {
        // Replace with backend OTP validation
        console.log("OTP Verified");

        // Use navigate instead of window.location.href for smoother navigation
        navigate("/profile_create"); // Example redirect to signupCreatePassword
      } else {
        setError(
          "Easy there cowboy, take a deep breath and try again. Invalid OTP"
        );
        handleErrorCleaning();
      }
      setIsLoading(false); // Stop loading
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-otp bg-cover pt-20">
      <form
        onSubmit={handleVerifyOtp}
        className="flex flex-col p-8 rounded-lg shadow-md w-full max-w-md min-h-screen"
      >
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-black text-5xl mb-4">Enter OTP</h2>
          <p className="text-xl">
            We have sent you an OTP. Please enter it below.
          </p>
        </div>

        {/* OTP input */}
        <div className="mb-4 w-full">
          <input
            placeholder="Enter OTP"
            type="number"
            id="otp"
            value={otp}
            onChange={handleOtpChange} // Update OTP state on change
            required
            maxLength={6} // Ensure OTP length is 6 digits
            className="w-full h-14 px-4 py-2 text-white_text text-center font-bold text-lg border-solid-black bg-input_black rounded-full focus:outline-none focus:bg-input_focus focus:ring-1 focus:ring-black-200"
          />
        </div>

        {/* Display error message if OTP is invalid */}
        {error && (
          <div className="text-login_focus text-center font-bold mb-4">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-2/3 h-14 text-xl font-black text-white_text py-2 px-4 mt-5 rounded-full bg-login_unfocus hover:bg-login_focus transition-colors mx-auto"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Link to resend OTP */}
        <p className="font-bold text-center mt-8">
          Didn't receive an OTP?{" "}
          <Link
            to="/resend_otp"
            className="text-white_text font-bold text-lg underline"
          >
            Resend OTP
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupOTP;
