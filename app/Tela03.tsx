import { View, Image, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Tela3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/voyage.png")} // caminho da imagem
        style={styles.image}
        resizeMode="contain" // mantém toda a imagem visível sem cortar
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Home"
          onPress={() => router.push("/")} // navegação para pagina inicial
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#000", 
  },
  image: {
    width: "100%",
    height: "70%", 
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
  },
});
