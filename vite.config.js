import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    // host: '0.0.0.0', // Listen on all addresses (including LAN and public)
    port: 3000, // Specify your desired port number
  },
});
