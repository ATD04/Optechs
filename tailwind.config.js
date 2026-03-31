/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: "#03071e",
                    900: "#050d1f",
                    800: "#0a1628",
                    700: "#0d1f3c",
                    600: "#112244",
                    500: "#163057",
                },
                cyan: {
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                },
                accent: {
                    DEFAULT: "#00d4ff",
                    dark: "#0099cc",
                    glow: "#00d4ff33",
                },
            },
            fontFamily: {
                sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-pattern":
                    "linear-gradient(135deg, #03071e 0%, #050d1f 40%, #0a1628 100%)",
                "card-gradient":
                    "linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(13,31,60,0.7) 100%)",
            },
            boxShadow: {
                glow: "0 0 20px rgba(0, 212, 255, 0.15)",
                "glow-md": "0 0 40px rgba(0, 212, 255, 0.2)",
                card: "0 4px 32px rgba(0,0,0,0.4)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};
