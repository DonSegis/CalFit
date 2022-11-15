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
  textCenter: {
    height: 50,
    width: "85%",
    overflow: "hidden",
    fontSize: 25,
    textAlign: "center",
    paddingTop: 10,
  },
  container: {
    flex: 1,
    borderWidth: 1.5,
  },
  containerAgenda: {
    flex: 1,
  },
  containerFood: {
    flex: 1,
    height: 700,
  },

  boxFood: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#6495ed",
    height: 120,
    width: 310,
    borderRadius: 15,
    margin: 10,
  },
  boxFoodName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxFoodExtar: {
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
    padding: 0,
  },
  text: {
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
