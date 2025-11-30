// Detect platform
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        return "📱 Android";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "🍎 iOS";
    }
    
    return "💻 Desktop/Web";
}

// Show platform info on load
document.addEventListener('DOMContentLoaded', function() {
    const platformElement = document.getElementById('platform');
    platformElement.textContent = `Running on: ${detectPlatform()}`;
});

// Show message when button is clicked
let clickCount = 0;
function showMessage() {
    clickCount++;
    const messageElement = document.getElementById('message');
    
    const messages = [
        "✨ Hello from your mobile app!",
        "🎉 You tapped the button!",
        "🚀 Cross-platform is awesome!",
        "💫 Built for iOS & Android!",
        `🎯 Tap count: ${clickCount}`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
    
    // Add animation effect
    messageElement.style.animation = 'none';
    setTimeout(() => {
        messageElement.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

// Add touch feedback
document.addEventListener('touchstart', function() {}, true);
