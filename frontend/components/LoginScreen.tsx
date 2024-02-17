import React from 'react';
import { View, Text, Button , StyleSheet, Image, GestureResponderEvent, TouchableOpacity, Linking, StatusBar} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
// import pg from '../assets/images/pg.png';
// 

type HomeScreenProps = {
    navigation: StackNavigationProp<any>; // Replace 'any' with your stack parameters if needed
  };
const LoginScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const openWeb = (event: GestureResponderEvent): void => {
        const serverUrl = 'http://10.0.2.2:8000';
        Linking.openURL(`${serverUrl}/login/google`);
      };

  return (
    <View style={{ flex: 1 }}>
     <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

      {/* <Image source={pg} style={{ width: '100%', height: 850, marginTop: 0 }} /> */}


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }}>
    
        <TouchableOpacity
          onPress={openWeb}
          style={{ backgroundColor: 'transparent', marginTop: 350 }}
         >
        <View style={{ borderWidth: 2, justifyContent: 'center', borderRadius: 10, padding: 10, alignItems: 'center' }}>
        <Icon name="google" size={30} color="black" />
        <Text style={{ color: 'black', fontSize: 20 }}>Sign in with Google</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ backgroundColor: 'transparent', marginTop: 20 }}
        >
        <View style={{ borderWidth: 2, justifyContent: 'center', borderRadius: 10, padding: 12, alignItems: 'center' }}>
           <Icon name="home" size={30} color="black" />
            <Text style={{ color: 'black', fontSize: 20 }}>Go to Home</Text>
          </View>
        </TouchableOpacity>

        <View style={{  padding: 10,marginTop: 70, alignItems: 'center' }}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25 ,}}>Welcome!</Text>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15 ,}}>Smartly Scheduled, Perfectly Managed!</Text>

          </View>


      </View>
    </View>
);
};
 

const styles = StyleSheet.create({
      container: {
        flex: 1,  
        backgroundColor: '#e6ecfa', 
        padding: 80, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
      
      },
      image: {
        width: 200,
        height: 200,
      },
      logoContainer: {
            position: 'absolute',
            top: 0, // Adjust for desired top margin
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
             // Center the logo horizontally
          },
          textContainer: {
                position: 'relative',
                top: 400,
                backgroundColor: '#9e3c60',
                padding:10,
                // alignItems: 'center',
                // justifyContent: 'center', 
                marginRight: 100,
                zIndex: 2, 
              }, 
           homeButton:{
            position: 'absolute',
                top: 600,
                backgroundColor: '#9e3c60',
                padding:10,
                alignItems: 'center',
                justifyContent: 'center', 
                zIndex: 2, 
           }
        });
        

export default LoginScreen;
