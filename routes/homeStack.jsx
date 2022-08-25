import { Text, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    }
}

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack)
// export default function homeStack() {
//     return (
//         <NavigationContainer>
//           <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Review Details" component={ReviewDetails} />
//           </Stack.Navigator>
//         </NavigationContainer>
//     );
//   }

