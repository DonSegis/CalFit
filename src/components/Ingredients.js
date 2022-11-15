import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
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
import { ListItem } from "@rneui/base";

export default function Ingredients({ id, name, calories, proteins, lipids }) {
  return (
    <ListItem>
      <ListItem.Chevron />
      <ListItem.Content>
        <ListItem.Title>Name: {name}</ListItem.Title>
        <ListItem.Title>Cal: {calories}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content>
        <ListItem.Title>Prot: {proteins}</ListItem.Title>
        <ListItem.Title>Lip: {lipids}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
