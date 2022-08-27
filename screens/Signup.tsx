import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, Image, Keyboard } from "react-native";
import Cookies from 'universal-cookie';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import homeStack from '../routes/homeStack';
import authContext from '../components/authContext';

const Stack = createStackNavigator();

export interface GlobalType {
    email: string;
    password: string;
    name: string;
    number: string; //number is a string make sure to translate it to number
    signedUp: boolean;
}


const Signup = () => {

  const [email, onChangeEmail] = useState<GlobalType['email']>("");
  const [password, onChangePassword] = useState<GlobalType['password']>("");
  const [name, onChangeName] = useState<GlobalType['name']>("");
  const [number, onChangeNumber] = useState<GlobalType['number']>();
//   const [signedUp, setSignedUp] = useState<GlobalType['signedUp']>(false);
  const { authenticated, setAuthenticated } = useContext(authContext);

  const signup = () => {
    const cookies = new Cookies()
      const requestOptions = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: email, password: password, name: name, number: number}),
        };
        fetch("http://localhost:3000/signup", requestOptions)
        .then((response) => {
        if(response.status === 403){
        // alert that email is in use
        }
            return response.json();
        })
        .then((data) => {
            console.log('this is data', data)
            setAuthenticated(true)
            cookies.set('councelorEmail', data.email);
        })
        .catch((err) => {
            console.log(err)
        })
  }

  return (
      <SafeAreaView style={styles.safeAreaView}>
      <Image
        style={{width: 150, height: 150, marginTop: -50, marginBottom: 30}}
        source={{uri: 'https:www.creativefabrica.com/wp-content/uploads/2021/07/15/Wellness-and-Health-Logo-Graphics-14753823-1.jpg'}}
        resizeMode={'cover'}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        onBlur={Keyboard.dismiss}
      />
        <TextInput
        placeholder="name"
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        onBlur={Keyboard.dismiss}
      />
        <TextInput
        placeholder="number"
        style={styles.input}
        onChangeText = {onChangeNumber}
        value={number}
        onBlur={Keyboard.dismiss}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        onBlur={Keyboard.dismiss}
      />
      <Pressable style={styles.button} onPress={()=>signup()}>
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: "#0284ff"
  },
  safeAreaView: {
    flexDirection: "column",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    color: 'red'
  },
  button: {
    marginTop: 50
  },
  buttonText: {
    fontSize: 20,
    color: "#0284ff"
  },
});

export default Signup
