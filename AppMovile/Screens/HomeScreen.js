import React, { useState, useEffect, useRef } from "react";
import MapView from "react-native-maps";
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from "react-native";
import * as Location from "expo-location";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);

  let text = "Waiting..";
  let longitude = 0;
  let latitude = 0;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
  }  

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={{latitude, longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.005,
        }}> 
        <MapView.Marker
          coordinate = {{latitude, longitude}}
          title={"Current Location"}
        />
      </MapView>
      <TouchableOpacity
              style={{backgroundColor:"#03a9f4", padding: 10, width: 150, borderRadius:30,
              marginHorizontal:10, borderWidth:1, borderColor:"#03a9f4"}}
               >
              <Text style={{textAlign:"center", color:"#000000", fontSize:18}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
