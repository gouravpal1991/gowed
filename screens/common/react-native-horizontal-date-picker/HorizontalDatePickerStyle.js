import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  yearTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#00bfa5',
    marginHorizontal: 5,
  },
  yearTextStyle: {
    fontSize: 15,
    color: 'black',
  },
  datePickerContainer: {
    height: 80,
    marginHorizontal: 5,
    backgroundColor: '#1de9b6',
  },
  timePickerContainer: {
    height: 60,
    marginHorizontal: 5,
    backgroundColor: '#1de9b6',
    marginTop: 10,
  },
  flatListStyle: {
    marginHorizontal: 10,
  },
  itemViewStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  textSelected: {
    fontSize: 15,
    color: '#f44336',
  },
  textUnSelected: {
    fontSize: 15,
    color: '#4A4A4A',
  },
});

export default styles;
