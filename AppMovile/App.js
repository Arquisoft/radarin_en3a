import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EnterScreen from "./EnterScreen";
import SignInScreen from "./SignInScreen";
import LogInScreen from "./LogInScreen";
import HomeScreen from "./Screens/HomeScreen";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        initialRouteName={"Radarin"}
        >
        <Stack.Screen
          name="Radarin"
          component={EnterScreen}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
        />
        <Stack.Screen
          name="Log In"
          component={LogInScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },
});
