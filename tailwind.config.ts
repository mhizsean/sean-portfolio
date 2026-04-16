import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: "#0a0a0a",
                    surface: "#121212",
                    card: "#1a1a1a",
                    border: "#2a2a2a",
                },
                accent: {
                    primary: "#d4af37",
                    secondary: "#8b7355",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
