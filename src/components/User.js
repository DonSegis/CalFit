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
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfigs } from "../database/firebaseAutentication";

export default function User({ id, name, age, height, weight, sex }) {
  const navigation = useNavigation();
  const App = initializeApp(firebaseConfigs);
  const auth = getAuth(App);
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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("login");
      })
      .catch((error) => alert(error.message));
  };

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
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
