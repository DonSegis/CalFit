import * as React from "react";
import { Text, View, Button, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../src/database/firebase";
import { collection, onSnapshot, query, addDoc, doc } from "firebase/firestore";
import Ingredients from "../src/components/Ingredients";
import Meals from "../src/components/Meals";
import { AntDesign } from "@expo/vector-icons";

function Comidas() {
  const navigation = useNavigation();
  const [state, setstate] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(database, "meals");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setstate(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          totalCalories: doc.data().totalCalories,
          date: doc.data().date,
        }))
      );
    });
    return unsuscribe;
  }, []);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          onPress={() => navigation.navigate("ListarComidas")}
        />
      ),
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!state.length ? (
          <View>
            <Text>No hay Platos agregados</Text>
          </View>
        ) : (
          <View
            style={{
              margin: 50,
            }}
          >
            {state.map((ingredient) => (
              <Meals key={ingredient.id} {...ingredient} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default Comidas;
