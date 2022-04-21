import svelte from '@astrojs/svelte';

export default {
  integrations: [svelte()],
  markdown: {
    syntaxHighlight: 'prism'
  }
};
