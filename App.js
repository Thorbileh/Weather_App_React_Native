import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Loading from './components/loading';
import Weather from './components/weather';
const img = require('./assets/back.png')
export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={img} style={styles.image}>
        <Weather />
      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  }
});
