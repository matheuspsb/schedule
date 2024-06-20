# Schedule - Guia de Execução

Bem-vindo ao projeto Schedule! Este guia irá levá-lo através dos passos necessários para configurar e iniciar o projeto.

Schedule é uma agenda desenvolvido para organizar sua vida no dia a dia. O sistema permite salvar, filtrar e excluir eventos ou compromissos.

## Funcionalidades

- Tela de carregamento com a logo da InnovateTech
- Listagem de alunos com paginação, carregando 20 alunos por vez
- Barra de pesquisa para filtrar alunos pelo primeiro ou segundo nome
- Modal detalhado com informações completas do aluno
- Diferenciais:
  - Filtro por gênero
  - Cache interno para armazenar a primeira página de resultados

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Passo a Passo para Execução do Projeto

### 1. Clone o repositório

Para clonar o repositório usando HTTPS, execute o seguinte comando no terminal:

```bash
git clone https://github.com/matheuspsb/schedule.git
```

Se você preferir usar SSH, execute este comando:

```bash
git clone git@github.com:matheuspsb/schedule.git
```

### 2. Instalar Dependências

Após clonar o repositório em sua máquina local. No terminal, navegue até o diretório do projeto e execute o comando abaixo para instalar todas as dependências necessárias:

```bash
yarn install
```

### 4. Iniciar o Projeto

Com todas as dependências instaladas, agora você pode iniciar o projeto com o Yarn. Execute o comando abaixo no terminal:

```bash
yarn start
```

## Comentários sobre o Projeto

- ### Escolha do Layout:
  Optei por criar um layout simples e agradável, ideal para organização do dia a dia sem difículdades ou sistemas complexos.

- ### Utilização do JavaScript:
  Decidi utilizar JavaScript puro neste projeto para aproveitar os benefícios de uma linguagem amplamente suportada e flexível, proporcionando maior compatibilidade e facilidade na manipulação direta do DOM durante o desenvolvimento.

- ### Simplicidade na utilização de Hooks e Bibliotecas Externas:
  Optei por manter o código simples e fácil de entender, evitando a adição de muitas hooks e bibliotecas externas. Apenas utilizei o useState, useEffect, useContext, e useReducer do React, juntamente com a biblioteca dayjs para manipulação de datas. Além disso, criei um GlobalContext que mantém funções, variáveis e estados globais para toda a aplicação, garantindo um código limpo, eficiente e fácil de manter.
