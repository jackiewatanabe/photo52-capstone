import React, { Component } from 'react';
import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import reducers from './reducers';
import Router from './Router';
import store from './store';

// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCzVJ58tgRgTsbjnYNeX1WR16pWUqybvGw',
      authDomain: 'photo52authentication.firebaseapp.com',
      databaseURL: 'https://photo52authentication.firebaseio.com',
      projectId: 'photo52authentication',
      storageBucket: 'photo52authentication.appspot.com',
      messagingSenderId: '351350443180'
    };
    firebase.initializeApp(config);
  }

  render() {
    // console.log('app.js render: ', this.state.user);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
