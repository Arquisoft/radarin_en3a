import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SignInScreen from './SignInScreen'

export default function Enter({navigation}) {
  return (
    <View style={styles.container}>
        <Image 
          style={{width:"100%", height:300}}
          source={require('./assets/images/simple_logo.png')}
          resizeMode="contain"
        />

        <Text style={{fontSize: 40, fontWeight: "bold", color: 'white'}}>Hello!</Text>
        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginHorizontal:20}}
        >Welcome to radarin app, a place where you can see if your friends are near you</Text>

        <View style={{flexDirection:'row', margin: 20, paddingVertical: 20}}>
            <TouchableOpacity
              style={{backgroundColor:"#50555e", padding: 10, width: 150, borderRadius:30,
              marginHorizontal:10}} onPress={() => navigation.navigate('Log In')}>
              <Text style={{textAlign:'center', color:"#fff", fontSize:18}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor:"#fff", padding: 10, width: 150, borderRadius:30,
              marginHorizontal:10, borderWidth:1, borderColor:'#00000d'}} onPress={() => navigation.navigate('Sign In')}>
              <Text style={{textAlign:'center', color:"#00000d", fontSize:18}}>Sign in</Text>
            </TouchableOpacity>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});