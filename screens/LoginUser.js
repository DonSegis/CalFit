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

import { database } from "../src/database/firebase";
import { collection, onSnapshot, query, addDoc, doc } from "firebase/firestore";
import styles from "../Styles";
import User from "../src/components/User";

import CreateUser from "./CreateUser";

function LoginUser() {
  const [state, setstate] = React.useState([]);
  React.useEffect(() => {
    const collectionRef = collection(database, "user");
    const q = query(collectionRef /*, orderBy("name", "desc")*/);
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setstate(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          age: doc.data().age,
          height: doc.data().height,
          weight: doc.data().weight,
          sex: doc.data().sex,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <ScrollView>
      <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        {!state.length ? (
          <CreateUser />
        ) : (
          <View
            style={{
              margin: 50,
            }}
          >
            {state.map((user) => (
              <User key={user.id} {...user} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default LoginUser;
