import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function User({ id, name, age, height, weight, sex }) {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Feather
          name="edit"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Edit")}
        />
      ),
    });
  }, []);
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
