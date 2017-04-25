// If we were to use a redux store instead of variables

import { combineReducers } from 'redux'
import parsley from './parsley'

const parsleyApp = combineReducers({
  parsley
});

export default parsleyApp;
