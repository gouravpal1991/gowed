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
import {List, Searchbar} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import styles from './atm-styles';
import {ATM as listOfAtm} from './atm.json';

const ATMList = () => {
  const {
    isLightTheme,
    light,
    dark,
    toggleTheme,
    handleFontSize,
    isFontLarge,
    setNavigationProps,
    navigationProps,
  } = useContext (ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [searchQuery, setSearchQuery] = useState ('');
  const onChangeSearch = query => setSearchQuery (query);
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      //   marginTop: StatusBar.currentHeight || 0,
      backgroundColor: theme.bg,
      // padding:10
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
    searchBarContainer: {
      margin: 10,
      height: 40,
      borderRadius: 10,
    },
  });

  const ATM_Accessibility_Icons = [
    {
      id: 'braille',
      title: 'Visibility',
      isChecked: true,
      icon: 'Visibility',
    },
    {
      id: 'audio',
      title: '"Hearing',
      isChecked: true,
      icon: '"Hearing',
    },
    {
      id: 'multilanguage',
      title: 'Translate',
      isChecked: false,
      icon: 'Translate',
    },
    {
      id: 'wheelChairRamp',
      title: 'Accessible',
      isChecked: false,
      icon: 'Accessible',
    },
    {
      id: 'metalPathway',
      title: 'Theaters',
      isChecked: false,
      icon: 'Theaters',
    },
  ];

  

  const Item = ({item}) => (
    <List.Item
      // onPress={() => props.navigation.push (item.screen)}
      title={item.Location.BranchName}
      titleStyle={[
        {
          fontSize: theme.labelFont,
          color: theme.text,
        },
      ]}
      description={item.Location.Address}
      descriptionStyle={[
        {
          color: theme.text,
        },
      ]}
      right={props => (
        <List.Icon
          {...props}
          icon={'map'}
          color={theme.text}
          onPress={() => alert (item.Identification)}
        />
      )}
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

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBarContainer}
      />
      <FlatList
        data={listOfAtm}
        renderItem={Item}
        keyExtractor={item => item.Identification}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </SafeAreaView>
  );
};

export default ATMList;