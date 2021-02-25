import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {STORAGE_KEY} from '../../assets/utils/keys';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [balance, setbalance] = useState('300000.58');
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [quickTransferVisible, setQuickTransferVisible] = useState(false);
  const [toUser, setToUser] = useState({});

  const [isVoiceEnabled, setVoiceEnabled] = useState(true);

  //   useEffect(() => {
  //     readUserData();
  //   }, [user]);

  const enableVoiceAssistant = () => {
    setVoiceEnabled(true);
  };

  const disableVoiceAssistant = () => {
    setVoiceEnabled(false);
  };

  const setAvailableBalance = (balance) => {
    setbalance(balance);
  };

  const showSuccessModal = () => setSuccessVisible(true);
  const hideSuccessModal = () => setSuccessVisible(false);

  const showQuickModal = () => setQuickTransferVisible(true);
  const hideQuickModal = () => setQuickTransferVisible(false);

  const setToTransferUser = (user) => setToUser(user);

  const readUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEY);
      return userData ? setUser(JSON.parse(userData)) : null;
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        readUserData,
        balance,
        setbalance,
        setAvailableBalance,
        showSuccessModal,
        hideSuccessModal,
        successVisible,
        showQuickModal,
        hideQuickModal,
        quickTransferVisible,
        setToTransferUser,
        toUser,
        isVoiceEnabled,
        enableVoiceAssistant,
        disableVoiceAssistant,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
