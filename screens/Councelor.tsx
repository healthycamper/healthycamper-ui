import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Alert, Modal, SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, Keyboard, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import plus from '../public/plus.png'
import UpdateForm from './UpdateForm';
import authContext from '../components/authContext';

export interface CamperType {
  name: string;
  age: string;
  gender: string;
  diagnosis: string;
  medication: string;
  dosage: string;
  dosageUnits: string;
  doctor: DoctorType;
  parent: ParentType
}
export interface ParentType {
  name: string;
  relation: string;
  phoneNumber: string;
  email: string
}
export interface DoctorType {
  name: string;
  relation: string;
  phoneNumber: string;
  email: string
}

export default function Councelor() {
  const [selectedCamper, setSelectedCamper] = useState<any>();

  const [campers, setCampers] = useState<CamperType[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const { authenticated, setAuthenticated } = useContext(authContext);
  
  const [name, onChangeName] = useState<CamperType['name']>("");
  const [age, onChangeAge] = useState<CamperType['age']>("");
  const [diagnosis, onChangeDiagnosis] = useState<CamperType['diagnosis']>("");
  const [gender, onChangeGender] = useState<CamperType['gender']>("");

  const [medication, onChangeMedication] = useState<CamperType['medication']>("");
  const [dosage, onChangeDosage] = useState<CamperType['dosage']>("");
  const [dosageUnits, onChangeDosageUnits] = useState<CamperType['dosageUnits']>("");
  
  const [parentName, onChangeParentName] = useState<ParentType['name']>("");
  const [parentNumber, onChangeParentNumber] = useState<ParentType['phoneNumber']>("");
  const [parentRelationship, onChangeParentRelationship] = useState<ParentType['relation']>("");
  const [parentEmail, onChangeParentEmail] = useState<ParentType['email']>("");

  const [doctorCamperNickname, onChangeDoctorCamperNickname] = useState<DoctorType['name']>("");
  const [doctorNumber, onChangeDoctorNumber] = useState<DoctorType['phoneNumber']>("");
  const [doctorRelationship, onChangeDoctorRelationship] = useState<DoctorType['relation']>("");
  const [doctorEmail, onChangeDoctorEmail] = useState<DoctorType['email']>("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const logout = () => {
    setAuthenticated(false)
  }

  useEffect(() => {
    fetch("http://localhost:3000/campers") 
    .then((response) => { 
        return response.json();
    })
      .then((data) => {
        setCampers(data)
    }) 
  }, []);
  useEffect(() => {
     if(selectedCamper){
      console.log('selected', selectedCamper)
     }
}, [selectedCamper]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View>
      <Text style={styles.labelTwo} >Select a camper or create a new one</Text>
    </View>
    <View style={styles.insideWrapper}>
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={campers.map((camper) => ({label: camper.name as string, value: camper.name as string}))}
      onSelectItem={(item) => {
        setSelectedCamper(item);
      }}
      setOpen={setOpen}
      setValue={setValue}
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
      dropDownContainerStyle={{
        backgroundColor: 'white',
        borderColor: '#0284ff',
        maxHeight: 150
      }}
    />
      <Pressable style={{borderRadius: 7, marginLeft: 4, backgroundColor: '#2196f3'}}
      onPress={() => setModalVisible(true)}>
        <Image style={{height: 50}} source={plus}/>
      </Pressable> 
  </View>
    {selectedCamper ? (
      <>
            <UpdateForm />
      <Pressable onPress={()=>logout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
      </>
        ) :    
      <Pressable onPress={()=>logout()} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    }
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
        placeholder="Nickname"
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
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
            placeholder="Gender"
            style={styles.input}
            onChangeText={onChangeGender}
            value={gender}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Diagnosis"
            style={styles.input}
            onChangeText={onChangeDiagnosis}
            value={diagnosis}
            onBlur={Keyboard.dismiss}
        />
        
        <View>
          <Text style={styles.labelBetween} >Medication info</Text>
        </View>
        <TextInput
            placeholder="Medication"
            style={styles.inputMedication}
            onChangeText={onChangeMedication}
            value={medication}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Dosage"
            style={styles.inputMedication}
            onChangeText={onChangeDosage}
            value={dosage}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Dosage units"
            style={styles.inputMedication}
            onChangeText={onChangeDosageUnits}
            value={dosageUnits}
            onBlur={Keyboard.dismiss}
        />
        <View>
          <Text style={styles.labelBetween} >Parent info</Text>
        </View>
        <TextInput
            placeholder="Parent name"
            style={styles.input}
            onChangeText={onChangeParentName}
            value={parentName}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Relation to camper"
            style={styles.input}
            onChangeText={onChangeParentRelationship}
            value={parentRelationship}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Parent number"
            style={styles.input}
            onChangeText={onChangeParentNumber}
            value={parentNumber}
            onBlur={Keyboard.dismiss}
        />
         <TextInput
            placeholder="Parent email"
            style={styles.input}
            onChangeText={onChangeParentEmail}
            value={parentEmail}
            onBlur={Keyboard.dismiss}
        />
        <View>
          <Text style={styles.labelBetween} >Doctor info</Text>
        </View>
        <TextInput
            placeholder="Camper nickname"
            style={styles.input}
            onChangeText={onChangeDoctorCamperNickname}
            value={doctorCamperNickname}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Relation to patient"
            style={styles.input}
            onChangeText={onChangeDoctorRelationship}
            value={doctorRelationship}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Doctor number"
            style={styles.input}
            onChangeText={onChangeDoctorNumber}
            value={doctorNumber}
            onBlur={Keyboard.dismiss}
        />
        <TextInput
            placeholder="Doctor email"
            style={styles.input}
            onChangeText={onChangeDoctorEmail}
            value={doctorEmail}
            onBlur={Keyboard.dismiss}
        />
            <View style={styles.buttonWrapper}>
            <Pressable
              style={styles.createButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.createButtonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.createButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.createButtonText}>Submit</Text>
            </Pressable>
            </View>
          </View>
        </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
  }

  const styles = StyleSheet.create({
    insideWrapper: {
      flexDirection: 'row',
      marginTop: 20
    },
    buttonWrapper: {
      flexDirection: "row",
      flex: 1, 
      backgroundColor: "#fff",
      justifyContent: 'space-around',
      alignItems: 'center'
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
      marginTop: 40,
      fontSize: 14,
      color: '#a1a1a1',
    },
    labelBetween: {
      marginTop: 10,
      fontSize: 14,
      color: '#a1a1a1',
    },
    createButton: {
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
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
    inputMedication: {
      height: 40,
      marginTop: 12,
      borderRadius: 8,
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderColor: "#0284ff",
      backgroundColor: '#e2f2fe'
    },
    addCamperButton: {
      fontSize: 40,
      color: "blue",
      backgroundColor: 'red',
    }
  })
  