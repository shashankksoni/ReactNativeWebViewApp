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
Replace "https://your-website-url.com" with your actual website URL.
```
---

## 🛠️ **Prerequisites**

- Node.js (v16+ recommended)
- Expo CLI installed globally: Run this command in your **VS Code terminal or command prompt:**
  ```npm install -g expo-cli```
- Android or iOS device/emulator for testing
---

## ▶️ How to Run Locally
Run all commands in your VS Code terminal or your preferred command-line interface.

1. Clone the repository: ```git clone https://github.com/shashankksoni/ReactNativeWebViewApp.git```
2. Navigate to the project folder: ```cd ReactNativeWebViewApp```
3. Install dependencies: ```npm install``` or ```yarn install```
4. Start the Expo development server: ```npx expo start -c``` Here, -c means when it will start running the Expo Server it will remove all the cache file first and then it      starts the server. It is not necessary to run but you can there is no harm otherwise you can run only: ```npx expo start```
5. Run on device or emulator:
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
## 📄 License
This project is licensed under the MIT License.

## 🙋‍♂️ Author
Shashank Kumar Soni
📧 shashanksoni192@gmail.com
🔗 [GitHub Profile](https://github.com/shashankksoni)


## 🤝 Collaboration & Future Features
If you would like to suggest new features or collaborate on improvements for this app, feel free to reach out to me anytime!

📱 WhatsApp: +91-9455384917

📧 Email: shashanksoni192@gmail.com

I’m open to working together to enhance this project with new functionality and customizations.

## ⭐️ Support
If you find this project useful, please give it a ⭐️ on GitHub!

<p align="center"> Made with ❤️ by Shashank </p> 




    









