export type Tarefa = {
  id: number;
  titulo: string;
};

const tarefasMock: Tarefa[] = [
  { id: 1, titulo: "Planejar a lista de entregas da semana" },
  { id: 2, titulo: "Revisar os testes da funcionalidade principal" },
  { id: 3, titulo: "Publicar o resumo diario da equipe" },
];

export async function listarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasMock.map((tarefa) => ({ ...tarefa })));
}