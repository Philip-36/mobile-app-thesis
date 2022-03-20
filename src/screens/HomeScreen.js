import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Camera"
      onPress={() => navigation.navigate('Camera')}
      />
      <Text>Home Screen</Text>
      <Button title="WaterQuality"
      onPress={() => navigation.navigate('WaterQuality')}
      />
    </View>
  );
};

export default HomeScreen;