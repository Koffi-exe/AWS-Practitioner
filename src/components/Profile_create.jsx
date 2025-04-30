import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignupStore from "../stores/signupStore"; // Import the signup store
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; // Import Date Adapter for Material UI

const ProfileCreate = () => {
  const navigate = useNavigate();
  const {
    fullname,
    setFullname,
    dob,
    setDob,
    gender,
    setGender,
    weight,
    setWeight,
    weightUnit,
    setWeightUnit,
    height,
    setHeight,
    heightUnit,
    setHeightUnit,
  } = useSignupStore(); // Access signup store

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleErrorCleaning = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !gender || !dob || !weight || !height) {
      setError("Fill everything in, champ!");
      handleErrorCleaning();
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log({
        fullname,
        gender,
        dob,
        weight: `${weight} ${weightUnit}`,
        height: `${height} ${heightUnit}`,
      });

      // Navigate to the next step after profile creation
      navigate("/profile");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex items-center justify-center min-h-screen w-full bg-otp bg-cover pt-20">
        <form
          onSubmit={handleProfileSubmit}
          className="flex flex-col p-8 shadow-md w-full max-w-md min-h-screen"
        >
          {/* Heading */}
          <div className="mb-16">
            <h2 className="font-black text-5xl mb-4">Create Profile</h2>
            <p className="text-xl">Let's set up your fitness profile!</p>
          </div>

          {/* Full Name */}
          <div className="mb-4 w-full">
            <TextField
              label="Full Name"
              variant="outlined"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              fullWidth
              className="mb-4 input_black"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex justify-center mb-4 w-full">
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(newValue) => setDob(newValue)}
              disableFuture
              renderInput={(params) => (
                <TextField {...params} fullWidth className="input_black" />
              )}
            />
          </div>

          {/* Gender */}
          <div className="mb-4 w-full">
            <FormControl fullWidth required className="mb-4">
              <InputLabel className="input_black">Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
                className="input_black"
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              <FormHelperText>
                {error && "Please select a gender"}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Weight */}
          <div className="flex gap-4 mb-4">
            <TextField
              label="Weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              fullWidth
              className="input_black"
            />
            <FormControl fullWidth>
              <Select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
                className="input_black"
              >
                <MenuItem value="kg">Kg</MenuItem>
                <MenuItem value="lb">Pound</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Height */}
          <div className="flex gap-4 mb-4">
            <TextField
              label="Height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              fullWidth
              className="input_black"
            />
            <FormControl fullWidth>
              <Select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                className="input_black"
              >
                <MenuItem value="cm">cm</MenuItem>
                <MenuItem value="ft">Feet</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Display error */}
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
            {isLoading ? "Creating..." : "Create Profile"}
          </button>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default ProfileCreate;
