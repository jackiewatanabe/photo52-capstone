import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    render() {
      return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Button>
              LOG IN
            </Button>
          </CardSection>

        </Card>
      );
    }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

// --------------Old way without redux

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';
//
// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSuccess.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSuccess.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }
//
//   onLoginFail() {
//     this.setState({
//       error: 'Authentication Failed',
//       loading: false
//     });
//   }
//
//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="small" />;
//     }
//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         LOG IN
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//       <Card>
//         <CardSection style={{ flex: 1 }}>
//           <View>
//             <Text style={styles.welcomeTextStyle}>Welcome to Photo52!</Text>
//             <Text style={styles.welcomeTextStyle}>Taking better pictures begins with...</Text>
//             <Text style={styles.welcomeTextStyle}>Please enter your login information</Text>
//           </View>
//         </CardSection>
//         <CardSection>
//           <Input
//             placeholder="user@gmail.com"
//             label="Email"
//             value={this.state.email}
//             onChangeText={email => this.setState({ email })}
//           />
//         </CardSection>
//         <CardSection>
//           <Input
//             secureTextEntry
//             placeholder="password"
//             label="Password"
//             value={this.state.password}
//             onChangeText={password => this.setState({ password })}
//           />
//         </CardSection>
//         <Text style={styles.errorTextStyle}>
//           {this.state.error}
//         </Text>
//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//
//       </Card>
//     );
//   }
// }
//
// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   },
//   welcomeTextStyle: {
//     alignSelf: 'center',
//     paddingBottom: 10,
//     fontFamily: 'Iowan Old Style',
//   },
//   welcomeContainerStyle: {
//     flex: 1,
//     alignSelf: 'center',
//     marginLeft: 10,
//     marginRight: 10,
//   }
// };
//
// export default LoginForm;
