import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { database } from "../src/database/firebase";
import { collection, onSnapshot, query, addDoc, doc } from "firebase/firestore";

function HomeScreen() {
  const [state, setstate] = React.useState([]);

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
    console.log(state);
    return unsuscribe;
  }, []);
  let total = 0;
  state.map((value) => {
    total += value.calories;
    return total;
  });
  return (
    <CircularProgress
      value={total}
      maxValue={2000}
      radius={160}
      textColor="#000000"
      activeStrokeColor={"#e3291b"}
      inActiveStrokeColor={"#e8665d"}
      inActiveStrokeOpacity={0.5}
      inActiveStrokeWidth={40}
      activeStrokeWidth={40}
      title={"/2000"}
      titleColor={"#000000"}
      titleStyle={{ fontWeight: "bold" }}
    />
  );
}

export default HomeScreen;
