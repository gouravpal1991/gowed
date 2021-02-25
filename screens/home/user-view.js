import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {AlphabetList} from '../common/react-native-section-alphabet-list';
import {Avatar, Appbar, IconButton} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
// import styles from './atm-styles';
import {beneficiaries} from './beneficiary.json';

const UserView = () => {
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return (
    <View
      style={{
        flexDirection: 'row',
        // flex: 1,
        padding: 10,
        backgroundColor: theme.bg,
        alignItems: 'center',
      }}>
      <Avatar.Image
        size={40}
        source={{
          uri: 'https://storage.googleapis.com/cricketimages/Players/P5.png',
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 15,
        }}>
        <Text style={{color: theme.text, fontWeight: 'bold', fontSize: 14}}>
          Nidhi Priya
        </Text>
        <Text style={{color: theme.text, fontSize: 12}}>
          {'Last Login:' + new Date().toLocaleString()}
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
        <IconButton
          icon={isLightTheme ? 'weather-sunny' : 'brightness-2'}
          color={theme.themeToggleColor}
          size={24}
          onPress={toggleTheme}
        />
        <IconButton
          icon="bell"
          color={'#606060'}
          size={24}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default UserView;
