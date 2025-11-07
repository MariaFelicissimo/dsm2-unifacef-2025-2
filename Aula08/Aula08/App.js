import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Text, Alert } from 'react-native';
// Importa o ImagePicker e usa o alias "ImagePicker" (boa prática)
import * as ImagePicker from 'expo-image-picker';

// URL de uma imagem genérica para ser o avatar inicial (placeholder)
const DEFAULT_AVATAR_URI = 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AVATAR';

export default function App() {
  // Estado para armazenar o URI (caminho) da imagem escolhida
  const [imagem, setImagem] = useState(null);
  
  // 1. SOLICITAÇÃO DE PERMISSÕES
  // O hook useCameraPermissions verifica e gerencia as permissões da câmera.
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    // Verifica e solicita a permissão da câmera e da galeria logo que o app carrega
    async function getPermissions() {
      // Solicita permissão da CÂMERA se ainda não foi concedida
      if (permission?.status !== 'granted') {
        const cameraResult = await requestPermission();
        if (!cameraResult.granted) {
            console.error("Permissão da Câmera negada");
        }
      }
      
      // Solicita permissão da GALERIA (necessária no iOS e Android)
      const libraryPermission = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (libraryPermission.status !== 'granted') {
          await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
    }

    // A chamada à getPermissions deve ser feita dentro do useEffect
    // para evitar a execução fora do ciclo de vida do componente.
    getPermissions();
  }, []); // Executa apenas uma vez ao montar o componente

  // Função auxiliar para notificar o usuário se a permissão não foi dada
  const checkPermissions = () => {
    // Para a câmera:
    if (permission && !permission.granted) {
      // Usamos uma mensagem de alerta personalizada (em vez do alert() nativo)
      Alert.alert(
        "Permissão Necessária",
        "Por favor, conceda as permissões de acesso à câmera e à galeria nas configurações do seu dispositivo para continuar.",
        [{ text: "OK" }]
      );
      return false;
    }
    // Para a galeria (verificação adicional):
    ImagePicker.getMediaLibraryPermissionsAsync().then((status) => {
        if (status.status !== 'granted') {
             Alert.alert(
                "Permissão Necessária",
                "Permissão da Galeria não concedida. Por favor, conceda nas configurações.",
                [{ text: "OK" }]
             );
            return false;
        }
    });

    return true;
  };

  // 2. ABRIR CÂMERA
  async function abrirCamera() {
    if (!checkPermissions()) return; // Verifica permissões antes de prosseguir
    
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Permite que o usuário recorte a imagem
      quality: 0.7, // Qualidade da imagem
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  // 3. ABRIR GALERIA
  async function abrirGaleria() {
    if (!checkPermissions()) return; // Verifica permissões antes de prosseguir

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permite que o usuário recorte a imagem
      aspect: [1, 1], // Força o recorte para um quadrado (para o avatar redondo)
      quality: 0.7,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      {/* 4. EXIBIÇÃO DO AVATAR */}
      <View style={styles.avatarContainer}>
        <Image 
          // Se 'imagem' estiver definido, usa a imagem escolhida.
          // Caso contrário, usa a imagem genérica (DEFAULT_AVATAR_URI).
          source={{ uri: imagem || DEFAULT_AVATAR_URI }} 
          style={styles.avatar} 
        />
        <Text style={styles.title}>Meu Perfil</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button 
          title="Tirar Foto" 
          onPress={abrirCamera} 
          color="#007AFF" // Cor moderna para o botão
        />
        <View style={{ marginVertical: 10 }} /> 
        <Button 
          title="Escolher da Galeria" 
          onPress={abrirGaleria} 
          color="#4CD964" // Outra cor moderna
        />
      </View>
    </View>
  );
}

// 5. ESTILOS COMPLETOS E AJUSTADOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around', // Distribui o conteúdo verticalmente
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f0f2f5', // Fundo claro
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    marginTop: 20,
    width: 150,
    height: 150,
    // Deixa a imagem perfeitamente redonda
    borderRadius: 75, 
    borderWidth: 4, // Borda para destaque
    borderColor: '#ffffff', // Borda branca
    elevation: 8, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    color: '#333',
  },
  buttonGroup: {
    width: '80%', // Deixa os botões com uma largura decente
  }
});