/* eslint-disable no-catch-shadow */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, Image} from 'react-native';
import {Avatar, Button, IconButton} from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {WEB_CLIENT_ID, STORAGE_KEY} from '../../assets/utils/keys';
import {TABLE_NAMES} from '../../src/constants';

//importing database
import {db} from '../../assets/utils/db';

const theme = {
  colors: {
    primary: '#fff',
    underlineColor: 'transparent',
  },
};

function Login({props}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  // const [age, setAge] = useState('');

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }
  useEffect(() => {
    configureGoogleSign();
    // readUserData();
  }, []);

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      //const userInfo = await GoogleSignin.signIn();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
      setError(null);
      await getCurrentUserInfo();

      setIsLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        Alert.alert('Play services are not available');
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        setError(error);
      }
    }
  }

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString());
    }
  }

  async function getCurrentUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      if (saveUserInDb(userInfo)) {
        setUserInfo(userInfo);
        await saveUserData(userInfo);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        Alert.alert('Please Sign in');
        setIsLoggedIn(false);
      } else {
        Alert.alert('Something else went wrong... ', error.toString());
        setIsLoggedIn(false);
      }
    }
  }

  const readUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem(STORAGE_KEY);

      if (userData !== null) {
        setUserInfo(JSON.parse(userData));
        setIsLoggedIn(true);
        props.navigation.replace('Dashboard');
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  const saveUserData = async (userInfo) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  //function to store user details in firebase database
  const saveUserInDb = (userDetails) => {
    try {
      const userInfo = userDetails.user;
      const user = {
        id: userInfo.id,
        email: userInfo.email,
        givenName: userInfo.givenName,
        familyName: userInfo.familyName,
        photo: userInfo.photo,
        phoneNumber: '',
        dob: '',
        addresss: '',
        marriageId: '',
      };

      db.ref(TABLE_NAMES.USERS).push(user);
      props.navigation.replace('Dashboard');
      return true;
    } catch (ex) {
      alert('Please try again later!');
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gowed}>gowed</Text>
      <Button
        icon={'google-plus'}
        style={{
          margin: 15,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
        mode="contained"
        theme={theme}
        onPress={() => signIn()}>
        Sign in with Google
      </Button>
      {/* <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      /> */}
      {isLoggedIn === false ? (
        <Text style={styles.message}>You must sign in!</Text>
      ) : (
        <View>
          {/* <Text style={styles.displayTitle}>Welcome {userInfo.user.name}</Text>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: userInfo && userInfo.user && userInfo.user.photo,
              }}
            />
          </View> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE6080',
  },
  gowed: {
    fontFamily: 'Bigdey',
    color: '#ffffff',
    fontSize: 80,
    height: 150,
    // marginVertical: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default Login;
