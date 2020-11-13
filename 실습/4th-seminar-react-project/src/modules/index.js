// 리덕스 사용
import { combineReducers } from 'redux';
import member from './member';

const rootReducer = combineReducers({
  member,
});

export default rootReducer;
