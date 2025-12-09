import { View, Text, StyleSheet, FlatList } from "react-native";
import compDia from "../Data/compDia"; 

const NOME_ALUNO = "Maria Fernanda Leite";
const CURSO = "Engenharia De Software";

export default function CompromissosDoDia() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Compromissos do Dia</Text>
      <Text style={styles.dataDia}>{compDia.data}</Text>

      <Text style={styles.textoPrincipal}>{NOME_ALUNO}</Text>
      <Text style={styles.textoSecundario}>{CURSO}</Text>

      <Text style={styles.listaTitulo}>Agenda do Dia:</Text>

      <FlatList
        data={compDia.compromissos}    
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemCompromisso}>{item}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tituloPagina: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  dataDia: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
    marginBottom: 20,
  },
  textoPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  textoSecundario: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  listaTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#007AFF",
  },
  itemCompromisso: {
    fontSize: 16,
    marginBottom: 10,
    padding: 12,
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#007AFF",
    fontWeight: "500",
  },
});
