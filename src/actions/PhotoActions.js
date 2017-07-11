import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PHOTO_UPDATE
} from './types';

export const photoUpdate = ({ prop, value }) => {
  return {
    type: PHOTO_UPDATE,
    payload: { prop, value }
  };
};


export const photoCreate = ({ name, description, category }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/photos`)
    .push({ name, description, category })
    .then(() => Actions.photoList());
  };
};
