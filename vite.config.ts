import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * Relative rather than absolute asset URLs. The site is published to GitHub
 * Pages under `/frogger/`, not at a domain root, and the game is a single page
 * with no client-side routing — so relative URLs work from either location and
 * survive the project name changing.
 */
export default defineConfig({
	base: './',
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
		open: false,
	},
	preview: {
		host: true,
		port: 4173,
	},
	build: {
		// `dist-web` rather than `dist`, so the Pages workflow uploads a
		// directory whose name says what is in it.
		outDir: 'dist-web',
		emptyOutDir: true,
		sourcemap: true,
		target: 'es2022',
	},
});
