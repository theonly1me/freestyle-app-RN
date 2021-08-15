import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="➕" onPress={() => setCounter(counter => counter + 1)} />
      <Button title="➖" onPress={() => setCounter(counter => counter - 1)} />
    </View>
  );
};

export default CounterScreen;
