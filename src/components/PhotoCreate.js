import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Card, CardSection, Input, Button } from './common';
import { photoUpdate, photoCreate } from '../actions';


class PhotoCreate extends Component {
  onButtonPress() {
      const { name, description, category, image_url } = this.props;

      this.props.photoCreate({
        name, description, category: category || 'uncategorized', image_url });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Enter image name here"
            value={this.props.name}
            onChangeText={text => this.props.photoUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Description"
          placeholder="Enter description here"
          value={this.props.description}
          onChangeText={text => this.props.photoUpdate({ prop: 'description', value: text })}
        />
        </CardSection>

        <CardSection>
          <Input
            label="Image URL"
            placeholder="Enter image URL here"
            value={this.props.image_url}
            onChangeText={text => this.props.photoUpdate({ prop: 'image_url', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={value => this.props.photoUpdate({ prop: 'category', value })}
          >
            <Picker.Item label="Uncategorized" value="uncategorized" />
            <Picker.Item label="Portrait" value="portrait" />
            <Picker.Item label="Landscape" value="landscape" />
            <Picker.Item label="Animals" value="animals" />
            <Picker.Item label="Fashion" value="fashion" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button
           onPress={this.onButtonPress.bind(this)}
          >
            CREATE
          </Button>
        </CardSection>
        <CardSection>
        <CameraRollPicker
          callback={this.getSelectedImages}
        />
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, description, category, image_url } = state.photoForm;

  return { name, description, category, image_url };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate })(PhotoCreate);
