import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    port: 3000,
    host: '127.0.0.1',
    https: true,
  },
  plugins: [react(), mkcert()],
});
