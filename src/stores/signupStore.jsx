import { create } from 'zustand';

const useSignupStore = create((set) => ({
  // Signup fields with default values
  fullname: '',
  gender: '',  // Default value for gender
  dob: null,   // Default value for date of birth
  weight: '',  // Default value for weight
  weightUnit: 'kg',  // Default weight unit
  height: '',  // Default value for height
  heightUnit: 'cm',  // Default height unit
  email: '',
  otp: '',
  password: '',

  // Setters
  setFullname: (fullname) => set({ fullname }),
  setGender: (gender) => set({ gender }),
  setDob: (dob) => set({ dob }),
  setWeight: (weight) => set({ weight }),
  setWeightUnit: (weightUnit) => set({ weightUnit }),
  setHeight: (height) => set({ height }),
  setHeightUnit: (heightUnit) => set({ heightUnit }),
  setEmail: (email) => set({ email }),
  setOtp: (otp) => set({ otp }),
  setPassword: (password) => set({ password }),

  // Clear all signup data
  clearSignupData: () => set({
    fullname: '',
    gender: '',
    dob: null,
    weight: '',
    weightUnit: 'kg',
    height: '',
    heightUnit: 'cm',
    email: '',
    otp: '',
    password: '',
  }),
}));

export default useSignupStore;
