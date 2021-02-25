/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, Image} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import {ThemeContext} from '../../src/contexts/ThemeContext';

//importing screens
import Home from '../home';
import Schedule from '../schedule';
import AddBudget from '../budget/add-budget';
import Guests from '../guests';
import Transfer from '../transfer/transfer';
import Settings from '../settings';

const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  ${'' /* justify-content: center;
  align-items: center; */}
  background-color: #f2f2f2;
`;

const Logo = () => (
  <Image
    source={require('../../assets/images/logo.png')}
    resizeMode={'cover'}
    style={{width: 150, height: 150}}
  />
);

const TabBarIcon = (props) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.focused ? theme.text : theme.ui}
    />
  );
};

const HomeScreen = (props) => (
  <Screen>
    <Home props={props} />
  </Screen>
);

const Discover = (props) => (
  <Screen>
    <Transfer />
    {/* <Schedule /> */}
  </Screen>
  // <Screen>
  //   <Logo />
  //   <Text>Discover</Text>
  //   <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
  //     <Text>Go to Home</Text>
  //   </TouchableOpacity>
  // </Screen>
);

const Images = () => (
  <Screen>
    <AddBudget />
  </Screen>
);

const Profile = () => (
  <Screen>
    <Logo />
    <Text>Profile</Text>
  </Screen>
);

const AppNavigation = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: theme.bg,
        activeTintColor: theme.text,
        inactiveTintColor: theme.bg,
      }}
      appearence={{
        floating: true,
        tabBarBackground: theme.text,
      }}>
      <Tabs.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="home-account"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Fund Transfer"
        component={Transfer}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="bank-transfer"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Tx. Summary"
        component={Images}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="chart-bar" />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="dots-horizontal"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigation;
