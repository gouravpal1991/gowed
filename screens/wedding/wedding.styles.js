import {StyleSheet} from 'react-native';
export default StyleSheet.create({
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
    backgroundColor: '#EE6080',
    height: 60,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE6080',
  },
  gowed: {
    fontFamily: 'Bigdey',
    color: '#fff',
    fontSize: 60,
    height: 120,
    marginTop: 50,
  },
  setup: {
    fontFamily: 'Bigdey',
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    padding: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#fff',
    width: '100%',
  },
  textInput: {
    backgroundColor: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    borderColor: '#000',
    borderRadius: 10,
    marginTop:20
  },
});
