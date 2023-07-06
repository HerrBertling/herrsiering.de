import { type Config } from "tailwindcss"
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "system-ui"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "transparent",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              backgroundImage:
                "linear-gradient(to bottom right, #eab308, #fb7185, #db2777)",
            },
            h2: {
              color: "transparent",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              backgroundImage:
                "linear-gradient(to bottom right, #eab308, #fb7185, #db2777)",
            },
            h3: {
              color: "#52525b",
            },
            h4: {
              color: "#52525b",
            },
            h5: {
              color: "#52525b",
            },
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#2563eb",
              },
            },
            ".button": {
              padding: "0.75rem 1rem",
              borderRadius: "0.25rem",
              textDecoration: "none",
              backgroundColor: "#3b82f6",
              color: "white",
              "&:hover": {
                backgroundColor: "#2563eb",
                color: "white",
              },
            },
          },
        },
        lg: {
          css: {
            h1: {
              lineHeight: 1.15,
            },
            h2: {
              lineHeight: 1.15,
            },
          },
        },
        xl: {
          css: {
            h1: {
              lineHeight: 1.15,
            },
            h2: {
              lineHeight: 1.15,
            },
          },
        },
        dark: {
          css: {
            color: "#cbd5e1",
            blockquote: {
              color: "#94a3b8",
              borderLeftColor: "#94a3b8",
            },
            h1: {
              color: "transparent",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              backgroundImage:
                "linear-gradient(to bottom right, #7C3AED, #6366F1, #3B82F6)",
            },
            h2: {
              color: "transparent",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              backgroundImage:
                "linear-gradient(to bottom right, #7C3AED, #6366F1, #3B82F6)",
            },
            h3: {
              color: "#cbd5e1",
            },
            h4: {
              color: "#cbd5e1",
            },
            h5: {
              color: "#cbd5e1",
            },
            strong: {
              color: "#cbd5e1",
            },
            code: {
              color: "#cbd5e1",
            },
            a: {
              color: "#cbd5e1",
              "&:hover": {
                color: "#f1f5f9",
              },
              "&:active": {
                color: "#f1f5f9",
              },
              "&:focus": {
                color: "#f1f5f9",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;