# Android Studio Setup for Emulator

## Step 1: Open Android Studio and Install SDK

1. **Open Android Studio** (search for it in Windows Start Menu)

2. **If this is first time:**
   - Click "More Actions" or "Configure" 
   - Select "SDK Manager"

3. **In SDK Manager:**
   - Go to "SDK Platforms" tab
   - Check ✅ "Android 14.0 (UpsideDownCake)" or latest version
   - Check ✅ "Show Package Details" at bottom right
   - Ensure "Android SDK Platform 34" is checked
   
4. **Go to "SDK Tools" tab:**
   - Check ✅ "Android SDK Build-Tools"
   - Check ✅ "Android SDK Command-line Tools"
   - Check ✅ "Android Emulator"
   - Check ✅ "Android SDK Platform-Tools"
   
5. **Click "Apply"** and wait for downloads to complete

## Step 2: Create an Android Virtual Device (AVD)

1. In Android Studio, click **"More Actions" → "Virtual Device Manager"**
   - Or go to **Tools → Device Manager**

2. Click **"Create Device"** or **"+"**

3. **Select a device:**
   - Choose "Pixel 6" or any phone you like
   - Click "Next"

4. **Select a system image:**
   - Choose latest version (e.g., "UpsideDownCake" or "Tiramisu")
   - Click "Download" if needed, then "Next"

5. **Verify configuration** and click "Finish"

6. **Start the emulator** by clicking the ▶️ play button

## Step 3: Set Environment Variables

After SDK installation completes, run these commands in PowerShell:

```powershell
# Set ANDROID_HOME (replace with your actual path if different)
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', "$env:LOCALAPPDATA\Android\Sdk", 'User')

# Add to PATH
$currentPath = [System.Environment]::GetEnvironmentVariable('Path', 'User')
$newPath = "$currentPath;$env:LOCALAPPDATA\Android\Sdk\platform-tools;$env:LOCALAPPDATA\Android\Sdk\emulator"
[System.Environment]::SetEnvironmentVariable('Path', $newPath, 'User')

# Refresh environment in current session
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:Path = "$env:Path;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator"
```

## Step 4: Restart VS Code

After setting environment variables, **close and reopen VS Code** completely.

## Step 5: Test the Setup

In VS Code terminal:
```powershell
adb devices
```

You should see your emulator listed if it's running.

---

## Quick Alternative: Use Expo Dev Build

Instead of the emulator, you can also:
1. Install **Expo Go** from Google Play Store on a real Android device
2. Scan the QR code from `npm start`
3. Test on real hardware instantly!
