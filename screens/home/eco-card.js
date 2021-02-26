import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../src/constants';

class EcoCard extends Component {
  state = {};

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <LinearGradient
          colors={[COLORS.CARD_BG, '#2F2F2F', COLORS.CARD_BG]}
          style={styles.cardContainer}>
          {this.props.children}
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
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default EcoCard;
