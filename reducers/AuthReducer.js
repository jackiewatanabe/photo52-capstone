import { REHYDRATE } from 'redux-persist/constants';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CHALLENGE_CREATE
  // THEME_CHANGED
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, challenge: null };

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
      console.log('in LOGIN_USER in authreducer: ', action.payload);
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
      console.log('in LOGIN_USER_SUCCESS in authreducer: ', action.payload);
        return {
          ...state,
          error: '',
          loading: false,
          email: '',
          password: '',
          user: action.payload
        };
        //
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', loading: false, password: '' };
      default:
        return state;
    }
};
