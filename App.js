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
              src={'https://v2.app.shipglobal.in/auth/login'}
              style={{ width: "100%", height: "100%", border: "none" }}
              title="webview"
            />
          ) : (
            <WebView
              ref={webViewRef}
              source={{ uri: 'https://v2.app.shipglobal.in/auth/login' }}
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


// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View, StyleSheet, Platform, StatusBar, BackHandler, ToastAndroid
// } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// export default function App() {
//   const webViewRef = useRef(null);
//   const [canGoBack, setCanGoBack] = useState(false);
//   const [lastBackPressed, setLastBackPressed] = useState(null);

//   // Handles Android back button
//   useEffect(() => {
//     const backAction = () => {
//       if (Platform.OS !== 'android') return false;

//       if (canGoBack && webViewRef.current) {
//         webViewRef.current.goBack();
//         return true;
//       }

//       const now = Date.now();
//       if (lastBackPressed && now - lastBackPressed < 2000) {
//         BackHandler.exitApp();
//         return true;
//       } else {
//         ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
//         setLastBackPressed(now);
//         return true;
//       }
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [canGoBack, lastBackPressed]);

//   // Inject JavaScript to hook into history API (SPA route detection)
//   const injectedJS = `
//     (function() {
//       const pushState = history.pushState;
//       const replaceState = history.replaceState;

//       function sendBackState() {
//         window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'NAVIGATION_STATE', canGoBack: window.history.length > 1 }));
//       }

//       history.pushState = function(...args) {
//         pushState.apply(history, args);
//         sendBackState();
//       };

//       history.replaceState = function(...args) {
//         replaceState.apply(history, args);
//         sendBackState();
//       };

//       window.addEventListener('popstate', sendBackState);

//       sendBackState(); // initial state
//     })();
//     true;
//   `;

//   const handleMessage = (event) => {
//     try {
//       const data = JSON.parse(event.nativeEvent.data);
//       if (data.type === 'NAVIGATION_STATE') {
//         setCanGoBack(data.canGoBack);
//       }
//     } catch (e) {
//       console.warn('Invalid message received:', e);
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           {Platform.OS === 'web' ? (
//             <iframe
//               src={'https://v2.app.shipglobal.in/auth/login'}
//               style={{ width: "100%", height: "100%", border: "none" }}
//               title="webview"
//             />
//           ) : (
//             <WebView
//               ref={webViewRef}
//               source={{ uri: 'https://v2.app.shipglobal.in/auth/login' }}
//               style={styles.webview}
//               startInLoadingState={true}
//               injectedJavaScript={injectedJS}
//               onMessage={handleMessage}
//             />
//           )}
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   webview: {
//     flex: 1,
//   },
// });
