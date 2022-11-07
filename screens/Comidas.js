import * as React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../src/database/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import Ingredients from "../src/components/Ingredients";
import styles from "../Styles";
import Calendar from "../src/components/Weekcalendar";
import AgendaScreen from "../src/components/Weekcalendar";

const Comidas = () => {
  const navigation = useNavigation();
  const [state, setstate] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(database, "ingredients");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setstate(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          calories: doc.data().calories,
          proteins: doc.data().proteins,
          lipids: doc.data().lipids,
        }))
      );
    });
    return unsuscribe;
  }, []);
  const [leng] = React.useState([...state]);
  return (
    // <AgendaScreen />
    <View style={styles.container}>
      <View style={styles.containerAgenda}>
        <AgendaScreen />
      </View>
      <View style={styles.conttainerFood}>
        <View style={styles.boxplato}>
          <Text>No Hay Ingredientes Agregados!!</Text>
        </View>
        <View style={styles.boxFood}>
          <Text
            style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
          >
            Ingredientes
          </Text>
          <ScrollView>
            {state.length ? (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  No Hay Ingredientes Agregados!!
                </Text>
                <Button
                  title="add new ingredients"
                  onPress={() => navigation.navigate("add")}
                />
              </View>
            ) : (
              <View>
                {state.map((state) => (
                  <Ingredients key={state.id} {...state} />
                ))}
                <Button
                  title="add new ingredients"
                  onPress={() => navigation.navigate("add")}
                />
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Comidas;
