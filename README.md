# Gerenciador de Atividades - Next.js 15

Projeto desenvolvido para prática de testes unitários utilizando Next.js 15, TypeScript, Jest e Testing Library.

A aplicação permite visualizar e adicionar atividades localmente utilizando componentes server-side e client-side.

## Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- Jest
- Testing Library

## Funcionalidades

- Exibição de tarefas carregadas localmente
- Adição de novas atividades
- Contagem automática de tarefas
- Validação de formulário
- Testes unitários dos componentes e hooks

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Executando o projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```txt
http://localhost:3000
```

## Executando os testes

```bash
npm test
```

## Estrutura do projeto

```txt
app/
components/
hooks/
lib/
tests/
```

## Cobertura dos testes

Os testes verificam:

- Renderização da página principal
- Funcionamento do componente NovaTarefa
- Validação do formulário
- Hook useContadorDeTarefas
