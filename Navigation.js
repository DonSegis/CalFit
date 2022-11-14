import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pantallas
import HomeScreen from "./screens/Home";
import ListaComidas from "./screens/ListaComidas";
import Pasos from "./screens/Pasos";
import Login from "./screens/Login";

//iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateIngredients from "./screens/CreateIngredients";
import Comidas from "./screens/Comidas";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Comidas" component={Comidas} />
      <Stack.Screen name="ListarComidas" component={ListaComidas} />
      <Stack.Screen name="add" component={CreateIngredients} />
    </Stack.Navigator>
  );
}

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
        component={MyStack}
        options={{
          headerShown: false,
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
