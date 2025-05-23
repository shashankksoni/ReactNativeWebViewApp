<h1 align="center">📱 ReactNativeWebViewApp</h1>

<p align="center">
  <b>A cross-platform mobile WebView app built with React Native & Expo.</b><br/>
  <sub>Developed by <a href="https://github.com/shashankksoni">Shashank Kumar Soni</a></sub>
</p>

<p align="center">
  <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/shashankksoni/ReactNativeWebViewApp?style=social" />
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/shashankksoni/ReactNativeWebViewApp" />
  <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  <img alt="Expo version" src="https://img.shields.io/badge/Expo-v48-green" />
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-0.71.7-blue" />
</p>

---

## 📋 Table of Contents

- [🚀 Features](#-features)  
- [🧑‍💻 How It Works](#-how-it-works)  
- [🛠️ Prerequisites](#️-prerequisites)  
- [▶️ How to Run Locally](#️-how-to-run-locally)  
- [🚀 Deployment & Publishing](#-deployment--publishing)  
- [🗂️ Project Structure](#️-project-structure)  
- [🤝 Collaboration & Future Features](#-collaboration--future-features)  
- [📄 License](#-license)  
- [🙋‍♂️ Author](#-author)  
- [⭐️ Support](#️-support)  

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
Replace "https://your-website-url.com" with your actual website URL.
```
---

## 🛠️ **Prerequisites**

Make sure you have these installed:
- Node.js (v16+ recommended)([https://nodejs.org/](https://nodejs.org/en))
- Install Expo CLI globally (run in VS Code terminal or command prompt)
  ```npm install -g expo-cli```
- Android or iOS device/emulator for testing
---

## ▶️ How to Run Locally
Run all these commands in your VS Code terminal or your preferred command-line interface.

1. Clone the repository: ```git clone https://github.com/shashankksoni/ReactNativeWebViewApp.git```
2. Navigate to the project folder: ```cd ReactNativeWebViewApp```
3. Install dependencies: ```npm install``` or ```yarn install```
4. Start the Expo development server: ```npx expo start -c``` Here, -c means when it will start running the Expo Server it will remove all the cache file first and then it      starts the server. It is not necessary to run but you can there is no harm otherwise you can run only: ```npx expo start```
5. Then, launch the app: Run on device or emulator:
   - First intall the Expo Go app on your android/iOS phone.
   - Scan the QR code with Expo Go app on your phone.
   - Or launch simulators from Expo CLI options.
---

## 🚀 Deployment & Publishing

This app uses Expo Application Services (EAS) for building and deploying your React Native project with ease.

### Step 1: Login to Expo

- Run this command in your VS Code terminal or command prompt to authenticate your Expo account: ```npx expo login```
- Enter your Expo credentials when prompted. If you don’t have an Expo account, you can create one at https://expo.dev/signup.

### Step 2: Export the project for Web (optional)
- If you want to export your app as a web project, run: ```npx expo export --platform web```
- This generates static web assets that can be hosted on any web server.

### Step 3: Deploy your app using EAS
- Use Expo Application Services to build and deploy your app for Android and iOS: ```eas deploy```
- This command will build your app, upload it to Expo servers, and deploy it according to your eas.json configuration.
  - Note: You must have eas-cli installed globally for this command: ```npm install -g eas-cli```
    - You can find detailed docs on EAS here: https://docs.expo.dev/eas/
    
### Alternative build commands
If you prefer classic Expo builds, you can still use:
- For Android: ```expo build:android```
- For iOS: ```expo build:ios```
---

## 🗂️ Project Structure
```ReactNativeWebViewApp/
├── App.js (or App.tsx)
├── app.json
├── package.json
├── node_modules/
├── assets/
├── components/
├── README.md
└── .gitignore
```
---
## 📄 License
This project is licensed under the MIT License.

---

## 🙋‍♂️ Author
Shashank Kumar Soni
📧 shashanksoni192@gmail.com
🔗 [GitHub Profile](https://github.com/shashankksoni)

---

## 🙋‍♂️ Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)]([https://www.linkedin.com/in/shashankksoni/(https://www.linkedin.com/in/shashank0211/))
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/shashank_soni)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/shashankksoni)
[![Email](https://img.shields.io/badge/Email-shashanksoni192%40gmail.com-red?style=flat&logo=gmail&logoColor=white)](mailto:shashanksoni192@gmail.com)

---

## 🤝 Collaboration & Future Features
If you would like to suggest new features or collaborate on improvements for this app, feel free to reach out to me anytime!

📱 WhatsApp: +91-9455384917

📧 Email: shashanksoni192@gmail.com

I’m open to working together to enhance this project with new functionality and customizations.

---

## ⭐️ Support
If you find this project useful, please give it a ⭐️ on GitHub!

<p align="center"> Made with ❤️ by Shashank </p> 


## 📸 Screenshots

<p align="center">
  <img src="[https://github.com/shashankksoni/ReactNativeWebViewApp/blob/main/screenshots/screen1.png(https://github.com/shashankksoni/ReactNativeWebViewApp/blob/main/1.PNG)" alt="Screenshot 1" width="400" /><br>
</p>

<p align="center">
  <img src="https://github.com/shashankksoni/ReactNativeWebViewApp/blob/main/screenshots/screen2.png" alt="Screenshot 2" width="400" /><br>
  <em>Screenshot 2: Error Screen</em>
</p>

<p align="center">
  <img src="https://github.com/shashankksoni/ReactNativeWebViewApp/blob/main/screenshots/screen3.png" alt="Screenshot 3" width="400" /><br>
  <em>Screenshot 3: Pull-to-Refresh</em>
</p>

<p align="center">
  <img src="https://github.com/shashankksoni/ReactNativeWebViewApp/blob/main/screenshots/screen4.png" alt="Screenshot 4" width="400" /><br>
  <em>Screenshot 4: Dark Mode</em>
</p>


    









