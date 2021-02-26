import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useContext, useEffect, useState, useCallback} from 'react';

import {View, Text, NativeModules} from 'react-native';
import {Modal} from 'react-native-paper';
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
// import {initializeVoice} from './Voice';
import Icon from 'react-native-vector-icons/MaterialIcons';
//screens
import Login from './screens/login';
import Pincode from './screens/pincode';
import AppNavigation from './screens/navigation/app-navigation';
import UserContextProvider, {UserContext} from './src/contexts/usercontext';
import ThemeContextProvider, {ThemeContext} from './src/contexts/ThemeContext';
import {navigationRef} from './RootNavigation';
import Quicktransfer from './screens/transfer/quick-transfer';
import {DeviceEventEmitter} from 'react-native';
import CameraContainer from './screens/Camera/cameracontainer';
const Stack = createStackNavigator();

const App = () => {
  const onOfflineRecognitionResult = useCallback((text) => {
    console.log('offline recognition result', text);
    const {OfflineVoiceRecognizerModule} = NativeModules;
    if (
      text !== undefined &&
      text !== '' &&
      text !== ' ' &&
      (text.indexOf('leela') >= 0 ||
        text.indexOf('liela') >= 0 ||
        text.indexOf('leila') >= 0 ||
        text.indexOf('lila') >= 0 ||
        text.indexOf('hi') >= 0 ||
        text.indexOf('hello') >= 0 ||
        text.indexOf('hey') >= 0)
    ) {
      console.log('Going to start online recognizer..');
      OfflineVoiceRecognizerModule.stopOfflineListener();
      Voice.start('en-US'); //Goes to google voice recognition
    }
  }, []);

  const MyStack = () => {
    const {
      user,
      readUserData,
      successVisible,
      isVoiceEnabled,
      balance,
      showQuickModal,
    } = useContext(UserContext);
    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [listener, setListener] = useState(false);

    const onOnlineSpeechResults = (e) => {
      if (e.value && e.value.length > 0) {
        // const {navigationProps} = useContext (ThemeContext);
        console.log('onOnlineSpeechResults result: ', e);
        const {OfflineVoiceRecognizerModule} = NativeModules;
        var timeLag = 1000;
        // Voice.stop ();//switching off online listener
        const balanceResult = e.value.filter((word) =>
          word.includes('balance'),
        );

        if (balanceResult.length > 0) {
          console.log('going to speak balance..');
          Tts.speak('Your account balance is rupees ' + balance);
          timeLag = 3000;
        } else {
          const transferResult = e.value.filter((word) => {
            if (
              word.includes('transfer') ||
              word.includes('send') ||
              word.includes('fund') ||
              word.includes('payment') ||
              word.includes('pay')
            ) {
              return true;
            }
          });

          if (transferResult.length > 0) {
            //navigationProps.navigation.navigate ('Fund Transfer');
            // navigate ('Fund Transfer', null);
            Tts.speak('Navigating to quick pay screen.');
            showQuickModal();
            timeLag = 1000;
          }
          setTimeout(function () {
            console.log('Going to start the offline listener..');
            OfflineVoiceRecognizerModule.startOfflineListener(); //local offline listener
            // Tts.speak('How much amount do you want to transfer?');
            // OfflineVoiceRecognizerModule.stopOfflineListener();
            // Voice.start('en-US');
            // Tts.speak('May I know your MPIN?');
          }, timeLag);
          // else {
          //   Tts.speak ("Sorry I didn't get you!");
          // }
          // OfflineVoiceRecognizerModule.startOfflineListener();
        }
      }
    };

    const containerStyle = {
      backgroundColor: theme.bg,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };

    useEffect(() => {
      const listen = DeviceEventEmitter.addListener(
        'onOfflineRecognitionResult',
        onOfflineRecognitionResult,
      );
      return () => listen.remove();
    }, [onOfflineRecognitionResult]);

    useEffect(() => {
      if (!listener && isVoiceEnabled) {
        console.log('Inside initializeVoice()..');
        Voice.onSpeechResults = onOnlineSpeechResults;
        const {OfflineVoiceRecognizerModule} = NativeModules;
        Tts.speak('Hi, There, my name is Leela!!!! how can i help you today!');
        setTimeout(function () {
          console.log('Going to start the offline listener..');
          OfflineVoiceRecognizerModule.startOfflineListener(); //local offline listener
        }, 4000);
      }
    }, [listener]);

    useEffect(() => {
      readUserData();
      setListener(true);
    });
    return (
      <View style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={ 'Login'}
          screenOptions={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3740FE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Login" component={Login} options={null} />
          <Stack.Screen name="PinCode" component={Pincode} />
          <Stack.Screen name="ScanComponent" component={CameraContainer} />
          <Stack.Screen
            name="Dashboard"
            component={AppNavigation}
            // options={({title: 'Dashboard'}, {headerLeft: null})}
          />
        </Stack.Navigator>
        <Modal
          visible={successVisible}
          // onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Icon name="check-circle-outline" size={100} color={'green'} />
          <Text
            style={{color: theme.text, fontSize: theme.labelFont, padding: 20}}>
            Transfer successful!
          </Text>
        </Modal>

        <Quicktransfer />
      </View>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeContextProvider>
        <UserContextProvider>
          <MyStack />
        </UserContextProvider>
      </ThemeContextProvider>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { NativeModules } from 'react-native';
// import {initializeVoice} from './Voice';

// const App: () => React$Node = () => {
//   const { OfflineVoiceRecognizerModule } = NativeModules;
//   initializeVoice();
//   // OfflineVoiceRecognizerModule.startOfflineListener();
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
