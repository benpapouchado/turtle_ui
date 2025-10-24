import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
// import { eye } from 'react-icons-kit/feather/eye';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomDatePicker from '../DatePicker/CustomDatePicker';
import FormInput from '../shared';

export default function CreateAccountScreen() {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('password');
  const [email, setEmail] = useState('');

  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>

        <View>
          <Text style={styles.textHeader}>Create Frog Account</Text>
        </View>

        <FormInput onChangeText={setFirstName} placeHolder={'First Name'} />
        <FormInput onChangeText={setLastName} placeHolder={'Last Name'} />
        <FormInput onChangeText={setUserName} placeHolder={'User Name'} />

        <Button title="Check Availability" onPress={() => { }} />

        <FormInput onChangeText={setPassword} placeHolder={'Password'} />
        <FormInput onChangeText={setEmail} placeHolder={'Email'} />

        <CustomDatePicker date={date.toDateString()} />
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.button}>Create Account</Text>
        </TouchableOpacity>

        <Button title="Already have an account? Log In" onPress={() => router.navigate('/Login/login')} />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start',

  },
  textHeader: {
    color: '#fff',
    fontSize: 30,
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 20,
    fontFamily: 'Poppins',
  },
  input: {
    height: 50,
    margin: 12,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins',
    borderRadius: 15,
    borderColor: '#fff',
    backgroundColor: '#3a3f45',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  button: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: 'white'
  },
  createAccountButton: {
    margin: 50,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#0d8529c9",
    alignItems: 'center',
    justifyContent: 'center',
  }
});