// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from '@reduxjs/toolkit';
import randomMealReducer from './randomMealSlice';

export default combineReducers({
  randomMeal: randomMealReducer,
});
