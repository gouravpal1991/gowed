/* eslint-disable react-native/no-inline-styles */
import 'intl';
import 'intl/locale-data/jsonp/en';
import React, {useContext, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button, Appbar, Modal, Divider, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './transfer.styles';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';
import {UserContext} from '../../src/contexts/usercontext';

function Transfer(props) {
  const {isLightTheme, light, dark, toggleTheme, messages} = useContext(ThemeContext);
  const {
    balance,
    setAvailableBalance,
    showSuccessModal,
    hideSuccessModal,
  } = useContext(UserContext);
  const theme = isLightTheme ? light : dark;
  const [amount, onAmountChange] = React.useState('0');
  const [remarks, onRemarksChange] = React.useState('');
  const [toAccount, setToAccount] = useState('nidhi');
  const [fromAccount, setFromAccount] = useState('savings-4002340032891');

  const transferAmount = () => {
    const availableBalance = balance - amount;
    setAvailableBalance(availableBalance);
    setToAccount('nidhi');
    setFromAccount('savings-4002340032891');
    onAmountChange(0);
    showSuccessModal();
    setTimeout(hideSuccessModal, 3000);
  };

  const buttonTheme = {
    colors: {
      primary: theme.button,
      underlineColor: 'transparent',
    },
  };

  const inputStyle = {
    backgroundColor: theme.bg,
    color: theme.text,
    borderRadius: 5,
    borderColor: theme.text,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    height: theme.inputHeight,
  };

  const textStyle = {
    backgroundColor: theme.bg,
    color: theme.text,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  };

  const pickerStyle = {
    backgroundColor: theme.bg,
    color: theme.text,
    borderRadius: 5,
    borderColor: theme.text,
    borderWidth: 1,
  };

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={[styles.appHeader, {backgroundColor: theme.text}]}>
        <Appbar.Action icon="menu" color={theme.bg} />
        <Appbar.Content title="Fund Transfer" color={theme.bg} />
        <Appbar.Action
          icon={isLightTheme ? 'weather-sunny' : 'brightness-2'}
          color={theme.themeToggleColor}
          onPress={toggleTheme}
          size={32}
        />
      </Appbar.Header>
      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme.bg,
          },
        ]}>
        <Text style={textStyle}>{messages.FromAccount}</Text>
        <View style={pickerStyle}>
          <Picker
            selectedValue={fromAccount}
            style={{
              // height: 50,
              height: theme.inputHeight,
              width: '100%',
              borderColor: theme.text,
              borderWidth: 1,
            }}
            itemStyle={{color: theme.text}}
            onValueChange={(itemValue, itemIndex) => setFromAccount(itemValue)}>
            <Picker.Item
              color={theme.text}
              label="Savings - 4002340032891"
              value="savings-4002340032891"
            />
            <Picker.Item
              color={theme.text}
              label="Current - 4002340032872"
              value="current-4002340032872"
            />
          </Picker>
        </View>
        <Text
          style={[
            {
              paddingTop: 5,
              color: theme.text,
              fontSize: theme.iconTextFont,
              color: theme.availableBalance,
            },
          ]}>
          {'Available Balance: ' +
            new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(balance)}
        </Text>
        <Text style={textStyle}>{'To Account'}</Text>
        <View style={pickerStyle}>
          <Picker
            selectedValue={toAccount}
            style={{
              // height: 50,
              height: theme.inputHeight,
              width: '100%',
              borderColor: theme.text,
              borderWidth: 1,
            }}
            itemStyle={{color: theme.text}}
            onValueChange={(itemValue, itemIndex) => setToAccount(itemValue)}>
            <Picker.Item color={theme.text} label="Nidhi Priya" value="nidhi" />
            <Picker.Item color={theme.text} label="Veena Joshi" value="vj" />
            <Picker.Item color={theme.text} label="Vikas Gupta" value="vikas" />
            <Picker.Item color={theme.text} label="Suraj Ghode" value="suraj" />
          </Picker>
        </View>

        <Text style={textStyle}>{'Amount (\u20B9)'}</Text>
        <TextInput
          accessibilityLabel="Amount to transfer"
          accessibilityHint="Amount you want to transfer to beneficiary"
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => {
            onAmountChange(text);
          }}
          value={amount}
          editable
          maxLength={40}
          keyboardType="numeric"
          style={inputStyle}
        />
        <Text style={textStyle}>{messages.Remarks}</Text>
        <TextInput
          accessibilityLabel="Remarks"
          accessibilityHint="Add purpose of transfer"
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => onRemarksChange(text)}
          value={remarks}
          editable
          maxLength={40}
          style={inputStyle}
        />

        <Button
          accessible={true}
          accessibilityLabel="Transfer Amount"
          accessibilityHint="Transfer amount to beneficiary account"
          theme={buttonTheme}
          mode="contained"
          onPress={() => transferAmount()}
          style={{marginTop: 20}}>
          {messages.Transfer}
        </Button>
      </ScrollView>
    </View>
  );
}

export default Transfer;
