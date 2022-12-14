import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/dev.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <Text style={styles.title}>Olá Super Devs</Text>
        <Text style={styles.text}>
          "Inovação distingue o líder de um seguidor." {"\n"}Steve Jobs
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Codar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0C0C",
  },

  containerLogo: {
    flex: 2,
    backgroundColor: "#0A0C0C",
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: "#a1a1a1",
  },

  button: {
    position: "absolute",
    backgroundColor: "#0A0C0C",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
