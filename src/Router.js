import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PhotoList from './components/PhotoList';
import UserPage from './components/UserPage';
import PhotoCreate from './components/PhotoCreate';
import ThemePage from './components/ThemePage';
import InspirationPage from './components/InspirationPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Log In" initial />
      </Scene>
      <Scene key="main">
        <Scene
        key="userPage"
        component={UserPage}
        title="PHOTO52" initial
        onRight={() => Actions.photoCreate()}
        rightTitle="+"
        />
        <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
        <Scene
          key="photoList" component={PhotoList} title="Photoroll"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="themePage" component={ThemePage} title="Theme Page"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="inspirationPage" component={InspirationPage} title="Inspiration Page"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;


// <Scene
//   onRight={() => Actions.photoCreate()}
//   rightTitle="Add"
//   key="photoList" component={PhotoList} title="Photos"
//   initial
// />
// <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
