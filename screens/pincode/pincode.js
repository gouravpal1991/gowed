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
} from 'react-native';
import DoubleTap from '../common/DoubleTap';
import PINCode, {
  hasUserSetPinCode,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';

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
        {this.state.showPinLock && (
          <PINCode
            status={this.state.PINCodeStatus}
            touchIDDisabled={true}
            finishProcess={() => this.finishProcess()}
          />
        )}
      </View>
    );
  }
}
export default Pincode;
