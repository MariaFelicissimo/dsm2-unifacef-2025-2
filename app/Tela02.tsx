import { View, Image, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Tela02() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://wallpapers.com/images/hd/nature-pictures-ffm1xnpcdzxox0y7.jpg",
        }}
        style={styles.image}
      />
      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e91414ff",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
    marginBottom: 20,
  },
});
