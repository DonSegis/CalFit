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
    height: 100,
  },
  input: {
    width: 360,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },

  boxFood: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#6495ed",
    height: 120,
    width: 360,
    borderRadius: 15,
    margin: 10,
  },
  boxFoodName: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  boxFoodExtar: {
    flex: 2,
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
