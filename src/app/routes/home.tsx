import type { Route } from "./+types/home";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meu Portfólio Profissional" },
    { name: "description", content: "Bem-vindo ao meu portfólio" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <main className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Olá, eu sou um <span className="text-primary">Desenvolvedor</span>
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Bem-vindo ao meu portfólio profissional. Construído com React Router, Tailwind CSS v4 e Shadcn UI.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Ver Projetos</Button>
          <Button variant="outline" size="lg">
            Entrar em Contato
          </Button>
        </div>
      </main>
    </div>
  );
}
