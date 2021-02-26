/* eslint-disable react-native/no-inline-styles */
import 'intl';
import 'intl/locale-data/jsonp/en';
import React, {useContext, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button, Appbar, Modal, Avatar, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './transfer.styles';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';
import {UserContext} from '../../src/contexts/usercontext';

function Quicktransfer(props) {
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
  const {
    balance,
    setAvailableBalance,
    showSuccessModal,
    hideSuccessModal,
    messages
  } = useContext(UserContext);
  const theme = isLightTheme ? light : dark;
  const {quickTransferVisible, hideQuickModal, toUser} = useContext(
    UserContext,
  );
  const [fromAccount, setFromAccount] = useState('savings-4002340032891');
  const [amount, onAmountChange] = React.useState('');
  const transferAmount = () => {
    const availableBalance = balance - amount;
    setAvailableBalance(availableBalance);

    setFromAccount('savings-4002340032891');
    onAmountChange('');
    hideQuickModal();
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
    // borderBottomWidth: 1,
    padding: 10,
    fontSize: 30,
    height: 70,
    // marginTop: 20,
    // width: 200,
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
    width: 300,
  };

  const containerStyle = {
    backgroundColor: theme.bg,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  };

  return (
    <Modal
      visible={quickTransferVisible}
      // onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <Appbar.Action
        icon="close"
        color={theme.text}
        onPress={() => {
          onAmountChange('');
          hideQuickModal();
        }}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Avatar.Image size={70} source={{uri: toUser.image}} />
        <Text
          style={{
            color: theme.text,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {toUser.name}
        </Text>

        <Text style={{color: theme.text, fontSize: 16}}>
          {'Account Number: ' + toUser.accNo}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{textAlign: 'left', fontSize: 30, color: theme.text}}>
            {'\u20B9'}
          </Text>
          <TextInput
            accessibilityLabel="Amount to transfer"
            accessibilityHint="Amount you want to transfer to beneficiary"
            placeholder={'0'}
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
            textAlign={'left'}
            autoFocus={true}
          />
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{paddingVertical: 10, color: theme.text}}>
          {messages.Choose_account}
        </Text>
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
        <View style={{flexDirection: 'row'}}>
          <Button
            accessible={true}
            accessibilityLabel="Transfer Amount"
            accessibilityHint="Transfer amount to beneficiary account"
            theme={buttonTheme}
            mode="contained"
            onPress={() => transferAmount()}
            style={{marginTop: 50}}>
            {messages.Pay}
          </Button>
          <Button
            accessible={true}
            accessibilityLabel="Transfer Amount"
            accessibilityHint="Transfer amount to beneficiary account"
            theme={buttonTheme}
            mode="contained"
            onPress={() => transferAmount()}
            style={{marginTop: 50, marginLeft: 50}}>
            {messages.Request}
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default Quicktransfer;
