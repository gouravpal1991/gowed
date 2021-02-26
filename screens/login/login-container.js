import React from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import styles from './login-styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {View, TextField, Text, Badge, Colors} from 'react-native-ui-lib';//eslint-disable-line


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
          <ImageBackground 
              source={require('../../assets/images/build1.png')} 
              style={{
                flex: 1,
                resizeMode: "contain"}}>
              <View style={{flex:1}}>
                <Text style={{flex:0.5}}></Text>
                <View style={{flex:0.5}}>
                  <LoginTextInput />
                  <PwdTextInput />
                  <View style={styles.btncontainer}>
                    <TouchableOpacity
                      style={styles.customBtnBG}
                      onPress={() => {
                        this.props.navigation.replace('PinCode');
                      }}
                      accessibilityHint='Enter user ID, password andthen double tap to login'>
                      <Text style={styles.customBtnText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.accessiblelayout}>
                    <TouchableOpacity 
                      style={styles.accessiblebtnlayout}
                      onPress={() => {
                        this.props.navigation.replace('PinCode');
                      }}>
                      <Icon name="lock" size={50} color={'#00aff0'} />
                      <Text
                        style={{
                          color: 'white', 
                          fontFamily: 'Cochin', fontSize: 15,
                          }}
                        accessibilityHint="Login using your mobile pin">
                        MPin Login
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.accessiblebtnlayout}>
                      <Icon name="fingerprint" size={50} color={'#00aff0'} />
                      <Text
                        style={{color: 'white',
                        fontFamily: 'Cochin', fontSize: 15,
                        }}
                        accessibilityHint="Login using your fingerprint or touchID or face ID">
                        Biometric Login
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
          </ImageBackground>
          {/* <Image 
              source={require('../../assets/images/dbcover.png')} 
              style={{flex: 1, resizeMode: 'stretch'}} /> */}
          {/* <View 
              style={{
                position: 'absolute', 
                flexDirection: 'column',}}> */}
              
              {/* </View> */}
              
              
    
        
       
        {/* <LoginTextInput />
        <PwdTextInput />

        <View style={styles.btncontainer}>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => {
              this.props.navigation.replace('PinCode');
            }}
            accessibilityHint='Enter user ID, password andthen double tap to login'>
            <Text style={styles.customBtnText}
            >Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accessiblelayout}>
          <TouchableOpacity 
            style={styles.accessiblebtnlayout}
            onPress={() => {
              this.props.navigation.replace('PinCode');
            }}>
            <Icon name="lock" size={50} color={'#00aff0'} />
            <Text
              style={{color: '#00aff0'}}
              accessibilityHint="Login using your mobile pin">
              MPin Login
            </Text>
          </TouchableOpacity>
          <View style={styles.accessiblebtnlayout}>
            <Icon name="fingerprint" size={50} color={'#00aff0'} />
            <Text
              style={{color: '#00aff0'}}
              accessibilityHint="Login using your fingerprint">
              FingerPrint Login
            </Text>
          </View>
        </View> */}
      </View>
    );
  }
}
export default LoginContainer;
