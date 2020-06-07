import  React, { useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import PalettePreview from '../PalettePreview';

const Home = ({ navigation }) => {

  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColorPalettes = useCallback(async () => {
    const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
    if (response.ok) {
      const colorPalettes = await response.json();
      setColors(colorPalettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getColorPalettes()
  }, [])

  return (
    <FlatList 
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity onPress={() => {
          navigation.navigate('ColorPaletteModal')
        }}>
          <Text>Launch Modal</Text>
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

export default Home;
