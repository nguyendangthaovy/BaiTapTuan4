import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState([1, 2, 3]);
  const handleIncrement = () => {
    setCount(count.map((num) => num + 1));
  };
  const handleReset = () => {
    setCount([1, 2, 3]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText1}>Hello Bài Tập Tuần 4</Text>
      <View style={{flexDirection:"row"}}>
        {count.map((num, index) => (
          <Text key={index} style={styles.countText}>
            {num}
          </Text>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={handleIncrement}
          activeOpacity={0.7}>
          <Text style={styles.buttonText2}>Click to increase</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity
          style={styles.button2}
          onPress={handleReset}
          activeOpacity={0.7}>
          <Text style={styles.buttonText2}>Click to reset</Text>
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
    fontSize: 24,
    marginBottom: 20,
    padding: 10,
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
    color: '#ff69b4',
    fontSize: 36,
  },
  buttonText2: {
    color: 'black',
    fontSize: 16,
  },
});

export default App;
