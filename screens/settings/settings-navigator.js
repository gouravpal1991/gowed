import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
//screens
import Settings from './settings';
import ATM from '../atm';

const Stack = createStackNavigator();

class SettingsNavigator extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName="GuestsList"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          {...this.props}
          name="Settings"
          component={Settings}
          options={null}
        />
        <Stack.Screen {...this.props} name="ATM" component={ATM} />
      </Stack.Navigator>
    );
  }
}
export default SettingsNavigator;
