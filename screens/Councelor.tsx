import React, { useState } from 'react';
import { Alert, Modal, SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, Keyboard, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import plus from '../public/plus.png'

export interface GlobalType {
  nickname: string;
  age: string;
  diagnosis: string;
  medication: string;
  dosage: string;
  gender: string;
  parent: string;
  doctor: string;
}

export default function Councelor() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const [nickName, onChangeNickName] = useState<GlobalType['nickname']>("");
  const [age, onChangeAge] = useState<GlobalType['age']>("");
  const [diagnosis, onChangeDiagnosis] = useState<GlobalType['diagnosis']>("");
  const [medication, onChangeMedication] = useState<GlobalType['medication']>("");
  const [dosage, onChangeDosage] = useState<GlobalType['dosage']>("");
  const [gender, onChangeGender] = useState<GlobalType['gender']>("");
  const [parent, onChangeParent] = useState<GlobalType['parent']>("");
  const [doctor, onChangeDoctor] = useState<GlobalType['doctor']>("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.insideWrapper}>
    {/* <View>
        <Text style={styles.label}>Choose a camper</Text>
    </View> */}
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder = 'Select a camper'
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
    />
      <Pressable style={{borderRadius: 7, marginLeft: 4, backgroundColor: '#2196f3'}}
      onPress={() => setModalVisible(true)}>
        <Image style={{height: 50}} source={plus}/>
      </Pressable> 
  </View>
    <View>
      <Text style={styles.labelTwo} >Select a camper or create a new one</Text>
    </View>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </Pressable>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
        placeholder="Nickname"
        style={styles.input}
        onChangeText={onChangeNickName}
        value={nickName}
        onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Age"
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Diagnosis"
            style={styles.input}
            onChangeText={onChangeDiagnosis}
            value={diagnosis}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Medication"
            style={styles.input}
            onChangeText={onChangeMedication}
            value={medication}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Dosage"
            style={styles.input}
            onChangeText={onChangeDosage}
            value={dosage}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Gender"
            style={styles.input}
            onChangeText={onChangeGender}
            value={gender}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Parent number"
            style={styles.input}
            onChangeText={onChangeParent}
            value={parent}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Doctor number"
            style={styles.input}
            onChangeText={onChangeDoctor}
            value={doctor}
            onBlur={Keyboard.dismiss}
        />
            <Pressable
              style={styles.createButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.createButtonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
    </SafeAreaView>
  );
  }

  const styles = StyleSheet.create({
    insideWrapper: {
      flexDirection: 'row',
      marginTop: 50
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    safeAreaView: {
      flexDirection: "column",
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    dropdown: {
      borderColor: '#0284ff',
    },
    label: {
      marginTop: 50,
      fontSize: 18,
    },
    labelTwo: {
      marginTop: 20,
      fontSize: 14,
      color: '#a1a1a1',
    },
    createButton: {
      marginTop: 50,
      backgroundColor: '#0284ff',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 7,
      alignItems: 'center',
      color: '#fff'
    },
    createButtonText: {
      fontSize: 20,
      color: '#fff'
    },
    button: {
      marginTop: 450,
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
    },
    addCamperButton: {
      fontSize: 40,
      color: "blue",
      backgroundColor: 'red',
    }
  })
  