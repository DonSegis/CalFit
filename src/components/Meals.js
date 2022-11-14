import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../Styles";

export default function Meals({ id, name, totalCalories, date }) {
  return (
    <View style={styles.boxFood}>
      <View style={styles.boxFoodName}>
        <Text style={{ fontSize: 20 }}>{name}</Text>
      </View>
      <View style={styles.boxFoodExtar}>
        <Text>Total Calories: {totalCalories}</Text>
        <Text>Date: {date}</Text>
      </View>
    </View>
  );
}
