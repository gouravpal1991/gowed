import React, {useContext, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AlphabetList} from '../common/react-native-section-alphabet-list';
import {Avatar, List, Searchbar} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
// import styles from './atm-styles';
import {favtransactions as transaction} from './favtrans.json';

const FavTransactions = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;
  const itemView = ({item}) => {
    const name =
      item.transName +
      ' - ' +
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(item.amount);
    return (
      <List.Item
        style={{
          backgroundColor: theme.favTransBg,
          marginVertical: 5,
          borderRadius: 20,
        }}
        title={name}
        titleStyle={{color: theme.text, fontSize: 14, fontWeight: 'bold'}}
        description={item.description}
        descriptionStyle={{color: theme.text, fontSize: 12}}
        left={(props) => <List.Icon icon={item.icon} color={theme.text} />}
        right={() => {
          return <Text style={{color: theme.button}}>{'Pay Now'}</Text>;
        }}
      />
    );
  };

  return (
    <View style={{flexDirection: 'column', flex: 1, padding: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: theme.text}}>
        Favourite Transactions
      </Text>
      <FlatList
        data={transaction}
        renderItem={itemView}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        //   ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

export default FavTransactions;
