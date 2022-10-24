import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pantallas
import HomeScreen from "./screens/Home";
import Comidas from "./screens/Comidas";
import Pasos from "./screens/Pasos";
import Login from "./screens/Login";

//iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comidas"
        component={Comidas}
        options={{
          tabBarLabel: "Comidas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-apple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pasos"
        component={Pasos}
        options={{
          tabBarLabel: "Pasos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-print"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
