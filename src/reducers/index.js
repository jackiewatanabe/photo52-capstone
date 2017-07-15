import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotoFormReducer from './PhotoFormReducer';
import PhotoReducer from './PhotoReducer';
import ThemeReducer from './ThemeReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    auth: AuthReducer,
    photoForm: PhotoFormReducer,
    photos: PhotoReducer,
    themes: ThemeReducer,
    selectedResultPhotoId: SelectionReducer
});
