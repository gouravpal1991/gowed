import React, {useContext, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AlphabetList} from '../common/react-native-section-alphabet-list';
import {Avatar, List, Searchbar} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
// import styles from './atm-styles';
import {services} from './services.json';

const OurServices = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;
  const itemView = ({item}) => {
    return (
      <View
        style={{
          margin: 10,

          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            // margin: 5,
            height: 60,
            width: 60,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: item.bg,
          }}>
          <Icon name={item.icon} size={35} color={item.iconColor} />
        </View>
        <Text style={{fontSize: 12, marginTop: 5, color: theme.text}}>
          {item.service}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flexDirection: 'column', flex: 1, padding: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: theme.text}}>
        Our Services
      </Text>
      <FlatList
        data={services}
        renderItem={itemView}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        //   ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

export default OurServices;
