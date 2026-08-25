import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages project sites (username.github.io/REPO_NAME/):
// set `base` to '/REPO_NAME/'. If you deploy to a user/org root site
// (username.github.io) or a custom domain, use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/samvel-portfolio/',
})
