
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  image: {
    flex: 1,
    resizeMode:"contain",
    justifyContent: "center"
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
    height: 60,
    elevation: 10,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EE6080',
    // padding:20,
    paddingBottom:200
  },
  gowed: {
    // fontFamily: 'Bigdey',
    // color: '#ffffff',
    fontSize: 30,
    // height: 150,
    // marginTop: 40,
  },
  assetLabel: {
    fontSize: 20,
    // height: 150,
    // marginTop: 20,
  },
});
