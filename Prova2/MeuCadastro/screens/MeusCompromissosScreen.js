import { View, Text, StyleSheet } from 'react-native';

const NOME_ALUNO = "Maria Fernanda Leite";
const CURSO = "Engenharia De Software";

const MEUS_COMPROMISSOS = [
    "9h30: reuniao Daily",
    "14h00: Reunião com cliente carros & carros",
    "16h30: Prazo final projeto X"
];

export default function MeusCompromissosScreen() {
    return (
        // JUSTIFICATIVA: O cabeçalho (seta e título) é gerado automaticamente pelo App.js
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.textoPrincipal}>{NOME_ALUNO}</Text>
                <Text style={styles.textoSecundario}>{CURSO}</Text>
            </View>

            <View style={styles.listaCompromissos}>
                <Text style={styles.listaTitulo}>Minha Agenda:</Text>
               
                {MEUS_COMPROMISSOS.map((compromisso, index) => (

                    <Text key={index} style={styles.itemCompromisso}>
                        {compromisso}
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20,
        backgroundColor: '#fff' 
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    textoPrincipal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    textoSecundario: {
        fontSize: 16,
        color: '#666'
    },
    listaCompromissos: {
        paddingHorizontal: 10,
    },
    listaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#007AFF'
    },
    itemCompromisso: {
        fontSize: 16,
        marginBottom: 10,
        padding: 12,
        backgroundColor: '#f0f8ff',
        borderRadius: 8,
        borderLeftWidth: 5,
        borderLeftColor: '#007AFF',
        fontWeight: '500'
    }
});