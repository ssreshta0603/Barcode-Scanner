import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen'

export default class App extends React.Component {

  render() {
  return(
        <View>
          <ScanScreen/>
      </View>
    
    );
  }
}


