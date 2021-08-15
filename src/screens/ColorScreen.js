import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const onAddColor = () => {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 255));
    }
    const newColor = color.join(',');
    setColors(colors => {
      const newColors = [...colors];
      newColors.push(newColor);
      return newColors;
    });
  };
  return (
    <View>
      <Button title="Add a Color" onPress={onAddColor} />
      <FlatList
        data={colors}
        keyExtractor={color => color}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: `rgb(${item})`,
                width: '100%',
                height: 100,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
