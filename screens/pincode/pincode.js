import React from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import DoubleTap from '../common/DoubleTap';
import PINCode, {
  hasUserSetPinCode,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';
import {Appbar} from 'react-native-paper';

class Pincode extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showPinLock: true,
    };
    hasUserSetPinCode().then((hasPin) => {
      console.log(hasPin);
      this.setState({PINCodeStatus: hasPin ? 'enter' : 'choose'});
    });
  }

  finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      // Alert.alert(null, "You have successfully set/entered your pin.", [
      //   {
      //     title: "Ok",

      //   },
      // ]);
      this.setState({showPinLock: false});
      // const deleted = await deleteUserPinCode();
      this.props.navigation.replace('Dashboard');
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        
        <ImageBackground 
            source={require('../../assets/images/bg.png')} 
            style={{
              flex: 1,
              resizeMode: "stretch"}}>

            {this.state.showPinLock && (
              <PINCode
                status={this.state.PINCodeStatus}
                touchIDDisabled={true}
                finishProcess={() => this.finishProcess()}
              />
            )}
        </ImageBackground>
        
      </View>
    );
  }
}
export default Pincode;
