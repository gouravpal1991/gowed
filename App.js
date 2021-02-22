import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useContext, useEffect} from 'react';


//screens
import Login from './screens/login';
import AppNavigation from './screens/navigation/app-navigation';
import UserContextProvider, {UserContext} from './src/contexts/usercontext';
import ThemeContextProvider from './src/contexts/ThemeContext';

const Stack = createStackNavigator();

const App = () => {
  const MyStack = () => {
    const {user, readUserData} = useContext(UserContext);
    useEffect(() => {
      readUserData();
    });
    return (
      <Stack.Navigator
        initialRouteName={user ? 'Dashboard' : 'Login'}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3740FE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Login" component={Login} options={null} />

        <Stack.Screen
          name="Dashboard"
          component={AppNavigation}
          // options={({title: 'Dashboard'}, {headerLeft: null})}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <UserContextProvider>
          <MyStack />
        </UserContextProvider>
      </ThemeContextProvider>
    </NavigationContainer>
  );
};

export default App;
