import  React, { useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
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

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS},
  { paletteName: 'Rainbow', colors: RAINBOW }
];

export default Home;
