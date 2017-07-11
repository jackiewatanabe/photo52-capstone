import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotoFormReducer from './PhotoFormReducer';

export default combineReducers({
    auth: AuthReducer,
    photoForm: PhotoFormReducer
});
