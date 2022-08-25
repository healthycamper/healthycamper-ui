import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { LogBox } from 'react-native';

//LogBox.ignoreLogs(['Sending...']);
const img = {uri: "https:www.creativefabrica.com/wp-content/uploads/2021/07/15/Wellness-and-Health-Logo-Graphics-14753823-1.jpg"}

const Home = ({navigation}: {navigation: any}) => {

    const pressHandlerLogin = () => {
        navigation.navigate('Login')
    }
    const pressHandlerSignup = () => {
      navigation.navigate('Signup')
  }

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 4 }}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>Please login or signup</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Login" onPress={()=>pressHandlerLogin()}/>
        <Button title="Signup" onPress={()=>pressHandlerSignup()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 2, 
    backgroundColor: "#fff", 
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 3,
    marginTop: 50,
    fontSize: 17,
    color: '#797979',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  buttons: {
    flex: 1
  },
  footer: {
    flexDirection: "row",
    flex: 1, 
    backgroundColor: "#fff",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default Home;