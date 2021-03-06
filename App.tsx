import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './src/screens/Camera';
import HomeScreen from './src/screens/HomeScreen';
import WaterQuality from './src/screens/WaterQuality';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
        <Stack.Screen name="Camera" component={Camera} options={{ title: 'Camera' }} />
        <Stack.Screen name="WaterQuality" component={WaterQuality} options={{ title: 'WaterQuality' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 40,
    backgroundColor: '#88cb7f',
  },
});