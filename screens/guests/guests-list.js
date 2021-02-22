import React, {useState, Component} from 'react';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import {AlphabetList} from '../common/react-native-section-alphabet-list';
import {List, FAB} from 'react-native-paper';
import styles from './guests-styles';
class GuestsList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const windowHeight = Dimensions.get('window').height;
    const data = [
      {value: 'Lillie-Mai Allen', key: '1'},
      {value: 'Emmanuel Goldstein', key: '2'},
      {value: 'Winston Smith', key: '3'},
      {value: 'William Blazkowicz', key: '4'},
      {value: 'Gordon Comstock', key: '5'},
      {value: 'Philip Ravelston', key: '6'},
      {value: 'Rosemary Waterlow', key: '7'},
      {value: 'Julia Comstock', key: '8'},
      {value: 'Mihai Maldonado', key: '8'},
      {value: 'Murtaza Molina', key: '10'},
      {value: 'Peter Petigrew', key: '11'},
      {value: 'Lillie-Mai Allen', key: '12'},
      {value: 'Emmanuel Goldstein', key: '13'},
      {value: 'Winston Smith', key: '14'},
      {value: 'William Blazkowicz', key: '15'},
      {value: 'Gordon Comstock', key: '16'},
      {value: 'Philip Ravelston', key: '17'},
      {value: 'Rosemary Waterlow', key: '18'},
      {value: 'Alex', key: '19'},
      {value: 'Bob', key: '20'},
      {value: 'Cathie', key: '21'},
      {value: 'Dr. Strange', key: '22'},
    ];
    return (
      <AlphabetList
        uncategorizedAtTop
      
        data={data}
        indexLetterColor={'#EE6080'}
        renderCustomItem={(item) => (
          <List.Item
            title="First Item"
            description="Item description"
            right={(props) => (
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight>
                  <List.Icon {...props} icon="phone" />
                </TouchableHighlight>
                <List.Icon {...props} icon="delete" />
              </View>
            )}
          />
        )}
        renderCustomSectionHeader={(section) => (
          <View style={styles.guestsListHeader}>
            <Text style={styles.guestsListHeaderLabel}>{section.title}</Text>
          </View>
        )}
      />
    );
  }
}

export default GuestsList;
