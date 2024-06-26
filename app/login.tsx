import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, Text, View ,Image, TextInput} from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { defaultStyles } from '@/constants/styles';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';

const Page = () => {
    const { type } = useLocalSearchParams<{ type: string }>();
    const [loding, setLoding] = useState(false);
    const [emailAddress, setEmailAddress] = useState("cool@green.com");
    const [password, setPassword] = useState('');

    // clerk
    const { signUp, isLoaded, setActive } = useSignUp();
    const { signIn, isLoaded: singnUpLoaded, setActive:signUpSetActive } = useSignIn();

    const onSignUpPress = async () => {console.log({emailAddress,password}) };
    const onSignInPress = async () => { };

  return (
      <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={70}
          style={[styles.container]}
      >
          {loding && (<View style={defaultStyles.loadingOverlay}>
              <ActivityIndicator size={'large'} color={'#fff'} />
          </View>)}
          {/*  */}
          <Image source={require('../assets/images/logo-dark.png')} style={styles.logo} />
          <Text style={styles.title}>{type === 'login' ? 'Welcame back' : 'Create your account'}</Text>

          <View style={{ marginBottom: 30 }}>
              <TextInput
                  placeholder='Email'
                  autoCapitalize='none'
                  style={styles.inputField}
                  value={emailAddress}
                  onChangeText={setEmailAddress}
              />
              <TextInput
                  placeholder='Password'
                  autoCapitalize='none'
                  style={styles.inputField}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
              />
          </View>

          {type === 'login' ?(
            <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]} onPress={onSignInPress}>
                  <Text style={styles.btnPrimaryText}>Log In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]} onPress={onSignUpPress}>
                <Text style={styles.btnPrimaryText}>Create Account</Text>
            </TouchableOpacity>
          )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
    logo: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginVertical:80,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    inputField: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 12,
        padding: 10,
        backgroundColor:'#fff'
    },
    btnPrimary: {
        backgroundColor: Colors.primary,
        marginVertical:4,
    },
    btnPrimaryText: {
        color: '#fff',
        fontSize:16
    }
})

export default Page
