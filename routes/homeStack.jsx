import React, { useContext } from 'react';
import Councelor from '../screens/Councelor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import authContext from '../components/authContext';

const Stack = createStackNavigator();

export default function homeStack() {
    const { authenticated } = useContext(authContext);
    return (
    <NavigationContainer>
    {authenticated ? (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
           <Stack.Screen name="Councelor" component={Councelor} />
        </Stack.Navigator>
    ) : <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >     
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    }   
    </NavigationContainer>
    );
  }