/** @type {import('tailwindcss').Config} */
export default {
	// Watch Twig templates and any JS or JSX that might use Tailwind classes.
  content: ['./templates/**/*.twig', './src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {},
  },
  plugins: [],
}