import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {AlphabetList} from '../common/react-native-section-alphabet-list/dist';
import {Title, Paragraph, Button, Card} from 'react-native-paper';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import styles from './home-styles';
import {beneficiaries} from './beneficiary.json';
import {UserContext} from '../../src/contexts/usercontext';


const BalanceCardView = () => {
  const {isLightTheme, light, dark, messages} = useContext(ThemeContext);
  const {balance} = useContext(UserContext);

  const theme = isLightTheme ? light : dark;

  return (
    <View style={{borderRadius: 120}}>
      <ImageBackground
        // source={require ('../../assets/images/cardbg.png')}
        style={{
          flexDirection: 'column',
          // flex: 1,
          padding: 10,
          // backgroundColor: theme.bg,
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 20,
          // backgroundColor: '#1CD2BC',
          height: 200,
          borderRadius: 20,
        }}>
        {/* <Card
        elevation={5}
        style={{
          flex: 1,
          marginHorizontal: 20,
          backgroundColor: '#1CD2BC',
          height: 200,
        }}
      > */}

        <Card.Content>
          <Paragraph style={[{color: theme.text}]}>{messages.Balance}</Paragraph>
          <Title style={[{color: theme.text}]}>
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(balance)}
          </Title>
        </Card.Content>

        <Card.Content style={{flexDirection: 'column'}}>
          <Paragraph style={[{color: theme.text}]}>{messages.Account_Number}</Paragraph>
          <Title style={[{color: theme.text}]}>400039098767</Title>
        </Card.Content>
      </ImageBackground>
    </View>
  );
};

export default BalanceCardView;
