import type { Tarefa } from "@/lib/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  return tarefas.length;
}