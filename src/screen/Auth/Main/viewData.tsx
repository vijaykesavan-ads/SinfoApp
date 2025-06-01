import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

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

export default function ViewData() {
  const navigation = useNavigation()
  const renderItem = ({ item }:any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subInfo}>{item.class} / {item.school}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => {
          console.log('Selected Student:', item);
          navigation.navigate('StudentDetail',{student:item});
        }}
      >
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Data</Text>
      </View>

      <FlatList
        data={studentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    fontFamily:'Roboto_700Bold',
    marginLeft: 12,
  },
  list: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaf6f6',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#00a1a1',
    borderWidth: 2,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subInfo: {
    fontSize: 13,
    color: '#4a7070',
    marginTop: 4,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#004d4d',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
