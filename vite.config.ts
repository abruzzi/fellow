import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID),
    'process.env.GOOGLE_CLIENT_SECRET': JSON.stringify(process.env.GOOGLE_CLIENT_SECRET),
    'process.env.OAUTH_REDIRECT_URI': JSON.stringify(process.env.OAUTH_REDIRECT_URI)
  },
  plugins: [react(), relay]
})