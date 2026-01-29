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
                iron: {
                    black: '#0a0a0a',
                    gold: '#FDB931', // Brighter, more vibrant gold for better mobile contrast
                    stone: '#1c1c1c',
                },
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'fade-in': 'fade-in 1s ease-out',
                'slide-up': 'slide-up 0.8s ease-out',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(253, 185, 49, 0.4), 0 0 40px rgba(253, 185, 49, 0.2)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(253, 185, 49, 0.6), 0 0 60px rgba(253, 185, 49, 0.3)',
                    },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
