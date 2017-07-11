import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { photoUpdate } from '../actions';


class PhotoCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Enter image name here"
            placeholder="Jane"
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={value => this.props.photoUpdate({ prop: 'category', value })}
          >
            <Picker.Item label="Portrait" value="portrait" />
            <Picker.Item label="Landscape" value="landscape" />
            <Picker.Item label="Animals" value="animals" />
            <Picker.Item label="Fashion" value="fashion" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            CREATE
          </Button>
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
  const { name, description, category } = state.photoForm;

  return { name, description, category };
};

export default connect(mapStateToProps, { photoUpdate})(PhotoCreate);
