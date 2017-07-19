import {
  PHOTO_UPDATE,
  PHOTO_CREATE,
  THEME_CHANGEDO
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  category: '',
  image_url: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHOTO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PHOTO_CREATE:
      return INITIAL_STATE;
    case THEME_CHANGEDO:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
