import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Menu,
  Sun,
  Moon,
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
    { title: "Sagar | Portfolio" },
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
  const { i18n } = useTranslation();

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

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md md:px-16 dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="text-2xl font-bold tracking-tighter">{"<SS/>"}</div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Contact
          </a>

          <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-800"></div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Select
              value={i18n.resolvedLanguage || "en"}
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
            <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Download CV
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-16 md:py-32">
        <div className="order-2 flex flex-col gap-8 md:order-1">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I'm Sagar{" "}
            <span className="inline-block origin-[70%_70%] cursor-default hover:animate-bounce">
              👋
            </span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <MapPin className="h-5 w-5" />
              <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <span className="relative mr-1 ml-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="mt-2 flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
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
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
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
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative mt-8 h-72 w-64 md:mt-0 md:h-96 md:w-80">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 transform bg-zinc-200 dark:bg-zinc-800"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
              alt="Profile"
              className="h-full w-full border-8 border-zinc-50 object-cover dark:border-zinc-950"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-zinc-100/50 px-6 py-24 md:px-16 dark:bg-zinc-900/50"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex justify-center">
            <Badge
              variant="secondary"
              className="rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              About me
            </Badge>
          </div>

          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <div className="relative h-80 w-64 md:h-[480px] md:w-[400px]">
                <div className="absolute inset-0 -z-10 -translate-x-6 translate-y-6 transform bg-zinc-200 dark:bg-zinc-800"></div>
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
                  alt="About"
                  className="h-full w-full border-8 border-zinc-100 object-cover dark:border-zinc-900"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Curious about me? Here you have it:
              </h3>
              <div className="flex flex-col gap-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </p>
                <p>
                  When I'm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <ul className="mt-2 grid list-inside list-disc grid-cols-1 gap-2 pl-4 text-zinc-700 sm:grid-cols-2 dark:text-zinc-300">
                  <li>B.E. in Computer Engineering</li>
                  <li>Avid learner</li>
                  <li>Full time freelancer</li>
                </ul>
              </div>
            </div>
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
            Skills
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            The skills, tools and technologies I am really good at:
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
        id="experience"
        className="bg-zinc-100/50 px-6 py-24 md:px-16 dark:bg-zinc-900/50"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Experience
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/4">
                <h4 className="text-xl font-bold tracking-tighter text-emerald-500">
                  upwork
                </h4>
              </div>
              <div className="flex flex-col gap-4 md:w-2/4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Sr. Frontend Developer
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo
                    consectetur.
                  </li>
                  <li>Aenean lacinia bibendum nulla sed consectetur.</li>
                  <li>Sed posuere consectetur est at lobortis.</li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/4 md:text-right dark:text-zinc-400">
                Nov 2021 - Present
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/4">
                <h4 className="text-xl font-bold tracking-tighter text-emerald-500">
                  upwork
                </h4>
              </div>
              <div className="flex flex-col gap-4 md:w-2/4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Team Lead
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </li>
                  <li>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit.
                  </li>
                  <li>
                    Sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/4 md:text-right dark:text-zinc-400">
                Jul 2017 - Oct 2021
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="md:w-1/4">
                <h4 className="text-xl font-bold tracking-tighter text-emerald-500">
                  upwork
                </h4>
              </div>
              <div className="flex flex-col gap-4 md:w-2/4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Full Stack Developer
                </h3>
                <ul className="flex list-inside list-disc flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div className="text-left text-zinc-600 md:w-1/4 md:text-right dark:text-zinc-400">
                Dec 2015 - May 2017
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
            Work
          </Badge>
          <p className="mb-12 max-w-2xl text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Some of the noteworthy projects I have built:
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
                  Fiskil
                </h3>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "Nest.js",
                    "PostgreSQL",
                    "Tailwindcss",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-2 h-10 w-10 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:flex-row-reverse dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-lg">
              <div className="flex items-center justify-center bg-zinc-100 p-8 md:w-1/2 md:p-12 dark:bg-zinc-800/50">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="Project 2"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Fiskil
                </h3>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "Nest.js",
                    "PostgreSQL",
                    "Tailwindcss",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-2 h-10 w-10 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT PLACEHOLDER */}
      <footer id="contact" className="px-6 py-24 text-center md:px-16">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full bg-zinc-200 px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          Get in touch
        </Badge>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-2xl font-bold md:text-4xl">
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
            reachsagarshah@gmail.com
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
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
            </Button>
          </div>
          <div className="flex items-center gap-4 text-2xl font-bold md:text-4xl">
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
            +91 8980500565
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
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
