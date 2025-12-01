import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleClick = () => {
    if (!showMessage) {
      setShowMessage(true);
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
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
        <Text style={styles.title}>Hi World! 👋</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleClick}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Click Me!</Text>
        </TouchableOpacity>

        {showMessage && (
          <Animated.View style={[styles.messageContainer, { opacity: fadeAnim }]}>
            <Text style={styles.message}>Hi mobile world!</Text>
          </Animated.View>
        )}
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
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
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
    marginBottom: 30,
  },
  buttonText: {
    color: '#667eea',
    fontSize: 18,
    fontWeight: '600',
  },
  messageContainer: {
    minHeight: 40,
    justifyContent: 'center',
  },
  message: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
