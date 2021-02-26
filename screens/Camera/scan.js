import React, {Component, Fragment} from 'react';
import {RNCamera} from 'react-native-camera';
import styles from './scanstyles';
import {
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import Wave from 'react-native-waveview';
import {Button} from 'react-native-paper';

const Scan = (props) => {
  const {
    camera,
    cameraResult,
    clickAgain,
    takePicture,
    activeCamera,
    googleVisionDetetion,
    loading,
    handleHomeClick,
  } = props;

  if (loading === true) {
    return (
      <View style={styles.SpinnerStyle}>
        <ActivityIndicator size={props.size || 'large'} color="#0000ff" />
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Analyzing....
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.scrollViewStyle}>
      {/* View When app starts, here we will dive for camera and vision things */}
      <Fragment>
        <StatusBar barStyle="dark-content" />
        {/* <Text style={styles.textTitle}>
          Welcome To React-Native Google Vision Tutorial !
        </Text> */}
        {/* {!camera && !cameraResult && (
          <View style={styles.cardView}>
            <Text numberOfLines={8} style={styles.descText}>
              {desccription}
            </Text>

            <TouchableOpacity
              onPress={activeCamera}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
            </TouchableOpacity>
          </View>
        )} */}
        {loading && (
          <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={props.size || 'large'} />
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Analyzing....
            </Text>
          </View>
        )}
        {googleVisionDetetion && (
          <View style={styles.container}>
            <Wave
              style={styles.waveBall}
              H={70}
              waveParams={[
                {A: 10, T: 180, fill: '#62c2ff'},
                {A: 15, T: 140, fill: '#0087dc'},
                {A: 20, T: 100, fill: '#1aa7ff'},
              ]}
              animated={true}
            />
            <Text
              style={{
                color: 'Black',
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: 40,
              }}>
              Reading file....
            </Text>
            <Button
              style={{margin: 15}}
              mode="contained"
              onPress={handleHomeClick}>
              Home
            </Button>
          </View>
        )}
        {/* When Google Vision returns response successfully */}
        {/* {googleVisionDetetion && (
          <Fragment>
            <Text style={styles.textTitle1}>Result !</Text>

            <View
              style={
                googleVisionDetetion ? styles.scanCardView : styles.cardView
              }>
              <ScrollView>
                return (
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'black',
                    margin: 10,
                  }}>
                  {googleVisionDetetion && (
                    <Text>Description: {googleVisionDetetion}</Text>
                  )}
                </View>
                );
              </ScrollView>
            </View>

            <TouchableOpacity
              onPress={clickAgain}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
            </TouchableOpacity>
          </Fragment>
        )} */}

        {/* React Native camera View */}
        {camera && (
          <View style={styles.cameracontainer}>
            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                console.log(barcodes);
              }}
            />
            {/* Click here for taking picture  */}
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => takePicture(this.camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> Capture !! </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Fragment>
    </View>
  );
};

export default Scan;
