import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Tela4() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="red" />
      <Ionicons name="heart" size={50} color="green" />
      <Ionicons name="star" size={50} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", flex: 1 },
});
