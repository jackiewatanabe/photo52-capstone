import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CHALLENGE_CREATE,
  REHYDRATE,
  CHALLENGE_COMPLETE,
  CHALLENGE_UPDATE
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, challenge: null , week: 0 };

export default (state = INITIAL_STATE, action) => {
    // console.log(action);

    switch (action.type) {
      case REHYDRATE:
        console.log('IN REHYDRATE: ', action.payload.challenger);
        return action.payload.auth || [];
      case CHALLENGE_COMPLETE:
      console.log('IN CHALLENGE_COMPLETE');
      console.log('challenge_complete:', action.payload);
        return { ...state, challenge: null };
      case CHALLENGE_UPDATE:
        console.log('IN CHALLENGE_UPDATE: ', action.payload);
        return { ...state, week: action.payload };
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
          ...state, error: '', loading: false, email: '', password: '', user: action.payload
        };
        // error: '',
        // loading: false,
        // email: '',
        // password: ''
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', loading: false, password: '' };
      case CHALLENGE_CREATE:
        console.log('action.payload: ', action.payload);
        return { ...state, challenge: action.payload.challenge, challenge_ref: action.payload.ref, challenge_uid: action.payload.uid };
      default:
        return state;
    }
};
