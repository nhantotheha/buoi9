import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
import { saveLoginState } from '../utils/auth';

const SignIn = ({ navigation }) => {
  const handleSignIn = async () => {
    await saveLoginState(true);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <CustomTextInput placeholder="Enter your email here!" />
      <CustomTextInput placeholder="Enter your password here!" secureTextEntry={true} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>For got password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <IconButton
        iconName="google"
        text="Google"
        color="#DB4437"
        onPress={() => console.log('Google sign in')}
      />
      <IconButton
        iconName="facebook"
        text="Facebook"
        color="#3b5998"
        onPress={() => console.log('Facebook sign in')}
      />
      <TouchableOpacity>
        <Text style={styles.signUpText}>Not yet a member? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#f4a261',
    textAlign: 'right',
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#f4a261',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  signUpText: {
    color: '#f4a261',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignIn;