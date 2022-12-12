import * as React from "react";
import {
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../src/database/firebase";
import { collection, onSnapshot, query, addDoc, doc } from "firebase/firestore";
import styles from "../Styles";
import Ingredients from "../src/components/Ingredients";
import { AntDesign } from "@expo/vector-icons";
import Calendar from "../src/components/Weekcalendar";
import AgendaScreen from "../src/components/Weekcalendar";

const ListarComidas = () => {
  const navigation = useNavigation();
  const [state, setstate] = React.useState([]);
  const [mealIngredients, setMealIngredients] = React.useState([]);

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
  var options = { year: "numeric", month: "long", day: "numeric" };
  const Meal = {
    name: "",
    ingredients: [],
    totalCalories: 0,
    date: new Date().toDateString("es-ES", options),
  };

  const addIngredients = (ingredient) => {
    Meal.ingredients.push(ingredient);
    let total = Meal.totalCalories + Number(ingredient.calories);
    Meal.totalCalories = total;
    alert("add " + ingredient.name);
  };

  const updateName = (value) => {
    Meal.name = value;
  };

  const createNewMeal = () => {
    addDoc(collection(database, "meals"), Meal);
    alert("create");
    navigation.goBack();
  };

  return (
    // <AgendaScreen />
    <View style={styles.container}>
      <View style={styles.containerFood}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Food</Text>
          <AntDesign
            name="pluscircleo"
            size={24}
            color="black"
            onPress={() => createNewMeal()}
          />
        </View>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => updateName(value)}
          style={styles.input}
        />
      </View>

      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Ingredients</Text>
          <AntDesign
            name="pluscircleo"
            size={24}
            color="black"
            onPress={() => navigation.navigate("add")}
          />
        </View>

        <ScrollView>
          {state.map((ingredient) => (
            <TouchableOpacity onPress={() => addIngredients(ingredient)}>
              <Ingredients key={ingredient.id} {...ingredient} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ListarComidas;
