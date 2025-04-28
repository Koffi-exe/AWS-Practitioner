import React from 'react'
import useSignupStore from "../stores/signupStore"; // Import the signup store
const Profile = () => {
  const { fullname, email } = useSignupStore(); // Access signup store
  return (
    <div>
      <h1>{`Welcome ${fullname}`}</h1>
      <p>{`Your email is ${email}`}</p>
    </div>
  )
}

export default Profile
