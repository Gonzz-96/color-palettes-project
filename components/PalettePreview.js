import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({ paletteName, colors }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>{paletteName} Colors</Text>
      <FlatList 
        style={{marginTop: 10}}
        horizontal={true}
        data={colors.slice(0, 5)} 
        keyExtractor={(item ) => item.hexCode}
        renderItem={({ item }) => <View style={[styles.colorPreview, {backgroundColor: item.hexCode}]}/>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  colorPreview: {
    height: 30,
    width: 30,
    marginRight: 6
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default PalettePreview;