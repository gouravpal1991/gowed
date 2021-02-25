import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  appHeader: {
    height: 60,
    elevation: 10,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EE6080',
    padding: 20,
  },
  btncontainer: {
    flex: 1,
    padding: 15,
    marginTop: 40,
  },

  /* Here style the text of your button */
  customBtnText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Here style the background of your button */
  customBtnBG: {
    backgroundColor: '#00aff0',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 1,
    alignItems: 'center',
  },

  loginInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    marginTop: 40,
    padding: 5,
  },
  accessiblelayout: {
    margin: 15,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  accessiblebtnlayout: {
    paddingTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
