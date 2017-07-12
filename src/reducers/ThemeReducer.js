import {
  THEME_CREATE
} from '../actions/types';

const INITIAL_STATE = { theme: null };


export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
      case THEME_CREATE:
        return { ...state, theme: action.payload };
      default:
        return state;
  }
};
