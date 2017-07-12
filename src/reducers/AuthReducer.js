import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, theme: '' };

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error: '', theme: '' };
      case LOGIN_USER_SUCCESS:
        return {
          ...state, ...INITIAL_STATE, user: action.payload, theme: ''
        };
        // error: '',
        // loading: false,
        // email: '',
        // password: ''
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', loading: false, password: '' };
      default:
        return state;
    }
};
