import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  appHeader: {
    height: 60,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EE6080',
    padding: 20,
    
  },
  btncontainer: {
    padding: 15,
    marginTop: 16,
    marginLeft:70,
    marginRight:70
    
  },

  /* Here style the text of your button */
  customBtnText: {
    fontWeight: '200',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: "bold"
  },

  /* Here style the background of your button */
  customBtnBG: {
    backgroundColor: '#00aff0',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  loginInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    padding: 5,
    borderRadius: 5,
  },
  accessiblelayout: {
    margin: 15,
    paddingLeft: 60,
    paddingRight: 60,
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
