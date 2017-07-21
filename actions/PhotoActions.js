import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PHOTO_UPDATE,
  PHOTO_CREATE,
  PHOTOS_FETCH_SUCCESS,
  CHALLENGE_SAVE
} from './types';

export const photoUpdate = ({ prop, value }) => {
  return {
    type: PHOTO_UPDATE,
    payload: { prop, value }
  };
};

export const photoCreate = (theme) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges`)
    .push({ theme, image_url: null })
    .then(() => {
      dispatch({ type: PHOTO_CREATE });
      // Actions.photoList({ type: 'reset' });
    });
  };
};


export const challengeSave = ({ theme, start_date, image_url, challenge_uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges/${challenge_uid}`)
    .set({ theme, start_date, image_url, complete: true })
    .then(() => {
      dispatch({ type: CHALLENGE_SAVE });
      Actions.challengeComplete();
    });
  };
};

export const photosFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges`)
      .on('value', snapshot => {
        dispatch({ type: PHOTOS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
