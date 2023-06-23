/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./mail/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("@tailwindcss/aspect-ratio", "@tailwindcss/forms", "@tailwindcss/line-clamp", "@tailwindcss/typography"),
  ],
  theme: {
    colors: {
      background: "#fffffe",
      primary: "#078080",
      secondary: "#f45d48",
      tertary: "#f8f5f2",
      heading: "#232323",
      content: "#222525",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
