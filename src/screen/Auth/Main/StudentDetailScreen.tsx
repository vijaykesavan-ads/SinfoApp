import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

export default function StudentDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { student }: any = route.params;
console.log("studentstudent--->",student);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={student.image} style={styles.avatar} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.subText}>{student.class} Section</Text>
        <Text style={styles.subText}>{student.school}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoBox}>Gender{'\n'}<Text style={styles.infoValue}>{student.gender}</Text></Text>
        <Text style={styles.infoBox}>DOB{'\n'}<Text style={styles.infoValue}>{student.DOB}</Text></Text>
        <Text style={styles.infoBox}>Blood{'\n'}<Text style={styles.infoValue}>{student.blood}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parents Details</Text>
        <Text style={styles.label}>Father's name: <Text style={styles.value}>{student.fatherName}</Text></Text>
        <Text style={styles.label}>Mother's name: <Text style={styles.value}>{student.motherName}</Text></Text>
        <Text style={styles.label}>Contact no.: <Text style={styles.value}>{student.contactNumber}</Text></Text>
        <Text style={styles.label}>Emergency contact no.: <Text style={styles.value}>{student.emargencyNo}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Residential Details</Text>
        <Text style={styles.label}>Address 1: <Text style={styles.value}>{student.add1}</Text></Text>
        <Text style={styles.label}>Address 2: <Text style={styles.value}>{student.add2}</Text></Text>
        <Text style={styles.label}>City: <Text style={styles.value}>{student.city}</Text></Text>
        <Text style={styles.label}>State: <Text style={styles.value}>{student.state}</Text></Text>
        <Text style={styles.label}>Zip: <Text style={styles.value}>{student.zip}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <MapView
    style={styles.map}
    initialRegion={{
      latitude: student.location.latitude,
      longitude: student.location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Marker
      coordinate={{
        latitude: student.location.latitude,
        longitude: student.location.longitude,
      }}
      title={student.name}
    />
  </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#006666',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#006666',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 8,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  subText: { color: '#d9f9f9', fontSize: 14 },
  map: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  infoBox: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#e0f7f7',
    borderRadius: 8,
    width: 100,
    fontWeight: 'bold',
  },
  infoValue: {
    fontWeight: 'normal',
    color: '#004d4d',
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#d0eaea',
    borderRadius: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 15,
    color: '#004d4d',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  value: {
    fontWeight: '500',
    color: '#006666',
  },
});
