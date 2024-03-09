/** @type {import('tailwindcss').Config} */

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: [
        "ui-monospace",
        "Cascadia Code",
        "Source Code Pro",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace",
      ],
      serif: [
        "Charter",
        "Bitstream Charter",
        "Sitka Text",
        "Cambria",
        "Hoefler Text",
      ],
    },
    extend: {
      typography: ({ theme }) => ({
        herrsiering: {
          css: {
            h1: {
              "font-family": theme("fontFamily[serif]").join(", "),
            },
            h2: {
              "font-family": theme("fontFamily[serif]").join(", "),
            },
            h3: {
              "font-family": theme("fontFamily[serif]").join(", "),
            },
            h4: {
              "font-family": theme("fontFamily[serif]").join(", "),
            },
            "--tw-prose-body": theme("colors.slate[700]"),
            "--tw-prose-headings": theme("colors.slate[600]"),
            "--tw-prose-lead": theme("colors.slate[600]"),
            "--tw-prose-links": theme("colors.emerald[500]"),
            "--tw-prose-bold": theme("colors.slate[800]"),
            "--tw-prose-counters": theme("colors.slate[600]"),
            "--tw-prose-bullets": theme("colors.slate[400]"),
            "--tw-prose-hr": theme("colors.slate[300]"),
            "--tw-prose-quotes": theme("colors.slate[700]"),
            "--tw-prose-quote-borders": theme("colors.emerald[500]"),
            "--tw-prose-captions": theme("colors.slate[700]"),
            "--tw-prose-code": theme("colors.slate[900]"),
            "--tw-prose-pre-code": theme("colors.slate[100]"),
            "--tw-prose-pre-bg": theme("colors.slate[900]"),
            "--tw-prose-th-borders": theme("colors.slate[300]"),
            "--tw-prose-td-borders": theme("colors.slate[200]"),
            "--tw-prose-invert-body": theme("colors.slate[200]"),
            "--tw-prose-invert-headings": theme("colors.slate[50]"),
            "--tw-prose-invert-lead": theme("colors.slate[300]"),
            "--tw-prose-invert-links": theme("colors.emerald[200]"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.slate[400]"),
            "--tw-prose-invert-bullets": theme("colors.slate[600]"),
            "--tw-prose-invert-hr": theme("colors.slate[700]"),
            "--tw-prose-invert-quotes": theme("colors.slate[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.slate[700]"),
            "--tw-prose-invert-captions": theme("colors.slate[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.slate[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.slate[600]"),
            "--tw-prose-invert-td-borders": theme("colors.slate[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
