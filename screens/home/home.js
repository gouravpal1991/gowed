/* eslint-disable react-native/no-inline-styles */
import 'intl';
import 'intl/locale-data/jsonp/en';
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
import {UserContext} from '../../src/contexts/usercontext';

import SendToList from './sendto-list';
import OurServices from './our-services';
import UserView from './user-view';
import BalanceCardView from './balance-card-view';
import FavTransactions from './fav-transactions';

function Home({props}) {
  const {
    isLightTheme,
    light,
    dark,
    toggleTheme,
    handleFontSize,
    isFontLarge,
    setNavigationProps,
    navigationProps,
  } = useContext(ThemeContext);

  const {balance} = useContext(UserContext);

  if (!navigationProps) {
    setNavigationProps(props);
  }
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
  const progressChartData = [0.2, 0.5, 0.8];

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
          margin: 5,
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
      <UserView />

      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme.bg,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <DoubleTap onDoubleTap={handleFontSize}>
          <View>
            <BalanceCardView />

            {/* <ProgressChart
              data={progressChartData}
              width={width}
              height={200}
              chartConfig={chartConfig}
              style={graphStyle}
              hideLegend={true}
            /> */}
            <SendToList />

            <OurServices />

            <FavTransactions />

            {/* <FlatList
            // style={{width:'100%', backgroundColor:theme.text}}
              showsVerticalScrollIndicator={false}
              data={DATA}
              numColumns={3}
              renderItem={getToDoListItem}
              keyExtractor={item => item.id}
            /> */}

            {/* <List.Item
          title="First Item"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="folder" />}
        /> */}
            <View style={{paddingBottom: 200}} />
          </View>
        </DoubleTap>
      </ScrollView>
    </View>
  );
}

export default Home;
