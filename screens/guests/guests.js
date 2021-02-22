import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {FAB, Appbar, Searchbar, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './guests-styles';

import GuestsList from './guests-list';
import {SCREENS} from '../../src/constants';

const onSelectedDay = (val) => {
  console.log(val);
};

const getToDoListItem = ({item}) => {
  return (
    <Card
      elevation={5}
      style={{
        margin: 15,
        borderRadius: 10,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card.Content>
        <View style={{justifyContent: 'center'}}>
          <Icon name={item.icon} size={60} color={'#EE6080'} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Roboto-Regular',
              fontSize: 18,
            }}>
            {item.title}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#EDEDED',
        alignSelf: 'center',
      }}
    />
  );
};

const sectionItem = ({item}) => {
  <Text style={{color: '#f00'}}>{item.title}</Text>;
};

const Guests = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const _goBack = () => console.log('Went back');
  const windowHeight = useWindowDimensions().height;
  const _handleSearch = () => console.log('Searching');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appHeader}>
        <Appbar.Action icon="menu" onPress={_goBack} />
        <Appbar.Content title="Guests" />
        <Appbar.Action icon="plus" onPress={_handleSearch} />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBarContainer}
      />

      <Card
        elevation={5}
        style={{
          marginHorizontal: 15,
          borderRadius: 10,
          maxHeight: windowHeight - 50 - windowHeight * 0.3,
        }}>
        <GuestsList />
        <FAB
          style={styles.fab}
          large
          icon="plus"
          color="#EE6080"
          onPress={() => props.navigation.push(SCREENS.ADD_GUEST)}
        />
      </Card>
    </View>
  );
};

export default Guests;
