import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalDetails: {},
  bankDetails: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    submitApplication: (state) => {
      const applicationData = {
        personalDetails: state.personalDetails,
        bankDetails: state.bankDetails,
      };
      console.log('Submitting data:', applicationData);
      state.personalDetails = {};
      state.bankDetails = {};
    },
  },
});

export const { setPersonalDetails, setBankDetails, submitApplication } = formSlice.actions;
export default formSlice.reducer;
