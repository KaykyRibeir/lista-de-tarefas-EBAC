import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
  it("renderiza a pagina com tarefas carregadas do arquivo simulado", async () => {
    const pagina = await Page();

    render(pagina);

    expect(screen.getByRole("heading", { name: "Rotina clara, entrega previsivel." })).toBeInTheDocument();
    expect(screen.getByText("Planejar a lista de entregas da semana")).toBeInTheDocument();
    expect(screen.getByText("Revisar os testes da funcionalidade principal")).toBeInTheDocument();
    expect(screen.getByText("Publicar o resumo diario da equipe")).toBeInTheDocument();
    expect(screen.getByText("3 tarefas no momento")).toBeInTheDocument();
  });
});