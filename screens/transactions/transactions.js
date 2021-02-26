import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import TransactionListItem from './transaction-list-item';
import EcoCard from './eco-card';
import UserView from '../home/user-view';
import {ThemeContext} from '../../src/contexts/ThemeContext';

const Transactions = () => {
  const {isLightTheme, dark, light} = useContext(ThemeContext);

  const theme = isLightTheme ? dark : light;

  const renderItem = ({item}) => <TransactionListItem item={item} />;

  const list = [
    {
      Retail_Service_Cat_Name: 'Fund Transfer',
      Retail_Service_Name: 'McDonalds',
      Service_Classification_Name: 'BHIM UPI',
      Retail_Sub_Service_Classification_Name: 'Transfer to VPA',
      Carbon_Emission: '\u20B9  1,100',
      Tran_Date: '05-Aug-2019',
      Tran_Time: '10:46',
      icon: 'food',
      color: '#F96782',
    },
    {
      Retail_Service_Cat_Name: 'Fund Transfer',
      Retail_Service_Name: 'Wallmart',
      Service_Classification_Name: '',
      Retail_Sub_Service_Classification_Name: '',
      Carbon_Emission: '\u20B9  3,180',
      Tran_Date: '05-Aug-2019',
      Tran_Time: '10:49',
      icon: 'shopping',
      color: '#24C5BB',
    },
    {
      Retail_Service_Cat_Name: 'Services',
      Retail_Service_Name: 'ATM Cash Withdrawn',
      Service_Classification_Name: '',
      Retail_Sub_Service_Classification_Name: '',
      Carbon_Emission: '\u20B9  5,000',
      Tran_Date: '09-Aug-2019',
      Tran_Time: '08:49',
      icon: 'atm',
      color: '#50649C',
    },
    {
      Retail_Service_Cat_Name: 'Fund Transfer',
      Retail_Service_Name: 'Marks & Spencer',
      Service_Classification_Name: 'BHIM UPI',
      Retail_Sub_Service_Classification_Name: '',
      Carbon_Emission: '\u20B9  9,500',
      Tran_Date: '10-Aug-2019',
      Tran_Time: '07:40',
      icon: 'tshirt-crew',
      color: '#CF8407',
    },
  ];

  return (
    <View>
      <Appbar.Header style={[{backgroundColor: theme.text}]}>
        <Appbar.Action icon="menu" color={theme.bg} />
        <Appbar.Content title="Transactions" color={theme.bg} />
      </Appbar.Header>
      <FlatList
        style={{paddingBottom: 200}}
        ListHeaderComponent={<EcoCard />}
        // keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Transactions;
