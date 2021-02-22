import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {STORAGE_KEY} from '../../assets/utils/keys';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
//   useEffect(() => {
//     readUserData();
//   }, [user]);

  const readUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEY);
      return userData ? setUser(JSON.parse(userData)) : null;
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  return (
    <UserContext.Provider value={{user, readUserData}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
