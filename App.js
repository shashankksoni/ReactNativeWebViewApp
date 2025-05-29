// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   BackHandler,
//   Modal,
//   TouchableOpacity,
//   Text
// } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// const MAIN_URL = 'https://dev.shipgl.in/';

// export default function App() {
//   const webViewRef = useRef(null);
//   const modalWebViewRef = useRef(null);

//   const [canGoBack, setCanGoBack] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalUrl, setModalUrl] = useState(null);
//   const [modalCanGoBack, setModalCanGoBack] = useState(false);

//   useEffect(() => {
//     const backAction = () => {
//       if (modalVisible) {
//         if (modalCanGoBack && modalWebViewRef.current) {
//           modalWebViewRef.current.goBack();
//         } else {
//           setModalVisible(false);
//         }
//         return true;
//       }

//       if (canGoBack && webViewRef.current) {
//         webViewRef.current.goBack();
//         return true;
//       }

//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [canGoBack, modalVisible, modalCanGoBack]);

//   const handleAndroidLinkIntercept = (event) => {
//     const url = event.url;
//     if (!url.startsWith(MAIN_URL)) {
//       setTimeout(() => {
//         setModalUrl(url);
//         setModalVisible(true);
//       }, 0);
//       return false;
//     }
//     return true;
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           {/* ✅ Web uses iframe, all else uses WebView */}
//           {Platform.OS === 'web' ? (
//             <iframe
//               src={MAIN_URL}
//               title="ShipGlobal Web"
//               style={styles.iframe}
//             />
//           ) : (
//             <WebView
//               ref={webViewRef}
//               source={{ uri: MAIN_URL }}
//               style={styles.webview}
//               startInLoadingState={true}
//               originWhitelist={['*']}
//               javaScriptEnabled
//               domStorageEnabled
//               setSupportMultipleWindows={false}
//               onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
//               onShouldStartLoadWithRequest={handleAndroidLinkIntercept}
//               injectedJavaScript={`
//                 (function() {
//                   window.open = function(url) {
//                     window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'new-window', url: url }));
//                   };
//                 })();
//                 true;
//               `}
//               onMessage={(event) => {
//                 try {
//                   const data = JSON.parse(event.nativeEvent.data);
//                   if (data.type === 'new-window') {
//                     setModalUrl(data.url);
//                     setModalVisible(true);
//                   }
//                 } catch (_) {}
//               }}
//             />
//           )}
//         </View>

//         {/* ✅ Modal Mini-Browser */}
//         <Modal
//           visible={modalVisible}
//           animationType="slide"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <SafeAreaView style={styles.modalContainer}>
//             <View style={styles.modalHeader}>
//               <TouchableOpacity
//                 onPress={() => {
//                   if (modalCanGoBack && modalWebViewRef.current) {
//                     modalWebViewRef.current.goBack();
//                   } else {
//                     setModalVisible(false);
//                   }
//                 }}
//               >
//                 <Text style={styles.backButton}>← Back</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setModalVisible(false)}>
//                 <Text style={styles.closeIcon}>×</Text>
//               </TouchableOpacity>
//             </View>
//             <WebView
//               ref={modalWebViewRef}
//               source={{ uri: modalUrl }}
//               style={styles.webview}
//               startInLoadingState={true}
//               javaScriptEnabled
//               domStorageEnabled
//               setSupportMultipleWindows={false}
//               onNavigationStateChange={navState =>
//                 setModalCanGoBack(navState.canGoBack)
//               }
//             />
//           </SafeAreaView>
//         </Modal>
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
//   iframe: {
//     width: '100%',
//     height: '100%',
//     border: 'none',
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#1E2F97',
//     paddingHorizontal: 15,
//     paddingTop: Platform.OS === 'ios' ? 50 : 15,
//     paddingBottom: 10,
//   },
//   backButton: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   closeIcon: {
//     fontSize: 26,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });






// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   BackHandler,
//   Modal,
//   TouchableOpacity,
//   Text
// } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// const MAIN_URL = 'https://dev.shipgl.in/';

// export default function App() {
//   const webViewRef = useRef(null);
//   const modalWebViewRef = useRef(null);

//   const [canGoBack, setCanGoBack] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalUrl, setModalUrl] = useState(null);
//   const [modalCanGoBack, setModalCanGoBack] = useState(false);

//   useEffect(() => {
//     const backAction = () => {
//       if (modalVisible) {
//         if (modalCanGoBack && modalWebViewRef.current) {
//           modalWebViewRef.current.goBack();
//         } else {
//           setModalVisible(false);
//         }
//         return true;
//       }

