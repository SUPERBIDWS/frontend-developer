import {combineReducers} from 'redux';
import albums from './albumReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  albums,
  ajaxCallsInProgress
});

export default rootReducer;
