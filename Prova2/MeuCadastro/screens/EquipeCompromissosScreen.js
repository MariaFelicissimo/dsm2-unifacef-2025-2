import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NOME_ALUNO = "Maria Fernanda Leite";
const CURSO = "Engenharia De Software";

const DADOS_EQUIPE = [
    { 
        nome: NOME_ALUNO, 
        agenda: [
            "9h30: reuniao Daily",
            "14h00: Reunião com cliente carros & carros",
            "16h30: Prazo final projeto X"
        ],
        cor: '#007AFF',
    },
    { 
        nome: "Jurema (chefe)",
        agenda: [
            "9h30: reuniao Daily",
            "12h00: almoço com a diretoria",
            "15h00: saida viagem"
        ],
        cor: '#FF5733',
    },
    { 
        nome: "Aderbal",
        agenda: [
            "9h30: reuniao Daily",
            "13h30: visita tecnica Uni-FACEF",
            "16h30: prazo final projeto x"
        ],
        cor: '#2ecc71',
    }
];

export default function EquipeCompromissosScreen() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* JUSTIFICATIVA: O cabeçalho (seta e título) é gerado automaticamente pelo App.js */}
            <View style={styles.container}>
                <View style={styles.header}>
                    {/* Nome e Curso */}
                    <Text style={styles.textoPrincipal}>{NOME_ALUNO}</Text>
                    <Text style={styles.textoSecundario}>{CURSO}</Text>
                </View>


                {DADOS_EQUIPE.map((membro, membroIndex) => (
                    <View key={membroIndex} style={styles.membroContainer}>
                        <Text style={[styles.membroNome, {color: membro.cor}]}>
                            {membro.nome}
                        </Text>

                        {membro.agenda.map((compromisso, compIndex) => (
                            <Text key={compIndex} style={styles.itemCompromisso}>
                                {compromisso}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20,
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
    membroContainer: {
        marginBottom: 25,
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#ccc',
    },
    membroNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    itemCompromisso: {
        fontSize: 15,
        marginBottom: 5,
        paddingLeft: 5
    }
});