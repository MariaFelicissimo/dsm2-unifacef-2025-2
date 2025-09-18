import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/euzinha.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Maria Fernanda Leite Felicíssimo</Text>
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              <Button
                title="Ir para Tela 2"
                onPress={() => router.push("/Tela02")}
                color="#ff1d1dff"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Ir para Tela 3"
                onPress={() => router.push("/Tela03")}
                color="#ff0b0bff"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Ir para Tela 4"
                onPress={() => router.push("/Tela04")}
                color="#fe0a0aff"
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "flex-end",   
    paddingRight: 20,         
  },
  content: {
    alignItems: "flex-end",   
    gap: 20,                  
  },
  text: {
    fontSize: 20,
    color: "#000000ff",
    fontWeight: "bold",
    textAlign: "right",
  },
  buttonWrapper: {
    width: "60%",
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    overflow: "hidden",
  },
});
