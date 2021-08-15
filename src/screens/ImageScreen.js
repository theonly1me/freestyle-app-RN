import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const data = [
  { title: 'Forest', image: require('../../assets/forest.jpg') },
  { title: 'Beach', image: require('../../assets/beach.jpg') },
  { title: 'Mountain', image: require('../../assets/mountain.jpg') },
];

const ImageScreen = () => {
  return (
    <View>
      <FlatList
        keyExtractor={image => image.title}
        data={data}
        renderItem={({ item }) => {
          return <ImageDetail title={item.title} image={item.image} />;
        }}
      />
    </View>
  );
};

export default ImageScreen;
