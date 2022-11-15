import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { database } from "../src/database/firebase";
import { collection, addDoc } from "firebase/firestore";

function CreateUser() {
  const [state, setState] = React.useState({
    name: "",
    age: 0,
    height: 0,
    weight: 0,
    sex: "",
  });

  const handleChangetext = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const createNewUser = () => {
    addDoc(collection(database, "user"), state);
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangetext("name", value)}
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="age"
          onChangeText={(value) => handleChangetext("age", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="height(cm)"
          onChangeText={(value) => handleChangetext("height", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="weight(kg)"
          onChangeText={(value) => handleChangetext("weight", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="Sex(M / F)"
          onChangeText={(value) => handleChangetext("sex", value)}
        />
      </View>
      <View>
        <Button title="Save" onPress={() => createNewUser()} />
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGrup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default CreateUser;
