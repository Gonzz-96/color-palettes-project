import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import ColorBox from '../ColorBox';

const ColorPalette = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.colors}
        keyExtractor={(item, index) => item.hexCode}
        renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
        ListHeaderComponent={<Text style={styles.titleText}>{route.params.paletteName} Colors</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
  titleText: {
    marginTop: 40,
    marginBottom: 18,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ColorPalette;
