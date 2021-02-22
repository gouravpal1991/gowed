import React, {useState, Component} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {AlphabetList} from '../common/react-native-section-alphabet-list';
import {List, Button, Appbar, Card, TextInput, Chip} from 'react-native-paper';
import styles from './guests-styles';

const theme = {
  colors: {
    primary: '#EE6080',
    underlineColor: 'transparent',
  },
};
class AddGuest extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {text: ''};
  }

  render() {
    const windowHeight = Dimensions.get('window').height;
    const dataSource = [
      'Volvo',
      'Alpha Sports',
      'Ford',
      'Gräf & Stift',
      'Aston Martin',
      'BMW',
      'Tarrant Automobile',
      'Push',
      'Österreichische Austro-Fiat',
      'Mazda',
      'Rosenbauer',
    ];
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.appHeader}>
          <Appbar.Action icon="menu" />
          <Appbar.Content title="Guests" />
        </Appbar.Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            elevation={5}
            style={{
              margin: 15,
              padding: 10,
              borderRadius: 10,
              height: windowHeight + 40 - windowHeight * 0.3,
            }}>
            <View>
              <TextInput
                label="Guest Name"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
              />
              <TextInput
                label="Address"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
              />
              <TextInput
                label="No. Of Guests"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
              />
              <TextInput
                label="Contact No"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
              />
              <Text
                style={{
                  padding: 10,
                  fontFamily: 'Roboto-Regular',
                  fontSize: 18,
                }}>
                Group
              </Text>
              <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {dataSource.map((tag) => {
                  return (
                    <Chip
                      style={{margin: 3}}
                      icon="information"
                      onPress={() => console.log('Pressed')}
                      mode="flat">
                      {tag}
                    </Chip>
                  );
                })}
              </View>
              <Button
                style={{margin: 15}}
                mode="contained"
                theme={theme}
                onPress={() => console.log('Pressed')}>
                Add Guest
              </Button>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default AddGuest;
