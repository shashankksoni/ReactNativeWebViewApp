import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Platform, StatusBar, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // prevent default behavior (exit app)
      }
      return false; // exit app
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // cleanup
  }, [canGoBack]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {Platform.OS === 'web' ? (
            <iframe
              src={'https://your-website-url.com'}    //Replace "https://your-website-url.com" with your actual website URL.
              style={{ width: "100%", height: "100%", border: "none" }}
              title="webview"
            />
          ) : (
            <WebView
              ref={webViewRef}
              source={{ uri: 'https://your-website-url.com' }} //Replace "https://your-website-url.com" with your actual website URL.
              style={styles.webview}
              startInLoadingState={true}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});

