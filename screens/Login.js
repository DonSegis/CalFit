import React, { useEffect } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfigs } from "../src/database/firebaseAutentication";
import { useNavigation } from "@react-navigation/native";

const uri =
  "https://wallup.net/wp-content/uploads/2018/09/27/10513-gaussian-blur.jpg";

const profilePicture =
  "https://cdn-icons-png.flaticon.com/512/5087/5087579.png";

function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();
  const App = initializeApp(firebaseConfigs);
  const auth = getAuth(App);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("home");
      }
    });
    return unsuscribe;
  }, []);

  const handlerCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.login}>
          <Image
            source={{ uri: profilePicture }}
            style={styles.profilePicture}
          />
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              E-mail
            </Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="E-mail"
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Password
            </Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={handleSignIn}
            style={[styles.button, { backgroundColor: "#00CFEB90" }]}
          >
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlerCreateAccount}
            style={[styles.button, { backgroundColor: "#6792F090" }]}
          >
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const Login = () => {
  return <LoginScreen />;
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 510,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
