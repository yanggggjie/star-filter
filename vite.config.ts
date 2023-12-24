import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import generouted from '@generouted/react-router/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('command', command)
  console.log('mode', mode)

  return {
    define: {},
    plugins: [react(), generouted()],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  }
})
