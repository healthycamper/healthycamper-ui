import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, Image, Keyboard } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export interface Selection {
    camperId: string;
    councelorId: string;
    quantity: string;
    type: string;
}

  export default function UpdateForm() {
    const [selectedEvent, setSelectedEvent] = useState<any>();

    const [camperId, onChangeCamperId] = useState<Selection['camperId']>(""); //set up camper id
    const [councelorId, onChangeCouncelorId] = useState<Selection['councelorId']>(""); //set up councelor id
    const [quantity, onChangeQuantity] = useState<Selection['quantity']>("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const submit = () => {
        console.log('consoled')
    }

    return (
        <SafeAreaView style={{marginTop: 150, alignItems: 'center'}}>
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={[
        {label: 'Carb intake', value: 'carbs'},
        {label: 'Glucose level', value: 'glucose'},
        {label: 'Insulin level', value: 'insulin'},
      ]}
      onSelectItem={(item) => {
        setSelectedEvent(item);
      }}
      setOpen={setOpen}
      setValue={setValue}
      placeholder = 'Select an input'
      textStyle={{fontSize: 17, color: '#a1a1a1' }}
      containerStyle={{
        width: '80%',
      }}
      listItemLabelStyle={{
        color: '#0284ff',
        
      }}
      selectedItemLabelStyle={{
        fontWeight: "bold",
      }}
      dropDownContainerStyle={{
        backgroundColor: 'white',
        borderColor: '#0284ff',
        maxHeight: 150
      }}
    />
        <TextInput
          placeholder="Quantity"
          keyboardType='numeric'
          style={styles.input}
          onChangeText={onChangeQuantity}
          value={quantity}
          onBlur={Keyboard.dismiss}
        />
        <Pressable style={styles.button} onPress={()=>submit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
          </SafeAreaView>
    );
  }

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
    dropdown: {
      borderColor: '#0284ff',
    },
    button: {
        width: 150,
        marginTop: 50,
        backgroundColor: '#0284ff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        alignItems: 'center',
        color: '#fff',
        marginBottom: 80
      },
      buttonText: {
        fontSize: 20,
        color: '#fff'
      }
  });

  