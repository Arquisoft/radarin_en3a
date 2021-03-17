import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {createBottomTabNavigator, BottonTabBar} from "@react-navigation/bottom-tabs"
import {Home} from "./HomeScreen";
import {Location} from "./MapScreen";
import {UserInfo} from "./UserInfo";
import {icons} from "../constants/icons";
const Tab = createBottomTabNavigator();

export default function Tabs(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "trasparent",
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#ff6f00" : "#ffffff"
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.location}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#ff6f00" : "#ffffff"
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Friends"
                component={UserInfo}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#ff6f00" : "#ffffff"
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
