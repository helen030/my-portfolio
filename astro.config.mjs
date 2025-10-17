export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://helen030.github.io',
  base: '/my-portfolio/', // <-- must match repo name exactly
});
