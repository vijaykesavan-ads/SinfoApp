import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../../assets/WelcomeS.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Student{'\n'}App...</Text>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Signin')}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:50,justifyContent:'center'}}>
        <Text style={styles.signupText} >
          Don’t have an account? <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={styles.signupLink}>SignUp</Text></TouchableOpacity>
        </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2E1E7',
  },
  topContainer: {
    flex: Platform.OS === 'ios' ? 1.03 : 1.03,
    backgroundColor: '#07575B',
  },
  image: {
    height: '100%',
    width: '100%',
    marginTop: 40,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal:30
  },
  title1: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#003D40',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#005C63',
    paddingVertical: 20,
    alignItems:'center',
    borderRadius: 30,
    marginTop:50,
    marginBottom: 30,
  },
  loginText1: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
  },
  signupText2: {
    color: '#888',
    fontSize: 14,
  },
  signupLink1: {
    color: '#005C63',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 50,
    color: '#003B46',
    marginBottom: 30,
    fontFamily: 'Roboto_700Bold',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
  },
  signupText: {
    color: '#66A5AD',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  signupLink: {
    color: '#005C63',
    top:4,
    fontFamily: 'Roboto_700Bold',
  },
  
});
