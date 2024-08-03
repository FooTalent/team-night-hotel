import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  console.log(`Current mode: ${mode}`); // Muestra el modo actual en la consola
  if (mode === 'development') {
    return {
      server: {
        proxy: {
          '/api': {
            target: 'https://hotel-oceano.onrender.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
          }
        }
      },
      plugins: [react()],
    };
  } else if (mode === 'production') {
    return {
     server: {
        proxy: {
          '/api': {
            target: 'https://team-night-hotel.vercel.app',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
          }
        }
      },
      plugins: [react()],
      build: {
        outDir: 'dist',
      },
    };
  }
});
