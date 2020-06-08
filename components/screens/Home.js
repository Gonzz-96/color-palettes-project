import  React, { useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import PalettePreview from '../PalettePreview';

const Home = ({ navigation, route }) => {
  const newColorsPalette = route.params
    ? route.params.newPalette
    : null;

  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColorPalettes = useCallback(async () => {
    const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
    if (response.ok) {
      const colorPalettes = await response.json();
      setColors(colorPalettes.filter(function(item) {
        return item.paletteName != "Frontend Masters"
      }));
    }
  }, []);

  useEffect(() => {
    getColorPalettes()
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (newColorsPalette) {
      setColors(current => [newColorsPalette, ...current])
    }
  }, [newColorsPalette])

  return (
    <FlatList 
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity onPress={() => {
          navigation.navigate('ColorPaletteModal')
        }}>
          <Text style={styles.launchModalButton}>Add a color scheme</Text>
        </TouchableOpacity>
      }
      data={colors}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={{ marginBottom: 15 }}
            onPress={() => {
              navigation.navigate('ColorPalette', item)
            }}>
            <PalettePreview 
              paletteName={item.paletteName}
              colors={item.colors}/>
        </TouchableOpacity>)
      }}
    />
  );
};

const styles = StyleSheet.create({
  launchModalButton: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 25,
    color: 'teal'
  }
});

export default Home;
