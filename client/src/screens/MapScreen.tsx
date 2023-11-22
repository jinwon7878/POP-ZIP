import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, TextInput, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    // Google Places API 호출 로직을 여기에 구현
    // 예: const response = await searchLocation(searchTerm);
    // setRegion({...region, latitude: response.lat, longitude: response.lng});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for places"
      />
      <Button title="Search" onPress={handleSearch} />
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBar: {
    width: Dimensions.get('window').width,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginTop: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
