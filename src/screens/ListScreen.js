import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const data = [
    { name: 'Friend 1' },
    { name: 'Friend 2' },
    { name: 'Friend 3' },
    { name: 'Friend 4' },
    { name: 'Friend 5' },
    { name: 'Friend 6' },
    { name: 'Friend 7' },
    { name: 'Friend 8' },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={data}
      renderItem={({ item, index }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    padding: 10,
    marginVertical: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    textAlign: 'center',
  },
});

export default ListScreen;
