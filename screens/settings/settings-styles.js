import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  searchBarContainer: {
    margin: 20,
    height: 60,
    borderRadius: 10,
  },
  containerStyle: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  yearContainerStyle: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  selectedTextStyle: {
    backgroundColor: '#EE6080',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  unSelectedTextStyle: {
    backgroundColor: '#FAE0E6',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  appHeader: {
    backgroundColor: '#fff',
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  gowed: {
    fontFamily: 'Bigdey',
    color: '#ffffff',
    fontSize: 40,
    height: 150,
    marginTop: 40,
  },
  guestsListHeader: {
    padding: 10,
    backgroundColor: '#FAE0E6',
  },
  guestsListHeaderLabel: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  guestsListItemLabel: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#f2f2f2',
  },
  // theme: {
  //   colors: {
  //     primary: '#EE6080',
  //     underlineColor: 'transparent',
  //   },
  // },
  textInput: {
    backgroundColor: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    borderColor: '#EE6080',
    borderRadius: 10,
  },
});
