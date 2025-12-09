Estrutura do Projeto:
ProvaSub/
│
├── app/
│   ├── screens/
│   │   ├── Home.js
│   │   ├── CompromissosDoDia.js
│   │   └── CompromissosDaSemana.js
│   │
│   ├── Data/
│   │   ├── compDia.js
│   │   └── compSemana.js
│   │
│   ├── (tabs)/
│   │   └── index.tsx
│   │
│   └── assets/
│
├── package.json
└── README.md
✅ 1. Instalar o Node.js

O projeto requer Node.js 18+.

Baixe aqui:
https://nodejs.org/

✅ 2. Instalar o Expo CLI

Abra o terminal e execute:

npm install --global expo-cli

✅ 3. Instalar dependências do projeto

Dentro da pasta do projeto ProvaSub, rode:

npm install

📦 Dependências Necessárias

Caso rode o projeto pela primeira vez, execute:

npx expo install react-dom react-native-web @expo/metro-runtime


Essas dependências permitem o app rodar no modo WEB.

Como o projeto usa Listas, Router, Stack e navegação, estas estão incluídas automaticamente:

expo-router

react-native

react

react-dom

react-native-web

▶️ Como rodar o projeto
Rodar no celular ou emulador
npx expo start


No menu que abrir, você pode apertar:

a → Android

w → Web

j → iOS (somente Mac)

Rodar direto na web

Se quiser abrir no navegador:

npx expo start --web

❗ Se a Web não abrir, rode o comando abaixo:
npx expo start -c


Isso limpa o cache e resolve 90% dos erros.

🔧 Erros Comuns e Soluções
❌ “Unable to resolve module ./Data/arquivo”

👉 Caminho errado no import.

Solução:
Como as telas estão em app/screens/, use:

import { algo } from "../Data/arquivo";

❌ “StyleSheet is not defined”

Você esqueceu de importar:

import { StyleSheet } from "react-native";

❌ Web não abre

Execute:

npx expo install react-dom react-native-web @expo/metro-runtime
npx expo start -c

🧑‍💻 Funcionalidades
🟦 Home

Mostra nome do aluno

Mostra curso

Botões para navegar para:

Compromissos do Dia

Compromissos da Semana

🟩 Compromissos do Dia

Lê dados de app/Data/compDia.js

Lista com FlatList

🟧 Compromissos da Semana

Lê dados de app/Data/compSemana.js

Listagem agrupada usando SectionList

🙋‍♀️ Desenvolvedora

Maria Fernanda Leite
Engenharia de Software – 6º semestre