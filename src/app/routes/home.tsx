import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Meu Portfólio Profissional" },
    { name: "description", content: "Bem-vindo ao meu portfólio" },
  ];
}

export default function Home() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang: string | null) => {
    if (lang) i18n.changeLanguage(lang);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="absolute top-4 right-4">
        <Select value={i18n.resolvedLanguage || "pt"} onValueChange={toggleLanguage}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <main className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {t("greeting")} <span className="text-primary">{t("developer")}</span>
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          {t("description")}
        </p>
        <div className="flex gap-4">
          <Button size="lg">{t("viewProjects")}</Button>
          <Button variant="outline" size="lg">
            {t("contact")}
          </Button>
        </div>
      </main>
    </div>
  );
}
