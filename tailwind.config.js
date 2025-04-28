/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/login_bg.jpg')",
        'signup': "url('/signup_bg.svg')",
        'otp': "url('/otp_bg.jpg')",
        'signup_password': "url('/signup_password.jpg')",
      },
      colors:{
        'input_focus':'#3D3D3D',
        'input_black':'#222222',
        'white_text':'#F1EFEC',
        'login_unfocus':'#640D5F',
        'login_focus':'#A5158C',
      },
      fontFamily:{

      }
    },
  },
  plugins: [],
}

