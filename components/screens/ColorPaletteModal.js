import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ColorPaletteModal = () => {

  const [paletteName, setPaletteName] = useState("");

  return(
    <View style={styles.container}>
      <Text style={styles.instructions}>Name of your color palette</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setPaletteName}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  instructions: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    marginVertical: 15,
    padding: 10,
    borderColor: '#4c4c4c',
    borderRadius: 5,
  },
});

export default ColorPaletteModal;