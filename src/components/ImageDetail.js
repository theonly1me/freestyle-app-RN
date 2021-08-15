import React from 'react';
import { Image, View, Text } from 'react-native';

const ImageDetail = ({ title, image }) => {
  return (
    <View
      style={{
        marginVertical: 50,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={{ alignSelf: 'center' }} source={image} />
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </View>
  );
};

export default ImageDetail;
