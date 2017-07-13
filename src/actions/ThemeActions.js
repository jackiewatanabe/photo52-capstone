// import firebase from 'firebase';
import axios from 'axios';
// import { Actions } from 'react-native-router-flux';
import {
  SEARCH_PHOTOS_FETCH_SUCCESS
} from './types';


export const searchPhotosFetch = ({ theme }) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    axios.get(`https://api.500px.com/v1/photos/search?term=${theme}&page=1&rpp=50&image_size=440&sort=highest_rating&consumer_key=sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4`)
    .then((response) => {
      dispatch({
        type: SEARCH_PHOTOS_FETCH_SUCCESS,
        payload: response.data
      });

      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  };
};
