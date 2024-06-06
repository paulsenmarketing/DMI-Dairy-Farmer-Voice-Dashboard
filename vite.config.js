// vite imports
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from "vite-plugin-restart";

import * as path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: path.resolve('./web/dist/'),
        rollupOptions: {
            input: {
                app: './src/main.ts',
            },
        },
    },
    server: {
        port: 8080,
        hmr : {
            host: 'localhost'
        },
        strictPort: true,
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        ViteRestart({
            restart: [
                './templates/**/*',
            ],
        }),
        nodeResolve({
            modulePaths: [
                path.resolve('./node_modules'),
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
}));