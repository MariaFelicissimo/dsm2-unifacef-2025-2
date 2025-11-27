import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MeusCompromissosScreen from './screens/MeusCompromissosScreen';
import EquipeCompromissosScreen from './screens/EquipeCompromissosScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* JUSTIFICATIVA: O StatusBar garante que o texto da barra de sistema (horas, bateria)
        tenha contraste com o fundo azul do cabeçalho.
      */}
      <StatusBar barStyle="light-content" /> 
      
      <Stack.Navigator 
        initialRouteName="Início"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' }, // Fundo azul
          headerTintColor: '#fff', // Cor da seta (voltar) e do título
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* Rota 1: Tela Inicial */}
        <Stack.Screen 
          name="Início" 
          component={HomeScreen} 
          // JUSTIFICATIVA: Oculta o cabeçalho na tela inicial, pois ela não precisa de seta de voltar
          options={{ headerShown: false }} 
        />
        
        {/* Rota 2: Meus Compromissos */}
        {/* O 'title' define o nome que aparece ao lado da seta de voltar */}
        <Stack.Screen 
          name="MeusCompromissos" 
          component={MeusCompromissosScreen} 
          options={{ title: 'Meus Compromissos' }}
        />
        
        {/* Rota 3: Compromissos da Equipe */}
        {/* O 'title' define o nome que aparece ao lado da seta de voltar */}
        <Stack.Screen 
          name="EquipeCompromissos" 
          component={EquipeCompromissosScreen} 
          options={{ title: 'Compromissos da Equipe' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}