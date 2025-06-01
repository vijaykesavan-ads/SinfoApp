import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function mapSelect() {
  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setRegion(initialRegion);
      setMarker({ latitude, longitude });

      mapRef.current?.animateToRegion(initialRegion, 1000);
    })();
  }, []);

  const handleConfirm = () => {
    if (marker) {
      navigation.navigate('addData', { selectedLocation: marker });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {region && (
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFillObject}
          initialRegion={region}
          onRegionChangeComplete={(newRegion) => setMarker({
            latitude: newRegion.latitude,
            longitude: newRegion.longitude
          })}
        >
          {marker && (
            <Marker coordinate={marker} draggable
              onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)}
            />
          )}
        </MapView>
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  confirmButton: {
    backgroundColor: '#004d4d',
    padding: 14,
    borderRadius: 12,
    paddingHorizontal: 24,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
