import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer from reducers/index.js

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, and other configuration options if needed
});

export default store;
