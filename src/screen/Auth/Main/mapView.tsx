import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';

const studentData = [
  {
    id: '1',
    name: 'Micahel',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S2.jpeg'),
    location: { latitude: 37.775, longitude: -122.418 },
    fatherName:'Richard',
    motherName: 'Lily',
    contactNumber: '1234567890',
    emargencyNo: '9876543210',
    add1:'No 12',
    add2:'lake view',
    city:'chennai',
    state:'TN',
    zip:'600046',
    gender:'Male',
    DOB:'12/04/2003',
    blood:'AB-'
  },
  {
    id: '2',
    name: 'Amitha',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S1.jpeg'),
    location: { latitude: 37.778, longitude: -122.417 },
    fatherName:'Sam',
    motherName: 'benita',
    contactNumber: '98334567890',
    emargencyNo: '9835343210',
    add1:'No 10',
    add2:'mountain view',
    city:'madurai',
    state:'TN',
    zip:'600064',
    gender:'Female',
    DOB:'10/10/2006',
    blood:'B-'
  },
  {
    id: '3',
    name: 'Arul',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S3.jpeg'),
    location: { latitude: 37.774, longitude: -122.412 },
    fatherName:'mirchal',
    motherName: 'wanda',
    contactNumber: '09876433226',
    emargencyNo: '1111111111',
    add1:'No 309',
    add2:'avngers city',
    city:'LA',
    state:'Usa',
    zip:'600076',
    gender:'Female',
    DOB:'10/10/2006',
    blood:'B-'
  },
  {
    id: '4',
    name: 'Shankar',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S4.jpeg'),
    location: { latitude: 37.776, longitude: -122.414 },
    fatherName:'Thor',
    motherName: 'james Foster',
    contactNumber: '984286488',
    emargencyNo: '6380257320',
    add1:'No 143',
    add2:'castol',
    city:'Asgoard',
    state:'TN',
    zip:'700002',
    gender:'Female',
    DOB:'10/10/2006',
    blood:'B-'
  },
  {
    id: '5',
    name: 'Sarath',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S5.jpeg'),
    location: { latitude: 37.772, longitude: -122.419 },
    fatherName:'Richard',
    motherName: 'Lily',
    contactNumber: '1234567890',
    emargencyNo: '9876543210',
    add1:'No 12',
    add2:'lake view',
    city:'chennai',
    state:'TN',
    zip:'600046',
    gender:'Female',
    DOB:'10/10/2006',
    blood:'B-'
  },
  {
    id: '6',
    name: 'Jai sri',
    class: '6ᵗʰ Std - A',
    school: 'K.G School',
    image: require('../../../../assets/S6.jpeg'),
    location: { latitude: 37.770, longitude: -122.421 },
    fatherName:'Richard',
    motherName: 'Lily',
    contactNumber: '1234567890',
    emargencyNo: '9876543210',
    add1:'No 12',
    add2:'lake view',
    city:'chennai',
    state:'TN',
    zip:'600046',
    gender:'Female',
    DOB:'10/10/2006',
    blood:'B-'
  },
];


export default function mapView() {
  const navigation = useNavigation()
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#004d4d" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Data</Text>
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {studentData.map((student) => (
          <Marker
            key={student.id}
            coordinate={student.location}
            onPress={() => setSelectedStudentId(student.id)} 
          >
            <View style={styles.markerWrapper}>
              {selectedStudentId === student.id && (
                <TouchableOpacity
                onPress={() => navigation.navigate('StudentDetail', { student })}
              >
                <View style={styles.nameBubble}>
                  <Text style={styles.nameText}>{student.name}</Text>
                </View>
              </TouchableOpacity>
              
              )}
              <View style={styles.marker}>
                <Image source={student.image} style={styles.image} />
              </View>
            </View>
          </Marker>

        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  marker: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#80deea',
    backgroundColor: 'white',
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 30,
  },
  header: {
    backgroundColor: '#004d4d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    marginLeft: 12,
  },
  markerWrapper: {
    alignItems: 'center',
  },
  
  nameBubble: {
    backgroundColor: '#d9f7f6',
    // paddingHorizontal: 8,
    // paddingVertical: 4,
    // borderRadius: 8,
    // marginBottom: 4,
    // borderWidth: 1,
    // borderColor: '#80deea',
  },
  
  nameText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#00796b',
  },
  
});
