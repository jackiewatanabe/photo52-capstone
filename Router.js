import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginForm from './components/LoginForm';
import PhotoList from './components/PhotoList';
import UserPage from './components/UserPage';
import PhotoCreate from './components/PhotoCreate';
import ThemePage from './components/ThemePage';
import InspirationPage from './components/InspirationPage';
import InspirationChoice from './components/InspirationChoice';
import Gallery from './components/Gallery';
import ShareGallery from './components/ShareGallery';
import ChallengeComplete from './components/ChallengeComplete';
import ChallengeHistory from './components/ChallengeHistory';

const RouterComponent = () => {
  const myIcon = (<Icon name="account-circle" size={30} color="#fff" style={{ alignSelf: 'center', textAlign: 'center' }} />);

  const myGridIcon = (<Icon name="apps" size={30} color="#fff" style={{ alignSelf: 'center', textAlign: 'center' }} />);

  const myStarIcon = (<Icon name="star-border" size={30} color="#fff" style={{ alignSelf: 'center', textAlign: 'center' }} />)

  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
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
        leftTitle={myGridIcon}
        onRight={() => Actions.challengeHistory()}
        rightTitle={myStarIcon}
        leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
        <Scene
          key="photoList" component={PhotoList} title="Photoroll"
          onLeft={() => Actions.userPage()}
          leftTitle={myIcon}
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="themePage" component={ThemePage} title="THEME PAGE"
          onLeft={() => Actions.userPage()}
          leftTitle={myIcon}
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="inspirationPage" component={InspirationPage}
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="photoList" component={PhotoList}
          title="PHOTOROLL"
          onLeft={() => Actions.userPage({ type: 'reset' })}
          leftTitle="User Page"
          onRight={() => Actions.challengeHistory()}
          rightTitle={myStarIcon}
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="inspirationChoice" component={InspirationChoice}
          title="INSPIRATION"
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="gallery" component={Gallery}
          title="GALLERY"
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="shareGallery" component={ShareGallery}
          title="SHARE"
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="challengeComplete" component={ChallengeComplete}
          title="PHOTO52"
          onLeft={() => Actions.userPage({ type: 'reset' })}
          leftTitle={myIcon}
          onRight={() => Actions.challengeHistory()}
          rightTitle={myStarIcon}
          leftButtonIconStyle={{ tintColor: 'white' }}
        />
        <Scene
          key="challengeHistory" component={ChallengeHistory}
          title="PROGRESS"
          leftButtonIconStyle={{ tintColor: 'white' }}
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
