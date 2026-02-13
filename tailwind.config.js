export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.08)",
        borderGlass: "rgba(255,255,255,0.15)",
        glowBlue: "#3b82f6",
      },
      backdropBlur: {
        glass: "12px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.4)",
      },
    },
  },
  plugins: [],
};
