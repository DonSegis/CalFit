import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { database } from "../src/database/firebase";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { Text, View } from "react-native";
import styles from "../Styles";

function HomeScreen() {
  const [state, setstate] = React.useState([]);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(database, "meals");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setstate(
        querySnapshot.docs.map((doc) => ({
          calories: doc.data().totalCalories,
        }))
      );
    });
    return unsuscribe;
  }, []);
  React.useEffect(() => {
    const collectionRef = collection(database, "user");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setUser(
        querySnapshot.docs.map((doc) => ({
          age: doc.data().age,
          height: doc.data().height,
          weight: doc.data().weight,
          sex: doc.data().sex,
        }))
      );
    });
    return unsuscribe;
  }, []);
  let imb = 0;
  user.map((value) => {
    if (value.sex === "M") {
      imb = 10 * value.weight + 6.25 * value.height - 5 * value.age + 5 + 300;
      return imb;
    } else {
      imb = 10 * value.weight + 6.25 * value.height - 5 * value.age - 161 + 300;
      return imb;
    }
  });

  let total = 0;
  state.map((value) => {
    total += value.calories;
    return total;
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.textCenter}>Calorias consumidas:</Text>
      <CircularProgress
        value={total}
        maxValue={imb}
        radius={160}
        textColor="#000000"
        activeStrokeColor={"#e3291b"}
        inActiveStrokeColor={"#e8665d"}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={40}
        activeStrokeWidth={40}
        title={"/" + imb}
        titleColor={"#000000"}
        titleStyle={{ fontWeight: "bold" }}
      />
      <Text style={styles.textCenter}>Tu puedes! :)</Text>
    </View>
  );
}

export default HomeScreen;
