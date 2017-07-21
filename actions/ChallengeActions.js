import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CHALLENGE_CREATE
} from './types';

export const challengeCreate = (theme) => {
  console.log('theme: ', theme);

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date+' '+time;

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges`)
    .push({ theme, start_date: dateTime })
    .then(challenge => {
      console.log('CHALLENGE!! ', challenge);
      challenge.once('value', challengeSnapshot => {
        dispatch({ type: CHALLENGE_CREATE,
                   payload: {
                    challenge: challengeSnapshot.val(),
                    ref: challenge,
                    uid: challenge.path.o[3]
                   }
                 });
        //.then(dispatch({ type: FIND_CHALLENGE }))
        Actions.themePage();
      });
    });
  };
};
