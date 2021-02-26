import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

// import { Image } from "react-native-elements";

import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../../../src/constants';

class EcoCard extends Component {
  state = {};

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <LinearGradient
          colors={[COLORS.CARD_BG, '#2F2F2F', COLORS.CARD_BG]}
          style={styles.cardContainer}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Image
                style={{width: 30, height: 30, marginTop: 10}}
                source={require('../../../assets/images/db_logo.png')}
              />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              {/* <Image style={{ width: 60, height: 43  }} source={require('../../../images/chip.png')} /> */}

              <Text style={styles.balance_amt}>{'\u20B9 1,100'}</Text>
            </View>

            <Text style={styles.credit_card_number}>
              {'4375 **** **** 9721'}
            </Text>

            <Text style={styles.credit_card_name}>{'NIDHI PRIYA'}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,

    height: 210,

    borderWidth: 1,

    borderColor: COLORS.CARD_BG,

    marginHorizontal: 20,

    marginVertical: 20,

    padding: 15,
  },

  buttonText: {
    fontSize: 18,

    fontFamily: 'Gill Sans',

    textAlign: 'center',

    margin: 10,

    color: '#ffffff',

    backgroundColor: 'transparent',
  },

  card: {
    backgroundColor: 'transparent',
  },

  credit_card_number: {
    color: 'white',

    marginTop: 20,

    fontSize: 20,

    letterSpacing: 5,
  },

  credit_card_name: {
    color: 'white',

    marginTop: 10,

    fontSize: 18,

    letterSpacing: 5,
  },

  balance_amt: {
    color: 'white',

    marginTop: 20,

    fontSize: 24,

    letterSpacing: 5,
  },
});

export default EcoCard;
