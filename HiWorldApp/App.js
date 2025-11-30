import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Animated,
  Platform 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handleClick = () => {
    setMessage('Hi mobile world!');
    setShowMessage(true);

    // Animate message
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Hi World! 👋</Text>
          <Text style={styles.subtitle}>Your first multiplatform mobile app</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleClick}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Click Me!</Text>
          </TouchableOpacity>

          {showMessage && (
            <Animated.View style={[styles.messageContainer, { opacity: fadeAnim }]}>
              <Text style={styles.message}>{message}</Text>
            </Animated.View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  },
  buttonText: {
    color: '#667eea',
    fontSize: 18,
    fontWeight: '600',
  },
  messageContainer: {
    marginTop: 20,
    minHeight: 30,
  },
  message: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  platformInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  platformText: {
    color: 'white',
    opacity: 0.8,
    fontSize: 14,
  },
});
