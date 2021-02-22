import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {List, Appbar, Checkbox, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDown from 'react-native-paper-dropdown';
import styles from './add-budget-styles';
import {Provider, TextInput} from 'react-native-paper';

const onSelectedDay = (val) => {
  console.log(val);
};

const getToDoListItem = ({item}) => {
  return (
    <Card
      elevation={5}
      style={{
        margin: 15,
        borderRadius: 10,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card.Content>
        <View style={{justifyContent: 'center'}}>
          <Icon name={item.icon} size={60} color={'#EE6080'} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Roboto-Regular',
              fontSize: 18,
            }}>
            {item.title}
          </Text>
        </View>
      </Card.Content>
    </Card>
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

function AddBudget(props) {
  const windowHeight = useWindowDimensions().height;
  const [expanded, setExpanded] = React.useState(true);
  const _goBack = () => console.log('Went back');
  const [checked, setChecked] = React.useState(false);
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const handlePress = () => setExpanded(!expanded);

  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();

  const genderList = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Others', value: 'others'},
  ];

  return (
    <View>
      <Appbar.Header style={styles.appHeader}>
        <Appbar.Action icon="menu" onPress={_goBack} />
        <Appbar.Content title="Budget" />
        <Appbar.Action icon="add" onPress={_handleSearch} />
      </Appbar.Header>
      {/* <Provider>
        <SafeAreaView style={styles.containerStyle}>
          <DropDown
            label={'Gender'}
            mode={'outlined'}
            value={gender}
            setValue={setGender}
            list={genderList}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={'menu-down'} />,
            }}
          />
        </SafeAreaView>
      </Provider> */}
    </View>
  );
}

export default AddBudget;
