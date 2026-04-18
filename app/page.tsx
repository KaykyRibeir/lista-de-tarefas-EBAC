import { NovaTarefa } from "@/components/NovaTarefa";
import { listarTarefas } from "@/lib/tarefas";

export default async function Page() {
  const tarefas = await listarTarefas();

  return (
    <main className="pagina">
      <div className="painel">
        <header className="painel__topo">
          <p>Painel de tarefas</p>
          <h1>Rotina clara, entrega previsivel.</h1>
          <span>
            A pagina carrega as tarefas em um Server Component e o formulario controlado
            permite adicionar novos itens localmente.
          </span>
        </header>

        <NovaTarefa tarefasIniciais={tarefas} />
      </div>
    </main>
  );
}