/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, FlatList, Text, Dimensions} from 'react-native';
import {Card, List, Appbar} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
import DoubleTap from '../common/DoubleTap';
import styles from './home-styles';
import {ThemeContext} from '../../src/contexts/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';

function Home(props) {
  const {
    isLightTheme,
    light,
    dark,
    toggleTheme,
    handleFontSize,
    isFontLarge,
  } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Transfer',
      isChecked: true,
      icon: 'bank-transfer',
    },

    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ga',
      title: 'Expenses',
      isChecked: true,
      icon: 'chart-bar',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97h63',
      title: 'More',
      isChecked: false,
      icon: 'dots-horizontal',
    },
  ];

  const chartConfig = {
    // backgroundColor: theme.text,
    // backgroundGradientFrom: theme.bgGradientFrom,
    // backgroundGradientTo: theme.bgGradientTo,
    // backgroundColor: '#000000',
    // backgroundGradientFrom: '#1E2923',
    // backgroundGradientTo: '#08130D',
    // color: theme.chartColor,
    // style: {
    //   borderRadius: 20,
    // },

    backgroundColor: '#26872a',
    backgroundGradientFrom: '#43a047',
    backgroundGradientTo: '#66bb6a',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  };
  const progressChartData = [0.0, 0.0, 0.6];

  const pieChartData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  let width = Dimensions.get('window').width;
  width = width - width * 0.1;
  const height = 250;

  const getToDoListItem = ({item}) => {
    return (
      <Card
        elevation={5}
        style={{
          margin: 15,
          borderRadius: 10,
          height: theme.iconContainer,
          width: theme.iconContainer,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.bg,
        }}>
        <Card.Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={item.icon} size={theme.iconSize} color={theme.text} />
            <Text
              style={{
                textAlign: 'center',
                // marginTop: 10,
                // fontFamily: 'Roboto-Regular',
                color: theme.text,
                fontSize: theme.iconTextFont,
              }}>
              {item.title}
            </Text>
          </View>
        </Card.Content>
      </Card>
    );
  };

  const _handleSearch = () => {
    console.log('clicked!');
  };

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={[styles.appHeader, {backgroundColor: theme.text}]}>
        <Appbar.Action icon="menu" color={theme.bg} />
        <Appbar.Content title="Overview" color={theme.bg} />
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
        <DoubleTap onDoubleTap={handleFontSize}>
          <View>
            <Text style={[{color: theme.text, fontSize: theme.labelFont}]}>
              {'Your assets'}
            </Text>
            <Text style={[styles.gowed, {color: theme.text}]}>
              {' '}
              {'\u20B9' + ' 20,00,000.58'}
            </Text>

            <ProgressChart
              data={progressChartData}
              width={width}
              height={height}
              chartConfig={chartConfig}
              style={graphStyle}
              hideLegend={true}
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              numColumns={3}
              renderItem={getToDoListItem}
              keyExtractor={(item) => item.id}
            />


            

            {/* <List.Item
          title="First Item"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="folder" />}
        /> */}
          </View>
        </DoubleTap>
      </ScrollView>
    </View>
  );
}

export default Home;
