import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Home(){
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30, color: 'white', marginHorizontal:20, textAlign:'justify'}}
        >WELCOME TO THE RADARIN APPLICATION !!!</Text>  
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
