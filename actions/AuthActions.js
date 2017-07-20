import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CHALLENGE_CREATE
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
};

// export const themeChanged = (theme) => {
//   return {
//     type: THEME_CHANGED,
//     payload: theme
//   };
// };

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
          console.log(error);

          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => loginUserSuccess(dispatch, user))
              .catch(() => loginUserFail(dispatch));
      });
  };
};

export const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUserSuccess = (dispatch, user) => {
  console.log('USER!! ', user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};


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
      })

    });
  };
};