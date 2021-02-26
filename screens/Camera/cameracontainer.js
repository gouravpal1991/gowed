import React, {Component} from 'react';
import Scan from './scan';
import Tts from 'react-native-tts';
import {NativeModules} from 'react-native';

class CameraContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: true,
      cameraResult: false,
      result: null,
      visionResponse: '',
      loading: false,
      googleVisionDetetion: undefined,
    };
  }

  handleHomeClick = () => {
    this.props.navigation.navigate('Dashboard');

    console.log('clicked');
  };

  takePicture = async (value) => {
    if (value) {
      const options = {quality: 0.5, base64: true};
      const data = await value.takePictureAsync(options);
      console.log(data);
      this.setState(
        {
          cameraResult: true,
          result: data.base64,
          camera: false,
        },
        () => this.callGoogleVIsionApi(this.state.result),
      );
      this.setState({loading: true, googleVisionDetetion: undefined});
    }
  };
  callGoogleVIsionApi = async (base64) => {
    const {OfflineVoiceRecognizerModule} = NativeModules;
    let googleVisionRes = await fetch(
      'https://vision.googleapis.com/v1/images:annotate?key=' +
        'AIzaSyDoWmPNu3z8EiPApQHjmWaoyhhTYKD9Yd8',
      {
        method: 'POST',
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: base64,
              },
              features: [
                {type: 'LABEL_DETECTION', maxResults: 10},
                {type: 'LANDMARK_DETECTION', maxResults: 5},
                {type: 'FACE_DETECTION', maxResults: 5},
                {type: 'LOGO_DETECTION', maxResults: 5},
                {type: 'TEXT_DETECTION', maxResults: 5},
                {type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5},
                {type: 'SAFE_SEARCH_DETECTION', maxResults: 5},
                {type: 'IMAGE_PROPERTIES', maxResults: 5},
                {type: 'CROP_HINTS', maxResults: 5},
                {type: 'WEB_DETECTION', maxResults: 5},
              ],
            },
          ],
        }),
      },
    );

    await googleVisionRes
      .json()
      .then((googleVisionRes) => {
        console.log(googleVisionRes);
        if (googleVisionRes) {
          this.setState({
            loading: false,
            googleVisionDetetion:
              googleVisionRes.responses[0].fullTextAnnotation.text,
            camera: false,
          });
          console.log('this.is response', this.state.googleVisionDetetion);
          Tts.speak(this.state.googleVisionDetetion);
          setTimeout(function () {
            console.log('Going to start the offline listener..');
            OfflineVoiceRecognizerModule.startOfflineListener(); //local offline listener
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  activeCamera = () => {
    this.setState({
      camera: true,
    });
  };
  clickAgain = () => {
    this.setState({
      camera: true,
      googleVisionDetetion: false,
      loading: false,
    });
  };

  callTranslateApi = async () => {
    let googleVisionRes = await fetch('http://34.66.172.0:8080/translatetext', {
      method: 'POST',
      body: JSON.stringify({
        requests: {
          text: 'Good morning guys',
          sourceLanguageCode: 'en',
          targetLanguageCode: 'gu',
        },
      }),
    });

    await googleVisionRes
      .json()
      .then((googleVisionRes) => {
        console.log(googleVisionRes);
        // if (googleVisionRes) {
        //   this.setState({
        //     loading: false,
        //     googleVisionDetetion:
        //       googleVisionRes.responses[0].fullTextAnnotation.text,
        //     camera: false,
        //   });
        //   console.log('this.is response', this.state.googleVisionDetetion);
        //   Tts.speak(this.state.googleVisionDetetion);
        //   setTimeout(function () {
        //     console.log('Going to start the offline listener..');
        //     OfflineVoiceRecognizerModule.startOfflineListener(); //local offline listener
        //   }, 2000);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      camera,
      cameraResult,
      result,
      googleVisionDetetion,
      loading,
    } = this.state;

    // if(googleVisionDetetion){
    //   return(

    //   )
    // }

    return (
      <Scan
        camera={camera}
        cameraResult={cameraResult}
        result={result}
        clickAgain={this.clickAgain}
        takePicture={(value) => this.takePicture(value)}
        activeCamera={this.activeCamera}
        googleVisionDetetion={googleVisionDetetion}
        loading={loading}
        handleHomeClick={this.handleHomeClick}
      />
    );
  }
}

export default CameraContainer;
