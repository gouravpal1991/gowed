package com.gowed;

import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.json.JSONException;
import org.json.JSONObject;
import org.kaldi.Assets;
import org.kaldi.KaldiRecognizer;
import org.kaldi.Model;
import org.kaldi.RecognitionListener;
import org.kaldi.SpeechService;
import org.kaldi.Vosk;

import java.io.File;
import java.io.IOException;
import java.lang.ref.WeakReference;

public class OfflineVoiceRecognizer extends ReactContextBaseJavaModule implements RecognitionListener {

    private static final int PERMISSIONS_REQUEST_RECORD_AUDIO = 1;
    private Model model;
    private SpeechService speechService;

    public OfflineVoiceRecognizer(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "OfflineVoiceRecognizerModule";
    }

    @Override
    public void onResult(String hypothesis) {
//        Log.d("ON_RESULT", hypothesis);
        // Create map for params
        WritableMap payload = Arguments.createMap();
        // Put data to map
        payload.putString("on_offline_recognition_result", hypothesis);
        try {
            JSONObject jsonObject = new JSONObject(hypothesis);
            String result = (String) jsonObject.getString("text");

            Log.d("ON_RESULT", result);
            this.getReactApplicationContext()
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("onOfflineRecognitionResult", result);
        } catch (JSONException je) {
            je.printStackTrace();
        }
    }

    @Override
    public void onPartialResult(String hypothesis) {
//        Log.d("ON_PARTIAL_RESULT", hypothesis);
    }

    @Override
    public void onError(Exception e) {
        e.printStackTrace();
        Log.d("ON_ERROR", e.getMessage());
    }

    @Override
    public void onTimeout() {
        speechService.cancel();
        speechService = null;
    }

    @ReactMethod
    public void startOfflineListener() {
        if (speechService != null) {
            speechService.cancel();
            speechService = null;
        } else {
            try {
                WeakReference<ReactActivity> activityReference = new WeakReference<ReactActivity>((ReactActivity) getCurrentActivity());
                Assets assets = new Assets(activityReference.get());
                File assetDir = assets.syncAssets();
                Log.d("START_LISTENER", "Sync files in the folder " + assetDir.toString());

                Vosk.SetLogLevel(0);

                this.model = new Model(assetDir.toString() + "/model-android");
                KaldiRecognizer rec = new KaldiRecognizer(model, 16000.0f);
                speechService = new SpeechService(rec, 16000.0f);
                speechService.addListener(this);
                speechService.startListening();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @ReactMethod
    public void stopOfflineListener() {
        if (speechService != null) {
            speechService.stop();
            speechService.cancel();
            speechService = null;
        }
    }
}
