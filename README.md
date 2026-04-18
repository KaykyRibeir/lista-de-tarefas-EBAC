# Lista de Tarefas

Aplicacao simples em Next.js 15 com App Router e TypeScript para listar e adicionar tarefas localmente.

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalacao

1. Clone o repositorio.
2. Instale as dependencias com npm install.

## Execucao

- Desenvolvimento: npm run dev
- Build de producao: npm run build
- Servidor de producao: npm run start
- Testes: npm run test
- Testes em modo watch: npm run test:watch

Depois de iniciar em desenvolvimento, acesse http://localhost:3000.

## Estrutura

- app: layout global e pagina inicial server-side
- components: componentes de interface
- hooks: hooks customizados
- lib: fonte de dados simulada
- pages: pasta reservada para expansoes futuras
- tests: testes unitarios e de renderizacao

## Scripts

- npm run dev
- npm run build
- npm run start
- npm run test
- npm run test:watch

## Cobertura testada

- Renderizacao da pagina com tarefas carregadas do arquivo local
- Fluxo de validacao e submissao do componente NovaTarefa
- Contagem de tarefas com o hook useContadorDeTarefas