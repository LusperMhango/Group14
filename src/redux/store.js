import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';  // Make sure this path is correct

const store = configureStore({
  reducer: {
    form: formReducer,  // The formReducer is managing the state related to the form
  },
});

export default store;
