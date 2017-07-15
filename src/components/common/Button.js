import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Iowan Old Style',
    letterSpacing: 2

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    // justifyContent: 'flex-end',
    backgroundColor: '#817f7f',
    // borderRadius: 5,
    // borderWidth: 1,
    borderColor: '#817f7f',
    // marginLeft: 5,
    // marginRight: 5
  }
};

export { Button };
