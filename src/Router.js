import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PhotoList from './components/PhotoList';
import UserPage from './components/UserPage';
import PhotoCreate from './components/PhotoCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Log In" initial />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.photoCreate()}
          rightTitle="Add"
          key="photoList" component={PhotoList} title="Photos"
          initial
        />
        <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
        <Scene key="userPage" component={UserPage} title="PHOTO 52" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
