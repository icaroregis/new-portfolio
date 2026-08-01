import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  MapPin,
  Menu,
  Sun,
  Moon,
  Lock,
  X,
  Code,
  Blocks,
  FileText,
  Network,
  Box,
  Share2,
  Layout,
  Grid,
  TestTube,
  CloudLightning,
  Database,
  BookOpen,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ícaro Almeida | Portfolio" },
    { name: "description", content: "Personal Portfolio Website" },
  ];
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string;
    image: string;
    description: string;
  } | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleLanguage = (lang: string | null) => {
    if (lang) i18n.changeLanguage(lang);
  };

  const courses = [
    {
      title: "HTML e CSS",
      image: encodeURI("/html e css.png"),
      description: t("courses.items.htmlCss"),
    },
    {
      title: "CSS Flexbox",
      image: encodeURI("/css-flexbox.png"),
      description: t("courses.items.cssFlexbox"),
    },
    {
      title: "Node.js",
      image: encodeURI("/nodejs.jpeg"),
      description: t("courses.items.nodeJs"),
    },
    {
      title: "TypeScript",
      image: encodeURI("/typesdript.jpeg"),
      description: t("courses.items.typescript"),
    },
    {
      title: "Aprofundando em Hooks do React",
      image: encodeURI("/Aprofundando em hooks do React.jpeg"),
      description: t("courses.items.reactHooks"),
    },
    {
      title: "Fundamentos de Node",
      image: encodeURI("/Fundamentos node.jpeg"),
      description: t("courses.items.nodeFundamentals"),
    },
    {
      title: "Fundamentos React Native com Expo",
      image: encodeURI("/Fundamentos React Native com Expo.jpeg"),
      description: t("courses.items.reactNativeExpo"),
    },
    {
      title: "Zustand: Gestor de estados para React",
      image: encodeURI("/Zustand Gestor de estados para React.jpeg"),
      description: t("courses.items.zustand"),
    },
    {
      title: "Iterating Over Data in JavaScript",
      image: encodeURI("/Iterating Over Data in JavaScript.jpeg"),
      description: t("courses.items.iteratingData"),
    },
    {
      title: "Learning Simple Data Structures in JavaScript",
      image: encodeURI("/Learning Simple Data Structures in JavaScript.jpeg"),
      description: t("courses.items.dataStructures"),
    },
    {
      title: "Hashing, Dictionaries, and Sets in JS",
      image: encodeURI("/Hashing, Dictionaries, and Sets in JS.jpeg"),
      description: t("courses.items.hashing"),
    },
  ];

  const renderTechTags = (tags: string[]) => (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );

  const renderProjectRepositoryAction = ({
    isPrivate,
    href,
  }: {
    isPrivate: boolean;
    href?: string;
  }) => {
    if (isPrivate) {
      return (
        <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm font-medium text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
          <Lock className="h-4 w-4" />
          <span>{t("work.privateRepository")}</span>
        </div>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
        title={t("work.viewCodeGithub")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <span>{t("work.viewCode")}</span>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      {/* HEADER / NAVBAR */}
      <div className="sticky top-0 z-50">
        <header className="relative flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md md:px-16 dark:border-zinc-800 dark:bg-zinc-950/80">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-['JetBrains_Mono'] text-2xl font-bold tracking-tighter text-emerald-500 transition-opacity hover:opacity-80 max-[400px]:text-xl"
          >
            {"<ICARO ALMEIDA/>"}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t("nav.about")}
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t("nav.work")}
            </a>
            <a
              href="#courses"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t("nav.courses")}
            </a>
            <a
              href="#professional_experience"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t("nav.professionalExperience")}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t("nav.contact")}
            </a>

            <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-800"></div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Select
                value={i18n.resolvedLanguage || "pt"}
                onValueChange={toggleLanguage}
              >
                <SelectTrigger className="h-9 w-[80px] border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                  <SelectValue placeholder="Lang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="pt">PT</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                </SelectContent>
              </Select>
              <a
                href="https://drive.google.com/file/d/1BQXtxuHEJfyRFtSrRCA4vCHcwCBfSurA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-800 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {t("nav.downloadCV")}
              </a>
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Select
              value={i18n.resolvedLanguage || "pt"}
              onValueChange={toggleLanguage}
            >
              <SelectTrigger className="h-9 w-[70px] border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="pt">PT</SelectItem>
                <SelectItem value="es">ES</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label={
                isMobileMenuOpen ? "Fechar menu mobile" : "Abrir menu mobile"
              }
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
            <nav className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#work"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.work")}
              </a>
              <a
                href="#courses"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.courses")}
              </a>
              <a
                href="#professional_experience"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.professionalExperience")}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
              <a
                href="https://drive.google.com/file/d/1e9Cm8Nb8JSvctGFN1tbMYWXk4QjaiHKv/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-ring mt-2 inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-800 focus-visible:ring-1 focus-visible:outline-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.downloadCV")}
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-16 md:py-32"
      >
        <div className="order-2 flex flex-col gap-8 md:order-1">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {t("hero.greeting")}{" "}
            <span className="animate-wave inline-block origin-[70%_70%] cursor-default">
              👋
            </span>
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
            {t("hero.description")}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <MapPin className="h-5 w-5" />
              <span>{t("hero.location")}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <span className="relative mr-1 ml-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              <span>{t("hero.available")}</span>
            </div>
          </div>

          <div className="mt-2 flex gap-4">
            <a
              href="https://github.com/icaroregis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/icaroregisalmeida/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="group relative mt-8 h-72 w-64 md:mt-0 md:h-96 md:w-80">
            {/* Efeito de brilho/sombra verde ao redor - Estático e muito mais intenso */}
            <div className="absolute -inset-4 rounded-2xl bg-emerald-500 opacity-80 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:blur-3xl dark:opacity-60 dark:group-hover:opacity-100"></div>

            {/* Moldura deslocada com borda verde - Fundo preenchido para dar mais peso */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl border-4 border-emerald-500 bg-emerald-500/10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>

            {/* Imagem com borda sutil */}
            <img
              src="/eu.png"
              alt="Profile"
              className="relative h-full w-full rounded-2xl border-4 border-white object-cover shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-transform duration-500 group-hover:-translate-y-2 dark:border-zinc-900"
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 py-24 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {t("skills.badge")}
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            {t("skills.title")}
          </p>

          <div className="grid w-full grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {[
              {
                name: "React.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                invertDark: true,
              },
              {
                name: "TypeScript / JS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
              },
              {
                name: "React Hooks",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              },
              { name: "Clean Code", lucide: Code },
              { name: "Design Patterns", lucide: Blocks },
              { name: "React Hook Form", lucide: FileText },
              { name: "APIs REST", lucide: Network },
              { name: "Zustand", lucide: Box },
              { name: "Context API", lucide: Share2 },
              { name: "Flexbox", lucide: Layout },
              { name: "Grid Layout", lucide: Grid },
              {
                name: "Jest",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
              },
              { name: "BDD", lucide: TestTube },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Nest.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
              },
              { name: "Serverless", lucide: CloudLightning },
              {
                name: "AWS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
                invertDark: true,
              },
              { name: "SQL & NoSQL", lucide: Database },
              {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "Prisma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                invertDark: true,
              },
              {
                name: "Azure DevOps",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 cursor-default items-center justify-center rounded border border-zinc-200 bg-white p-3 shadow-sm transition-transform hover:scale-110 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`h-full w-full object-contain ${skill.invertDark ? "dark:invert" : ""}`}
                    />
                  ) : skill.lucide ? (
                    <skill.lucide className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                  ) : null}
                </div>
                <span className="text-center text-sm text-zinc-600 dark:text-zinc-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="professional_experience"
        className="bg-zinc-100/50 px-6 py-24 md:px-16 dark:bg-zinc-900/50"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {t("experience.badge")}
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            {t("experience.title")}
          </p>

          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/5">
                <a
                  href="https://www.linkedin.com/company/userx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold tracking-tighter text-emerald-500 hover:text-emerald-400">
                    userx
                  </h4>
                </a>
              </div>
              <div className="flex flex-col gap-4 md:w-3/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("experience.roles.frontend")}
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>{t("experience.job1.bullet1")}</li>
                  <li>{t("experience.job1.bullet2")}</li>
                  <li>{t("experience.job1.bullet3")}</li>
                  <li>{t("experience.job1.bullet4")}</li>
                  <li>{t("experience.job1.bullet5")}</li>
                  <li>{t("experience.job1.bullet6")}</li>
                  <li>{t("experience.job1.bullet7")}</li>
                  <li>{t("experience.job1.bullet8")}</li>
                  <li>{t("experience.job1.bullet9")}</li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/5 md:text-right dark:text-zinc-400">
                {t("experience.dates.present")}
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/5">
                <a
                  href="https://www.linkedin.com/company/userx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold tracking-tighter text-emerald-500 hover:text-emerald-400">
                    X-Solution
                  </h4>
                </a>
              </div>
              <div className="flex flex-col gap-4 md:w-3/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("experience.roles.teamLead")}
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>{t("experience.job2.bullet1")}</li>
                  <li>{t("experience.job2.bullet2")}</li>
                  <li>{t("experience.job2.bullet3")}</li>
                  <li>{t("experience.job2.bullet4")}</li>
                  <li>{t("experience.job2.bullet5")}</li>
                  <li>{t("experience.job2.bullet6")}</li>
                  <li>{t("experience.job2.bullet7")}</li>
                  <li>{t("experience.job2.bullet8")}</li>
                  <li>{t("experience.job2.bullet9")}</li>
                  <li>{t("experience.job2.bullet10")}</li>
                  <li>{t("experience.job2.bullet11")}</li>
                  <li>{t("experience.job2.bullet12")}</li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/5 md:text-right dark:text-zinc-400">
                {t("experience.dates.past1")}
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/5">
                <a
                  href="https://www.linkedin.com/company/userx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold tracking-tighter text-emerald-500 hover:text-emerald-400">
                    F4G Sistemas e Soluções
                  </h4>
                </a>
              </div>
              <div className="flex flex-col gap-4 md:w-3/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("experience.roles.fullstack")}
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>{t("experience.job3.bullet1")}</li>
                  <li>{t("experience.job3.bullet2")}</li>
                  <li>{t("experience.job3.bullet3")}</li>
                  <li>{t("experience.job3.bullet4")}</li>
                  <li>{t("experience.job3.bullet5")}</li>
                  <li>{t("experience.job3.bullet6")}</li>
                  <li>{t("experience.job3.bullet7")}</li>
                  <li>{t("experience.job3.bullet8")}</li>
                  <li>{t("experience.job3.bullet9")}</li>
                  <li>{t("experience.job3.bullet10")}</li>
                  <li>{t("experience.job3.bullet11")}</li>
                  <li>{t("experience.job3.bullet12")}</li>
                  <li>{t("experience.job3.bullet13")}</li>
                  <li>{t("experience.job3.bullet14")}</li>
                  <li>{t("experience.job3.bullet15")}</li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/5 md:text-right dark:text-zinc-400">
                {t("experience.dates.past2")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS SECTION */}
      <section id="work" className="px-6 py-24 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {t("work.badge")}
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            {t("work.title")}
          </p>

          <div className="flex w-full flex-col gap-12 md:gap-24">
            <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="flex items-center justify-center bg-zinc-100 p-8 md:w-1/2 md:p-12 dark:bg-zinc-800/50">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  alt="Project 1"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("work.project1.title")}
                </h3>
                <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p className="mb-4">{t("work.project1.description")}</p>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project1.contributionsTitle")}
                  </p>
                  <ul className="mb-4 flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project1.contributions", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project1.stackTitle")}
                  </p>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project1.stack", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => {
                      const [boldPart, restPart] = item.split(": ");
                      return (
                        <li key={index}>
                          <strong>{boldPart}:</strong> {restPart}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {renderTechTags([
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Radix UI",
                  "React Query",
                  "Zustand",
                  "Axios",
                  "React Hook Form",
                  "Zod",
                  "i18n",
                  "Sentry",
                ])}
                {renderProjectRepositoryAction({ isPrivate: true })}
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:flex-row-reverse dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="flex items-center justify-center bg-zinc-100 p-8 md:w-1/2 md:p-12 dark:bg-zinc-800/50">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="Virtual Process App"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("work.project2.title")}
                </h3>
                <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p className="mb-4">{t("work.project2.description")}</p>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project2.contributionsTitle")}
                  </p>
                  <ul className="mb-4 flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project2.contributions", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project2.stackTitle")}
                  </p>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project2.stack", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => {
                      const [boldPart, restPart] = item.split(": ");
                      return (
                        <li key={index}>
                          <strong>{boldPart}:</strong> {restPart}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {renderTechTags([
                  "React Native",
                  "Expo",
                  "Expo Router",
                  "TypeScript",
                  "NativeWind",
                  "Tailwind CSS",
                  "React Native Paper",
                  "React Native Elements",
                  "D3.js",
                  "React Native SVG",
                  "Jest",
                  "ESLint",
                  "Prettier",
                ])}
                {renderProjectRepositoryAction({ isPrivate: true })}
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="flex items-center justify-center bg-zinc-100 p-8 md:w-1/2 md:p-12 dark:bg-zinc-800/50">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop"
                  alt="Form-to-Pipedrive PoC"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("work.project3.title")}
                </h3>
                <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p className="mb-4">{t("work.project3.description")}</p>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project3.contributionsTitle")}
                  </p>
                  <ul className="mb-4 flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project3.contributions", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project3.stackTitle")}
                  </p>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project3.stack", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => {
                      const [boldPart, restPart] = item.split(": ");
                      return (
                        <li key={index}>
                          <strong>{boldPart}:</strong> {restPart}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {renderTechTags([
                  "Next.js 15",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "shadcn/ui",
                  "Radix UI",
                  "Pipedrive API v1",
                  "Axios",
                  "pnpm",
                ])}
                {renderProjectRepositoryAction({
                  isPrivate: false,
                  href: "https://github.com/icaroregis/form-to-pipedrive-poc",
                })}
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:flex-row-reverse dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="flex items-center justify-center bg-zinc-100 p-8 md:w-1/2 md:p-12 dark:bg-zinc-800/50">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  alt="Zustand Dashboard App"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t("work.project5.title")}
                </h3>
                <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p className="mb-4">{t("work.project5.description")}</p>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project5.contributionsTitle")}
                  </p>
                  <ul className="mb-4 flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project5.contributions", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {t("work.project5.stackTitle")}
                  </p>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {(
                      t("work.project5.stack", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => {
                      const [boldPart, restPart] = item.split(": ");
                      return (
                        <li key={index}>
                          <strong>{boldPart}:</strong> {restPart}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {renderTechTags([
                  "React 18",
                  "TypeScript",
                  "Vite",
                  "Tailwind CSS",
                  "clsx",
                  "tailwind-merge",
                  "Zustand",
                  "Immer",
                  "Axios",
                  "Firebase",
                  "React Router DOM",
                  "SweetAlert2",
                ])}
                {renderProjectRepositoryAction({
                  isPrivate: false,
                  href: "https://github.com/icaroregis/zustand-dashboard",
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="bg-zinc-100/50 px-6 py-24 md:px-16 dark:bg-zinc-900/50"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {t("courses.badge")}
          </Badge>
          <p className="mb-12 max-w-3xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            {t("courses.title")}
          </p>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg"
              >
                <div className="border-b border-zinc-200 bg-zinc-100/70 p-4 dark:border-zinc-800 dark:bg-zinc-800/40">
                  <button
                    type="button"
                    className="w-full cursor-pointer rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
                    onClick={() => setSelectedCourse(course)}
                    aria-label={t("courses.openCertificate", {
                      course: course.title,
                    })}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-56 w-full rounded-lg object-cover shadow-sm transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {course.description}
                  </p>

                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {t("courses.clickToExpand")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={Boolean(selectedCourse)}
        onOpenChange={(open) => {
          if (!open) setSelectedCourse(null);
        }}
      >
        <DialogContent className="h-[94vh] max-h-[94vh] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] overflow-hidden border border-zinc-200 bg-white p-0 sm:h-[92vh] sm:max-h-[92vh] sm:w-[min(90vw,1180px)] sm:max-w-[min(90vw,1180px)] dark:border-zinc-800 dark:bg-zinc-950">
          {selectedCourse ? (
            <div className="flex h-full flex-col">
              <div className="border-b border-zinc-200 px-4 py-3 sm:px-5 sm:py-4 dark:border-zinc-800">
                <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedCourse.title}
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {selectedCourse.description}
                </DialogDescription>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-auto bg-zinc-100 p-2 sm:p-3 dark:bg-zinc-900">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="h-auto max-h-full w-auto max-w-full rounded-lg border border-zinc-200 bg-white object-contain shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                />
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* FOOTER / CONTACT PLACEHOLDER */}
      <footer id="contact" className="px-6 py-24 text-center md:px-16">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {t("contact.badge")}
        </Badge>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {t("contact.title")}
        </p>
        <div className="mb-16 flex flex-col items-center gap-4">
          <div className="flex max-w-full items-center justify-center gap-4 text-2xl font-bold max-[500px]:flex-wrap max-[500px]:gap-2 max-[500px]:text-sm md:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-600 dark:text-zinc-400"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="max-[500px]:w-full max-[500px]:text-center max-[500px]:break-all">
              icaroregisalmeida@gmail.com
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              onClick={() => handleCopy("icaroregisalmeida@gmail.com")}
            >
              {copiedItem === "icaroregisalmeida@gmail.com" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </Button>
          </div>
          <div className="flex max-w-full items-center justify-center gap-4 text-2xl font-bold max-[500px]:flex-wrap max-[500px]:gap-2 max-[500px]:text-base md:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-600 dark:text-zinc-400"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            <span className="max-[500px]:w-full max-[500px]:text-center">
              +55 (85) 99131-6112
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              onClick={() => handleCopy("+55 (85) 99131-6112")}
            >
              {copiedItem === "+55 (85) 99131-6112" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </Button>
          </div>
        </div>
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} | Ícaro Almeida | Todos os direitos
          reservados
        </p>
      </footer>
    </div>
  );
}
