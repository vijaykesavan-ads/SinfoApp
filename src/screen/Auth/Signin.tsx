import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
    } else if (username !== 'Vijayvk@123' || password !== 'Vijay@111') {
      setErrorMessage('Invalid username or password.');
    } else {
      setErrorMessage('');
      navigation.navigate('Home');
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/SigninS.jpeg')}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formBox}>
          <Text style={styles.title}>SIGN IN</Text>

          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="#07575B"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#07575B"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.forgotText}>Forget Password ?</Text>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupLinkContainer}>
          <Text style={styles.signupText}>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.signupLink}
            >
              {' '}
              SignUp
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
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formBox: {
    backgroundColor: '#BEE0E3',
    padding: 20,
    borderRadius: 10,
    marginTop: -40,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  forgotText: {
    color: '#005C63',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#07575B',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLinkContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#003B46',
  },
  signupLink: {
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
