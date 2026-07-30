/**
 * Ordenação de classes do Tailwind é responsabilidade exclusiva do
 * prettier-plugin-tailwindcss. Não habilitar Headwind, eslint-plugin-tailwindcss
 * ou qualquer outra ferramenta concorrente para evitar conflitos de ordem.
 */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "clsx", "cva", "twMerge"],
  tailwindAttributes: ["className", "classNames"],
};
