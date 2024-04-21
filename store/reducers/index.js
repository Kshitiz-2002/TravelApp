import { combineReducers } from 'redux';
import appReducer from './appSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default rootReducer;
