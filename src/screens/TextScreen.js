import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  const inputEl = useRef();
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        ref={inputEl}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default TextScreen;
