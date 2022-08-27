import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
      <Text style={styles.label} >Choose a camper</Text>
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
    </>
  );
  }

  const styles = StyleSheet.create({
    label: {
      marginTop: 50,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 'bold'
    }
  })
  