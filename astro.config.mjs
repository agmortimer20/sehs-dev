import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react(), svelte()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
