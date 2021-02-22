/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, TextInput, Text, Dimensions} from 'react-native';
import {Button, Appbar, Menu, Divider, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './transfer.styles';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';

function Transfer(props) {
  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [value, onChangeText] = React.useState('');
  const [fromAccount, onFromAccountText] = React.useState('');
  const [showFromAccount, setShowFromAccount] = React.useState(false);

  const openMenu = () => setShowFromAccount(true);

  const closeMenu = () => setShowFromAccount(false);

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
  };

  const textStyle = {
    backgroundColor: theme.bg,
    color: theme.text,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
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
        <Text style={textStyle}>From Account</Text>
        <TextInput
          accessibilityLabel="Select Account to transfer amount from"
          // accessibilityHint=""
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          editable
          maxLength={40}
          style={inputStyle}
        />

        <Text style={textStyle}>To Account</Text>
        <TextInput
          accessibilityLabel="Select Beneficiary Account"
          accessibilityHint="Beneficiary account"
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          editable
          maxLength={40}
          style={inputStyle}
        />
        <Text style={textStyle}>Amount</Text>
        <TextInput
          accessibilityLabel="Amount to transfer"
          accessibilityHint="Amount you want to transfer to beneficiary"
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          editable
          maxLength={40}
          keyboardType="numeric"
          style={inputStyle}
        />
        <Text style={textStyle}>Remarks(Optional)</Text>
        <TextInput
          accessibilityLabel="Remarks"
          accessibilityHint="Add purpose of transfer"
          multiline={false}
          numberOfLines={1}
          onChangeText={(text) => onChangeText(text)}
          value={value}
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
          onPress={() => console.log('Pressed')}
          style={{marginTop: 20}}>
          Transfer
        </Button>
      </ScrollView>
    </View>
  );
}

export default Transfer;
