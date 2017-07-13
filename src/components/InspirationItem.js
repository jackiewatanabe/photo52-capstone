import React, { Component } from 'react';
import { Image } from 'react-native';
import { CardSection } from './common';

class InspirationItem extends Component {
  render() {
    const { name, image_url } = this.props.photo;

    return (
      <CardSection style={{ alignSelf: 'center', paddingTop: 0, paddingBottom: 0 }}>
          <Image style={styles.imageStyle} source={{ uri: `${image_url}` }} />
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    height: 200,
    width: 350,
    alignSelf: 'stretch'
  }
};

export default InspirationItem;
