import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  useWindowDimensions,
} from 'react-native';
import {List, Appbar, Checkbox, Card} from 'react-native-paper';
import styles from './schedule-styles';
import HorizontalDatePicker from '../common/react-native-horizontal-date-picker';

const onSelectedDay = (val) => {
  console.log(val);
};

const getToDoListItem = ({item}) => {
  return (
    <List.Item
      title="First Item"
      titleStyle={[
        {
          fontSize: 18,
          fontFamily: 'Roboto-Regular',
        },
        item.isChecked
          ? {
              fontFamily: 'Roboto-Italic',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }
          : null,
      ]}
      right={(props) => (
        <Checkbox
          status={item.isChecked ? 'checked' : 'unchecked'}
          color={'#EE6080'}
          uncheckedColor={'#ffffff'}
          onPress={() => {
            // setChecked(!checked);
          }}
        />
      )}
    />
  );
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#EDEDED',
        alignSelf: 'center',
      }}
    />
  );
};

function Schedule(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [expanded, setExpanded] = React.useState(true);
  const _goBack = () => console.log('Went back');
  const [checked, setChecked] = React.useState(false);
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const handlePress = () => setExpanded(!expanded);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: true,
    },
  ];
  return (
    <View>
      <Appbar.Header style={styles.appHeader}>
        <Appbar.Action icon="menu" onPress={_goBack} />
        <Appbar.Content title="Schedule" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header>
      <HorizontalDatePicker
        yearContainerStyle={styles.yearContainerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        unSelectedTextStyle={styles.unSelectedTextStyle}
        yearTextStyle={{fontSize: 20}}
        pickerType={'date'}
        dayFormat={'D'}
        onDateSelected={onSelectedDay}
        datePickerContainerStyle={{backgroundColor: '#fff'}}
      />
      <Card
        elevation={5}
        style={{
          margin: 15,
          borderRadius: 10,
          maxHeight: windowHeight - windowHeight * 0.4,
        }}>
        <Card.Content>
          <FlatList
            // stickyHeaderIndices={0}
            ItemSeparatorComponent={FlatListItemSeparator}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Text
                  style={{
                    padding: 20,
                    fontFamily: 'Roboto-Bold',
                    fontSize: 20,
                  }}>
                  {'Check List'}
                </Text>
              );
            }}
            data={DATA}
            renderItem={getToDoListItem}
            keyExtractor={(item) => item.id}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

export default Schedule;
