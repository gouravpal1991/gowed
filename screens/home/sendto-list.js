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
import {Avatar, List, Searchbar} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
// import styles from './atm-styles';
import {beneficiaries} from './beneficiary.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../src/contexts/usercontext';

const SendToList = () => {
  const {isLightTheme, light, dark, messages} = useContext(ThemeContext);
  const {showQuickModal, setToTransferUser} = useContext(UserContext);

  const theme = isLightTheme ? light : dark;

  const onItemPress = (item) => {
    setToTransferUser(item);
    showQuickModal();
  };

  const itemView = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <View
          style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Avatar.Image size={50} source={{uri: item.image}} />
          <Text style={{fontSize: 12, color: theme.text}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection: 'column', flex: 1, padding: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: theme.text}}>
        {messages.Send_to}
      </Text>
      <FlatList
        data={beneficiaries}
        renderItem={itemView}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        //   ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

export default SendToList;
