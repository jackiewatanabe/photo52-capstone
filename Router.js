import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PhotoList from './components/PhotoList';
import UserPage from './components/UserPage';
import PhotoCreate from './components/PhotoCreate';
import ThemePage from './components/ThemePage';
import InspirationPage from './components/InspirationPage';
import InspirationChoice from './components/InspirationChoice';
// import Example from './components/Example';
import PhotoSelect from './PhotoSelect';
import Gallery from './components/Gallery';
import ChallengeComplete from './components/ChallengeComplete';
// import CameraRolls from './components/CameraRolls';
// import ImageBrowser from './components/ImageBrowser';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth"
        navigationBarStyle={styles.navigationBar} titleStyle={styles.navbarTitle}
      >
        <Scene key="login" component={LoginForm} title="PHOTO52" initial />
      </Scene>
      <Scene key="main" navigationBarStyle={styles.navigationBar} titleStyle={styles.navbarTitle}>
        <Scene
        key="userPage"
        component={UserPage}
        title="PHOTO52" initial
        onLeft={() => Actions.photoList()}
        leftTitle="PHOTOROLL"
        onRight={() => Actions.photoCreate()}
        rightTitle="+"
        />
        <Scene key="photoCreate" component={PhotoCreate} title="Upload Photo" />
        <Scene
          key="photoList" component={PhotoList} title="Photoroll"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="themePage" component={ThemePage} title="THEME PAGE"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="inspirationPage" component={InspirationPage} title="INSPIRATION PAGE"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="photoSelect" component={PhotoSelect}
          title="Photo Select"
        />
        <Scene
          key="photoList" component={PhotoList}
          title="PHOTOROLL"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
        />
        <Scene
          key="inspirationChoice" component={InspirationChoice}
          title="INSPIRATION"
        />
        <Scene
          key="gallery" component={Gallery}
          title="Gallery"
        />
        <Scene
          key="challengeComplete" component={ChallengeComplete}
          title="CHALLENGE COMPLETE"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBar: {
    backgroundColor: 'black',
    // color: 'white'
  },
  navbarTitle: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  }
};

export default RouterComponent;
