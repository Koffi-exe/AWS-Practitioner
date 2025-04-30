import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Forgot_password from './components/Forgot_password'
import Signup1 from './components/Signup1'
import SignupOTP from './components/SignupOTP'
import Profile from './components/Profile'
import ResendOtp from './components/ResendOtp'
import ProfileCreate from './components/Profile_create'

function App() {


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<Forgot_password />} />
        <Route path="/signup1" element={<Signup1/>} />
        <Route path="/signupOTP" element={<SignupOTP/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resend_otp" element={<ResendOtp />} />
        <Route path="/profile_create" element={<ProfileCreate />} />
      </Routes>
    </Router>
  )
}

export default App
