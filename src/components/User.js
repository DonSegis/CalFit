import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function User({ id, name, age, height, weight, sex }) {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>Hola! {name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 140,
        }}
      >
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Text>Age: {age}</Text>
        </View>
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Text>Height: {height}</Text>
        </View>
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Text>Weight: {weight}</Text>
        </View>
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Text>Sex: {sex}</Text>
        </View>
      </View>
    </View>
  );
}
