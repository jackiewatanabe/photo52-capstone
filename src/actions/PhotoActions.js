import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PHOTO_UPDATE,
  PHOTO_CREATE
} from './types';

export const photoUpdate = ({ prop, value }) => {
  return {
    type: PHOTO_UPDATE,
    payload: { prop, value }
  };
};


export const photoCreate = ({ name, description, category }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/photos`)
    .push({ name, description, category })
    .then(() => {
      dispatch({ type: PHOTO_CREATE });
      Actions.photoList({ type: 'reset' });
    });
  };
};
