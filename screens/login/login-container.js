import React from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Login from './login';
import {Appbar} from 'react-native-paper';
import styles from './login-styles';
import DoubleTap from '../common/DoubleTap';
import Icon from 'react-native-vector-icons/MaterialIcons';
const LoginTextInput = () => {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={styles.loginInput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholder={'Enter Your Login ID'}
    />
  );
};

const PwdTextInput = () => {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={styles.loginInput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholder={'Enter Your Password'}
    />
  );
};
class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onPressLearnMore = () => {};
  render() {
    // const [loginvalue, onChangeText] = React.useState('Enter Your Login ID');
    // const [pwdvalue, onChangeText2] = React.useState('Enter Your Password');
    return (
      <View style={{flex: 1}}>
        <Appbar.Header style={[styles.appHeader, {backgroundColor: '#042245'}]}>
          <Appbar.Action icon="menu" color={'#fff'} />
          <Appbar.Content title="Login" color={'#fff'} />
        </Appbar.Header>

        <LoginTextInput />
        <PwdTextInput />

        <View style={styles.btncontainer}>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => {
              this.props.navigation.replace('PinCode');
            }}>
            <Text style={styles.customBtnText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accessiblelayout}>
          <View style={styles.accessiblebtnlayout}>
            <Icon name="lock" size={50} color={'#00aff0'} />
            <Text
              style={{color: '#00aff0'}}
              accessibilityHint="Login using your mobile pin">
              MPin Login
            </Text>
          </View>
          <View style={styles.accessiblebtnlayout}>
            <Icon name="fingerprint" size={50} color={'#00aff0'} />
            <Text
              style={{color: '#00aff0'}}
              accessibilityHint="Login using your fingerprint">
              FingerPrint Login
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default LoginContainer;
