import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signUpButton = async () => {
    console.log('username', username);
    console.log('phone', phone);
    console.log('password', password);
    console.log('confirmPassword', confirmPassword);

    if (!username || !phone || !password || !confirmPassword) {
      setErrorMessage('Please fill out all fields.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
      navigation.navigate('Home')
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/SignupS.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formDesign}>
        <Text style={styles.title}>SIGN UP</Text>

        <TextInput
          style={styles.input}
          placeholder="User Name"
          placeholderTextColor="#07575B"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone no"
          placeholderTextColor="#07575B"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#07575B"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#07575B"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        <TouchableOpacity style={styles.signupButton} 
        onPress={signUpButton}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Signin')}
              style={styles.signinLink}
            >
              SignIn
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    height: '40%',
    backgroundColor: '#07575B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  formDesign:{padding:20,
    backgroundColor:'#66A5AD',
    marginTop: -100,
    borderRadius:12
},
  formContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    color: '#003B46',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#005C63',
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#003B46',
  },
  signupButton: {
    backgroundColor: '#005C63',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signinContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  signinText: {
    fontSize: 14,
    color: '#003B46',
  },
  signinLink: {
    color: '#005C63',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  
});
