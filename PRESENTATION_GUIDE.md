# 📱 Presenting Your Android App in Microsoft Teams

## ✅ Option 1: scrcpy (BEST - Free & Professional)

**What it does:** Mirrors your Android screen to your PC with low latency

### Setup:
1. **Enable USB Debugging on Android:**
   - Settings → About Phone → Tap "Build Number" 7 times
   - Settings → Developer Options → Enable "USB Debugging"

2. **Connect phone via USB to PC**

3. **Restart PowerShell/VS Code**

4. **Run:** `scrcpy`

### For Teams Presentation:
- Window appears on your PC showing your phone screen
- Share that window in Teams
- Control phone from PC (keyboard/mouse work!)
- Professional quality

### scrcpy Options:
```powershell
# High quality
scrcpy --max-size 1920 --bit-rate 8M

# Fullscreen
scrcpy --fullscreen

# Stay awake (prevent screen timeout)
scrcpy --stay-awake

# Record while presenting
scrcpy --record presentation.mp4
```

---

## Option 2: Windows Phone Link (Built-in)

**Pre-installed on Windows 11!**

1. Open **Phone Link** app on Windows
2. Follow setup to connect your Android phone
3. Your phone screen appears in Phone Link window
4. Share that window in Teams

**Pros:** No setup, built-in
**Cons:** Lower quality than scrcpy

---

## Option 3: Wireless scrcpy (No USB cable)

1. Connect phone and PC to same WiFi
2. Enable USB debugging and connect via USB once
3. Run:
```powershell
adb tcpip 5555
adb connect PHONE_IP_ADDRESS:5555
scrcpy
```
4. Disconnect USB cable - still works wirelessly!

---

## Option 4: Your Phone's Built-in Screen Record

1. **Record on phone:**
   - Swipe down → Screen Record
   - Open your app and demonstrate
   - Stop recording

2. **Transfer video to PC**

3. **Play video during Teams presentation**

**Pros:** Pre-recorded = no live demo issues
**Cons:** Not interactive

---

## Option 5: Android Emulator (If you still want it)

For ARM Windows 11, you need Android Studio with ARM system images:

### Steps:
1. **Open Android Studio → SDK Manager**
2. **SDK Platforms tab:**
   - Check "Show Package Details"
   - Select **ARM 64 v8a System Image** (NOT x86)
   
3. **Create AVD:**
   - Tools → Device Manager → Create Device
   - Choose device → Next
   - Select **"Other Images"** tab
   - Choose **ARM64 v8a** image
   - Finish

4. **Start emulator** and run:
```powershell
cd HiWorldApp
npx expo start --android
```

**Note:** ARM emulator works but is slower than scrcpy with real device

---

## 🎯 My Recommendation for Teams Presentation:

### **Use scrcpy** - Here's why:
✅ Professional quality  
✅ Low latency  
✅ Control from PC  
✅ Can record simultaneously  
✅ Better than emulator for demos  
✅ Shows real app performance  

### Quick Start:
1. Close and reopen PowerShell/VS Code
2. Connect phone via USB
3. Run: `scrcpy --stay-awake --max-size 1920`
4. Share the scrcpy window in Teams
5. Demonstrate your app!

---

## Tips for Great Presentation:

- **Before meeting:** Test scrcpy connection
- **During meeting:** Share only the scrcpy window (not full screen)
- **Use:** `--stay-awake` flag so screen doesn't dim
- **Consider:** Recording with `--record demo.mp4` as backup
- **Enable:** "Do Not Disturb" on phone before presenting

Need help with any of these options?
