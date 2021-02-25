
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {FAB, Appbar, Searchbar, ToggleButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './atm-styles';
import {SCREENS} from '../../src/constants';


import ATMList from './atm-list';
import ATMMap from './atm-map';

const ATM = props => {
  const [searchQuery, setSearchQuery] = useState ('');
  const [isLoading, setIsLoading] = useState ('');
  const _goBack = () => console.log ('Went back');
  const windowHeight = useWindowDimensions ().height;
  const _handleSearch = () => console.log ('Searching');
  const onChangeSearch = query => setSearchQuery (query);
  const [value, setValue] = useState ('list');
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appHeader}>
        <Appbar.BackAction
          accessibilityLabel="Go back to settings screen"
          onPress={() => props.navigation.goBack()}
        />
        <Appbar.Content title="ATM" />
        <Appbar.Action icon="plus" onPress={_handleSearch} />
      </Appbar.Header>
      <ToggleButton.Row onValueChange={value => setValue (value)} value={value}>
        <ToggleButton
          accessibilityLabel="List of ATM"
          icon="format-align-left"
          value="list"
          style={{flex: 1}}
        />
        <ToggleButton
          accessibilityLabel="display atm on map"
          icon="map"
          value="map"
          style={{flex: 1}}
        />
      </ToggleButton.Row>

      {/* <Card
        elevation={5}
        style={{
          marginHorizontal: 15,
          borderRadius: 10,
          maxHeight: windowHeight - 50 - windowHeight * 0.3,
        }}
      > */}
      {value === 'list' ? <ATMList /> : <ATMMap />}
      {/* </Card> */}
    </View>
  );
};

export default ATM;