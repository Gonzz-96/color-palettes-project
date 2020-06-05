import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={
          [styles.textMargin, 
           styles.titleText]}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName='Cyan' hexCode='#2aa198' />
        <ColorBox colorName='Blue' hexCode='#268bd2' />
        <ColorBox colorName='Magenta' hexCode='#d33682' />
        <ColorBox colorName='Orange' hexCode='#cb4b16' />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  titleText: {
    marginTop: 40,
    marginBottom: 18,
    fontSize: 18
  }
});

export default App;