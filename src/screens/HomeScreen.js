import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There! 👋</Text>
      <Button
        title="Go to Component"
        onPress={() => navigation.navigate('Comp')}
      />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate('Square')}
      />
      <Button title="Go to Text" onPress={() => navigation.navigate('Text')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
