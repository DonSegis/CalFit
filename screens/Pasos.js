import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";
import styles from "../Styles";

function Pasos() {
  const [PedometerAvaibility, setPedometerAvaibility] = useState("");
  const [stepCount, updateStepCount] = useState(0);

  var Dist = stepCount / 1300;
  var DistanciaRecorrida = Dist.toFixed(2);

  var Cal = DistanciaRecorrida * 60;
  var CaloriasQueamdas = Cal.toFixed(2);

  useEffect(() => {
    subscribe();
  }, []);

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      updateStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvaibility(String(result));
      },
      (error) => {
        setPedometerAvaibility(error);
      }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 3 }}>
        <CircularProgress
          value={stepCount}
          maxValue={10000}
          radius={160}
          textColor="#000000"
          activeStrokeColor={"#4863A0"}
          inActiveStrokeColor={"#728FCE"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          title={"/10.000"}
          titleColor={"#000000"}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <View>
          <Text style={styles.textDesign}>Objetivo : 10.000 / 8Km</Text>
        </View>
        <View>
          <Text style={styles.textDesign}>
            Distancia: {DistanciaRecorrida}Km{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.textDesign}>
            Calorias quemadas: {CaloriasQueamdas}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Pasos;
