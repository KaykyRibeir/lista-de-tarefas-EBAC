import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de tarefas",
  description: "Aplicacao simples para listar e adicionar tarefas.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}