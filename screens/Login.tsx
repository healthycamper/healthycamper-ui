import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, Image, Keyboard } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Councelor from './Councelor';
import Cookies from 'universal-cookie';

const Stack = createStackNavigator();


export interface GlobalType {
  email: string;
  password: string;
  loggedIn: boolean;
}

const Login = () => {
  const [email, onChangeEmail] = useState<GlobalType['email']>("");
  const [password, onChangePassword] = useState<GlobalType['password']>("");
  const [loggedIn, setLoggedIn] = useState<GlobalType['loggedIn']>(false);

  const login = () => {
    const cookies = new Cookies()
      const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({password: password, email: email}),
    };
    fetch("http://localhost:3000/signin", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log('this is data', data)
      setLoggedIn(true)
      // cookies.set('councelorEmail', data.email);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    loggedIn ? (
      <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Councelor" component={Councelor} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    ) : (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        style={{width: 150, height: 150, marginTop: -100, marginBottom: 50}}
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
        placeholder="password"
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        onBlur={Keyboard.dismiss}
      />
      <Pressable style={styles.button} onPress={()=>login()}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
        </SafeAreaView>
    )
  );
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

export default Login
