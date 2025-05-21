import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace YOUR_REPO_NAME with your actual GitHub repo name (not username)
export default defineConfig({
  base: '/portfolio/',  // 👈 Required for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
