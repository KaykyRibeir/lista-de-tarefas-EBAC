"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/lib/tarefas";

type NovaTarefaProps = {
  tarefasIniciais: Tarefa[];
};

export function NovaTarefa({ tarefasIniciais }: NovaTarefaProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");
  const quantidadeDeTarefas = useContadorDeTarefas(tarefas);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tituloNormalizado = titulo.trim();

    if (!tituloNormalizado) {
      setErro("Informe uma tarefa antes de adicionar.");
      return;
    }

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      {
        id: Date.now(),
        titulo: tituloNormalizado,
      },
    ]);
    setTitulo("");
    setErro("");
  }

  return (
    <section className="caixa-tarefas" aria-label="Gerenciador de tarefas">
      <div className="contador" aria-live="polite">
        {quantidadeDeTarefas} tarefa{quantidadeDeTarefas === 1 ? "" : "s"} no momento
      </div>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          aria-label="Nova tarefa"
          name="titulo"
          placeholder="Descreva a proxima tarefa"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <button type="submit" disabled={titulo.length === 0}>
          Adicionar tarefa
        </button>
      </form>

      {erro ? (
        <p className="erro" role="alert">
          {erro}
        </p>
      ) : null}

      <ul className="lista">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </section>
  );
}