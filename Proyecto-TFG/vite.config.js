import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/scss/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
});
