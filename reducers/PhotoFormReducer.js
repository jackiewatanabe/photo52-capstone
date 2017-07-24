import {
  PHOTO_UPDATE,
  PHOTO_CREATE,
  CHALLENGE_SAVE
} from '../actions/types';

const INITIAL_STATE = {
  theme: null,
  image_url: null,
  uploadReady: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHOTO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value, loading: false, uploadReady: true };
    case PHOTO_CREATE:
      return { ...state, theme: action.payload };
      // return INITIAL_STATE;
    case CHALLENGE_SAVE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
