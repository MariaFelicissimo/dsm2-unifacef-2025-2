import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Agenda</Text>

      <Text style={styles.nome}>Maria Fernanda Leite</Text>
      <Text style={styles.turma}>Eng. de Software - 6º Sem</Text>

      <View style={{ height: 40 }} />

      {/* Caminhos CORRETOS do Expo Router */}
      <Link href="/screens/CompromissosDoDia" asChild>
        <Button title="Compromissos do Dia" color="#007AFF" />
      </Link>

      <View style={{ height: 15 }} />

      <Link href="/screens/CompromissosDaSemana" asChild>
        <Button title="Compromissos da Semana" color="#2ecc71" />
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333"
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5
  },
  turma: {
    fontSize: 18,
    color: "#666"
  }
});
