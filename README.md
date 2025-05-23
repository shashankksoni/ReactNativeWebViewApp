<h1 align="center">📱 ReactNativeWebViewApp</h1>

<p align="center">
  <b>A cross-platform mobile WebView app built using React Native and Expo.</b><br>
  <sub>Developed by <a href="https://github.com/shashankksoni">Shashank Kumar Soni</a></sub>
</p>

---

## 🚀 Features

- 🌍 Renders any website inside a React Native WebView component  
- 📱 Fully compatible with Android and iOS devices  
- 🎨 Responsive and adaptive design  
- ⚙️ Handles navigation and error states gracefully  
- 🌓 Supports system light and dark themes  
- 🔄 Hot reload support with Expo for fast development  
- 🔧 **Minimal coding required: Just replace the website URL in the code and your app is ready!**

---

## 🧑‍💻 How It Works

This app uses **Expo**, a powerful framework and platform for React Native apps that simplifies building, deploying, and testing.

- You only need to add your website URL in the `App.js` (or `App.tsx`) file inside the WebView’s `source` prop.
- Expo handles the rest: bundling your JavaScript, running the app on simulators or devices, and preparing builds.
- You get **live reload** during development and easy publishing options.

To learn more about Expo, visit the official documentation:  
[https://docs.expo.dev/get-started/introduction/](https://docs.expo.dev/get-started/introduction/)

Example:  
```jsx
<WebView source={{ uri: "https://your-website-url.com" }} />
**Replace "https://your-website-url.com" with your actual website URL.**

---

##🛠️ **Prerequisites**

- Node.js (v16+ recommended)
- Expo CLI installed globally: Run this command in your **VS Code terminal or command prompt:**
  ```npm install -g expo-cli```

