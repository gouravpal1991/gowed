import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card, Button, TextInput} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import styles from './wedding.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WEDDING} from '../../src/tableObjects';
import {getUUID} from '../../assets/utils/helper';

const theme = {
  colors: {
    primary: '#000',
    underlineColor: 'transparent',
  },
};

const buttonTheme = {
  colors: {
    primary: '#EE6080',
    underlineColor: 'transparent',
  },
};
class Wedding extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      budget: 5,
      weddingId: getUUID(),
      bride: '',
      groom: '',
      theme: '',
      location: '',
      date: '',
      currency: '',
      noOfGuests: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gowed}>gowed</Text>
        <Card style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <TextInput
                label="To Be Bride"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
                placeholder={'Bride Name'}
                left={
                  <TextInput.Icon
                    name={() => (
                      <Icon name={'venus'} size={20} color={'#EE6080'} />
                    )}
                    color={'#EE6080'}
                    onPress={() => {}}
                  />
                }
              />

              <TextInput
                label="To Be Groom"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
                placeholder={'Groom Name'}
                left={
                  <TextInput.Icon
                    name={() => (
                      <Icon name={'mars'} size={20} color={'#EE6080'} />
                    )}
                    color={'#EE6080'}
                    onPress={() => {}}
                  />
                }
              />
              <TextInput
                label="Wedding Theme"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
                placeholder={'e.g. Fairy Tales'}
                left={
                  <TextInput.Icon
                    name="slack"
                    color={'#EE6080'}
                    onPress={() => {}}
                  />
                }
              />

              <TextInput
                label="Wedding Location"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
                placeholder={'e.g. Kolkata'}
                left={
                  <TextInput.Icon
                    name="map"
                    color={'#EE6080'}
                    onPress={() => {}}
                  />
                }
              />

              <TextInput
                label="Set Wedding Date"
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                style={styles.textInput}
                theme={theme}
                placeholder={'Select Date'}
                left={
                  <TextInput.Icon
                    name="calendar"
                    color={'#EE6080'}
                    onPress={() => {}}
                  />
                }
              />
              <Text
                style={{
                  padding: 20,
                  fontSize: 20,
                  fontFamily: 'Roboto-Regular',
                }}>
                {'Set Wedding Budget: ' +
                  '\u20B9 ' +
                  this.state.budget +
                  ' Lacs'}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'left', fontSize: 20, flex: 1}}>
                  {'\u20B9' + ' 5 Lacs'}
                </Text>

                <Text style={{textAlign: 'right', fontSize: 20}}>
                  {'\u20B9' + ' 50 Lacs'}
                </Text>
              </View>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={5}
                maximumValue={50}
                onValueChange={(value) => {
                  this.setState({budget: Math.round(value)});
                }}
                onSlidingComplete={(value) => {
                  this.setState({budget: Math.round(value)});
                }}
                minimumTrackTintColor="#EE6080"
                maximumTrackTintColor="#B7B7B7"
              />
              <Button
                style={{margin: 15}}
                mode="contained"
                theme={buttonTheme}
                onPress={() => console.log('Pressed')}>
                Setup my wedding
              </Button>
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}
export default Wedding;
