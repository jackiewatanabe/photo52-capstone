import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class PhotoCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
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

export default PhotoCreate;
