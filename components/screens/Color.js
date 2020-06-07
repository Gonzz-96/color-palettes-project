import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import ColorBox from '../ColorBox';

const Color = ({ color }) => {

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.colorItem}>
      <Text style={styles.colorName}>{color.colorName}</Text>
      <View style={[styles.squareColor, { backgroundColor: color.hexCode }]} />
      <Switch
        style={styles.switchStyle}
        onValueChange={setIsEnabled}
        value={isEnabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorItem: {
    marginVertical: 10,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorName: {
    fontSize: 18,
    flex: 1,
  },
  switchStyle: {
    marginHorizontal: 10
  },
  squareColor: {
    height: 30,
    width: 30,
    marginRight: 30
  }
});

export default Color;