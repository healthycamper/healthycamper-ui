import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export interface GlobalType {
  email: string;
  password: string;
}

export default function Councelor() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <>
    <View>
      <Text style={styles.label}>Choose a camper</Text>
    </View>
    <DropDownPicker
      // style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      />
    
      <View>
        <Text style={styles.label}>Add a new camper</Text>
        <TextInput
          style={styles.textBox}
          placeholder="name"
          //onChangeText={onChangeText}
          //value={value}
        />
      </View>


    </>
  );
  }

  const styles = StyleSheet.create({
    label: {
      marginTop: 50,
      marginBottom: 10,
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold'
    },
    textBox: {
      height: 40,
      margin: 5,
      borderWidth: 1, 
      padding: 10,
      borderRadius: 10
    }
  })
  