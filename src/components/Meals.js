import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../Styles";
import { FontAwesome } from "@expo/vector-icons";
import { database } from "../database/firebase";
import {
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
  collection,
  query,
  getDoc,
} from "firebase/firestore";

export default function Meals({ id, name, totalCalories, date }) {
  const OnDelete = () => {
    const docRef = doc(database, "meals", id);
    deleteDoc(docRef);
  };

  return (
    <View style={styles.boxFood}>
      <View style={styles.boxFoodName}>
        <Text style={{ fontSize: 20 }}>{name}</Text>
      </View>
      <View style={styles.boxFoodExtar}>
        <Text>Total Calories: {totalCalories}</Text>
        <Text>Date: {date}</Text>
      </View>
      <View style={{ marginRight: 10, marginTop: 8 }}>
        <FontAwesome
          name="trash-o"
          size={24}
          color="black"
          onPress={() => OnDelete()}
        />
      </View>
    </View>
  );
}
