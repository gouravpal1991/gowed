import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { VerticalBarChart } from 'chart-react-native'
 
export default class App extends Component {
  render() {
    const data = [
      {
        label: 'Daily services',
        length: 2500,
      },
      {
        label: 'Food',
        length: 7000,
      },
      {
        label: 'Shopping',
        length: 12000,
      },
      {
        label: 'Travel',
        length: 3000,
      },
      {
        label: 'Finance',
        length: 50,
      }
    ]
    return (
      <View style={styles.container}>
        <Text>Your spent the most on Shopping this month</Text>
        <VerticalBarChart data={data} style={{ width: 200, height: 300, backgroundColor: '#eeeeee', borderBottomWidth: 1, borderColor: "#bdbdbd" }} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
})