import React, {useState, useContext} from 'react';
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
import {List, Appbar, Switch} from 'react-native-paper';
import {SCREENS} from '../../src/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import {UserContext} from '../../src/contexts/usercontext';
// import styles from './settings-styles';

const Settings = (props) => {
  const {
    isLightTheme,
    light,
    dark,
    toggleTheme,
    handleFontSize,
    isFontLarge,
    setNavigationProps,
    navigationProps,
    toggleAccessbility,
    isAccessibilityOn,
  } = useContext(ThemeContext);

  const {
    isVoiceEnabled,
    enableVoiceAssistant,
    disableVoiceAssistant,
  } = useContext(UserContext);

  const theme = isLightTheme ? light : dark;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const switchTheme = {
    colors: {
      primary: theme.button,
      underlineColor: 'transparent',
    },
    dark: !isLightTheme,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   marginTop: StatusBar.currentHeight || 0,
      backgroundColor: theme.bg,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  const Item = ({item}) => (
    <List.Item
      onPress={
        item.type === 'press' ? () => props.navigation.push(item.screen) : null
      }
      title={item.title}
      titleStyle={[
        {
          fontSize: theme.labelFont,
          color: theme.text,
        },
      ]}
      description={item.description}
      descriptionStyle={[
        {
          color: theme.text,
        },
      ]}
      left={(props) => (
        <Icon name={item.icon} size={theme.iconSize} color={theme.text} />
      )}
      right={(props) => {
        if (item.type === 'switch') {
          return (
            <Switch
              theme={switchTheme}
              value={isVoiceEnabled}
              onValueChange={() => {
                toggleAccessbility();
                if (isVoiceEnabled) {
                  disableVoiceAssistant();
                } else {
                  enableVoiceAssistant();
                }
              }}
            />
          );
        }
      }}
    />
  );
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: '#EDEDED',
          alignSelf: 'flex-end',
        }}
      />
    );
  };

  const windowHeight = Dimensions.get('window').height;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Nearby ATM',
      description: 'Find nearby ATMs',
      icon: 'atm',
      screen: SCREENS.ATM,
      type: 'press',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Circle of Trust',
      description: 'People whom you trust',
      icon: 'mood',
      screen: SCREENS.ATM,
      type: 'press',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Accessibility Settings',
      description: 'Enable or disable Accessibility featrues',
      icon: 'accessibility',
      screen: SCREENS.ATM,
      type: 'switch',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={[styles.appHeader, {backgroundColor: theme.text}]}>
        <Appbar.Action icon="menu" color={theme.bg} />
        <Appbar.Content title="Settings" color={theme.bg} />
        <Appbar.Action
          icon={isLightTheme ? 'weather-sunny' : 'brightness-2'}
          color={theme.themeToggleColor}
          onPress={toggleTheme}
          size={32}
        />
      </Appbar.Header>
      <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </SafeAreaView>
  );
};

export default Settings;
