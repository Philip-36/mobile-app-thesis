import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

const Camera = () => {
  return (
    <View>
      <Header title="Camera" />
      <VideoPlayer
  videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
/>
    </View>
  );
};

export default Camera;