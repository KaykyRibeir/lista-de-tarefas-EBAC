import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NovaTarefa } from "@/components/NovaTarefa";

const tarefasIniciais = [{ id: 1, titulo: "Tarefa inicial" }];

describe("NovaTarefa", () => {
  it("renderiza input, botao e tarefas iniciais", () => {
    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByLabelText("Nova tarefa")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Adicionar tarefa" })).toBeDisabled();
    expect(screen.getByText("Tarefa inicial")).toBeInTheDocument();
    expect(screen.getByText("1 tarefa no momento")).toBeInTheDocument();
  });

  it("valida titulo composto apenas por espacos", async () => {
    const user = userEvent.setup();

    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);

    await user.type(screen.getByLabelText("Nova tarefa"), "   ");
    await user.click(screen.getByRole("button", { name: "Adicionar tarefa" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Informe uma tarefa antes de adicionar.");
  });

  it("adiciona uma nova tarefa via formulario controlado", async () => {
    const user = userEvent.setup();

    render(<NovaTarefa tarefasIniciais={tarefasIniciais} />);

    const input = screen.getByLabelText("Nova tarefa");

    await user.type(input, "Preparar demo da sprint");
    await user.click(screen.getByRole("button", { name: "Adicionar tarefa" }));

    expect(screen.getByText("Preparar demo da sprint")).toBeInTheDocument();
    expect(screen.getByText("2 tarefas no momento")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
});