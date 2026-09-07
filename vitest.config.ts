import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		// The components render real DOM, so the suite needs a document. The
		// game classes are pure and do not care either way.
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/setupTests.ts'],
		include: ['src/**/*.test.{ts,tsx}'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			include: ['src/classes/**/*.ts', 'src/components/**/*.tsx'],
		},
	},
});
