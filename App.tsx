import { StatusBar } from 'expo-status-bar';
import Navigator from './routes/homeStack';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LandingScreen from './screens/LandingScreen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Councelor from './screens/Councelor';
// import Student from './screens/Student';

// const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
          {/* <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Student" component={Student} />
          <Stack.Screen name="Councelor" component={Councelor} />
          </Stack.Navigator>
          
        </NavigationContainer>  */}
        <Navigator />
      </SafeAreaProvider>
    );
  }
}
