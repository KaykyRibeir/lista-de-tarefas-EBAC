import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna a quantidade atual de tarefas", () => {
    const { result, rerender } = renderHook(
      ({ tarefas }) => useContadorDeTarefas(tarefas),
      {
        initialProps: {
          tarefas: [{ id: 1, titulo: "Primeira" }],
        },
      },
    );

    expect(result.current).toBe(1);

    rerender({
      tarefas: [
        { id: 1, titulo: "Primeira" },
        { id: 2, titulo: "Segunda" },
        { id: 3, titulo: "Terceira" },
      ],
    });

    expect(result.current).toBe(3);
  });
});