import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function LogIn({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 16, color: "white", marginHorizontal:20}}
        >Select a Solid provider to enter your account</Text>

        <View style={{flexDirection:"column", margin: 20, paddingVertical: 20}}>
            <TouchableOpacity
              style={{backgroundColor:"#fff", padding: 10, width: 190, borderRadius:30,
              marginVertical:10, borderWidth:1, borderColor:"#00000d"}} onPress={() => navigation.navigate("Home")}>
              <Text style={{textAlign:"center", color:"#00000d", fontSize:18}}>Inrupt</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor:"#fff", padding: 10, width: 190, borderRadius:30,
              marginVertical:10, borderWidth:1, borderColor:"#00000d"}} onPress={() => navigation.navigate("Home")}>
              <Text style={{textAlign:"center", color:"#00000d", fontSize:18}}>Solid project</Text>
            </TouchableOpacity>
        </View>  
    </View>
  );
}
