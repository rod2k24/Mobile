# Hi World - Multiplatform Mobile App

A simple "Hi World" application that works on both iPhone and Android devices.

## 🚀 Current Setup

This is a basic HTML5/CSS/JavaScript web app that can be viewed in any mobile browser and converted to a native app.

## 📱 Testing Options

### Option 1: Test in Mobile Browser (Quickest)
1. Open `index.html` in your preferred browser
2. Open browser DevTools (F12)
3. Toggle device toolbar to simulate mobile view
4. Or deploy to a web server and access from your phone's browser

### Option 2: Convert to Native App

#### Using Apache Cordova:
```bash
# Install Cordova
npm install -g cordova

# Create Cordova project
cordova create HiWorldNative com.example.hiworld HiWorld
cd HiWorldNative

# Copy web files to www folder
# Copy index.html, styles.css, and app.js to www/

# Add platforms
cordova platform add ios
cordova platform add android

# Run on device
cordova run android
cordova run ios
```

#### Using Ionic Capacitor:
```bash
# Install Capacitor
npm install -g @capacitor/cli @capacitor/core

# Initialize
npx cap init

# Add platforms
npx cap add android
npx cap add ios

# Copy web assets and open in native IDE
npx cap sync
npx cap open android
npx cap open ios
```

#### Using React Native (Recommended for production):
```bash
# Install React Native CLI
npm install -g react-native-cli

# Create new project
npx react-native init HiWorld

# Run on device
npx react-native run-android
npx react-native run-ios
```

#### Using .NET MAUI (C# developers):
```bash
# Install .NET SDK from https://dotnet.microsoft.com/download

# Create MAUI app
dotnet new maui -n HiWorld

# Run on device
dotnet build -t:Run -f net8.0-android
dotnet build -t:Run -f net8.0-ios
```

## 🔧 Development Environment Setup

### For iOS Development:
- Mac computer required
- Install Xcode from App Store
- Install Xcode Command Line Tools

### For Android Development:
- Install Android Studio
- Set up Android SDK
- Configure Android emulator or connect physical device with USB debugging enabled

## 🌐 Quick Preview

To preview right now:
1. Open `index.html` in your browser
2. Press F12 to open DevTools
3. Click the device toolbar icon (or Ctrl+Shift+M)
4. Select a mobile device from the dropdown

## 📦 Features

- ✅ Responsive design
- ✅ Touch-optimized interface
- ✅ Platform detection (iOS/Android/Desktop)
- ✅ Smooth animations
- ✅ Mobile-first approach
- ✅ No framework dependencies

## 🎯 Next Steps

Choose your preferred approach based on:
- **Cordova/Capacitor**: Good for simple web-to-native wrapping
- **React Native**: Best for complex, native-feeling apps
- **.NET MAUI**: Ideal if you prefer C# and .NET ecosystem
- **Flutter**: Excellent performance with Dart language

Let me know which platform you'd like to focus on, and I can help you set it up!
