import { View, Text, Button, StyleSheet } from 'react-native';

const NOME_ALUNO = "Maria Fernanda Leite";
const CURSO = "Engenharia De Software";

// O objeto 'navigation' é injetado pelo Stack Navigator para permitir a mudança de tela.
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do Dia</Text>
            
            <Text style={styles.textoPrincipal}>{NOME_ALUNO}</Text>
            <Text style={styles.textoSecundario}>{CURSO}</Text>

            <Button 
                title="Meus Compromissos" 
                onPress={() => navigation.navigate('MeusCompromissos')} 
                color="#007AFF"
            />
            
            {/* JUSTIFICATIVA: View com marginVertical para separar os botões (melhor UX). */}
            <View style={{ marginVertical: 10 }} /> 

            <Button 
                title="Compromissos da Equipe" 
                onPress={() => navigation.navigate('EquipeCompromissos')} 
                color="#2ecc71"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#f5f5f5' 
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333'
    },
    textoPrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#007AFF'
    },
    textoSecundario: {
        fontSize: 18,
        marginBottom: 60,
        color: '#666'
    }
});