//       if (canGoBack && webViewRef.current) {
//         webViewRef.current.goBack();
//         return true;
//       }

//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [canGoBack, modalVisible, modalCanGoBack]);

//   const handleAndroidLinkIntercept = (event) => {
//     const url = event.url;
//     if (!url.startsWith(MAIN_URL)) {
//       setTimeout(() => {
//         setModalUrl(url);
//         setModalVisible(true);
//       }, 0);
//       return false;
//     }
//     return true;
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           {/* Web fallback */}
//           {Platform.OS === 'web' ? (
//             <iframe
//               src={MAIN_URL}
//               title="ShipGlobal Web"
//               style={styles.iframe}
//             />
//           ) : Platform.OS === 'android' ? (
//             <WebView
//               ref={webViewRef}
//               source={{ uri: MAIN_URL }}
//               style={styles.webview}
//               startInLoadingState={true}
//               originWhitelist={['*']}
//               javaScriptEnabled
//               domStorageEnabled
//               setSupportMultipleWindows={false}
//               onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
//               onShouldStartLoadWithRequest={handleAndroidLinkIntercept}
//               injectedJavaScript={`
//                 (function() {
//                   window.open = function(url) {
//                     window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'new-window', url: url }));
//                   };
//                 })();
//                 true;
//               `}
//               onMessage={(event) => {
//                 try {
//                   const data = JSON.parse(event.nativeEvent.data);
//                   if (data.type === 'new-window') {
//                     setModalUrl(data.url);
//                     setModalVisible(true);
//                   }
//                 } catch (_) {}
//               }}
//             />
//           ) : (
//             <View style={styles.unsupported}>
//               <Text style={styles.unsupportedText}>
//                 WebView is not supported on this platform in Expo Go.
//               </Text>
//             </View>
//           )}
//         </View>

//         {/* ✅ Modal Mini-Browser */}
//         {Platform.OS === 'android' && (
//           <Modal
//             visible={modalVisible}
//             animationType="slide"
//             onRequestClose={() => setModalVisible(false)}
//           >
//             <SafeAreaView style={styles.modalContainer}>
//               <View style={styles.modalHeader}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     if (modalCanGoBack && modalWebViewRef.current) {
//                       modalWebViewRef.current.goBack();
//                     } else {
//                       setModalVisible(false);
//                     }
//                   }}
//                 >
//                   <Text style={styles.backButton}>← Back</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <Text style={styles.closeIcon}>×</Text>
//                 </TouchableOpacity>
//               </View>
//               <WebView
//                 ref={modalWebViewRef}
//                 source={{ uri: modalUrl }}
//                 style={styles.webview}
//                 startInLoadingState={true}
//                 javaScriptEnabled
//                 domStorageEnabled
//                 setSupportMultipleWindows={false}
//                 onNavigationStateChange={navState =>
//                   setModalCanGoBack(navState.canGoBack)
//                 }
//               />
//             </SafeAreaView>
//           </Modal>
//         )}
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
//   iframe: {
//     width: '100%',
//     height: '100%',
//     border: 'none',
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#1E2F97',
//     paddingHorizontal: 15,
//     paddingTop: Platform.OS === 'ios' ? 50 : 15,
//     paddingBottom: 10,
//   },
//   backButton: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   closeIcon: {
//     fontSize: 26,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   unsupported: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unsupportedText: {
//     fontSize: 16,
//     color: 'gray',
//     textAlign: 'center',
//     padding: 20,
//   },
// });




// import React, { useRef, useState, useEffect } from 'react';
// import { View, StyleSheet, Platform, StatusBar, BackHandler } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// export default function App() {
//   const webViewRef = useRef(null);
//   const [canGoBack, setCanGoBack] = useState(false);

//   useEffect(() => {
//     const backAction = () => {
//       if (canGoBack && webViewRef.current) {
//         webViewRef.current.goBack();
//         return true; // prevent default behavior (exit app)
//       }
//       return false; // exit app
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction
//     );

//     return () => backHandler.remove(); // cleanup
//   }, [canGoBack]);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           {Platform.OS === 'web' ? (
//             <iframe
//               src={'https://dev.shipgl.in/'}
//               style={{ width: "100%", height: "100%", border: "none" }}
//               title="webview"
//             />
//           ) : (
//             <WebView
//               ref={webViewRef}
//               source={{ uri: 'https://dev.shipgl.in/' }}
//               style={styles.webview}
//               startInLoadingState={true}
//               onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
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

// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View, StyleSheet, Platform, BackHandler, Modal,
//   TouchableOpacity, Text
// } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// export default function App() {
//   const webViewRef = useRef(null);
//   const modalWebViewRef = useRef(null);

//   const [canGoBack, setCanGoBack] = useState(false);
//   const [modalCanGoBack, setModalCanGoBack] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalUrl, setModalUrl] = useState(null);

//   useEffect(() => {
//     const backAction = () => {
//       if (modalVisible) {
//         if (modalCanGoBack && modalWebViewRef.current) {
//           modalWebViewRef.current.goBack();
//         } else {
//           setModalVisible(false);
//         }
//         return true;
//       }

//       if (canGoBack && webViewRef.current) {
//         webViewRef.current.goBack();
//         return true;
//       }

//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [canGoBack, modalVisible, modalCanGoBack]);

//   const handleLinkIntercept = (event) => {
//     const url = event.url;

//     if (url !== 'https://dev.shipgl.in/') {
//       setModalUrl(url);
//       setModalVisible(true);
//       return false;
//     }

//     return true;
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea}>

//         {/* ✅ Main WebView — Let the Web App handle header */}
//         <WebView
//           ref={webViewRef}
//           source={{ uri: 'https://dev.shipgl.in/' }}
//           style={styles.webview}
//           startInLoadingState={true}
//           onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
//           onShouldStartLoadWithRequest={handleLinkIntercept}
//         />

//         {/* 📱 Modal for External Links */}
//         <Modal
//           visible={modalVisible}
//           animationType="slide"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <SafeAreaView style={styles.safeArea}>

//             {/* 🔙 Modal back or close */}
//             <View style={styles.modalHeader}>
//               <TouchableOpacity
//                 onPress={() =>
//                   modalCanGoBack
//                     ? modalWebViewRef.current?.goBack()
//                     : setModalVisible(false)
//                 }
//               >
//                 <Text style={styles.headerBack}>← Back</Text>
//               </TouchableOpacity>
//             </View>

//             <WebView
//               ref={modalWebViewRef}
//               source={{ uri: modalUrl }}
//               style={styles.webview}
//               startInLoadingState={true}
//               onNavigationStateChange={navState =>
//                 setModalCanGoBack(navState.canGoBack)
//               }
//             />
//           </SafeAreaView>
//         </Modal>

//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   webview: {
//     flex: 1,
//   },
//   modalHeader: {
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderBottomColor: '#ddd',
//     borderBottomWidth: 1,
//   },
//   headerBack: {
//     fontSize: 18,
//     color: '#007AFF',
//   },
// });

import React, { useRef, useState, useEffect } from 'react';
import {
  View, StyleSheet, Platform, BackHandler, Modal,
  TouchableOpacity, Text
} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const webViewRef = useRef(null);
  const modalWebViewRef = useRef(null);

  const [canGoBack, setCanGoBack] = useState(false);
  const [modalCanGoBack, setModalCanGoBack] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);

  // Android hardware back button handling
  useEffect(() => {
    const backAction = () => {
      if (modalVisible) {
        if (modalCanGoBack && modalWebViewRef.current) {
          modalWebViewRef.current.goBack();
        } else {
          setModalVisible(false);
        }
        return true;
      }

      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }

      return false; // Let OS handle
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove(); // cleanup
  }, [canGoBack, modalVisible, modalCanGoBack]);

  // Open modal only for non-shipgl.in links
  const handleLinkIntercept = (event) => {
    const url = event.url;

    if (!url.includes('shipgl.in')) {
      setModalUrl(url);
      setModalVisible(true);
      return false;
    }

    return true;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        {/* 🌐 Main WebView or iframe fallback */}
        {Platform.OS === 'web' ? (
          <iframe
            src="https://dev.shipgl.in/"
            title="ShipGlobal Web"
            style={styles.iframe}
          />
        ) : (
          <WebView
            ref={webViewRef}
            source={{ uri: 'https://dev.shipgl.in/' }}
            style={styles.webview}
            startInLoadingState={true}
            onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            onShouldStartLoadWithRequest={handleLinkIntercept}
          />
        )}

        {/* 📱 Modal for external websites */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* 🌐 External site in modal WebView */}
            <WebView
              ref={modalWebViewRef}
              source={{ uri: modalUrl }}
              style={styles.webview}
              startInLoadingState={true}
              onNavigationStateChange={navState =>
                setModalCanGoBack(navState.canGoBack)
              }
            />
          </SafeAreaView>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  modalHeader: {
    backgroundColor: '#1E2F97', // Blue header
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    paddingBottom: 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

