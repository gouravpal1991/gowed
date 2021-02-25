
package com.gowed;

import android.os.Bundle;
import android.view.View;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
//    hideNavigationBar();
//    getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "gowed";
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
//    if (hasFocus) {
//      hideNavigationBar();
//    }
    if (hasFocus) {
//      getWindow().getDecorView().setSystemUiVisibility(
//              View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                      | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                      | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                      | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                      | View.SYSTEM_UI_FLAG_FULLSCREEN
//                      | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }
  }

  private void hideNavigationBar() {
    View decorView = getWindow().getDecorView();
    int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN;
    decorView.setSystemUiVisibility(uiOptions);
  }
}