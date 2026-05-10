/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        surface: "#13161a",
        border: "#23272d",
        ink: "#e6e8eb",
        muted: "#9aa1a9",
        accent: "#6ee7b7",
        accentDim: "#0f7a4f",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-code": theme("colors.accent"),
            "--tw-prose-quotes": theme("colors.muted"),
            "--tw-prose-quote-borders": theme("colors.border"),
            "--tw-prose-hr": theme("colors.border"),
            "--tw-prose-th-borders": theme("colors.border"),
            "--tw-prose-td-borders": theme("colors.border"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
