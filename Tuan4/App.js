import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText1}>Bài Tập Tuần 4</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Click to increase</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity style={styles.button2} onPress={handleReset}>
          <Text style={styles.buttonText}>Click to reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  countText: {
    fontSize: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  spacing: {
    height: 20, 
  },
  button1: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 2,          
    borderColor: '#ff69b4',
  },
   button2: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderWidth: 2,         
   borderColor: '#ff69b4',
  },
  buttonText1: {
    color: 'black',
    fontSize: 56,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default App;
