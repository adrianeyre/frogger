import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Enzyme has no React 19 adapter and is unmaintained; the suite renders through
// @testing-library/react instead, which needs the DOM torn down between tests.
afterEach(() => {
	cleanup();
});

// jsdom does not implement matchMedia, and the responsive styles ask for it.
window.matchMedia =
	window.matchMedia ||
	((query: string) =>
		({
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => false,
		}) as MediaQueryList);
