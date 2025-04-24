
<h1 align="center">🎯 O Azarado mais Sortudo 🎲</h1>
<p align="center">Um sorteio reverso em que o último eliminado é o verdadeiro campeão! 🏆</p>

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/93547895?s=400&u=915ab2eaa0041d453014ccb9b8372b1c97c61868&v=4" width="100" style="border-radius: 50%;" alt="Avatar do autor"/>
</p>

<p align="center">
  <a href="https://github.com/Graciliano-Barroso/projeto-sorteio"><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/Graciliano-Barroso/projeto-sorteio?style=social"></a>
  <a href="https://github.com/Graciliano-Barroso/projeto-sorteio/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-brightgreen"></a>
  <img alt="Version" src="https://img.shields.io/badge/version-v1.0.0-blue">
  <img alt="Languages" src="https://img.shields.io/github/languages/top/Graciliano-Barroso/projeto-sorteio">
</p>

---

## 🧠 Sobre o Projeto

> Este projeto simula um sorteio ao contrário: **o participante que for o último a ser sorteado é o vencedor!**  
> Um conceito divertido, ideal para dinâmicas, gincanas ou sorteios criativos.

✨ Quem fica por último... leva o prêmio! 🥳

---

## 🚀 Demonstração

| Sorteio em Ação |
|-----------------|
| ![demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZkbnI1MXRjY3k1NGY4YjNybzI1ZW82cDJ6bDQ2eXU4N3E2djdlOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hX3t0emRwQ7I8eegVD/giphy.gif) |

---

## 📁 Estrutura do Projeto

```
📁 src
├── 📁 data
│   └── dados.csv
├── 📁 function
│   ├── carregar.pessoas.ts
│   └── sortear-azarado.ts
├── 📁 model
│   └── Pessoa.ts
├── 📁 ui
│   └── terminal.ts
└── index.ts
```

---

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- Node.js (`fs`)
- Estilização de terminal
- Orientação a objetos

---

## 📦 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/Graciliano-Barroso/projeto-sorteio.git
cd o-azarado-mais-sortudo
```

2. Instale as dependências:

```bash
npm install
```

3. Adicione os participantes ao arquivo `src/data/dados.csv`:

```
Fulano da Silva;fulano@email.com
Beltrano de Souza;beltrano@email.com
```

4. Rode o projeto:

```bash
npx ts-node src/index.ts
```

---

## 🔍 Exemplo de Código

```ts
while (restantes.length > 1) {
    const pessoaSorteada = Math.floor(Math.random() * restantes.length);
    const eliminado = restantes.splice(pessoaSorteada, 1)[0];
}
```

✨ O azarado é sorteado e eliminado... até sobrar só um!

---

## 🧅 Proteção de Dados

O método `getEmailMascarado()` oculta os dados sensíveis dos participantes:

```ts
jo****@gmail.com
```

🔒 Garantia de privacidade no terminal!

---

## 🤝 Contribua

Contribuições são bem-vindas!  
Sugira melhorias, abra issues ou envie pull requests:

👉 [https://github.com/Graciliano-Barroso/projeto-sorteio/issues](https://github.com/Graciliano-Barroso/projeto-sorteio/issues)

---

## 📄 Licença

Distribuído sob a licença **MIT**.  
Criado por **Graciliano Barroso** 👨‍💻  
[https://github.com/Graciliano-Barroso](https://github.com/Graciliano-Barroso)

---

## ⭐ Gostou do projeto?

Dá uma estrela ⭐ lá no GitHub e compartilha com os amigos!  
Vamos ver quem é o azarado mais sortudo do grupo! 😄
