import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, Image } from "react-native";

const Signup = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        style={{width: 200, height: 200, marginBottom: 50}}
        source={{uri: 'https:www.creativefabrica.com/wp-content/uploads/2021/07/15/Wellness-and-Health-Logo-Graphics-14753823-1.jpg'}}
        resizeMode={'cover'}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
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

export default Signup
