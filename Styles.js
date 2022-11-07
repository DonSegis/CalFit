import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textDesign: {
    height: 50,
    width: "85%",
    overflow: "hidden",
    fontSize: 20,
    paddingLeft: 20,
    marginLeft: "10%",
  },
  container: {
    flex: 1,
  },
  containerAgenda: {
    flex: 1,
  },
  conttainerFood: {
    flex: 1,
    flexDirection: "row",
  },
  boxFood: {
    width: "50%",
    borderWidth: 1.5,
  },
  boxplato: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
});

export default styles;
