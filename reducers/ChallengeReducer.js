import { REHYDRATE } from 'redux-persist/constants';
import {
  CHALLENGE_CREATE
} from '../actions/types';

const INITIAL_STATE = { currentChallenge: null };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  console.log('STATE: ', this.state);
  switch (action.type) {
    case REHYDRATE:
      console.log('IN REHYDRATE: ', action.payload.challenger);
      return action.payload.challenge || [];
    case CHALLENGE_CREATE:
      console.log('action.payload: ', action.payload);
      return { ...state, currentChallenge: action.payload.challenge, challenge_ref: action.payload.ref, challenge_uid: action.payload.uid };
    default:
    return state;
  }
};
