import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { photoUpdate } from '../actions';


class PhotoCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.photoUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={text => this.props.photoUpdate({ prop: 'phone', value: text })}
        />
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.photoForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { photoUpdate})(PhotoCreate);
