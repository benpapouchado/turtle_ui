import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FormInputProps {
    placeHolder: string;
}

function FormInput({ placeHolder }: FormInputProps) {
    return ( 
            <View>      
              <TextInput style={styles.input} placeholder={placeHolder} placeholderTextColor="#625f5fff" />
            </View>
);}


export default function CreateAccountScreen() {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios'); // keep picker open on iOS
    if (selectedDate) setDate(selectedDate);
  };

  const showPicker = (currentMode: 'date' | 'time') => {
    setMode(currentMode);
    setShow(true);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>

        <View>
          <Text style={styles.textHeader}>Create Frog Account</Text>
        </View>
        
        <FormInput placeHolder={'First Name'} />
        <FormInput placeHolder={'Last Name'} />

        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 30}}>
            <TextInput style={[styles.input, {flex: 1, marginRight: 8}]} placeholder="User Name" placeholderTextColor="#625f5fff" />
            <Button title="Check Availability" onPress={() => {}} />
          </View>
        </View>

        <FormInput placeHolder={'Password'} />
        <FormInput placeHolder={'Email'} />
   
    <View style={styles.container}>
      <Text style={styles.text}>Selected: {date.toLocaleString()}</Text>

      <Button title="Select Date" onPress={() => showPicker('date')} />

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
        />
      )}
    </View>

    <View style={{paddingTop: 20, paddingLeft: 30, paddingRight: 30}}>
        <Button color="#009f28ff" title="Create Account" onPress={() => {}} />
    </View>
  
        
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
  text:{
    color: '#fff',
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 20,
    color: '#fff',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: '#3a3f45',
  },
  button: {
    fontSize: 30,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});