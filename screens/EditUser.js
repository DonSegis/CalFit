import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { database } from "../src/database/firebase";
import {
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  collection,
  query,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const EditUser = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    age: 0,
    height: 0,
    weight: 0,
  });

  const [lala, setlala] = React.useState([]);
  React.useEffect(() => {
    const collectionRef = collection(database, "user");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setlala(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
        }))
      );
    });
    return unsuscribe;
  }, []);
  let id = "";
  lala.map((value) => {
    id = value.id;
  });
  const handleChangetext = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const onEdit = () => {
    const docRef = doc(database, "user", id);
    updateDoc(docRef, {
      age: state.age,
      height: state.height,
      weight: state.weight,
    });
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={Styles.container}>
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
        <View>
          <Button title="Save" onPress={() => onEdit()} />
        </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    marginVertical: 100,
  },
  inputGrup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginVertical: 30,
  },
});

export default EditUser;
