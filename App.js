
import { View, Text, SectionList, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const DADOS_PRODUTOS = [
  {title: 'Eletrônicos', data: ['Notebook', 'Smartphone', 'TV', 'Headphone', 'Smartwatch']},
  {title: 'Roupas', data: ['Camiseta', 'Calça Jeans', 'Jaqueta de Couro', 'Meias']},
  {title: 'Livros', data: ['Ficção Científica', 'Romance', 'Biografia', 'Didático']},
];
export default function CatalogoScreen() {
  const [filtro, setFiltro] = useState('');

  const dadosFiltrados = useMemo(() => {
    if (!filtro) {
      return DADOS_PRODUTOS; 
    }

    const textoFiltro = filtro.toLowerCase();

    return DADOS_PRODUTOS
      .map(section => {

        const itensFiltrados = section.data.filter(item =>
          item.toLowerCase().includes(textoFiltro)
        );

        return {
          ...section,
          data: itensFiltrados,
        };
      })

      .filter(section => section.data.length > 0); 
  }, [filtro]);

  return (
    <View style={styles.container}>
      {/* Campo de Filtro (TextInput)  */}
      <TextInput
        style={styles.input}
        placeholder="Buscar produto por nome..."
        value={filtro}
        onChangeText={setFiltro}
      />
      
      {/* Lista Agrupada (SectionList)  */}
      <SectionList
        sections={dadosFiltrados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text> // [cite: 84]
        )}
        ListEmptyComponent={() => (
          <Text style={styles.vazio}>Nenhum produto encontrado.</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 40, 
    paddingHorizontal: width * 0.03, 
    backgroundColor: '#fff', 
  },
  input: {
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 8,
    width: width * 0.94, 
    alignSelf: 'center',
    fontSize: 16,
  },
  header: {
    fontSize: 20, // [cite: 93]
    backgroundColor: '#eee', // [cite: 94]
    padding: 8, // [cite: 95]
    fontWeight: 'bold', // [cite: 96]
    marginTop: 10,
    borderRadius: 5,
  },
  item: {
    padding: 10, // [cite: 98]
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  }
});