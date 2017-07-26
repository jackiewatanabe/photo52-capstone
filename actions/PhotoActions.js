import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PHOTO_UPDATE,
  PHOTO_CREATE,
  PHOTOS_FETCH_SUCCESS,
  CHALLENGE_SAVE,
  CHALLENGE_COMPLETE,
  CHALLENGE_UPDATE
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


export const challengeSave = ({ theme, start_date, image_url, challenge_uid, week }) => {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // const dateTime = date + ' ' + time;

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges/${challenge_uid}`)
    .set({ theme, start_date, image_url, complete: true, end_date: date, week })
    .then(() => {
      dispatch({ type: CHALLENGE_SAVE });
      firebase.database().ref(`/users/${currentUser.uid}/challenge_week`)
      .once('value', snapshotWeek => {
        console.log('SNAPSHOTWEEK: ', snapshotWeek.val());
        firebase.database().ref(`/users/${currentUser.uid}/challenge_week`)
        .set(snapshotWeek.val() + 1)
      })
      .then(() => {
      firebase.database().ref(`/users/${currentUser.uid}/challenge_week`)
      .once('value', updateSnapshotWeek => {
        dispatch({ type: CHALLENGE_UPDATE,
                    payload: updateSnapshotWeek.val()
                });
        dispatch({ type: CHALLENGE_COMPLETE, payload: updateSnapshotWeek.val() });
      });
    });

      // dispatch({ type: CHALLENGE_COMPLETE, payload: update });
      // dispatch({ type: CHALLENGE_FETCH })

      Actions.challengeComplete({ type: 'reset' });
      // dispatch({ type: CHALLENGE_COMPLETE });
      // updateChallengeCount();
      // const data = { challenge: null, week: week_count };
      // dispatch({ type: CHALLENGE_COMPLETE, payload: (week + 1) });
    });
  };
};

// export const updateChallengeCount = () => {
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/challenge_week`)
//     .once('value', updateSnapshotWeek => {
//       dispatch({ type: CHALLENGE_UPDATE,
//                   payload: updateSnapshotWeek.val()
//               });
//     });
//   };
// };

// export const updateChallengeCount = () => {
//   const { currentUser } = firebase.auth();
//   firebase.database().ref(`/users/${currentUser.uid}/completed_challenges`)
//   .set
//
// }

export const challengeCompleted = (week_count) => {
  console.log('WEEK COUNT: ', week_count);
  console.log('MADE IT TO CHALLENGE COMPLETED!!');
  // const data = { challenge: null, week: week_count };
  return {
    type: CHALLENGE_COMPLETE,
    payload: week_count
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
