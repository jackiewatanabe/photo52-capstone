import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const UserDetail = () => {

  return (
    <View>
      <Card>
        <CardSection style={styles.thumbnailContainerStyle}>
          <Image
          style={styles.thumbnailStyle}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
          <Text style={styles.usernameTextStyle}>username</Text>
        </CardSection>
        <CardSection style={styles.themeContentStyle}>
          <Text>THIS WEEKS THEME</Text>
          <Button style={{ flex: 1 }}>NO THEME SET YET</Button>
        </CardSection>
      </Card>
    </View>
  );

};

const styles = {

  thumbnailStyle: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  usernameTextStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  themeContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
  },

};

export default UserDetail;
