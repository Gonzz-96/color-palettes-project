import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.textMargin, styles.titleText]}>
          Here are some boxes of different colours
        </Text>
        <Text style={[styles.textMargin, styles.colorItem, styles.cyanItem]}>Cyan #2aa198</Text>
        <Text style={[styles.textMargin, styles.colorItem, styles.blueItem]}>Blue #268bd2</Text>
        <Text style={[styles.textMargin, styles.colorItem, styles.magentaItem]}>Magenta #d33682</Text>
        <Text style={[styles.textMargin, styles.colorItem, styles.orangeItem]}>Orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  textMargin: {
    marginVertical: 8,
    marginHorizontal: 20,
    fontWeight: 'bold'
  },
  titleText: {
    marginTop: 40,
    fontSize: 18
  },
  colorItem: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  cyanItem: {
    backgroundColor: '#2aa189'
  },
  blueItem: {
    backgroundColor: '#268bd2'
  },
  magentaItem: {
    backgroundColor: '#d33682'
  },
  orangeItem: {
    backgroundColor: '#cb4b16'
  }
});

export default App;