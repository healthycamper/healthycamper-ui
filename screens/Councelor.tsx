import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export interface GlobalType {
  nickname: string;
  email: string;
  password: string;
}

export default function Councelor() {
  const [nickName, onChangeNickName] = useState<GlobalType['nickname']>("");
  const [email, onChangeEmail] = useState<GlobalType['email']>("");
  const [password, onChangePassword] = useState<GlobalType['password']>("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View>
      <Text style={styles.label} >Choose a camper</Text>
    </View>
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      labelStyle={{
        color: '#0284ff',
      }}
      listItemLabelStyle={{
        color: '#0284ff',
      }}
      selectedItemLabelStyle={{
        fontWeight: "bold"
      }}
    />
    <View>
      <Text style={styles.labelTwo} >or create a new one</Text>
    </View>
    <TextInput
        placeholder="Nick name"
        style={styles.input}
        onChangeText={onChangeNickName}
        value={nickName}
        onBlur={Keyboard.dismiss}
    />
     <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        onBlur={Keyboard.dismiss}
    />
    <TextInput
        placeholder="Password"
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        onBlur={Keyboard.dismiss}
    />
    <Pressable style={styles.createButton}>
      <Text style={styles.createButtonText}>Create</Text>
    </Pressable>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </Pressable>
    </SafeAreaView>
  );
  }

  const styles = StyleSheet.create({
    safeAreaView: {
      flexDirection: "column",
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    dropdown: {
      marginBottom: 50,
      borderColor: '#0284ff'
    },
    label: {
      marginTop: 50,
      marginBottom: 30,
      fontSize: 18,
    },
    labelTwo: {
      marginBottom: 40,
      fontSize: 18,
    },
    createButton: {
      marginTop: 50,
      backgroundColor: '#0284ff',
      padding: 10,
      width: 120,
      borderRadius: 7,
      alignItems: 'center'
    },
    createButtonText: {
      fontSize: 20,
      color: '#fff'
    },
    button: {
      marginTop: 80,
      alignSelf: 'center'
    },
    buttonText: {
      fontSize: 20,
      color: "#0284ff"
    },
    input: {
      height: 40,
      marginTop: 12,
      borderRadius: 8,
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderColor: "#0284ff"
    }
  })
  