import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TransactionListItem from './transaction-list-item';
import EcoCard from './eco-card';

class Transactions extends Component {
  state = {};

  renderItem = ({item}) => <TransactionListItem item={item} />;
  render() {
    const list = [
      {
        Retail_Service_Cat_Name: 'Fund Transfer',
        Retail_Service_Name: 'Outside Deutsche Bank Transfer',
        Service_Classification_Name: 'BHIM UPI',
        Retail_Sub_Service_Classification_Name: 'Transfer to VPA',
        Carbon_Emission: '0.2',
        Tran_Date: '05-Aug-2019',
        Tran_Time: '10:46',
      },
      {
        Retail_Service_Cat_Name: 'Fund Transfer',
        Retail_Service_Name: 'Fund Transfer to own account',
        Service_Classification_Name: '',
        Retail_Sub_Service_Classification_Name: '',
        Carbon_Emission: '0.1',
        Tran_Date: '05-Aug-2019',
        Tran_Time: '10:49',
      },
      {
        Retail_Service_Cat_Name: 'Services',
        Retail_Service_Name: 'Savings Account',
        Service_Classification_Name: '',
        Retail_Sub_Service_Classification_Name: '',
        Carbon_Emission: '10',
        Tran_Date: '09-Aug-2019',
        Tran_Time: '08:49',
      },
      {
        Retail_Service_Cat_Name: 'Tax Payment',
        Retail_Service_Name: 'View TDS Details',
        Service_Classification_Name: '',
        Retail_Sub_Service_Classification_Name: '',
        Carbon_Emission: '5',
        Tran_Date: '10-Aug-2019',
        Tran_Time: '07:40',
      },
    ];

    return (
      <View>
        <EcoCard />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Transactions;
