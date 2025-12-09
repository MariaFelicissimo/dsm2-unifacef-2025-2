
import { View, Text, StyleSheet, SectionList } from "react-native";
import compromissos from "../Data/compSemana"; 

export default function CompromissosDaSemana() {

  const sections = compromissos.map((item) => ({
    title: item.titulo,
    data: item.dados
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compromissos da Semana</Text>
      <Text style={styles.nome}>Maria Fernanda Leite</Text>
      <Text style={styles.turma}>Eng. de Software - 6º Sem</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}

        renderSectionHeader={({ section }) => (
          <Text style={styles.semanaTitulo}>{section.title}</Text>
        )}

        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center"
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center"
  },
  turma: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
    textAlign: "center"
  },
  semanaTitulo: {
    marginTop: 20,
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    paddingLeft: 10,
    borderRadius: 5
  },
  item: {
    fontSize: 16,
    paddingVertical: 6,
    paddingLeft: 15
  }
});
