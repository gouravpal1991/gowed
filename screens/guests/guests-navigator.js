import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
//screens
import Guests from './guests';
import AddGuest from './add-guest';

const Stack = createStackNavigator();

class GuestsNavigator extends React.Component {
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
          name="GuestsList"
          component={Guests}
          options={null}
        />
        <Stack.Screen {...this.props} name="AddGuest" component={AddGuest} />
      </Stack.Navigator>
    );
  }
}
export default GuestsNavigator;
