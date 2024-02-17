import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image, StatusBar } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
// import hh from '../assets/images/hh.png';



const serverUrl = 'http://10.0.2.2:8080'; // Update with the correct server URL

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [washTime, setWashTime] = useState('');

  const bookSlot = async () => {
    try {
      const response = await axios.post(`${serverUrl}/assign_machine`, {
        user_name: username,
        wash_time: Number(washTime),
      });

      const { message } = response.data;
      console.log(message);
      navigation.navigate('Status', { username, washTime });

    } catch (error) {
      console.error('Error booking slot:', error);
    }
  };

  

  return (
    <View style={{ flex: 1 }}>
           <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

      {/* <Image source={hh} style={{ width: '100%', height: 700, marginTop: 0 }} /> */}
      <View style={{ flex: 1, marginTop:380, alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }}>

      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
  
      <TextInput
        placeholder="Wash time needed"
        value={washTime}
        onChangeText={(text) => setWashTime(text)}
        style={styles.input}
      />
  
      <TouchableOpacity onPress={bookSlot} style={styles.transparentButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Book Slot</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>

  );
  };
  
  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      width: 200,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    transparentButton: {
      backgroundColor: 'transparent',
    },
  });
  

export default HomeScreen;
