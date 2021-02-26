import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Divider} from 'react-native-paper';
import {COLORS} from '../../src/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-paper';
class TransactionListItem extends Component {
  state = {};

  getStatus = (carbonEmission) => {
    let img = null;
    if (carbonEmission <= 2) {
      return require('../../assets/images/leaf_green.png');
    }

    if (carbonEmission > 2 && carbonEmission <= 5) {
      return require('../../assets/images/leaf_amber.png');
    }

    if (carbonEmission > 5) {
      return require('../../assets/images/leaf_red.png');
    }
  };

  render() {
    const {item} = this.props;
    const img = this.getStatus(item.Carbon_Emission);
    return (
      <View>
        <View style={styles.listItemContainer}>
          {/* left view */}
          <View style={styles.avatar}>
            <Avatar.Icon size={32} icon={item.icon} color={'white'} style={{backgroundColor:item.color}} />
          </View>

          {/* title and sub title */}
          <View style={styles.detailsContainer}>
            <Text style={styles.date}>{item.Tran_Date}</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>{item.Retail_Service_Name}</Text>

              <Image
                source={img} // TODO::dynamic image
                style={{marginLeft: 15, width: 15, height: 15}}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              {item.Service_Classification_Name.trim() !== '' && (
                <Text style={styles.subTitle}>
                  {item.Service_Classification_Name}
                </Text>
              )}
              {item.Retail_Sub_Service_Classification_Name.trim() !== '' && (
                <Text style={styles.subTitle}>
                  {`, ` + item.Retail_Sub_Service_Classification_Name}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.badge}>
            <View style={styles.badgeStyle}>
              <Text style={styles.badgeText}>{item.Carbon_Emission}</Text>
            </View>
          </View>
        </View>
        <Divider style={{backgroundColor: COLORS.PRIMARY_BG}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    marginRight: 10,
  },
  subTitle: {
    fontSize: 12,
  },
  date: {
    fontSize: 12,
    color: COLORS.BADGE_TEXT,
  },
  avatar: {
    // borderRadius: 5,
    // backgroundColor: COLORS.PRIMARY_BG,
    // height: 40,
    // width: 40,
    padding: 5,
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeStyle: {
    borderRadius: 10,

    padding: 5,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BADGE_BG,
  },
  badgeText: {
    color: COLORS.BADGE_TEXT,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default TransactionListItem;
