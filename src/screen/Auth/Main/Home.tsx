import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004d4d" />

      <View style={styles.headerWrapper}>
        <Image
          source={require('../../../../assets/home1.jpeg')}
          style={styles.image}
        />

        <View style={styles.overlayContent}>
          <View style={styles.headerIcons}>
            <Ionicons name="grid-outline" size={24} color="white" />
            <View style={styles.circle} />
          </View>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.title}>Student Database App</Text>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('addData')}>
              <AntDesign name="plus" size={28} color="#FFF" style={styles.cardIcon}/>
              <Text style={styles.cardText}>Add{'\n'}Student</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ViewData')}>
              <Ionicons name="eye-outline" size={28} color="#FFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>View{'\n'}Student</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('mapView')}>
              <Entypo name="location-pin" size={28} color="#FFF" style={styles.cardIcon}/>
              <Text style={styles.cardText}>Map{'\n'}View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Optional illustration below image */}
      <View style={{marginTop:50}}>
      <Image
            source={require('../../../../assets/homeS.jpeg')}
            style={styles.illustration}
            resizeMode="contain"
          />
          </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerWrapper: {
    height: '50%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerIcons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cce0e0',
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily:'Roboto_400Bold',
    marginTop: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:'Roboto_700Bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 150,
    width: '100%',
  },
  card: {
    backgroundColor: '#cce0e0',
    width: 100,
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    marginTop: 20,
    color: '#004d4d',
    fontSize: 16,
    fontFamily:'Roboto_400Bold',
    textAlign: 'center',
  },
  illustration: {
    width: '100%',
    height: 250,
    opacity: 0.3,
    marginTop: 20,
  },
  cardIcon:{backgroundColor:'#07575B',padding:10,borderRadius:30}
});
