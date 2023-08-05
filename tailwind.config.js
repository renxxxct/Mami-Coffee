/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'top-png': "url('/image/woman-6992691_1280.jpg')",
      'concept-png': "url('/image/concept cafe.jpg')",
    },
    fontFamily: {
      body: ['STSong'],
      english: ['Zapfino'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [],
}
