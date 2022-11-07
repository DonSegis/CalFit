import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { database } from "../src/database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const CreateIngredients = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    name: "",
    calories: "",
    proteins: "",
    lipids: "",
  });

  const handleChangetext = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const createNewIngredient = () => {
    addDoc(collection(database, "ingredients"), state);
    navigation.goBack();
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
          placeholder="Calories"
          onChangeText={(value) => handleChangetext("calories", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="Proteins"
          onChangeText={(value) => handleChangetext("proteins", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.inputGrup}>
        <TextInput
          placeholder="Lipids"
          onChangeText={(value) => handleChangetext("lipids", value)}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Button title="Save" onPress={() => createNewIngredient()} />
      </View>
    </ScrollView>
  );
};

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

export default CreateIngredients;
